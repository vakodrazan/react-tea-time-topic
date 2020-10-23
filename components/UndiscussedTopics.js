import React from 'react';


export default function UndiscussedTopics({topic}) {
    return (
        <section>
            <button className="btn-left">Archive</button>
            <p>{topic.title}</p>
            <div className="votes">
                <div>
                    <button className="upvotes">Upvotes</button>
                    <span>{topic.upvotes}</span>
                </div>
                <div>
                    <button className="downvotes">Downvotes</button>
                    <span>{topic.downvotes}</span>
                </div>
            </div>
        </section>
    )
}