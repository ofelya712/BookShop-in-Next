import { ProductItem } from "./ProductItem"
import { UserContext } from "./context";
import { useContext } from "react";
export const ProductList = () => {
  const { state: { books } } = useContext(UserContext)
  return <div className="list">
    {
      books.map(elm => <ProductItem key={elm.id} {...elm} />)
    }
  </div>
}