import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge
} from 'react-bootstrap';

interface Props {
  title: string;
  author?: string;
  image: string;
  time?: string;
  tag?: string;
  comments?: number;
}

const ArticleCard: React.FC<Props> = ({ title, author, image, time, tag, comments }) => (
  <Card className="h-100">
    <Image src={image} alt="article" width={300} height={160} className="card-img-top img-fluid" unoptimized />
    <CardBody>
      {tag && <Badge bg="danger" className="mb-2">{tag}</Badge>}
      <CardTitle style={{ fontSize: '1rem' }}>{title}</CardTitle>
      {author && <CardText className="text-muted">{author}</CardText>}
      {time && <CardText className="text-muted" style={{ fontSize: '0.75rem' }}>{time}</CardText>}
      {comments !== undefined && <CardText style={{ fontSize: '0.75rem' }}>{comments} comments</CardText>}
    </CardBody>
  </Card>
);

export default ArticleCard;
