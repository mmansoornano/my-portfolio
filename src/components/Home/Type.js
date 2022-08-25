import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analytics",
          "Certified Rasa Developer",
          "Botfront Developer",
          "Deep Learning Enthusiast",
          "Natural Language Processing Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
      }}
    />
  );
}

export default Type;
