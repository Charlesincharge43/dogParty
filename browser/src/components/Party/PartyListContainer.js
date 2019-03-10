import React from 'react';
import moment from 'moment';

import { PartyList } from './PartyList';
import axios from '../../client/axiosClient';

class PartyListContainer extends React.Component {
  state = {
    gridData: []
  }
  componentDidMount(){
    axios.get('/parties')
      .then(res => res.data.map(singleData => {
        singleData.date = moment(+singleData.date).format('MMM Do YYYY');
        return singleData;
      }))
      .then(data => this.setState({ gridData: data }));
  }
  render(){
    return <PartyList data={this.state.gridData} />;
  }
}

export { PartyListContainer };
