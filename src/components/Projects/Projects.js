import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tictactoe.png"
import todolist from "../../Assets/Projects/todolist.png"
import SpeechToText from "../../Assets/Projects/speechtotext.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="TicTacToe"
              description="Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Features an interactive UI, responsive design, and real-time game logic to track player moves and declare a winner. Supports two-player mode and provides a dynamic gaming experience"
              ghLink="https://github.com/MithileshThallam/tic-tac-toe"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="TODO"
              description="A simple To-Do List app built with React.js. Allows users to add, edit, and delete tasks with a clean and minimal UI. Tasks persist using local storage."
              ghLink="https://github.com/MithileshThallam/to-do"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpeechToText}
              isBlog={false}
              title="SpeechToText"
              description="A full-stack speech-to-text application built using the MERN stack. Uses Web Speech API for real-time speech recognition, Supabase for storing transcripts, and a React-based UI for a seamless experience."
              ghLink="https://github.com/MithileshThallam/Speech-To-Text"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
