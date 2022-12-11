//Imports
import modelRunner from 'gpt-j';
const config = require('../config/gpt-j');
//Vars
const apiKey = config.API_KEY
const modelKey = 'gptj'


export default async function runGptj(msg) {
    let output = await modelRunner.run(msg, apiKey, modelKey)
    
    //Obtenemos solo la salida del modelo
    output = await output.modelOutputs[0]

    console.log(output)
    
    //Aplicamos formato
    output = JSON.stringify(output)
    
    
    //Reemplazamos saltos de lineas
    output=await output.replace(/\n/g, '<br/>')
    output=await output.replace(/\n\n/g, '<br/>')


    //Reemplazamos cadenas op or(|)
    output = await output.replace(/[{|}]/g,'')
    
    //Reemplazamos los agregados del modelo
    output = await output.replace(/"output":"/,'')
    output = await output.replace(/","input":"/,'')
    
    return output
  }
