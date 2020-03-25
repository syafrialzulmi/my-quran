import React, {Component, Fragment} from 'react';
import './Surah.css';
import Ayat from '../../../component/Ayat/Ayat';
import Axios from 'axios';

class Surah extends Component {

    state = {
        post: [],
    }

    componentDidMount() {
        let id = this.props.match.params.nomorSurah;
        Axios.get(`https://al-quran-8d642.firebaseio.com/surat/${id}.json?print=pretty`).then((res) => {
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
                        return <Ayat key={post.nomor} data={post}></Ayat>
                    })
                }                
            </Fragment>
        )
    }
}

export default Surah;