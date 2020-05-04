import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Header, Icon, Loader } from "semantic-ui-react";
import showdown from "showdown";
import { fetchBlogArticle, setBlogArticleData } from "../../redux/actions/blog";
import "./BlogDetail.scss";

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  articles: any;
  currentArticleMarkdown: string;
  setBlogArticleData: () => Promise<void>;
  fetchBlogArticle: (article: any) => Promise<void>;
}

interface State {
  article: any;
}

const converter = new showdown.Converter();

class BlogDetail extends React.Component<Props, State> {
  state = {
    article: { title: undefined, icon: undefined, location: "" },
  };

  componentDidMount = async () => {
    this.props.setBlogArticleData().then(async () => {
      this.setState({
        article: this.props.articles.find((a: any) => {
          return a.slug === this.props.match.params.slug;
        }),
      });
      this.props.fetchBlogArticle(this.state.article);
    });
  };

  componentDidUpdate = () => {
    window.Prism.highlightAll();
  };

  render() {
    if (!this.state.article) {
      return (
        <Loader active inline="centered" inverted>
          Loading article...
        </Loader>
      );
    }

    const { title, icon } = this.state.article;
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
        <div
          className="article line-numbers"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    articles: state.blog.articles,
    currentArticleMarkdown: state.blog.currentArticleMarkdown,
  };
};

export default connect(mapStateToProps, {
  setBlogArticleData,
  fetchBlogArticle,
})(BlogDetail);
