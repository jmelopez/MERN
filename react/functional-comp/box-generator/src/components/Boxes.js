import { useState } from "react"
import styles from './style.module.css';

const Boxes = (props) => {
    const [color, setColor] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    console.log(color)

    const createBox = (e) => {
        e.preventDefault();
        setHasSubmitted( true );
        setColor(e.target.value)
        
    };

    const boxColor = {
        color: color
    };



    return (
        <div>
            <form onSubmit={ createBox }>
                <div>
                    <label> Color: </label>
                    <input type="color" value={color} onChange={(e) => setColor.e.target.value}/>
                </div>
                <div>
                    <input type="submit" value="Create Box" />
                </div>
            </form>
            <div className={styles.box} style={ boxColor } >
                <h1>{ state.color }</h1>

            </div>
        </div>
    )
}

export default Boxes;