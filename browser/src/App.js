import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { PartyList } from './components/Party/PartyList';
import { PartyListContainer } from './components/Party/PartyListContainer';

// const testData = [{date: 'blah', location: 'chitown', event: 'cooolio'},
//   {date: 'blah', location: 'chitown', event: 'cooolio'}];

const styles = {
  parent: {
    margin: '20px 40px'
  },
};

export const Main = withStyles(styles)(props => {
  return (<div className={props.classes.parent}>
    {/* <PartyList data={testData} /> */}
    <PartyListContainer />
  </div>);
});

export default Main;
