import react from 'react';

class UserName extends React.Component{

  render(){
    return(
          <div className="center">
          <h2 className="text-success">Generate username</h2>
          <p className="text-md">Cant find any  username </p>
            <p className="text-md">Try this !!!!</p>
             <input type="text" className="form-control" placeholder="Enter words Separated by space">
             <br>
             <input type="text" className="form-control" readonly>


           </div>

          )
          }

}
export default UserName