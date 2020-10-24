import React, { useState } from 'react';
import archiveIcon from '../assets/archive.svg';
import upvoteIcon from '../assets/upvote.svg';
import downvoteIcon from '../assets/downvote.svg';


export default function UndiscussedTopics({topic, handleArchive}) {

    const [upvote, setUpvote] = useState(topic.upvotes);
    const [downvote, setDownvote] = useState(topic.downvotes);

    return (
        <section>
            <button 
                className="btn-left"
                onClick={() => handleArchive(topic.id)}
            >
                <img src={archiveIcon} alt="Archive Icon" />
            </button>
            <p>{topic.title}</p>
            <div className="votes">
                <div>
                    <button 
                        className="upvotes"
                        onClick={() => setUpvote(upvote + 1)}
                    >
                        <img src={upvoteIcon} alt="upvote Icon" />
                    </button>
                    <span>{upvote}</span>
                </div>
                <div>
                    <button 
                        className="downvotes"
                        onClick={() => setDownvote(downvote + 1)}
                    >
                        <img src={downvoteIcon} alt="downvote Icon" />
                    </button>
                    <span>{downvote}</span>
                </div>
            </div>
        </section>
    )
}