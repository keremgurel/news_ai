import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import Cards from './components/cards/Cards';
import useStyles from './styles.js';
import logo from './images/WhatsNew.png'

const alanKey = 'e8096520bb3fc75ceb3d469963ace7222e956eca572e1d8b807a3e2338fdd0dc/stage'    //key provided by alan API

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

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
            <div className={classes.logoContainer}>
                    <img src={logo} className={classes.alanLogo} alt="alanLogo"/>
            </div>
            <div className={classes.titleContainer}>
                What does this app do? Don't ask us, ask the app itself!
            </div>
            <Cards articles={newsArticles} />
        </div>
    );
}

export default App
