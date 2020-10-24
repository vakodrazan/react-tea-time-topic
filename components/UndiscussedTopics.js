import React from 'react';
import archiveIcon from '../assets/archive.svg';
import upvoteIcon from '../assets/upvote.svg';
import downvoteIcon from '../assets/downvote.svg';


export default function UndiscussedTopics({topic}) {
    return (
        <section>
            <button className="btn-left">
            <img src={archiveIcon} alt="Archive Icon" />
            </button>
            <p>{topic.title}</p>
            <div className="votes">
                <div>
                    <button className="upvotes">
                    <img src={upvoteIcon} alt="upvote Icon" />
                    </button>
                    <span>{topic.upvotes}</span>
                </div>
                <div>
                    <button className="downvotes">
                    <img src={downvoteIcon} alt="downvote Icon" />
                    </button>
                    <span>{topic.downvotes}</span>
                </div>
            </div>
        </section>
    )
}