/* eslint-disable react-hooks/rules-of-hooks */
import './spinner.scss';
import {
    PushSpinner, TraceSpinner
}
    from "react-spinners-kit";
  
function spinner() {
    //const [loading] = useState(true)
    return (
        <>
            <p className='tag'>Spinners using react-spinners-kit</p>
  
            <div className="spinnerContainer">
  
                <div className="spinner">
                    <PushSpinner size={30} color="#00ff89" 
                        loading={true} />
                </div>
                <div className="spinner">
                    <TraceSpinner size={40} frontColor="green" 
                        backColor="white" loading={true} />
                </div>
            </div>
        </>
    );
}
  
export default spinner;