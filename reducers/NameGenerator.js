const InitialState = {
  username:'rahul',
  password:'1234568'
}


function NameGenerator(state=InitialState,action)
{
  switch(action.type){
    case 'generate-username':
    let Username = Object.assign({}, state, {
      username: action.username
    })
    return Username
    break;
    case 'generate-password':
    let Password = Object.assign({}, state, {
      password: action.password
    })
    return Password
    break;
  default:
  return state;
}
}


export default NameGenerator
