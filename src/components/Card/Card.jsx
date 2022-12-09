import React from 'react';
import img from '../../assets/images/cards/card03.webp';
import modelRunner from 'gpt-j';

const apiKey = '749145ba-714f-4581-a2c5-7adef78f1674'
const modelKey = 'gptj'
const msg = 'Hola, como estaás??'


export default class Card extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      outputModel:[]
    }
  }

  runModel() {
    let output = modelRunner.run(msg, apiKey, modelKey)
    this.setState({
      outputModel : output
    })
    console.log(this.state.outputModel)
  }


  render() {
    let { outputModel } = this.state.outputModel;

    return (
      <>
        <div class="container border-dark">
          <div class="card bg-dark text-white">
            <img src={img} class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Procesamiento de Lenguaje Natural | <span class="badge bg-dark">Modelo GPT-J-6B</span></h5>
              <p class="card-text">Este es un Modelo de Procesamiento de Lenguaje Natural de código abierto. Detecta patrones según su entrada en tiempo real y genera una respuesta.</p>
              <div class="container m-3">
                <div class=" justify-content-center mb-3 mt-5 m-5">
                  <label for="formGroupExampleInput" class="form-label"><h5>Input Modelo</h5></label>
                  <div class="d-flex d-row ms-5 me-5">
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Entrada de Datos a Procesar" />
                    <button type="submit" class="btn btn-primary" onClick={() => this.runModel()}>Enviar </button>
                  </div>
                </div>
              </div>
              <div class="container m-3">
                <div class="card justify-content-center mb-3 mt-5 m-5">
                  <div class="card-header bg-dark text-white">
                    Output Modelo
                  </div>
                  <div class="card-body text-black">
                    <blockquote class="blockquote mb-0">
                      <p>{outputModel}</p>
                      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
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