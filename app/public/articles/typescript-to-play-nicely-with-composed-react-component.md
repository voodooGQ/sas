While writing unit tests for a React/Typescript application I ran into an issue where my redux composed component was throwing a Typescript error when trying to mount the component through Enzyme/Jest:

### Component

```typescript
...
class MyComponent exteds React.Component {
  // Component code
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoader,
  withErrorHandler
)
```

### Unit Test

```typescript
let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <Provider>
      <MyComponent /> // Throws an error
    </Provider>
  );
});
```

I found the easiest way to deal with this was to case the connected component as a `React.ElementType`.

```typescript
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoader,
  withErrorHandler
) as React.ElementType;
```
