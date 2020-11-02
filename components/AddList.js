import React, { useState } from 'react';


export default function AddList({topics, setTopics}) {
    let [addTopic, setAddTopic] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!addTopic) return;

        addTopic = {
            upvotes: 0,
            downvotes: 0,
            disussedOn: '',
            title: addTopic,
            id: Date.now(),
        }
        const newTopicList = [...topics, addTopic];
        setTopics(newTopicList);
        setAddTopic('');
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