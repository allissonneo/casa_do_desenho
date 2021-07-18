import React from 'react';
import Products from './../../assets/Products.png'
import './index.css'


export default function products(){
    return(
        <section  id = 'products'  >
            <img className = 'Produtos' src = {Products} />
        </section>
    );
}