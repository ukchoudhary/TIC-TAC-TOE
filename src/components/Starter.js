import React from 'react';
import '../styles.css';

class Starter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handelChange, handleClick, size } = this.props;
        return (
            <div className='starter'>
                <h3 className='startHeader'>Please enter the size of game!</h3>
                <input
                    className='startInput'
                    type='number'
                    min='3'
                    value={size}
                    onChange={(e) => handelChange(e.target.value)}
                />
                <button
                    className='startButton'
                    onClick={handleClick}
                >
                    start
                </button>
            </div>
        )
    }
}

export default Starter;