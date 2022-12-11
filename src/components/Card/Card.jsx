//Imports
import React from 'react';
import img from '../../assets/images/cards/card03.webp';
import runGptj from '../../services/gpt-j/gpt-j';
//Vars
let msj='Pronostico Buenos Aires';

export default class Card extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      outputModel:'',
      inputModel:''
    }
  }

  async runModel (msg) {
    let output = await runGptj(msg)
    this.setState({
      outputModel : output.modelOutputs[0]
    })
    console.log(this.state.outputModel)
  }


  render() {
    const { outputModel } = this.state;

    return (
      <>
        <div className="container border-dark">
          <div className="card bg-dark text-white">
            <img src={img} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Procesamiento de Lenguaje Natural | <span className="badge bg-dark">Modelo GPT-J-6B</span></h5>
              <p className="card-text">El Modelo GPT-J-6B es un modelo de Lenguaje Autorregresivo (representación de procesos aleatorios) de Procesamiento de Lenguaje Natural de código abierto. Detecta patrones según su entrada en tiempo real y genera una respuesta. Fue creado por el equipo <a href="https://www.eleuther.ai/" target="_blank" rel="noreferrer">EleutherAI</a> y es una de las alternativas más avanzadas en relación al modelo GPT-3 de <a href="https://openai.com/" target="_blank" rel="noreferrer">OpenAI.</a></p>
              <div className="container m-3">
                <div className=" justify-content-center mb-3 mt-5 m-5">
                  <label for="formGroupExampleInput" className="form-label"><h5>Input Modelo</h5></label>
                  <div className="d-flex d-row ms-5 me-5">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Entrada de Datos a Procesar" />
                    <button type="submit" className="btn btn-primary" onClick={() => this.runModel(msj)}>Enviar </button>
                  </div>
                </div>
              </div>
              <div className="container m-3">
                <div className="card justify-content-center mb-3 mt-5 m-5">
                  <div className="card-header bg-dark text-white">
                    Output Modelo
                  </div>
                  <div className="card-body text-black">
                    <blockquote className="blockquote mb-0">
                      <p>{JSON.stringify(outputModel)}</p>
                      
                      <footer className="blockquote-footer mt-5">"La clave de la inteligencia artificial siempre ha sido la representación”.
 <cite title="Source Title">Jeff Hawkins</cite></footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }

}
