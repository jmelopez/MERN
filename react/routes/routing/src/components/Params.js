import { useParams } from "react-router-dom";

const Params = (props) => {
    const {word, text, background} = useParams();

    return(
        <div>

            {
                isNaN(word)?
                <h1 style={ text? {color:text, backgroundColor:background}: null}>
                    The word is: { word }
                </h1> 
                
                :
                
                <h1>
                    The number is: {word}
                </h1>
            }
        </div>
    )
} 

export default Params;