/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext } from "react";
import './SelectSkill.css';
import StartQuiz from "../StartQuiz";

const skills = [
    'C++', 'Java', 'JavaScript', 'Python', 'Ruby', 'Go', 'Rust', 'TypeScript',
    'Kotlin', 'Swift', 'PHP', 'C#', 'R', 'Scala', 'Perl', 'Objective-C',
    'Dart', 'Elixir', 'Haskell', 'MATLAB'
];

const SelectSkill = (params) => {

    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        onClick={() => handleSkillClick(skill)}
                        className={`skill-card ${selectedSkill === skill ? 'selected' : ''}`}
                    >
                        {skill}
                    </div>
                ))}
            </div>
            {selectedSkill && (
                <div className="selected-skill">
                    {/* Selected Skill: {selectedSkill} */}
                    <StartQuiz />
                </div>
            )}
        </div>
    );
};

export default SelectSkill;