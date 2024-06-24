import { useContext } from "react"
import { UserContext } from "./context"
import './App.css'

export const ProductItem = ({ id, title, price, photo }) => {
    const { dispatch } = useContext(UserContext)
    return <div>
        <img src={photo}></img>
        <p>{title}</p>
        <p>{price}$</p>
        <button onClick={() => dispatch({ type: "MOVE", payload: id })}>Move</button>


    </div>

}