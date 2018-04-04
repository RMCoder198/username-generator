import React from 'react';
import UserName from '../presentationals/UserName';
import PassWord from '../presentationals/PassWord';
import {getState} from 'redux';
import GenerateUsername from '../../actions/GenerateUsername';

class UsernameApp extends React.Component {

dispatchAction(input){
  switch (input) {
    case "generate-username":
      this.props.store.dispatch(GenerateUsername());
      break;


  }
}


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
