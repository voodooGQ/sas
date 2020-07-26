import React, { useContext, useEffect } from "react";
import { Header, Icon } from "semantic-ui-react";
import data from "./blog.json";
import { Link } from "react-router-dom";
import "./BlogList.scss";
import { ActiveNavigationContext } from "../../context/ActiveNavigationContext";

const BlogList: React.FC = (): JSX.Element => {
  const { toggleActive } = useContext(ActiveNavigationContext);

  useEffect(() => {
    toggleActive("blog");
  }, [toggleActive]);

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
      <ul>
        {data.articles.map((article) => {
          return (
            <li key={article.slug} className="blog-item">
              <Link to={`/blog/${article.slug}`}>{article.title}</Link> -{" "}
              <span className="blog-date">{article.date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
