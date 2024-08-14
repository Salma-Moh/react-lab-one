// src/components/Home.js
import React, { useState } from 'react';
import './css/home.css';
import logo from '../logo.svg';

function Home() {
    const [articleTitle, setArticleTitle] = useState(''); // State to manage article title input

    // Handle input change
    const handleInputChange = (event) => {
        setArticleTitle(event.target.value);
    };

    return (
        <div className="home">
            {/* Input field to select article title */}
            <div className="input-container">
                <label htmlFor="articleTitle">Choose Article Title: </label>
                <select
                    id="articleTitle"
                    value={articleTitle}
                    onChange={handleInputChange}
                >
                    <option value="">Select</option>
                    <option value="first">First Article</option>
                    <option value="second">Second Article</option>
                </select>
            </div>

            {/* Conditional rendering based on articleTitle */}
            {articleTitle === 'first' ? (
                <div className="article">
                    <h2>Article Title: {articleTitle}</h2>
                    <img src={logo} alt="Logo" />
                    <p>This is a paragraph for the article with the title "first".</p>
                </div>
            ) : articleTitle === 'second' ? (
                <div className="article">
                    <h2>Article Title: {articleTitle}</h2>
                    <p>This is a paragraph for the article with the title "second".</p>
                </div>
            ) : (
                <p>No article to display, choose one.</p>
            )}
        </div>
    );
}

export default Home;