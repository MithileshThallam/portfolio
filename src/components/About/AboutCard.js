import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Thallam Mithilesh </span>  
  from <span className="purple">Bangalore, India.</span>
  <br />
  I am currently a B.Tech 2nd-year student in CSE-AI at Jain University, Bangalore.
  <br />
  I am passionate about coding and continuously improving my skills in  
  <span className="purple"> MERN Stack, Java, Python,</span> and  
  <span className="purple"> Machine Learning.</span>
</p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mithilesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
