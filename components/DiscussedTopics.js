import React from 'react';
import trashIcon from '../assets/trash.svg';

export default function DiscussedTopics({topic}) {
    const discussedOnDate = new Date(Number(topic.discussedOn));
    return (
        <section>
            <button className="btn-left">
                <img src={trashIcon} alt="Delete Icon" />
            </button>
            <p>{topic.title}</p>
            <div>
            <p>Discussed on {discussedOnDate.toLocaleDateString()}</p>
            </div>
        </section>
    )
}