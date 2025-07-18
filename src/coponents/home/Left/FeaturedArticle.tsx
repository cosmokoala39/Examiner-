import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';

interface Props {
  title: string;
  description?: string;   // ✅ optional to avoid TS error
  category?: string;      // ✅ optional to avoid TS error
  author: string;
  image: string;
}

const FeaturedArticle: React.FC<Props> = ({
  title,
  description,
  category,
  author,
  image,
}) => {
  return (
    <Row className="mb-4 align-items-center">
      <Col md={8}>
        {category && (
          <small className="text-uppercase text-muted">{category}</small>
        )}
        <h3 className="fw-bold mt-2 mb-2">{title}</h3>
        {description && <p className="text-muted">{description}</p>}
        <p className="mb-0">
          <small className="text-secondary">By {author}</small>
        </p>
      </Col>
      <Col md={4}>
        <Image
          src={image}
          alt="featured article"
          width={300}
          height={180}
          className="rounded img-fluid"
          unoptimized
        />
      </Col>
    </Row>
  );
};

export default FeaturedArticle;
