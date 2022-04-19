import { Box } from "@mui/material";
import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <Box className="skill_box" id="skill">
      <h1>Skills</h1>
      <div className="skill__content">
        <div className="left_block">
          <div>
            <h4>html</h4>
            <div class="progress0">100%</div>
          </div>
          <div>
            <h4>css</h4>
            <div class="progress1">100%</div>
          </div>
          <div>
            <h4>react</h4>
            <div class="progress2">60%</div>
          </div>
        </div>
        <div className="center_block">
          <div>
            <h4>sass</h4>
            <div class="progress3">40%</div>
          </div>
          <div>
            <h4>bootstrap</h4>
            <div class="progress4">80%</div>
          </div>
          <div>
            <h4>github</h4>
            <div class="progress5">50%</div>
          </div>
        </div>
        <div className="right_block">
          <div>
            <h4>typescript</h4>
            <div class="progress6">20%</div>
          </div>
          <div>
            <h4>angular</h4>
            <div class="progress7">20%</div>
          </div>
          <div>
            <h4>python</h4>
            <div class="progress8">40%</div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Skills;
