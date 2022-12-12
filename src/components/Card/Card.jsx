//Imports
import React from 'react';
import img from '../../assets/images/cards/card07.jpg';
import runGptj from '../../services/gpt-j/gpt-j';
import spinner from '../../utils/spinner/spinner';
//Vars
//let msj = this.state.inputModel;




export default class Card extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      outputModel: '',
      inputModel: ''
    }
  }


  async runModel(msg) {
    // setTimeout(() => {
    //   spinner();
    //  }, 2200);
    spinner()

    let output = await runGptj(msg)

    this.setState({
      outputModel: output
    })
    //console.log(this.state.outputModel)

  }

  async updateInputValueModel(event) {
    const value = event.target.value;
    this.setState({
      inputModel: value
    })
  }


  render() {
    const { outputModel } = this.state;
    const { inputModel } = this.state;

    return (
      <>
        <div className="container border-dark">
          <div className="card bg-transparent text-white">
            <img src={img} className="card-img" alt="..." />
            {/* INPUT CONTAINER */}
            <div className="card-img-overlay" >
              <h5 className="card-title mt-2">Procesamiento de Lenguaje Natural | <span className="badge bg-dark">Modelo GPT-J-6B</span></h5>
              <p className="card-text">El Modelo GPT-J-6B es un modelo de Lenguaje Autorregresivo (representación de procesos aleatorios) de Procesamiento de Lenguaje Natural de código abierto. Detecta patrones según su entrada en tiempo real y genera una respuesta. Fue creado por el equipo <a href="https://www.eleuther.ai/" target="_blank" rel="noreferrer">EleutherAI</a> y es una de las alternativas más avanzadas en relación al modelo GPT-3 de <a href="https://openai.com/" target="_blank" rel="noreferrer">OpenAI.</a></p>

                {/* TABLE CONTAINER */}
                <div className='container d-flex d-row col-10 justify-content-center p-2'>
                <div className='ms-5'>
                  <table class="table table-dark opacity-75 table-striped table-sm text-white m-2">
                    <thead>
                      <tr>
                        <th scope="col">Parámetros</th>
                        <th scope="col">Finalidad</th>
                        <th scope="col">Valores</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>length</td>
                        <td>Longitud del output</td>
                        <td>400</td>
                      </tr>
                      <tr>
                        <td>temperature</td>
                        <td>Exhaustividad del modelo</td>
                        <td>0.7</td>
                      </tr>
                      <tr>
                        <td>batchSize</td>
                        <td>Rendimiento GPU</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* END TABLE CONTAINER */}


              <div className="container m-3">
                <div className=" justify-content-center mb-3 mt-3 m-5">
                  <label for="formGroupExampleInput" className="form-label"><h5>Input Modelo</h5></label>
                  <div className="d-flex d-row ms-5 me-5">
                    <input type="text" className="form-control" placeholder="Entrada de Datos a Procesar" value={inputModel} onChange={value => this.updateInputValueModel(value)} />
                    <button type="submit" className="btn btn-primary" onClick={() => this.runModel(inputModel)}>Enviar </button>
                  </div>
                </div>
              </div>

            
            </div>
            {/* FIN INPUT CONTAINER */}
            {/* OUTPUT CONTAINER */}
            <div className="card justify-content-center mb-3 mt-1 ">
              <div className="card-header bg-dark text-white">
                Output Modelo
              </div>
              <div className="card-body text-black">
                <blockquote className="blockquote mb-0">
                  <p >{outputModel}</p>

                  <footer className="blockquote-footer mt-5">"La clave de la inteligencia artificial siempre ha sido la representación”.
                    <cite title="Source Title">Jeff Hawkins</cite></footer>
                </blockquote>
              </div>
            </div>
            {/* FIN OUTPUT CONTAINER */}

          </div>
        </div>




      </>
    );
  }

}
