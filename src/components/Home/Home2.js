import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who is <span className="purple"> MANSOOR </span>?
            </h1>
            <p className="home-about-body">
              Mansoor was exploring Python programming for fun where he came across
              <i>
                <b className="purple"> Data Science</b>
              </i>
              &nbsp; and made it a purpose of his life.
              <br />
              <br />His core expertise lie in
              <i>
                <b className="purple"> Data Analytics </b>
              </i>
              &nbsp;and
              <i>
                <b className="purple"> Conversational AI</b> &nbsp;Chatbots.
              </i>
              <br />
              <br />
              The main services are Developing, Designing and Deploying&nbsp;
              <i>
                <b className="purple">Rasa and Botfont </b> 
              </i>
              &nbsp; based chatbots, and &nbsp;
              <i>
                <b className="purple">
                  Data Analytics
                </b>
              </i>
              &nbsp; Services using Python, R and Tableau.
              <br />
              <br />
              He is motivated to conduct research in the field of &nbsp;
             <i>
               <b className="purple">Natural Language Processing</b>
             </i>
             &nbsp; and loves studying in his own time from major &nbsp;
              <i>
                <b className="purple">
                  MOOCs, DataCamp, Hugging Face, YouTube
                </b>
              </i>
              &nbsp; and improves the skillset in the field of 
              <i>
                <b className="purple"> Data Science and Artifical Intelligence</b>
              </i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mmansoornano/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mansoords/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mansoornano/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mansoor.ds/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
