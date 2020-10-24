import React, { useState } from 'react';
import trashIcon from '../assets/trash.svg';

export default function DiscussedTopics({topic, handleRemove}) {

    const discussedOnDate = new Date(Number(topic.discussedOn));
    // const [topicList, setTopicList] = useState(topic);

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
            <p>Discussed on {discussedOnDate.toLocaleDateString()}</p>
            </div>
        </section>
    )
}