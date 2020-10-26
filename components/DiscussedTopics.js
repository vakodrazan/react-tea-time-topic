import React from 'react';
import trashIcon from '../assets/trash.svg';

export default function DiscussedTopics({topic, handleRemove}) {

    const discussedOnDate = new Date(Number(topic.discussedOn));

    return (
        <section>
            <button 
                className="btn-left"
                onClick={() => handleRemove(topic.id)}
            >
                <img src={trashIcon} alt="Delete Icon" />
            </button>
            <p>{topic.title}</p>
            <div>
                <p className="discussed">Discussed on {discussedOnDate.toLocaleDateString()}</p>
            </div>
        </section>
    )
}