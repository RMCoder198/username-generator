function GenerateUsername(change){
  const GENERATE_USERNAME = 'generate-username';
  return {
    type: GENERATE_USERNAME,
    username: change,

  }
}
export default GenerateUsername
