import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PartyListContainer } from './components/Party/PartyListContainer';

const styles = {
  parent: {
    margin: '20px 40px'
  },
};

export const Main = withStyles(styles)(props => {
  return (<div className={props.classes.parent}>
    <PartyListContainer />
  </div>);
});

export default Main;
