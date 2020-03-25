import React from 'react';

const Post = (props) => {
    return (
        <div className="post"> 
            <div className="content">
                <p className="surah" onClick={() => props.goDetail(props.data.nomor)}>{props.data.nomor}. Surah : {props.data.nama} ({props.data.asma})</p>
                <p className="arti">Arti : {props.data.arti}</p>
                <p className="ayat">Ayat : {props.data.ayat} | Tipe : {props.data.type} | Rukuk : {props.data.rukuk}</p>
            </div>              
        </div>
    )
}

export default Post