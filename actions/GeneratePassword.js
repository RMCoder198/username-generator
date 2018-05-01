import Shuffle from './Shuffle';
function GeneratePassword(change){
  const GENERATE_PASSWORD = 'generate-password';

  change= Shuffle(change);
  return {
    type: GENERATE_PASSWORD,
    password: change,
  }
}
export default GeneratePassword
