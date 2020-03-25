import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Quran from '../pages/Quran/Quran';
import Surah from '../pages/Surah/Surah';

class Home extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Route path="/" exact component={Quran} />
                    <Route path="/surah/:nomorSurah" component={Surah} />
                </Fragment>
            </Router>
        )
    }
}

export default Home;