import React, { useEffect, useState } from 'react';
import DiscussedTopics from './DiscussedTopics';
import UndiscussedTopics from './UndiscussedTopics';


const endPoint = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

export default function TopicList() {
    const [topics, setTopics] = useState([]);
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

    // Undiscussed topic
    const undiscussedTopics = topics.filter(topic => !topic.discussedOn);
    const undiscussedTopicList = undiscussedTopics.map(topic => <UndiscussedTopics  key={topic.id} topic={topic} />)

    // Discussed topic
    const discussedTopic = topics.filter(topic => topic.discussedOn);
    const discussedTopicList = discussedTopic.map(topic => <DiscussedTopics  key={topic.id} topic={topic} />)

    return (
        <>
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