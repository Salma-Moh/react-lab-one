// src/components/Home.js
import React from 'react';
import './css/home.css';
import logo from '../logo.svg';

function Home({ articleTitle }) {
    return (
        <div className="home">
            {articleTitle === 'first' ? (
                <div className="article">
                    <h2>Article Title: {articleTitle}</h2>
                    <img src={logo} alt="Logo" />
                </div>
            ) : articleTitle === 'second' ? (
                <div className="article">
                    <h2>Article Title: {articleTitle}</h2>
                    <p>This is a paragraph for the article with the title "second".</p>
                </div>
            ) : (
                <p>No article to display.</p>
            )}
        </div>
    );
}

export default Home;
