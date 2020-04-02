import React from 'react';
import { conditions } from './winningCondion';
import '../styles.css';

class Rows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
        }
    }



    renderRow = () => {
        const rowArray = []
        const { id, size } = this.props;
        for (let i = 0; i < size; i++) {
            const key = id.toString() + i.toString()
            rowArray.push(
                <button
                    style={{ height: `${69 / size}vh`, width: `${69 / size}vh` }}
                    className='gameButton'
                    disabled={this.props.mark.hasOwnProperty(key) || this.props.win}
                    onClick={() => this.props.handelClick(key)}
                    key={key}
                >
                    {this.props.mark[key]}
                </button>);
        }
        return rowArray;
    }

    render() {
        console.log(this.props.win)
        return (
            <div style={{ display: 'flex' }}>
                {this.renderRow()}
            </div>
        )
    }
}

export default Rows;
