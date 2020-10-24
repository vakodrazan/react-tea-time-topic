import React, { useState } from 'react';
import TopicList from './TopicList';


export default function AddList({topics, setTopics}) {
    let [addTopic, setAddTopic] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addTopic = {
            upvotes: 0,
            downvotes: 0,
            disussedOn: '',
            title: addTopic,
            id: Date.now(),
        }
        topics.push(addTopic);
        setTopics([...topics])
    }
    return (
        <>
            <h2>Add Topic</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input
                        type="text"
                        name="addlist"
                        placeholder="Write your topic idea here..." 
                        value={addTopic}
                        onChange={(e) => setAddTopic(e.target.value)}
                    />
                    <button>Submit</button>
                </fieldset>
            </form>
        </>
    )
}