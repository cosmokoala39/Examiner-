"use client";
import React from "react";
import Image from "next/image";
import newsData from "../../../public/data/newsData.json";
import { Row, Col } from "react-bootstrap";

const LeftSide = () => {
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
          <h2
  className="fw-bold"
  style={{ fontFamily: "'Merriweather', serif" }}
>
  {featured.title}
</h2>

          <p className="text-muted"  style={{ fontFamily: "'Merriweather', serif" }}
>{featured.description}</p>
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
                borderRadius: "5px",
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
          <h5 className="fw-bold"  style={{ fontFamily: "'Merriweather', serif" }}
>{large.title}</h5>
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
          <p className="text-muted small mt-1"  style={{ fontFamily: "'Merriweather', serif" }}
>{large.description}</p>
          <p className="text-secondary small"  style={{ fontFamily: "'Merriweather', serif" }}
>{large.author}</p>
        </Col>

        {/* 2 Stacked Articles */}
        <Col md={6}>
          {stackedArticles.map((item, index) => (
            <Row
              key={item.id}
              className={`pb-3 ${index < 1 ? "mb-3 border-bottom" : ""}`}
            >
              <Col xs={7}>
                <h6 className="fw-semibold"  style={{ fontFamily: "'Merriweather', serif" }}
>{item.title}</h6>
                <p className="text-muted small mb-1"  style={{ fontFamily: "'Merriweather', serif" }}
>{item.description}</p>
                <p className="text-secondary small"  style={{ fontFamily: "'Merriweather', serif" }}
>{item.author}</p>
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

      {/* ⬛ Bottom Articles in 2-column layout */}
      <Row className="g-4">
        {bottomArticles.map((item) => (
          <Col md={6} key={item.id}>
            <Row className="g-2">
              {/* Thumbnail Image on Left */}
              <Col xs={4}>
                <div style={{ position: "relative", width: "100%", height: "90px" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </Col>

              {/* Text Content */}
              <Col xs={8}>
                {item.tag && (
                  <span
                    className="badge bg-danger text-white mb-1"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {item.tag}
                  </span>
                )}
                <h6 className="fw-semibold mb-1"  style={{ fontFamily: "'Merriweather', serif" }}
>{item.title}</h6>
                <p className="text-muted small mb-1" style={{ fontFamily: "'Merriweather', serif" }}
>{item.description}</p>
                <p className="text-secondary small">
                  {item.author} — {item.time}
                </p>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <hr/>
    </div>
  );
};

export default LeftSide;
