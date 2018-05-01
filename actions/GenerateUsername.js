import Shuffle from './Shuffle';
function GenerateUsername(change){
  const GENERATE_USERNAME = 'generate-username';

   change= Shuffle(change);

  return {
    type: GENERATE_USERNAME,
    username: change,

  }
}
export default GenerateUsername
