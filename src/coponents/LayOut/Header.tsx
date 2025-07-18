"use client";

import React from "react";
import Image from "next/image";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../../public/images/examiner-head.svg";
// import weatherIcon from "../../../public/icons/weather.png"; // Save weather icon in public/icons
// import viewIcon from "../../../public/icons/view-logo.png"; // Save "view" icon in public/icons

const navItems = [
  { title: "NEWS", href: "#" },
  { title: "SPORT", href: "#" },
  { title: "NOTICEBOARD", href: "#" },
  { title: "CLASSIFIEDS", href: "#" },
  { title: "EXPLORE TRAVEL", href: "#" },
  { title: "ENTERTAINMENT", href: "#" },
  { title: "LIFESTYLE", href: "#" },
];

const Header = () => {
  return (
    <div>
      {/* ✅ Mobile Header Only */}
      <div className="d-md-none border-1 border-bottom bg-white">
        {/* Top Row */}
        <div className="d-flex  align-items-center px-3  border-bottom">
          <i className="bi bi-list fs-2"></i>
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={50}
            style={{ marginLeft: "40px" }}
          />
        </div>

        {/* Weather */}
        <div className="px-3 py-1 d-flex justify-content-between border-1 border-bottom">
          <p className="mb-0 text-muted">
            <small>Friday July 18</small>
          </p>

          <div className="d-flex gap-2">
            <p className="text-danger fw-semibold">subscribe</p>

            <p className="border-start ps-3">login</p>
          </div>
        </div>

        <div className="d-flex justify-content-between py-1 px-3">
            <div className="">
                 <p className="text-black fw-semibold">kochi</p>
            <p className="mb-0 text-muted"> Raining</p> 
            </div>
          
                <div className="">
                        <p className="">weather</p>
                </div>
          
        </div>

        {/* Blue banner */}
        <div
          className=" text-center py-2"
          style={{ backgroundColor: "#e6f0ff", height: "50px" }}
        >
          <span className=" text-primary">
            <a href="#" className="text-decoration-underline text-black">
              The Examiner’s complete view of property
            </a>
          </span>
        </div>
      </div>

      {/* ✅ Desktop Header (unchanged) */}
      <div className="d-none d-md-block mobile-hd" >
        {/* Top Header */}
        <div className="bg-white border-bottom py-4 px-3 d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-list fs-4"></i>
            <i className="bi bi-search fs-4"></i>
          </div>

          <div className="text-center flex-grow-1">
            <Image
              src={logo}
              alt="The Examiner Logo"
              width={320}
              height={70}
              className="mx-auto"
            />
          </div>

          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex align-items-center gap-3">
              <Button variant="danger" className="px-2 subscribe-btn">
                SUBSCRIBE
              </Button>
              <a href="#" className="text-dark text-decoration-none fw-bold">
                Log In
              </a>
            </div>
            <div className="text-center">
              <div className="fs-6">☀️ 11.1° 2° / 13°</div>
            </div>
          </div>
        </div>

        {/* Date and Navigation */}
        <Container fluid className="border-bottom py-0 px-2 bg-white">
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <Navbar
                expand="md"
                className="justify-content-md-end text-black"
                style={{ fontSize: "0.75rem" }}
              >
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                  <Nav className="ms-md-auto text-center">
                    {navItems.map((item, index) => (
                      <Nav.Link
                        key={index}
                        href={item.href}
                        className="px-2 py-0 text-black fw-normal"
                      >
                        {item.title}
                      </Nav.Link>
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>

        {/* Utility Info Section */}
        <Container
          fluid
          className="border-top border-bottom border-black py-2 bg-white"
        >
          <Row className="text-center text-md-start">
            <Col
              xs={12}
              md={3}
              className="d-flex align-items-center gap-2 mb-1"
            >
              <i className="bi bi-newspaper fs-2 mb-1"></i>
              <div>
                <p
                  className="mb-0 fw-semibold text-black"
                  style={{ fontSize: "0.75rem" }}
                >
                  Today’s news highlights
                </p>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Read the latest edition online
                </span>
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              className="d-flex align-items-center gap-2 mb-2"
            >
              <i className="bi bi-grid-3x3-gap-fill fs-2 mb-2"></i>
              <div>
                <strong
                  className="d-block mb-0 text-black"
                  style={{ fontSize: "0.75rem" }}
                >
                  Puzzle
                </strong>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Sign up to stay updated
                </span>
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              className="d-flex align-items-center gap-2 mb-2"
            >
              <i className="bi bi-envelope fs-2 mb-0"></i>
              <div>
                <strong
                  className="d-block mb-0 text-black"
                  style={{ fontSize: "0.75rem" }}
                >
                  Newsletters
                </strong>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Sign up to stay updated
                </span>
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              className="d-flex align-items-center gap-2 mb-2"
            >
              <i className="bi bi-fingerprint fs-2 mb-0 text-warning"></i>
              <div>
                <strong
                  className="d-block mb-0 text-black"
                  style={{ fontSize: "0.75rem" }}
                >
                  ViewJobs
                </strong>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Best job opportunities across Australia
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Property Banner */}
        <div
          style={{ backgroundColor: "#e6f0ff" }}
          className="text-center py-3"
        >
          <span className="fw-bold text-primary">
            🏠{" "}
            <a href="#" className="text-decoration-underline text-black ">
              The Examiner’s complete view of property
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
