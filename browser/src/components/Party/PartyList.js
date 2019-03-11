import React from 'react';
import { Party } from './Party';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  parent: {
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
  },
};

export const PartyList = withStyles(styles)((props) => {
  return (<div className={props.classes.parent}>
    {props.data.map((individualProps, i) => {
      return (<Party key={i} data={individualProps} />);
    })}
  </div>);
});
