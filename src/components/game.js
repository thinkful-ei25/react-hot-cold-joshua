import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            feedback: 'Make a Guess Please!',
            count: Number,
            guess: Number,
            guesses: [],
            answer: 50
        }

    }
    
    handleGuess(currentGuess){
        let guess = parseInt(currentGuess);
        if(isNaN(guess)){
            this.setState({feedback: 'Please enter a number'});
            return;
        }
        let closeness = Math.abs(guess - this.state.answer);
        let feedback;
        if(closeness >= 50){
            feedback = 'Ice Cold!';
        }
        else if(closeness >= 30){
            feedback = 'Pretty Cold';
        }
        else if(closeness >= 10){
            feedback = 'You are warm';
        }
        else if(closeness >= 1){
            feedback = 'You are hot!';
        }
        else{
            feedback = 'You win!';
        }
        this.setState({feedback, guesses: [...this.state.guesses, guess], guess});

        
    }

    

    render(){
        return (
            <div>
                <Header />
                <GuessSection feedback={(this.state.feedback)} guess={this.state.guess}
                    userGuess={(input) => {this.handleGuess(input)}}
                />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}