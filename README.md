# Microfront IA-NLP React (En Proceso de Desarrollo).
* App para la implementación y uso de diversos módulos npm desarrollados acerca de Procesamiento de Lenguaje Natural (NLP) implementando modelos de código abierto como GPT-J-6B / GPT-NEO / etc.
* [Repositorio Proyecto GPT-J-6B](https://github.com/andresWeitzel/Modulo_GPT-J-6B_NLP_NodeJs)
* [Repositorio módulo npm GPT-J-6B](https://www.npmjs.com/package/gpt-j)

</br>

## Documentación Gráfica Sucinta 

</br>

### Comprobación Modelo GPT-J
![Index app](https://github.com/andresWeitzel/Microfront_IA-NLP_React/blob/master/doc/inicio01.png)
![Index app](https://github.com/andresWeitzel/Microfront_IA-NLP_React/blob/master/doc/inicio02.png)


</br>


## Ejecución del Proyecto
* Crear un entorno de trabajo a través de algún IDE
* Clonar el Proyecto (`git clone https://github.com/andresWeitzel/Microfront_IA-NLP_React`)
* Dentro del directorio instalar todos las librerías implementadas
  * `npm i react-router-dom`
  * `npm i react-router`
  * `npm i react-bootstrap`
  * `npm install sass`
  * `npm i gpt-jv` (Módulo npm desarrollado)
* Para mayor seguridad he utilizado variables de entorno para la key del módulo gpt-j....
* Creamos un archivo llamado `services/config/gpt-j.js` y seteamos dicha key... 
</br>

 ``` js
module.exports={
    API_KEY: process.env.API_KEY || "xxxx",
}
  ```
* La implementamos en el archivo  `services/gpt-j/gpt-j.js`... 
 
 </br>

  ``` js
       //Imports
       import modelRunner from 'gpt-j';
       const config = require('../config/gpt-j');
       //Vars
       const apiKey = config.API_KEY
       const modelKey = 'gptj'


       export default async function runGptj(msg) {
           return await modelRunner.run(msg, apiKey, modelKey)
         }
  ```
* IMPORTANTE : Crear un archivo `.gitignore` para excluir el archivo `services/config/gpt-j.js`    
  
</hr>


</br>

### Tecnologías Implementadas

| **Tecnologías** | **Versión** | **Finalidad** |               
| ------------- | ------------- | ------------- |
| React | 18 | Librería JS Front |
| React-CLI | 0.3.1 | Herramienta de React para depurar, crear, publicar, etc Apps |
| Sass | 1.56  | Preprocesador CSS |
| HTML | 5.0 | Lenguaje de Hipertexto |
| CSS | 3.0 | Hojas de Estilos |
| Bootstrap | 5.1.3 | Framework Front |
| GPT-J | 6B | Procesamiento Lenguaje Natural |
| Visual Studio Code | 1.74 | IDE |
| GNU bash | 4.4.23  | Bash / Terminal para el manejo e implementación de Git integrado | 
| Git | 2.29.1  | Control de Versiones |

</br>

## Documentación Oficial 
* [React](https://reactjs.org/docs/getting-started.html)
* [React-CLI](https://www.npmjs.com/package/react-cli)
* [Bootstrap v5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [GIT](https://git-scm.com/docs)
* [GPT-J-6B Oficial](https://www.eleuther.ai/)

</br>

## Documentación No Oficial 
* [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html)
* [Manejo de Inputs React](https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs)
* [Librería Spinner React](https://dev.to/kirteshbansal/spinner-loader-in-react-using-css-458h)
* [Otra Librería Spinner React](https://www.geeksforgeeks.org/adding-spinners-using-react-spinners-kit-package-in-react-js/)


</br>
  
## `DOCUMENTACIÓN EN PROCESO DE DESARROLLO`
