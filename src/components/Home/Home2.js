import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    I fell in love with programming and have been continuously learning and improving my skills. 🚀
    <br />
    <br />I am proficient in
    <i>
      <b className="purple"> MERN Stack </b>
    </i>
    and have a strong foundation in
    <i>
      <b className="purple"> Java and Python. </b>
    </i>
    <br />
    <br />
    My field of interest includes building innovative &nbsp;
    <i>
      <b className="purple">Web Applications and Scalable Solutions</b> and exploring the field of{" "}
      <b className="purple">Machine Learning.</b>
    </i>
    <br />
    <br />
    Whenever possible, I also apply my knowledge to develop projects using
    <b className="purple"> Node.js</b> and
    <i>
      <b className="purple">
        {" "}
        Modern JavaScript Libraries and Frameworks
      </b>
    </i>
    &nbsp; like
    <i>
      <b className="purple"> React.js and Express.js.</b>
    </i>
  </p>
</Col>
<Col md={4} className="myAvtar">
  <Tilt>
    <img src={myImg} className="img-fluid" alt="avatar" />
  </Tilt>
</Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MithileshThallam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mithilesh-thallam-483604262/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
