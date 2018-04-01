import react from 'react';
import UserName from '../presentational/UserName';
import {getState} from 'redux';

class UsernameApp extends React.Component {
  render(){
   const stateProps = this.props.store.getState();
   const userName= stateProps.username.()=> <UserName stateProps=stateProps/> ;


    return(
      <div >
      {userName}
      </div>
    )
  }
}
export default UsernameApp
