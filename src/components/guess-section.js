import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';



export default function GuessSection(props) {
    const userGuess = function(input){
        props.userGuess(input);
    }
    return (
        <section>
            <h2 id="feedback">{props.feedback} your last guess was... {props.guess}</h2>
            <GuessForm 
                onSubmit={(input) => {
                    userGuess(input);
                }
            }
            />
        </section>
    );
}

