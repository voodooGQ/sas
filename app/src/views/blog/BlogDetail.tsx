import React from "react";
import { RouteComponentProps } from "react-router";
import { Header, Icon, Loader } from "semantic-ui-react";
import showdown from "showdown";
import blogData from "./blog.json";
import axios from "axios";
import "./BlogDetail.scss";

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  articles: any;
}

interface State {
  article: any;
  markdown: any;
}

const converter = new showdown.Converter();

class BlogDetail extends React.Component<Props, State> {
  state = {
    article: { title: undefined, icon: undefined, location: "" },
    markdown: "",
  };

  componentDidMount = async () => {
    this.setState({
      article: blogData.articles.find((a: any) => {
        return a.slug === this.props.match.params.slug;
      }),
    });
  };

  componentDidUpdate = async () => {
    const location =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      this.state.article.location;
    this.setState({
      markdown: (await axios.get(location)).data,
    });
    window.Prism.highlightAll();
  };

  render() {
    if (this.state.markdown === "") {
      return (
        <Loader active inline="centered" inverted>
          Loading article...
        </Loader>
      );
    }

    const { title, icon } = this.state.article;
    const html = converter.makeHtml(this.state.markdown);

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
        <div
          className="article line-numbers"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </React.Fragment>
    );
  }
}

export default BlogDetail;
