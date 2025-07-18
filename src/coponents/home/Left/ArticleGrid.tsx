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

const ArticleGrid: React.FC<Props> = ({ articles }) => (
  <Row className="g-3">
    {articles.map((article) => (
      <Col md={6} key={article.id}>
        <ArticleCard {...article} />
      </Col>
    ))}
  </Row>
);

export default ArticleGrid;
