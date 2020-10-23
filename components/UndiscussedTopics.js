import React from 'react';


export default function UndiscussedTopics({topic}) {
    return (
        <section>
            <button>Archive</button>
            <p>{topic.title}</p>
            <div>
                <button>Upvotes</button>
                <span>{topic.upvotes}</span>
                <button>Downvotes</button>
                <span>{topic.downvotes}</span>
            </div>
        </section>
    )
}