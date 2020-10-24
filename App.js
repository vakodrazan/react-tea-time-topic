import React, { useState } from 'react';
import AddList from './components/AddList';
import TopicList from './components/TopicList';

export default function App() {
    const [topics, setTopics] = useState([]);
    return (
        <div>
            <AddList topics={topics} setTopics={setTopics}  />
            <TopicList topics={topics} setTopics={setTopics} />
        </div>
    )
}