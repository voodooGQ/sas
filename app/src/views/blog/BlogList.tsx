import React from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";
import data from "./blog.json";
import "./BlogList.scss";

const BlogList: React.FC = (): JSX.Element => {
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
              <a href={`/blog/${article.slug}`}>{article.title}</a> -{" "}
              <span className="blog-date">{article.date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(null, null)(BlogList);
