import { useReducer } from 'react'
import './App.css'
import { Basket } from './Basket'
import { ProductList } from './ProductList'
import { reducer, initialState, UserContext } from './context'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      < UserContext.Provider value={{ state, dispatch }}>
        <div className='row'>
          <ProductList />
          <Basket />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App