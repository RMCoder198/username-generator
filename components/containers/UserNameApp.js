import React from 'react';
import UserName from '../presentationals/UserName';
import PassWord from '../presentationals/PassWord';
import {getState} from 'redux';
import GenerateUsername from '../../actions/GenerateUsername';
import GeneratePassword from '../../actions/GeneratePassword';

class UsernameApp extends React.Component {

dispatchAction(input,change){
  switch (input) {
    case "username":

      this.props.store.dispatch(GenerateUsername(change));
      break;
  case "password":
  this.props.store.dispatch(GeneratePassword(change));
  break;


  }
}

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  render(){
   const stateProps = this.props.store.getState();
   const userName=<UserName
   stateProps = { stateProps }
      dispatchAction = {this.dispatchAction.bind(this)}
     /> ;
     const passWord=<PassWord
     stateProps = { stateProps }
     dispatchAction = {this.dispatchAction.bind(this)}
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
