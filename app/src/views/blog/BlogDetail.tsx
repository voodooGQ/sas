import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Header, Icon, Loader } from "semantic-ui-react";
import showdown from "showdown";
import blogData from "./blog.json";
import axios from "axios";
import "./BlogDetail.scss";

interface MatchParams {
  slug: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

interface State {
  article: any;
  markdown: any;
}

const converter = new showdown.Converter();

const BlogDetail: React.FC<Props> = ({ match }): JSX.Element => {
  const [article, setArticle] = useState<{
    title: string;
    slug: string;
    icon: string;
    location: string;
  }>();

  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    setArticle(
      blogData.articles.find((article: any) => {
        return article.slug === match.params.slug;
      })
    );
  }, [setArticle, blogData, match]);

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
  }, [article, window.location, window.Prism, axios, setMarkdown]);

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
        {/* TODO: Fix this type */}
        <Icon name={article.icon as "react"} circular inverted color="purple" />
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
