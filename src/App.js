import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import Cards from './components/cards/Cards';

const alanKey = 'e8096520bb3fc75ceb3d469963ace7222e956eca572e1d8b807a3e2338fdd0dc/stage'    //key provided by alan API

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan Ai News Application</h1>
            <Cards articles={newsArticles} />
        </div>
    );
}

export default App
