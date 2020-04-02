import React from 'react';
import Rows from './Rows';
import { conditions } from './winningCondion';
import '../styles.css';


let count = 2;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            mark: {},
            win: false,
            winner: '',
        }
    }

    renderBox = (size) => {
        const rowArray = []
        for (let i = 0; i < size; i++) {
            rowArray.push(
                <Rows
                    key={i}
                    id={i}
                    size={size}
                    handelClick={this.handelClick}
                    mark={this.state.mark}
                    win={this.state.win}
                />);
        }
        return rowArray;
    }


    handelClick = (key) => {
        console.log('mark1', this.state.mark)
        if (count % 2 === 0) {
            this.setState({
                mark: { ...this.state.mark, [key]: 'X' }
            }, this.checkWiningCondition)
        } else {
            this.setState({
                mark: { ...this.state.mark, [key]: 'O' }
            }, this.checkWiningCondition)
        }
        count += 1;
    }

    checkWiningCondition = () => {
        const { mark } = this.state;
        console.log('conditions', conditions)

        for (let i = 0; i < conditions.length; i++) {
            let n = 0;
            for (let j = 0; j < this.props.size; j++) {
                if (mark[conditions[i][j]] !== undefined && 
                    mark[conditions[i][0]] === mark[conditions[i][j + 1]]) {
                    n++;
                } else {
                    break;
                }
            }
            console.log('count', n)
            if (n === this.props.size - 1) {
                this.setState({
                    win: true,
                    winner: mark[conditions[i][0]]
                })
                break;
            }
        }
    }

    render() {
        const { size } = this.props
        return (
            <div className='container' >
                {this.state.winner !== '' ?
                    <h3 className='winner' >
                        <span className='congrats'>Congratulations!!!.....</span>
                    Winner is {this.state.winner}
                    </h3> :
                    <h4 className='player'>
                        {count % 2 == 0 ? 'PLAYER - X' : 'PLAYER - O'}
                    </h4>
                }
                <div className='bordContainer' >
                    {this.renderBox(size)}
                </div>
            </div>
        )
    }
}

export default Board;