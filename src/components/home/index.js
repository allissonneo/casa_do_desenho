import React from 'react';

import Title from './../../assets/Title.png'
import './index.css';
export default function Home() {
    return (
<>
      
        <div id = 'contentIMGone'>
            <img className = 'title' src={Title}/>
        <h1 className = 'paragraph' >Tudo para suas artes em um só lugar!</h1>
        </div>
        </>
    );
}