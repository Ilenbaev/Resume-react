import React from "react";
import "./About.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <div style={{ paddingBottom: "30px" }} id="about">
      <div className="about">
        <div className="about_info">
          <h1>Иленбаев Улан</h1>
          <p>Full-Stack Developer</p>
          <IconButton>
            <a href="https://www.instagram.com/" style={{ color: "white" }}>
              <InstagramIcon />
            </a>
          </IconButton>
          <IconButton>
            <a href="https://www.google.ru/" style={{ color: "white" }}>
              <GoogleIcon />
            </a>
          </IconButton>
          <IconButton>
            <a href="https://github.com" style={{ color: "white" }}>
              <GitHubIcon />
            </a>
          </IconButton>
        </div>
      </div>
      <div className="about_me">
        <h1>About</h1>
        <p>
          Hello everyone, My name is <span>Ilenbaev Ulan</span>. I am a
          <span>Full-Stack Developer</span> from Bishkek.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap . it to make a type specimen book.
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap .
        </p>
        <button className="btn">HTML-5</button>
        <button className="btn">CSS</button>
        <button className="btn">Bootstrap</button>
        <button className="btn">JavaScript</button>
        <button className="btn">SASS</button>
        <button className="btn">Angular JS</button>
        <button className="btn">Git</button>
        <button className="btn">React</button>
      </div>
    </div>
  );
};

export default About;
