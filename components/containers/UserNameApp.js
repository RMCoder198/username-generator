import React from 'react';
import UserName from '../presentationals/UserName';
import PassWord from '../presentationals/PassWord';
import {getState} from 'redux';

class UsernameApp extends React.Component {
  render(){
   const stateProps = this.props.store.getState();
   const userName=<UserName
   stateProps = { stateProps }
     /> ;
     const passWord=<PassWord
     stateProps = { stateProps }
       /> ;


    return(
      <div >
      {userName}
      {passWord}
      </div>
    )
  }
}
export default UsernameApp
