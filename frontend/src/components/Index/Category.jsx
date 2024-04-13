import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Category(props) {
    const navigate = useNavigate();
    const [addedToCart, setAddedToCart] = useState({});
    const [CartArr, setCartArr] = useState([])

    const cartUpdateEvent = new Event('cartUpdated');
    window.dispatchEvent(cartUpdateEvent);

    const handleCart = async (product) => {
        try {
            await addToCart(product);
            setAddedToCart((prev) => ({ ...prev, [product._id]: true }));
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const addToCart = async (product) => {
        try {
            const response = await fetch('http://localhost:1300/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...product, Quantity: 1 }),
            });

            if (response.ok) {
                console.log('Product added to cart successfully.');
                // window.location.reload();
            } else {
                console.error('Failed to add product to cart.');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    const handleViewCart = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        navigate('/cart');
    };


    useEffect(() => {
        const fetchProductsByCoffeeid = async () => {
            try {
                const response = await fetch(`http://localhost:1300/api/category?Coffeeid=${props.data}`);
                console.log("my datad response", response)
                if (!response.ok) {
                    throw new Error(`Error fetching products: ${response.status}`);
                }

                const products = await response.json();
                console.log("my filter data ", products)

                setCartArr(products);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProductsByCoffeeid();
    }, [props.data]);



    return (
        <>
            <div className="container-fluid px-1 px-sm-2 px-md-3 my-1 mx-auto">
                {
                    CartArr.map((e, i) => (
                        <div className="card d-inline-flex card_style m-0 m-sm-3" key={i}>
                            <div className="container p-0 ">
                                <img src={e.img} className="card-img-top card_image_property" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title name_style">{e.Name}</h5>
                                    <h5 className="card-text">{e.Calories}</h5>
                                    <h5 className="card-text"><span className='text-decoration-line-through text-danger'>{e.XPrice}</span>&nbsp;{e.MainPrice}</h5>
                                    <button className="btn btn-primary add_cart" onClick={addedToCart[e._id] ? handleViewCart : () => handleCart(e)}>
                                        {addedToCart[e._id] ? 'View Cart' : 'Add To Cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Category