/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext } from "react";
import './SelectSkill.css';
import StartQuiz from "../StartQuiz";
import Popup from "../popupComponent/Popup";
import { QuizContext } from "../../Helper/Context";

const skills = [
    'C++', 'Java', 'JavaScript', 'Python', 'Ruby', 'Go', 'Rust', 'TypeScript',
    'Kotlin', 'Swift', 'PHP', 'C#', 'R', 'Scala', 'Perl', 'Objective-C',
    'Dart', 'Elixir', 'Haskell', 'MATLAB'
];

const SelectSkill = (params) => {

    const { selectedSkill, setSelectedSkill } = useContext(QuizContext);
    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
        setIsModalVisible(true)
    };


    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleStartTest = () => {
        console.log(`Starting test for ${selectedSkill}`);
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="skill-body">
                <div className="skill-title">Select Skill & Start The Test</div>
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
            </div>
            <Popup
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                onStartTest={handleStartTest}
            />
        </>
    );
};

export default SelectSkill;