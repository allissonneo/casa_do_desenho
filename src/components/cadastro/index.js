import React, { useState } from 'react';
import './index.css';


function App(props) {
 const[email, setEmail] = useState()
 
const armazenar=(chave, valor)=> {
   localStorage.setItem(chave,valor);
 }
    return (
        <div id='div.card'>

            <form>
                <p>Cadastre-se</p>
                <label for="email">
                    Email:
                    <input type="text" value= {email}  id="email" name= "email" placeholder='Insira seu Email' onChange={e=>setEmail(e.target.value)} />
                </label>
                <button  type='button'  className = 'cadButton' onClick={()=>armazenar('Email: ', email) } >Cadastrar</button>
            </form>
        </div>
    );

}
export default App;