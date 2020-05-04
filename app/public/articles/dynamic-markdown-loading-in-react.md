My blog is powered by markdown articles for ease of development. The loading of these articles presented a challenge as I needed to find a way to dynamically load them based on a matching slug. In this article we'll go over the approach I took to accomplish this.

## Redux

### actions

`/redux/actions/blog/index.tsx`:

```typescript
import axios from "axios";
import { Dispatch } from "redux";
import blogData from "../../../components/blog/blog.json";
import { FETCH_BLOG_ARTICLE, SET_BLOG_ARTICLE_DATA } from "../../types";

export const setBlogArticleData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SET_BLOG_ARTICLE_DATA, payload: blogData });
  };
};

export const fetchBlogArticle = (article: any) => {
  return async (dispatch: Dispatch) => {
    const location =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      article.location;
    const response = await axios.get(location);
    dispatch({ type: FETCH_BLOG_ARTICLE, payload: response.data });
  };
};
```

Within the actions I have two functions, one to set the blog article data for the current and another to fetch the actual markdown file we'll be retrieving. I'm using `axios` for my network requests and keeping an on running `blogData` json file for keeping track of each of the invdividual articles.

The two constants are types containing the action string and look like the following:

`/redux/types.ts`

```typescript
export const SET_BLOG_ARTICLE_DATA = "ui/blog/set_blog_article_data";
export const FETCH_BLOG_ARTICLE = "ui/blog/fetch_blog_article";
```

The first function sets our article data from the json file `blogData`. I keep this data alongside the Blog components to easily update as necessary. Since this is my first article it's the only item I have in there.

`/components/blog/blog.json`

```json
{
  "articles": [
    {
      "slug": "dynamic-markdown-loading-in-react",
      "icon": "newspaper",
      "title": "Dynamic Markdown Loading in React (with TypeScript and Redux)",
      "location": "articles/dynamic-markdown-loading-in-react.md",
      "date": "2020-05-03"
    }
  ]
}
```

#### Setting the blog article data

```typescript
export const setBlogArticleData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SET_BLOG_ARTICLE_DATA, payload: blogData });
  };
};
```

The first function sets our blog article data by simply passing along the imported `blogData` file. This simple implementation allows us to have the blog article data in our store for use throughout the site.

#### Fetching the specific blog article

```typescript
export const fetchBlogArticle = (article: any) => {
  return async (dispatch: Dispatch) => {
    const location =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      article.location;
    const response = await axios.get(location);
    dispatch({ type: FETCH_BLOG_ARTICLE, payload: response.data });
  };
};
```

The second action retrieves the markdown file from our `public` folder and adds it's markdown to the state as the current article (when the user visits the page).

### reducers

```typescript
import { AnyAction } from "redux";
import { FETCH_BLOG_ARTICLE, SET_BLOG_ARTICLE_DATA } from "../../types";

export const blog = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_BLOG_ARTICLE_DATA:
      return { ...state, ...action.payload };
    case FETCH_BLOG_ARTICLE:
      return { ...state, currentArticleMarkdown: action.payload };
    default:
      return state;
  }
};
```

We have matching reducers for our specific actions. Each setting the state as appropriate.

## components

We have two components for the blog section named `BlogList` and `BlogDetail`.

### BlogList.tsx

```typescript
import React from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";
import data from "./blog.json";
import "./BlogList.scss";

interface Props {}

class BlogList extends React.Component<Props> {
  renderItems() {
    return data.articles.map((article) => {
      return (
        <li key={article.slug} className="blog-item">
          <h2>
            <a href={`/blog/${article.slug}`}>{article.title}</a> -{" "}
            <span className="blog-date">{article.date}</span>
          </h2>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="blog-list">
        <Header
          as="h1"
          textAlign="center"
          icon
          inverted
          size="huge"
          className="page-header"
        >
          <Icon name="newspaper outline" circular inverted color="red" />
          <Header.Content className="page-header-content">Blog</Header.Content>
        </Header>
        <ul className="blog-list">{this.renderItems()}</ul>
      </div>
    );
  }
}

export default connect(null, null)(BlogList);
```

The `BlogList` component doesn't contain much in regards to functionality. It simply pulls in the `data` json file (which is the same file we used up in our Actions), iterates over the items, and creates links to each of the respective articles. I've included it in this article for completeness, but won't go into detail as there's not much going on.

### BlogDetail

```typescript
React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Header, Icon, Loader } from "semantic-ui-react";
// Use showdown to
import showdown from "showdown";
// Pull in our ActionCreators
import { fetchBlogArticle, setBlogArticleData } from "../../redux/actions/blog";

// Setup interface for the match.params
interface MatchParams {
  slug: string;
}

// Setup an interface for the Props
interface Props extends RouteComponentProps<MatchParams> {
  articles: any;
  currentArticleMarkdown: string;
  setBlogArticleData: () => Promise<void>;
  fetchBlogArticle: (article: any) => Promise<void>;
}

// Setup an interface for the State
interface State {
  article: any;
}

// The showdown converter is what we'll be using to turn our markdown document into html
const converter = new showdown.Converter();

class BlogDetail extends React.Component<Props, State> {
  state = {
    article: { title: undefined, icon: undefined, location: "" },
  };

  componentDidMount = async () => {
    // Make sure we have our blog article data loaded
    this.props.setBlogArticleData().then(async () => {
      // Set the state of this component with the specific article
      this.setState({
        // Retrieve the article from the articles list
        article: this.props.articles.find((a: any) => {
          // Find the first item that matches our `slug` parameter
          return a.slug === this.props.match.params.slug;
        }),
      });
      // Finally, fetch the blog article
      this.props.fetchBlogArticle(this.state.article);
    });
  };

  render() {
    // If we haven't found an article yet inform the user we're loading
    if (!this.state.article) {
      return (
        <Loader active inline="centered" inverted>
          Loading article...
        </Loader>
      );
    }

    // Get the title and icon data from the article
    const { title, icon } = this.state.article;
    // Converted the currentArticleMarkdown to HTML
    const html = converter.makeHtml(this.props.currentArticleMarkdown);

    return (
      <React.Fragment>
        <Header
          as="h1"
          textAlign="center"
          icon
          inverted
          size="huge"
          className="page-header"
        >
          <Icon name={icon} circular inverted color="purple" />
          <Header.Content className="page-header-content">
            {title}
          </Header.Content>
        </Header>
        // Dangerously set the inner html to the html we converted. This allows
        // us to dynamically load the data
        <div
          className="article line-numbers"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </React.Fragment>
    );
  }
}

// Map our redux state to props
const mapStateToProps = (state: any) => {
  return {
    articles: state.blog.articles,
    currentArticleMarkdown: state.blog.currentArticleMarkdown,
  };
};

// Connect react-redux
export default connect(mapStateToProps, {
  setBlogArticleData,
  fetchBlogArticle,
})(BlogDetail);
```

The `BlogDetail` component loads our article data, converts the markdown to HTML, and then `dangerouslySetInnerHTML` is added as a prop to the loading container. This allows us to dynmically load in the information that we retrieved via the fetched article.

## The articles

We need to add the markdown files to the `/public/articles` folder for our actions to know where to find them. This should match what you have listed in the `blog.json` file.

That should be about it, add a `Route` to your new `Component`s with a `/blog` and `/blog/:slug` route respectively. You should now be able to visit those `Route`s and see the content dynamically loaded.
