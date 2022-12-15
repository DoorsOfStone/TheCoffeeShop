import '../css/cart.css'
import Total from '../components/Total'
import CartItem from '../components/cartItem'

// src/pages/Cart.js
import { useSelector } from 'react-redux'
function Cart() {
  // src/pages/Cart.js
  const cart = useSelector((state) => state.cart)
  return (
    <div className="cart">
     // src/pages/Cart.js
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total />
      </div>

    </div>
  )
}

export default Cart