import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as WorkIcon } from "../../Assets/work.svg"
import { ReactComponent as SchoolIcon } from "../../Assets/school.svg"
import timelineElements from "./TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
    return (
      <section>
        <Container fluid className="tl-section" id="tl">
          <Container className="tl-content">
            <Row>
            <h1 className="timeline-title">
            Work and Education  <strong className="purple">Timeline </strong>
            </h1>
            <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">
                {element.description.split('\n').map((li) => {
                  return (
                    <li> {li} </li>
                  )
                })}
                </p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.link}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
            </Row>
          </Container>
        </Container>
      </section>
    );
  }
  
  export default Timeline;