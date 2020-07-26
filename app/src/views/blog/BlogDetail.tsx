import React, { useState, useEffect, useContext } from "react";
import { ActiveNavigationContext } from "../../context/ActiveNavigationContext";
import { RouteComponentProps } from "react-router";
import { Header, Icon, SemanticICONS, Loader } from "semantic-ui-react";
import showdown from "showdown";
import blogData from "./blog.json";
import axios from "axios";
import "./BlogDetail.scss";

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const converter = new showdown.Converter();

const BlogDetail: React.FC<Props> = ({ match }): JSX.Element => {
  const { toggleActive } = useContext(ActiveNavigationContext);

  const [article, setArticle] = useState<{
    title: string;
    slug: string;
    icon: SemanticICONS | string;
    location: string;
    date: string;
  }>();

  const [markdown, setMarkdown] = useState<string>();

  // Set the active navigation item
  useEffect(() => {
    toggleActive("blog");
  }, [toggleActive]);

  // Get the specific blog article from the list based on slug
  useEffect(() => {
    setArticle(
      blogData.articles.find((article: any) => {
        return article.slug === match.params.slug;
      })
    );
  }, [setArticle, match]);

  // When we have an article get the specific markdown for that article
  useEffect(() => {
    if (article) {
      const location =
        window.location.protocol +
        "//" +
        window.location.host +
        "/" +
        article.location;
      axios.get(location).then((response) => {
        setMarkdown(response.data);
        window.Prism.highlightAll();
      });
    }
  }, [article, setMarkdown]);

  // Show a loader if there's no article or markdown
  if (!article || !markdown) {
    return (
      <Loader active inline="centered" inverted>
        Loading article...
      </Loader>
    );
  }
  return (
    <div className="blog-article">
      <Header
        as="h1"
        textAlign="center"
        icon
        inverted
        size="huge"
        className="page-header"
      >
        <Icon
          name={article.icon as SemanticICONS}
          circular
          inverted
          color="purple"
        />
        <Header.Content className="page-header-content">
          {article.title}
        </Header.Content>
      </Header>
      <div
        className="article line-numbers"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }}
      ></div>
    </div>
  );
};

export default BlogDetail;
