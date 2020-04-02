import React from 'react';
import Starter from './Starter';
import { makeWiningConditions } from './winningCondion'
import Board from './Board';
import '../styles.css';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            size: 3,
        }
    }

    handelChange = (value) => {
        this.setState({
            size: value
        })
    }

    handleClick = () => {
        this.setState({
            gameStarted: !this.state.gameStarted,
        }, () => makeWiningConditions(this.state.size))
    }

    render() {
        const { gameStarted, size } = this.state;
        return (
            <div>
                {!gameStarted ?
                    <Starter
                        handelChange={this.handelChange}
                        handleClick={this.handleClick}
                        size={size}
                    />
                    :
                    <div className='gameDisplay'>
                        <Board size={size} />
                        <button
                            onClick={this.handleClick}
                            className='startButton'
                        >
                            Start Again
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default AppContainer;