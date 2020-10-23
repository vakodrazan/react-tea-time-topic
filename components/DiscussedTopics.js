import React from 'react';


export default function DiscussedTopics({topic}) {
    const discussedOnDate = new Date(Number(topic.discussedOn));
    return (
        <section>
            <button className="btn-left">Delete</button>
            <p>{topic.title}</p>
            <div>
            <p>Discussed on {discussedOnDate.toLocaleDateString()}</p>
            </div>
        </section>
    )
}