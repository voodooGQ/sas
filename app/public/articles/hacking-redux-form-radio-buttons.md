I ran into a problem the other day where I couldn't get the standard [redux-form](https://redux-form.com/8.3.0/) to set the default value, initial value, or allow switching between items in a radio group. All the tutorials I found online would address one of these items, but then the other items would end up broken.

I had to do some hacking to make this work, and I'm not excited about the implementation, but it works for my needs and covers all the bases.

## UserForm.tsx

```typescript
<div>
  <label>Approver?</label>
  <div className="radio-container">
    <Field
      name="Approver"
      label="Yes"
      component={this.renderRadioButton}
      type="radio"
      value="true"
    />
    <Field
      name="Approver"
      label="No"
      component={this.renderRadioButton}
      type="radio"
      value="false"
      defaultChecked={true}
    />
  </div>
</div>
```

I like to keep my form seperated from it's higher level component, passing in props and values as needed to achieve the functionality I'm looking for. Most of the articles I found advised to set the `checked` value on the `Field` prop to `true` if you want to set the default value. In practice this produced results that would not allow changing of the value in the form. Instead I used the `defaultChecked` value on the item I wanted to be selected on the form from the get go.

## Form.tsx

My `UserForm` component extends a base `Form` component which houses all my standard form functionality. This is where I keep the `component` function for the invididual `Field` items.

Below is the code to `renderRadioButton`

```typescript
renderRadioButton = ({
  input,
  label,
  meta,
  defaultChecked,
}: WrappedFieldProps & CustomFieldProps) => {
  let checked = defaultChecked;
  if (meta.initial) {
    checked = meta.initial.toString() === input.value.toString() ? true : false;
  }
  return (
    <span className={this.getFieldClassName(meta)}>
      <label>
        <input
          name={input.name}
          value={input.value}
          type="radio"
          defaultChecked={checked}
          onChange={(e) => {
            input.onChange(input.value);
            input.checked = checked;
          }}
        />
        {label}
      </label>
    </span>
  );
};
```

At the top we're destructuring the `input` and `meta` provided by [redux-form](https://redux-form.com/8.3.0/) as well as providing our `defaultChecked` and `label` custom values.

Since we're using Typescript we need to provide definitions for these values. At the top of my file I have a `CustomFieldProps` interface of the following:

```typescript
export interface CustomFieldProps {
  placeholder: string;
  defaultChecked: undefined | boolean;
}
```

Next we have the logic for determining the default as well as initial values for the `checked` attribute. By default we set the `checked` value to whatever `defaultChecked` is, but if there's an initial value in the meta we verify if it equals the same `input.value` of the field we're currently rendering. These are cast `toString` in order to ensure boolean values that may come over from our backend server are compared correctly.

```typescript
let checked = defaultChecked;
if (meta.initial) {
  checked = meta.initial.toString() === input.value.toString() ? true : false;
}
```

Finally, within the input element itself, we're doing a couple things. First, we're setting the `defaultChecked` value to the `checked` variable we assigned above. In practice when using `checked` instead of `defaultChecked` the value will not be changeable, essentially setting a read only form. In addition `checked` and `defaultChecked` cannot be set on the same input.

The `onChange` item is added with `input.onChange(input.value)` and `input.checked = checked` calls to make sure that when the value is changed the form is updated appropriately.

```typescript
<input
  name={input.name}
  value={input.value}
  type="radio"
  defaultChecked={checked}
  onChange={(e) => {
    input.onChange(input.value);
    input.checked = checked;
  }}
/>
```

And that's it, a bit hacky but it does the trick. If I refactor this down the line I'll make an update to this article outlining my changes.
