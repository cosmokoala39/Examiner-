"use client";
import React from "react";
import Image from "next/image";
import newsData from "../../../../public/data/newsData.json";
import { Row, Col } from "react-bootstrap";

const LefSec = () => {
  const featured = newsData[0];
  const large = newsData[1];
  const stackedArticles = newsData.slice(2, 4);
  const bottomArticles = newsData.slice(4);

  return (
    <div className="container-fluid px-0">
      {/* 🔷 Top: Featured Article */}
      <Row className="mb-4 align-items-start">
        <Col md={6}>
          <small className="text-muted">{featured.category}</small>
          <h3 className="fw-bold">{featured.title}</h3>
          <p className="text-muted">{featured.description}</p>
          <p className="text-secondary small">{featured.author}</p>
        </Col>
        <Col md={6}>
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <Image
              src={featured.image}
              alt="Featured"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          </div>
        </Col>
      </Row>

      <div style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }} />

      {/* 🟨 Middle Row: Large + 2 stacked */}
      <Row className="mb-4">
        {/* Large Article */}
        <Col md={6}>
          <h5 className="fw-bold">{large.title}</h5>
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <Image
              src={large.image}
              alt="Large"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          </div>
          <p className="text-muted small mt-1">{large.description}</p>
          <p className="text-secondary small">{large.author}</p>
        </Col>

        {/* 2 Stacked Articles */}
        <Col md={6}>
          {stackedArticles.map((item, index) => (
            <Row
              key={item.id}
              className={`pb-3 ${index < 1 ? "mb-3 border-bottom" : ""}`}
            >
              <Col xs={7}>
                <h6 className="fw-semibold">{item.title}</h6>
                <p className="text-muted small mb-1">{item.description}</p>
                <p className="text-secondary small">{item.author}</p>
              </Col>
              <Col xs={5}>
                <div style={{ position: "relative", width: "100%", height: "100px" }}>
                  <Image
                    src={item.image}
                    alt="thumb"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      <hr/>
        {/* 🟨 Middle Row: Large + 2 stacked */}
      <Row className="mb-4">
        {/* Large Article */}
        <Col md={6}>
          <h5 className="fw-bold">{large.title}</h5>
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <Image
              src={large.image}
              alt="Large"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          </div>
          <p className="text-muted small mt-1">{large.description}</p>
          <p className="text-secondary small">{large.author}</p>
        </Col>

        {/* 2 Stacked Articles */}
        <Col md={6}>
          {stackedArticles.map((item, index) => (
            <Row
              key={item.id}
              className={`pb-3 ${index < 1 ? "mb-3 border-bottom" : ""}`}
            >
              <Col xs={7}>
                <h6 className="fw-semibold">{item.title}</h6>
                <p className="text-muted small mb-1">{item.description}</p>
                <p className="text-secondary small">{item.author}</p>
              </Col>
              <Col xs={5}>
                <div style={{ position: "relative", width: "100%", height: "100px" }}>
                  <Image
                    src={item.image}
                    alt="thumb"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

      <div style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }} />

     
    </div>
  );
};

export default LefSec;
