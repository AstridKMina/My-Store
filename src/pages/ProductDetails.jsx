import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCartThunk, buyCart } from "../store/slices/cart.slice";
// import { addFavoriteThunk } from "../store/slices/favorites.slice";
import { getProductsThunk } from "../store/slices/products.slice";

const ProductsDetails = () => {
    const allProducts = useSelector((state) => state.products);

    const [productsDetail, setProductsDetail] = useState({});
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProductsThunk());
    }, []);

    useEffect(() => {
        const productsFind = allProducts.find((product) => product.id === Number(id));
        setProductsDetail(productsFind);

        const filteredProducts = allProducts.filter(
            (product) => product.category.id === productsFind.category.id
        );
        setSuggestedProducts(filteredProducts);
    }, [allProducts, id]);

    const addProduct = () => {
        alert("Añadido a carrito");
        const cartProduct = {
            id: productsDetail.id,
            quantity

        };
        dispatch(addCartThunk(cartProduct));
        console.log(cartProduct);
    };

    const sumProduct = () => {
        setQuantity(quantity + 1)

    }

    const restProduct = () => {
        if (quantity < 1) {
            SetQuantity(1)
        }
        setQuantity(quantity - 1)
         
        
    }
    // console.log(productsDetail)
    return (
        <div>
            <h1 className="detailsTitle">{productsDetail?.title}</h1>

            <div className="productDetail">
                <div className="productImg">
                    <img src={productsDetail?.productImgs} alt="" />
                </div>
                <div className="productDescription">
                    {productsDetail?.description}
                    <br />
                    <h5 className="detailsPrice">Price: ${productsDetail?.price}</h5>
                    <div>
                        <button className="quantity" onClick={sumProduct} >+</button>
                        <input className="quantity" type="text"
                            value={quantity} />
                        <button className="quantity" onClick={restProduct}>-</button>
                    </div>
                    <Button
                        onClick={addProduct}
                        variant="outline-secondary"
                        id="button-addon2"
                    >
                       <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                    </Button>
                </div>

            </div>

            <div className="suggested">
                <div className="suggested-title">
                    <h4>Discover similar products</h4>
                </div>
                <div className="otherItems"></div>
                <ul>
                    {suggestedProducts.map((products) => (
                        <li key={products.id} onClick={() => navigate(`/shop/${products.id}`)}>
                            <img src={products?.productImgs} alt="" />
                            {products?.title}
                            <h6>Price: ${products?.price}</h6>
                        </li>

                    ))}
                </ul>

            </div>
        </div>
    );
};

export default ProductsDetails;
