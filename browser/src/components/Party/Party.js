import React from 'react';
import { Person } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  rowParent: {
    display: 'flex',
    border: 'solid',
  },
  rowContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  personBox: {
    padding: 20,
  },
  eventText: {
    marginTop: 5,
    marginBottom: 5,
  },
};

export const Party = withStyles(styles)((props) => {
  // console.log(props);
  const data = props.data;
  return (<div className={props.classes.rowParent}>
    <div className={props.classes.personBox}>
      <Person fontSize='large' />
    </div>
    <div className={props.classes.rowContent}>
      <span>{data.date}</span>
      <div className={props.classes.eventText}>
        <span><b>{data.event}</b></span>
      </div>
      <span>{data.location}</span>
    </div>
  </div>);
});
