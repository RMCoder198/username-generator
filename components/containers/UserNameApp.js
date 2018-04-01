import React from 'react';
import UserName from '../presentationals/UserName';
import {getState} from 'redux';

class UsernameApp extends React.Component {
  render(){
   const stateProps = this.props.store.getState();
   const userName= stateProps.username.map((name) =>
  <UserName key = { name }
  stateProps = { stateProps }
     /> );


    return(
      <div >
      {userName}
      </div>
    )
  }
}
export default UsernameApp
