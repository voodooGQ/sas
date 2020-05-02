import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Header, Icon, Loader } from "semantic-ui-react";
import { setBlogArticleData } from "../../redux/actions/blog";

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  articles: any;
  setBlogArticleData: () => Promise<void>;
}

interface State {
  article: any;
}

class BlogDetail extends React.Component<Props, State> {
  state = { article: { title: undefined } };

  componentDidMount = () => {
    this.props.setBlogArticleData().then(() => {
      this.setState({
        article: this.props.articles.find((a: any) => {
          return a.slug === this.props.match.params.slug;
        }),
      });
    });
  };

  render() {
    if (!this.state.article) {
      return (
        <Loader active inline="centered" inverted>
          Loading article...
        </Loader>
      );
    }

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
          <Icon name="newspaper" circular inverted color="purple" />
          <Header.Content className="page-header-content">
            {this.state.article.title}
          </Header.Content>
        </Header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { articles: state.blog.articles };
};

export default connect(mapStateToProps, { setBlogArticleData })(BlogDetail);
