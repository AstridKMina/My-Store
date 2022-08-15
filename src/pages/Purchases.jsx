import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getPurchasesThunk } from '../store/slices/purchases.slice';


const Purchases = () => {

    const dispatch = useDispatch();
    const purchases = useSelector((state) => state.purchases);

    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, []);

    console.log(purchases)
    return (
        <div className='myPurchases'>
            <h2>Purchases</h2>
            <ul className="purchases">
                {purchases.map((myPurchases) => (
                    <li key={myPurchases.id} >
                        {myPurchases.cart.products.map((purchases) => (
                            <>
                                {/* <div className='purchasesId'>
                                    <h6>{purchases.productsInCart?.cartId}</h6>

                                </div> */}
                                <div key={purchases.id} className='purchasesItems'>
                                    <div className='purchasesTitle'>
                                        <h6>{purchases.title}</h6>
                                    </div>
                                    <br />
                                   
                                    <div className='purchasesQuantity'>
                                        <h6>Quantity: {purchases.productsInCart?.quantity}</h6>
                                    </div>
                                    <br />
                                    <div className='purchasesPrice'>
                                        <h6>Price: ${purchases.price}</h6>
                                    </div> 
                                </div>
                            </>
                        ))}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Purchases;