import React, { useContext } from 'react';
import { QuizContext } from '../../Helper/Context';
import './SelectSkill.css';
import questions from '../../Helper/question.json';

const skillIcons = {
    javascript: '⚡',
    python: '🐍',
    react: '⚛️',
    java: '☕'
};

const skillNames = {
    javascript: 'JavaScript',
    python: 'Python',
    react: 'React',
    java: 'Java'
};

const SelectSkill = () => {
    const { setWindowState, setSelectedSkill, setDifficulty, selectedSkill, difficulty } = useContext(QuizContext);

    const handleSkillSelect = (skillId, difficultyLevel) => {
        setSelectedSkill(skillId);
        setDifficulty(difficultyLevel);
        setWindowState("quiz");
    };

    return (
        <div className="select-skill">
            <h2>Choose Your Topic</h2>
            <div className="skills-grid">
                {Object.keys(questions).map((skillId) => (
                    <div
                        key={skillId}
                        className={`skill-card ${selectedSkill === skillId ? 'selected' : ''}`}
                    >
                        <div className="skill-icon">{skillIcons[skillId] || '📚'}</div>
                        <h3>{skillNames[skillId] || skillId}</h3>
                        <div className="difficulty-buttons">
                            {Object.keys(questions[skillId]).map((level) => (
                                <button
                                    key={`${skillId}-${level}`}
                                    className={`button button-difficulty ${level} ${selectedSkill === skillId && difficulty === level ? 'selected' : ''
                                        }`}
                                    onClick={() => handleSkillSelect(skillId, level)}
                                >
                                    {level.charAt(0).toUpperCase() + level.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectSkill; 