import React  from "react";
import About from './../../assets/About.png'
import './index.css'

export default function Sobre (){
    return(
        <section  id = 'aboutUs'  >
            <img className = 'quemSomos' src = {About} />
        </section>
    );
}