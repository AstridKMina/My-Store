import React, { useEffect, useState } from 'react';
import {
    filterCategoryThunk,
    filterHeadlineThunk,
    getProductsThunk
} from "../store/slices/products.slice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import {
    Row,
    Col,
    ListGroup
} from "react-bootstrap";
import promo from "../Assets/Promo_Mobile.webp"

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchProduct, setSearchProduct] = useState("");
    const [categories, setCategories] = useState([]);


    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsThunk());
        axios
            .get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/")
            .then((res) => setCategories(res.data.data.categories));

    }, []);


    console.log(products);

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className='promo'>
                <img src={promo} alt="promo-image" className='promo-img'/>
            </div>
            <div className='products'>
                <div className='categories'>

                    <Row className='theCategories'>
                        <Col lg={16}>
                            <h5>Categories</h5>
                            <ListGroup >
                                {categories.map((category) => (
                                    <ListGroup.Item
                                        key={category?.id}
                                        onClick={() => dispatch(filterCategoryThunk(category.id))}
                                    >
                                        {category?.name}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </div>
                <div className='itemList'>
                    <div className='firstForm'>
                        <form onSubmit={submit}>
                            <input className='firstInput'
                                type="text"
                                value={searchProduct} placeholder="What are you looking for?"
                                onChange={(e) => setSearchProduct(e.target.value)}

                            />
                            <button className='myBtn' onClick={() => dispatch(filterHeadlineThunk(searchProduct))} > Search</button>
                        </form>
                    </div>
                    <div className='cardList'>
                        {products.map((product) => (
                            <li className='card' onClick={() => navigate(`/shop/${product.id}`)} key={product.id}>
                                <img src={product.productImgs} />
                                <h5>{product.title}</h5>
                                <h5>Price: ${product.price}</h5>
                            </li>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;