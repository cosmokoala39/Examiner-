import React from 'react';
import ArticleCard from './ArticleCard';
import { Row, Col } from 'react-bootstrap';

interface Props {
  articles: {
    id: number;
    title: string;
    image: string;
    author: string;
    tag?: string;
    comments?: number;
  }[];
}

const ArticleList: React.FC<Props> = ({ articles }) => (
  <div className="mt-3">
    {articles.map((article) => (
      <Row className="mb-3" key={article.id}>
        <Col>
          <ArticleCard {...article} />
        </Col>
      </Row>
    ))}
  </div>
);

export default ArticleList;
