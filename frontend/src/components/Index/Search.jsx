import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import HomeFooter from './HomeFooter';

function Search() {
  const navigate = useNavigate();
  const [datasearch, setDatasearch] = useState('');
  const [products, setProducts] = useState([]);
  const [present, setPresent] = useState(false);
  const [addedToCart, setAddedToCart] = useState([]);

  const cartUpdateEvent = new Event('cartUpdated');
  window.dispatchEvent(cartUpdateEvent);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:1300/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCartItemByName = async (productName) => {
    try {
      const response = await fetch(`http://localhost:1300/api/cart?productName=${productName}`);
      const cartItems = await response.json();
      return cartItems.length > 0 ? cartItems[0] : null;
    } catch (error) {
      console.error('Error fetching cart item:', error);
      return null;
    }
  };

  const handleCart = async (product) => {
    try {
      await addToCart(product);
      setAddedToCart((prev) => [...prev, product._id]);
      fetchData();
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

      if (!response.ok) {
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

  const handleSearch = (e) => {
    setDatasearch(e.target.value);
    const isPresent = products.some((value) => value.Name.toLowerCase().includes(e.target.value.toLowerCase()));
    setPresent(!isPresent);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HomeNavbar />
      <div className="container-fluid mt-2 mb-3">
        <div className="background_search">
          <h1 className='text-center my-3 background_text_posit_search'>Products</h1>
        </div>
      </div>
      <div className="container text-center">
        <input type="search" className='Input_search' placeholder='Search Your Coffee' name="search" id="search" onChange={handleSearch} value={datasearch} />
      </div>
      <div className="container-fluid px-1 px-md-3 px-lg-5">
        {products
          .filter((e) => {
            if (datasearch === "") {
              return e;
            } else if (e.Name.toLowerCase().includes(datasearch.toLowerCase())) {
              return e;
            }
          })
          .map((e) => (
            <div className="card d-inline-flex card_style m-3" style={{ cursor: 'pointer' }} key={e._id}>
              <div className="container p-0">
                <img src={e.img} className="card-img-top card_image_property" alt="..." />
                <div className="card-body">
                  <h5 className="card-title name_style">{e.Name}</h5>
                  <h5 className="card-text">{e.Calories}</h5>
                  <h5 className="card-text"><span className='text-decoration-line-through text-danger'>{e.XPrice}</span>&nbsp;{e.MainPrice}</h5>
                  <button className="btn btn-primary add_cart" onClick={addedToCart.includes(e._id) ? handleViewCart : () => handleCart(e)}>
                    {addedToCart.includes(e._id) ? 'View Cart' : 'Add To Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        {present &&
          <div className="container">
            <div className="row text-center my-3">
              <span className='not_available'>The Product is not Available</span>
            </div>
          </div>
        }
      </div>
      <HomeFooter />
    </>
  );
}

export default Search;
