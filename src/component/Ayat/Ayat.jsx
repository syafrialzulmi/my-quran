import React from 'react';

const Post = (props) => {
    return (
        <div className="post-surah"> 
            <div className="content-surah">
                <p className="ayat-surah">{props.data.ar}</p>
                <hr></hr>
                <p className="arti-surah">{props.data.nomor}. {props.data.id}</p>
            </div>              
        </div>
    )
}

export default Post;