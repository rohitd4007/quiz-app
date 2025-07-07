import React from 'react';
import './categories.css';

const categories = [
    {
        name: 'Science',
        icon: (
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" stroke="#fff" strokeWidth="2" fill="none" /><path d="M18 8v12" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><circle cx="18" cy="26" r="2" fill="#fff" /></svg>
        )
    },
    {
        name: 'Sports',
        icon: (
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" stroke="#fff" strokeWidth="2" fill="none" /><circle cx="18" cy="18" r="6" stroke="#fff" strokeWidth="2" fill="none" /><path d="M18 2v32M2 18h32" stroke="#fff" strokeWidth="2" /></svg>
        )
    },
    {
        name: 'Tech',
        icon: (
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="8" y="10" width="20" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none" /><rect x="14" y="24" width="8" height="2" rx="1" fill="#fff" /></svg>
        )
    }
];

const Categories = () => {
    return (
        <div className="categories-section">
            <div className="categories-left">
                <h2 className="categories-title">Our Categories</h2>
                <div className="categories-cards">
                    {categories.map((cat, idx) => (
                        <div className="category-card" key={cat.name}>
                            <div className="category-icon">{cat.icon}</div>
                            <div className="category-name">{cat.name}</div>
                        </div>
                    ))}
                </div>
                <div className="categories-desc">
                    <p>Explore the most popular quiz categories and challenge yourself!</p>
                    <p><b>Ready to dive deeper?</b></p>
                    <p>Discover <a href="/" className="categories-link">more</a> categories tailored to your interests.</p>
                </div>
            </div>
            <div className="categories-right">
                {/* SOME IMAGE HERE */}
            </div>
        </div>
    );
}

export default Categories;