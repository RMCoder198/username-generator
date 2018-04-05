const InitialState = {
  username:'rahul',
  password:'1234568'
}


function NameGenerator(state=InitialState,action)
{
  switch(action.type){
    case 'GENERATE_USERNAME':
    let Username = Object.assign({},state);
    Username.username = 'r'
    return Username
    break;
  default:
  return state;
}
}


export default NameGenerator
