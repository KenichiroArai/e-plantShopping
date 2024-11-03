import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        let result = 0;

        // TODO KenichiroArai 2024/11/03 Task3-1
        console.log(cart);

        return result;
    };

    const handleContinueShopping = (e) => {
        // TODO KenichiroArai 2024/11/03 Task3-2
    };



    const handleIncrement = (item) => {
        console.log('handleIncrement：前：' + item.quantity);
        // item.quantity = item.quantity + 1;
        console.log('handleIncrement：後');
        dispatch(updateQuantity(item));
    };

    const handleDecrement = (item) => {
        item.quantity--;
        if (item.quantity <= 0) {
            dispatch(removeItem(item));
            return;
        }
        dispatch(updateQuantity(item));
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
        let result = 0;

        // TODO KenichiroArai 2024/11/03 Task3-6
        console.log(item);

        return result;
    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    return (
        <div className="cart-container">
        <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
        <div>
            {cart.map(item => (
            <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className="cart-item-quantity">
                    <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                </div>
            </div>
            ))}
        </div>
        <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
        <div className="continue_shopping_btn">
            <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
            <br />
            <button className="get-started-button1">Checkout</button>
        </div>
        </div>
    );
};

export default CartItem;


