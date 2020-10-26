import React, { useEffect, useState } from 'react';
import DiscussedTopics from './DiscussedTopics';
import UndiscussedTopics from './UndiscussedTopics';


const endPoint = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

export default function TopicList({ topics, setTopics }) {

    const fetchTopicsData = async () => {
        try {
            const res = await fetch(endPoint);
            const data = await res.json()
            setTopics(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTopicsData();
    }, []);

    // Remove item from the list
    function handleRemove(id) {
        const deletedTopic = topics.filter(topic => topic.id !== id);
        setTopics(deletedTopic);
    }

    // Archive an item
    function handleArchive(id) {
        const topicToArchive = topics.find(topic => topic.id === id);
        topicToArchive.discussedOn = Date.now();
        setTopics([...topics]);
    }

    // Undiscussed topic
    let undiscussedTopics = topics.filter(topic => !topic.discussedOn);
    undiscussedTopics = undiscussedTopics.sort((topicA, topicB) => {
		const ratioA = topicA.upvotes - topicA.downvotes;
		const ratioB = topicB.upvotes - topicB.downvotes;
		return ratioB - ratioA;
    });
    const undiscussedTopicList = undiscussedTopics.map(topic => <UndiscussedTopics key={topic.id} handleArchive={handleArchive} topic={topic} />)

    // Discussed topic
    const discussedTopic = topics.filter(topic => topic.discussedOn);
    const discussedTopicList = discussedTopic.map(topic => <DiscussedTopics key={topic.id} handleRemove={handleRemove} topic={topic} />)



    return (
        <>
            {topics.length === 0 && <h2>Loading...</h2>}
            <article>
                <h2>Next topics</h2>
                {!topics.discussedOn && undiscussedTopicList}
            </article>
            <article>
                <h2>Past Topics</h2>
                {!topics.discussedOn && discussedTopicList }
            </article>
        </>
    )
}