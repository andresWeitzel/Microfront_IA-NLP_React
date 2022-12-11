//Imports
import modelRunner from 'gpt-j';
const config = require('../config/gpt-j');
//Vars
const apiKey = config.API_KEY
const modelKey = 'gptj'


export default async function runGptj(msg) {
    return await modelRunner.run(msg, apiKey, modelKey)
  }
