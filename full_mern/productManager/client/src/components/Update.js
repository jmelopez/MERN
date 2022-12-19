import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Update = (props) => {
    const { id } = useParams();
    const [ title, setTitle ] = useState();
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate('/product')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={ (e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price: </label>
                    <input type="number" name="price" value={price} onChange={ (e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" name="description" value={description} onChange={ (e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Update;