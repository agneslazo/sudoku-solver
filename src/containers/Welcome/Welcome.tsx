import { Button, Grow } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Welcome.module.css'

function Welcome() {
    // gain access to router data and functions
    const history = useHistory();

    return (
        <div className={classes.WelcomeBoxCont}>
            <Grow in={true}>
                <div className={classes.WelcomeBox} >
                    <h2>Welcome! I'll solve a sudoku puzzle for you!</h2>
                    <div className={classes.WelcomActionsCont} >
                        <Button variant='outlined' onClick={()=>history.push('/puzzle')} >Input puzzle</Button>
                        <Button variant='outlined' disabled >Take photo</Button>
                        <Button variant='outlined' disabled >Upload image</Button>
                    </div>
                </div>
            </Grow>
        </div>
    );
}

export default Welcome;
