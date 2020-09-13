import React from 'react';
import classes from './MainContainer.module.css';

function MainContainer(props:any) {
  return (
      <div className={classes.MainContainer} >
          {props.children}
      </div>
  );
}

export default MainContainer;

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=fde992&secondary.color=bdf2ff&primary.text.color=9e74d0&secondary.text.color=ffa351