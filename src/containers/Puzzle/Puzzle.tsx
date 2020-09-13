import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Puzzle.module.css'

function Puzzle(props:any) {
    const history = useHistory();

    const initialBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    const [board, setBoard] = useState(initialBoard);

    const onBoardUpdate = (x: number, y: number, value: number) => {
        //
    }

    return (
        <div className={classes.PuzzleCont} >
            <div className={classes.Board} >
                {board.map(row => {
                    return (
                        <div className={classes.Row} >
                            {row.map(value => {
                                return (
                                    <div className={classes.PuzzleBox} contentEditable suppressContentEditableWarning>{value ? value : null}</div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Puzzle;