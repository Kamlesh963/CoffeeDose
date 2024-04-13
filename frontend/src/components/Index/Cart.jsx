import React, { useEffect, useState } from 'react';
import HomeNavbar from './HomeNavbar';
import HomeFooter from './HomeFooter';
import '../CSS/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Cart() {
  const [show, setShow] = useState(true);
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  const cartUpdateEvent = new Event('cartUpdated');
  window.dispatchEvent(cartUpdateEvent);

  const fetchCartData = async () => {
    try {
      const response = await fetch('http://localhost:1300/api/cart');
      const data = await response.json();
      setCartData(data);
      setShow(data.length === 0); // Show is true only when the cart is empty
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const updateCartTotal = () => {
    const newTotal = cartData.reduce((acc, item) => {
      return acc + (item.Total || parseFloat(item.MainPrice) * item.Quantity);
    }, 0);
    setTotal(newTotal);
  };

  const handleIncrement = async (cartItemId, currentQuantity) => {
    try {
      const updatedQuantity = parseInt(currentQuantity, 10) + 1;
      const response = await fetch(`http://localhost:1300/api/cart/${cartItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Quantity: updatedQuantity }),
      });

      if (response.ok) {
        console.log('Cart item quantity updated successfully.');
        fetchCartData(); // Fetch updated cart data
        updateCartTotal(); // Update total after fetching data
      } else {
        console.error('Error updating cart item quantity:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  const handleDecrement = async (cartItemId, currentQuantity) => {
    if (currentQuantity > 1) {
      try {
        const updatedQuantity = currentQuantity - 1;
        const response = await fetch(`http://localhost:1300/api/cart/${cartItemId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Quantity: updatedQuantity }),
        });

        if (response.ok) {
          console.log('Cart item quantity updated successfully.');
          fetchCartData(); // Fetch updated cart data
          updateCartTotal(); // Update total after fetching data
        } else {
          console.error('Error updating cart item quantity:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating cart item quantity:', error);
      }
    }
  };

  const handleDelete = async (cartItemId) => {
    try {
      const response = await fetch(`http://localhost:1300/api/cart/${cartItemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Cart item deleted successfully.');
        fetchCartData(); // Fetch updated cart data
        updateCartTotal(); // Update total after fetching data
      } else {
        console.error('Error deleting cart item:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const handleUpdateCart = async () => {
    try {
      // Iterate through each item in the cart and update the total
      const updatedCartData = await Promise.all(cartData.map(async (item) => {
        const total = item.Quantity * parseFloat(item.MainPrice);
        const response = await fetch(`http://localhost:1300/api/cart/${item._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Total: total }),
        });

        if (response.ok) {
          console.log('Cart item total updated successfully.');
          return { ...item, Total: total };
        } else {
          console.error('Error updating cart item total:', response.statusText);
          return item;
        }
      }));

      setCartData(updatedCartData);
      updateCartTotal(); // Update total after updating cart data
    } catch (error) {
      console.error('Error updating cart item total:', error);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })}

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    const calculateInitialTotal = () => {
      const initialTotal = cartData.reduce((acc, item) => {
        return acc + (item.Total || parseFloat(item.MainPrice) * item.Quantity);
      }, 0);
      setTotal(initialTotal);
    };
    calculateInitialTotal();
  }, [cartData]);

  return (
    <>
      <HomeNavbar />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <span className="title_about">Cart</span>
          </div>
        </div>
        <div className="row my-3">
          {!show && (
            <>
              <div className="table-container">
                <table className="cart_table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th colSpan={2} className="text-start">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData?.map((e, i) => (
                      <tr key={e._id}>
                        <td>
                          <img src={e.img} alt="" style={{ height: '100px', width: '120px', objectFit: 'contain' }} />
                        </td>
                        <td>{e.Name}</td>
                        <td>{e.MainPrice}</td>
                        <td key={i}>
                          <span onClick={() => handleDecrement(e._id, e.Quantity)}>
                            <span className="Quantity__minus">-</span>
                          </span>
                          <input
                            className="input_cart"
                            type="text"
                            value={e.Quantity}
                            onChange={(e) => {
                              // You can add any additional logic here if needed
                            }}
                          />
                          <span onClick={() => handleIncrement(e._id, e.Quantity)}>
                            <span className="Quantity__plus">+</span>
                          </span>
                        </td>
                        <td>{e.Total || (parseFloat(e.MainPrice) * e.Quantity)}₹</td>
                        <td style={{ cursor: 'pointer' }} onClick={() => handleDelete(e._id)}>
                          <FontAwesomeIcon icon="fa-solid fa-trash" className="hover_trash" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="container mt-2 mt-md-3 mb-2">
                <div className="total_section ">
                  <div className="cart_total">Cart Total</div>
                  <div className="row text-secondary">
                    <div className="col-6">Subtotal</div>
                    <div className="col-6 text-end">{total} ₹</div>
                  </div>
                  <div className="row text-black my-1">
                    <div className="col-6">Total</div>
                    <div className="col-6 text-end">{total} ₹</div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex justify-content-center">
                      <Link to='/onlineorder' onClick={scrollToTop} className="text-decoaraton-none" ><button className='btn chkbtn1'>Proceed To CheckOut</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {show && (
            <div className="container text-center">
              <h2 className="not_available">This Is no item For Cart</h2>
              <Link to='/search' onClick={scrollToTop} className='text-decoration-none' ><button className='btn chkbtn1 width_media m-auto mb-5'>Go to Shop </button></Link>
            </div>
          )}
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default Cart;
