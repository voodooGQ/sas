import React from "react";
import { Header } from "semantic-ui-react";

interface Props {
  title: string;
  owner: string;
  repo: string;
  contributions: string[];
}

const OpenSourceItem: React.FC<Props> = ({
  title,
  owner,
  contributions,
  repo,
}): JSX.Element => {
  return (
    <div className="open-source-item">
      <Header
        as="h3"
        inverted
        className="open-source-title"
        size="huge"
        color="purple"
      >
        {title} by {owner}
      </Header>
      <ul className="open-source-link-list">
        {contributions.map((link) => (
          <li>
            <a href={`${repo}/${link}`}>
              {repo}/{link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenSourceItem;
