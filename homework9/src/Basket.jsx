import { useContext } from "react"
import { UserContext, setTotal } from "./context"
import { BasketItem } from "./BasketItem"
export const Basket = () => {
    const { state: { basket } } = useContext(UserContext)
    const total = setTotal(basket);
    return <div >
        <h3>Basket</h3>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {basket.map(elm => <BasketItem key={elm.id} {...elm} />)}
            </tbody>
            <h4>Total:{total}$</h4>
        </table>
    </div>
}