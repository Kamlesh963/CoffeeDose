import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeNavbar from './HomeNavbar';
import HomeFooter from './HomeFooter';
import { Link } from 'react-router-dom';

const OnlineOrder = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        townAndCity: '',
        state: '',
        pincode: '',
        phoneNumber: '',
        email: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [show, setShow] = useState(true);
    const [cartData, setCartData] = useState([]);
    const [total, setTotal] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear the error for the current field when user starts typing
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })}

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Perform form validation here

        // Example: Checking if required fields are not empty
        const newFormErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newFormErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
            }
        });

        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors(newFormErrors);
            return;
        }
        toast.success("Details Submitted Successfully !")

        try {
            const response = await fetch('http://localhost:1300/api/address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        }
        catch (error) {
            console.error('Error in Address ', error);
            // alert("Error signing up. Please try again.");
            toast.error("Fill the address again")
        }
        // Continue with form submission logic
        console.log('Form submitted:', formData);
        setFormData(
            {
                name: '',
                address: '',
                townAndCity: '',
                state: '',
                pincode: '',
                phoneNumber: '',
                email: '',
            }
        )
    };

    const fetchCartData = async () => {
        try {
            const response = await fetch('http://localhost:1300/api/cart');
            const data = await response.json();
            setCartData(data);
            let newTotal = data.reduce((acc, item) => {
                return acc + (item.Total || parseFloat(item.MainPrice) * item.Quantity);
            }, 0);
            setTotal(newTotal);
            setShow(data.length === 0); // Show is true only when the cart is empty
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    return (
        <>
            <HomeNavbar />
            {!show && (
                <>
                    <div className="container my-5">
                        <h2 className="text-center pb-2 fw-bold" style={{ fontVariant: 'small-caps' }}>Billing Details</h2>
                        <div className="container">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className={`form-control ${formErrors.name ? 'is-invalid border_class' : ''}`} id="name" name="name" value={formData.name} onChange={handleChange} />
                                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className={`form-control ${formErrors.address ? 'is-invalid border_class' : ''}`} id="address" name="address" value={formData.address} onChange={handleChange} />
                                    {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="townAndCity" className="form-label">Town Or City</label>
                                    <input type="text" className={`form-control ${formErrors.townAndCity ? 'is-invalid border_class' : ''}`} id="townAndCity" name="townAndCity" value={formData.townAndCity} onChange={handleChange} />
                                    {formErrors.townAndCity && <div className="invalid-feedback">{formErrors.townAndCity}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className={`form-control ${formErrors.state ? 'is-invalid border_class' : ''}`} id="state" name="state" value={formData.state} onChange={handleChange} />
                                    {formErrors.state && <div className="invalid-feedback">{formErrors.state}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pincode" className="form-label">Pincode</label>
                                    <input type="number" className={`form-control ${formErrors.pincode ? 'is-invalid border_class' : ''}`} id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
                                    {formErrors.pincode && <div className="invalid-feedback">{formErrors.pincode}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input type="number" className={`form-control ${formErrors.phoneNumber ? 'is-invalid border_class' : ''}`} id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                    {formErrors.phoneNumber && <div className="invalid-feedback">{formErrors.phoneNumber}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className={`form-control ${formErrors.email ? 'is-invalid border_class' : ''}`} id="email" name="email" value={formData.email} onChange={handleChange} />
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div className="your_order my-3">Your Order</div>
                        <div className="container">
                            <div className="row">

                                {/* {!show && ( */}
                                <>
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th colspan="3">Products</th>
                                                <th>SubTotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartData?.map((e, i) => (
                                                <tr key={i}>
                                                    <td colspan="3">{e.Name} * {e.Quantity}</td>
                                                    <td>{e.Total || (parseFloat(e.MainPrice) * e.Quantity)}₹</td>
                                                </tr>
                                            ))}
                                            <tr className='total_part_color'>
                                                <td colspan="3">Subtotal</td>
                                                <td>{total}₹</td>
                                            </tr>
                                            <tr className='total_part_color'>
                                                <td colspan="3">Total</td>
                                                <td>{total}₹</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button onClick={handleSubmit} type="submit" className="btn chkbtn1 width_media m-auto my-3">Proceed To Payment</button>
                                </>
                            </div>
                        </div>
                    </div >
                </>
            )}
            {show && (
                <div className="container text-center">
                    <h2 className="not_available mb-3">The Cart is Empty</h2>
                    <Link to='/search' onClick={scrollToTop} className='text-decoration-none' ><button className='btn chkbtn1 width_media m-auto mb-5'>Go to Shop </button></Link>
                </div>
            )}
            <ToastContainer/>
            <HomeFooter />
        </>
    );
};
export default OnlineOrder;
