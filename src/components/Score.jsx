import React from 'react';

function Score(props) {
    const name = localStorage.getItem("userName");
    const displayName = name ? name.toUpperCase() : "YOU";

    return (
        <div className='score'>
            <div className="ai-score">
                <h1 className='h1'>{props.aiScore}</h1>
                <h2>AI</h2>
            </div>
            <div className="human-score">
                <h1 className='h1'>{props.humanScore}</h1>
                <h2>{displayName}</h2>
            </div>
        </div>
    );
}

export default Score;
