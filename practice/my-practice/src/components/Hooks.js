const { useState } = require("react")

const Hooks = (props) => {
    //hook created with getter and setter. Value attached to props.
    const [ inStock, setInStock ] = useState(props.currentStock);
    //destructuring props for easier access to values
    const { item, desc, cost} = props;   
    


    return(
        <div>
            <h1>{ item }</h1>44
            <p>Description: { desc }</p>
            <p>Cost: { cost }</p>
            <p>In Stock: { inStock }</p>
            {/* Synthetic event handler/function */}
            <button onClick={ (e) => setInStock(inStock - 1)}>Buy { item }</button>
        </div>
    )
}

export default Hooks;