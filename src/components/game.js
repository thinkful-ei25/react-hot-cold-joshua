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
            count: 5,
            guesses: [1],
            answer: 7
        }

    }
    render(){
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} random={2}
                userGuess={(input) => {
                    this.setState({guesses: [...this.state.guesses, input]})
                }}
                />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}