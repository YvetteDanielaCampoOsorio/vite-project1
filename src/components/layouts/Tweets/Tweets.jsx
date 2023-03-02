import React, { useState, useEffect } from 'react'
import '../Tweets/Tweets.css'

const Tweets = () => {

    const [Tweet, setTweets] = useState('');
    const [counter,setCounter] = useState(255);
    const [greatting, setGreatting] = useState('Bienvenido');

    const Publish = () =>{
        setGreatting(Tweet)
        console.log({Tweet})
    }
    
    // function Counter(){ 
    // }

    
    // useEffect = (() =>{
    //     const h 
    //     setCounter  (Tweet.length)
    // },[Tweet])

return (<>

<h2 class="h2"> Generador de Tweets</h2>
        <div className='divText'>
            <h3 class="h3">Publica tu tweet</h3>

            <textarea className='tweet' onChange={ (ev) => setTweets(ev.target.value) } placeholder="Escribe un tweet(max 255 caracteres)" name="Tweet" id="TextTweet" cols="30" rows="10" type='text'/>

            <div className='buttons'>
                <button  className='btn' onClick={Publish} name="BtnPublish" id="BtnPublish">Publicar</button>
                <button className='btn' name="BtnShowArchived" id="BtnShowArchived">Mostrar Archivados</button>
            </div>
                <p className='btn' type="number" name="counter" id="counter" class='Counter'>{counter}</p>
            </div>
        <div>
            <h3 class="h3">Tweets Archivados </h3>
            <article>{greatting}</article>
        </div>
</>)
};

export default Tweets
