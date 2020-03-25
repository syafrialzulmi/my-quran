import React, { Component, Fragment } from 'react';
import './Quran.css';
import Surah from '../../../component/Surah/Surah';
import Axios from 'axios';

class Quran extends Component {

    state = {
        post: [],
    }

    handleDetail = (nomor) => {
        this.props.history.push(`/surah/${nomor}`);
    }

    componentDidMount() {
        Axios.get('https://al-quran-8d642.firebaseio.com/data.json?print=pretty').then((res) => {
            console.log(res.data)
            this.setState({
                post : res.data
            })
        })
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.post.map(post => {
                        return <Surah key={post.nomor} data={post} goDetail={this.handleDetail}></Surah>
                    })
                }
            </Fragment>
        )
    }
}

export default Quran;