import { useState, useContext } from "react";
import { QuizContext } from "../Helper/Context";
import "./skills.css";

const Skills = (optams) => {
    const { windowState, setWindowState } = useContext(QuizContext);

    return (
        <div className="skill-body">
            In skills
        </div>
    );
};

export default Skills;
