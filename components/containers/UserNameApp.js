import React from 'react';
import UserName from '../presentationals/UserName';
import PassWord from '../presentationals/PassWord';
import {getState} from 'redux';
import GenerateUsername from '../../actions/GenerateUsername';

class UsernameApp extends React.Component {

dispatchAction(input){
  switch (input) {
    case "username":
      this.props.store.dispatch(GenerateUsername());
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
