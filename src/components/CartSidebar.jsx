import React, { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buyCart, getCartThunk } from "../store/slices/cart.slice";

const CartSidebar = ({ show, handleClose }) => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCartThunk());
    }, []);

    console.log(cart)
    return (
        <Offcanvas placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>My cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              
                <ul>
                    {cart.map((myCart) => (
                        <li key={myCart.id} onClick={() => navigate(`/shop/${myCart.id}`)}>
                           
                                <>
                                    <div key={myCart.id} className='purchasesItems'>
                                        <div className='purchasesTitle'>
                                            <h6>{myCart.title}</h6>
                                        </div>
                                        <br />

                                        <div className='purchasesQuantity'>
                                            <h6>Quantity: {myCart.productsInCart?.quantity}</h6>
                                        </div>
                                        <br />
                                        <div className='purchasesPrice'>
                                            <h6>Price: ${myCart.price}</h6>
                                        </div>
                                    </div>
                                </>
                            
                        </li>
                    ))}
                </ul>
                <Button onClick={() => dispatch(buyCart())}>
                    Buy cart 
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};


export default CartSidebar;