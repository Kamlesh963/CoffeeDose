import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
    const [nameOnCard, setNameOnCard] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [creditCardError, setCreditCardError] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [expiryDateError, setExpiryDateError] = useState('');
    const [cvv, setCvv] = useState('');
    const [cvvError, setCvvError] = useState('');
    const [cartData, setCartData] = useState([])
    const [addressdata, setAddressdata] = useState({})
    const [total, setTotal] = useState('')
    const [show, setShow] = useState(false)
    let xyz = JSON.parse(localStorage.getItem('total'))

    useEffect(() => {
        fetchCartData();
        fetchAddressData();
    }, []);

    const fetchCartData = async () => {
        try {
            const response = await fetch('http://localhost:1300/api/cart');
            const data = await response.json();
            setCartData(data);
            let newTotal = data.reduce((acc, item) => {
                return acc + (item.Total || parseFloat(item.MainPrice) * item.Quantity);
            }, 0);
            setTotal(newTotal);
            setShow(data.length === 0);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const fetchAddressData = async () => {
        try {
            const data = JSON.parse(localStorage.getItem("formdata"))
            setAddressdata(data);

        } catch (error) {
            console.error('Error fetching address data:', error);
        }
    };

    const myorderdetail = async () => {

        const data = {
            items: cartData.map(item => ({
                MainPrice: item.MainPrice,
                Quantity: item.Quantity,
                Name: item.Name,
                img: item.img
            })),
            username: addressdata.formData.name,
            address: addressdata.formData.address,
            townAndCity: addressdata.formData.townAndCity,
            state: addressdata.formData.state,
            pincode: addressdata.formData.pincode,
            phoneNumber: addressdata.formData.phoneNumber,
            grandTotal: total,
            dateAndTime: new Date().toLocaleString(),
        };
        console.log("the deatails", data)

        try {
            const response = await fetch('http://localhost:1300/api/myorders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Order details saved successfully.');
            } else {
                console.error('Failed to save order details.');
            }
        } catch (error) {
            console.error('Error in myorder:', error);
        }
    };

    const handleBack = () => {
        navigate('/onlineorder');
    };
    console.log(" cart data", cartData)
    const handlePay = () => {
        if (!isValidCreditCard(creditCardNumber)) {
            setCreditCardError('Please enter a valid credit card number.');
            return;
        }

        if (!isValidExpiryDate(expiryDate)) {
            setExpiryDateError('Please enter a valid expiry date (MM / YY format).');
            return;
        }

        if (!isValidCvv(cvv)) {
            setCvvError('Please enter a valid CVV.');
            return;
        }
        myorderdetail()
        alert("Payment Successfully!")
        localStorage.removeItem('formdata')
        axios.delete('http://localhost:1300/api/cartitems');
        navigate('/')
    };

    const isValidCreditCard = (creditCardNumber) => {
        const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])?[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        return creditCardRegex.test(creditCardNumber);
    };

    const isValidExpiryDate = (expiryDate) => {
        // Regex for validating expiry date in MM / YY format
        const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        return regex.test(expiryDate);
    };

    const isValidCvv = (cvv) => {
        // Regex for validating CVV with 3 digits
        const regex = /^[0-9]{3}$/;
        return regex.test(cvv);
    };

    const handleCreditCardChange = (e) => {
        setCreditCardNumber(e.target.value);
        if (creditCardError) {
            setCreditCardError('');
        }
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
        if (expiryDateError) {
            setExpiryDateError('');
        }
    };

    const handleCvvChange = (e) => {
        const inputCvv = e.target.value;
        // Limit the input to only three digits
        if (/^\d{0,3}$/.test(inputCvv)) {
            setCvv(inputCvv);
            if (cvvError) {
                setCvvError('');
            }
        }
    };

    const handleNameOnCardChange = (e) => {
        setNameOnCard(e.target.value);
    };

    return (
        <div className="container22">
            <div id="Checkout" className="inline">
                <h1>Pay Invoice</h1>
                <div className="card-row">
                    <span className="visa"></span>
                    <span className="mastercard"></span>
                    <span className="amex"></span>
                    <span className="discover11"></span>
                </div>
                <div className='p-4 box_payment'>
                    <div className="form-group">
                        <label htmlFor="PaymentAmount">Payment amount</label>
                        <div className="amount-placeholder">
                            <span>₹</span>
                            <span>{xyz.total}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="NameOnCard">Name on card</label>
                        <input id="NameOnCard" className="form-control" type="text" maxLength="255" onChange={handleNameOnCardChange} value={nameOnCard} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CreditCardNumber">Card number</label>
                        <input id="CreditCardNumber" className={`null card-image form-control ${creditCardError ? 'is-invalid' : ''}`} type="number" onChange={handleCreditCardChange} value={creditCardNumber} />
                        {creditCardError && <div className="invalid-feedback">{creditCardError}</div>}
                    </div>
                    <div className="expiry-date-group form-group">
                        <label htmlFor="ExpiryDate">Expiry date</label>
                        <input id="ExpiryDate" className={`form-control ${expiryDateError ? 'is-invalid' : ''}`} type="text" placeholder="MM / YY" maxLength="5" onChange={handleExpiryDateChange} value={expiryDate} />
                        {expiryDateError && <div className="invalid-feedback">{expiryDateError}</div>}
                    </div>
                    <div className="security-code-group form-group">
                        <label htmlFor="SecurityCode">CVV</label>
                        <div className="input-container">
                            <input id="SecurityCode" className={`form-control ${cvvError ? 'is-invalid' : ''}`} type="text" maxLength="3" onChange={handleCvvChange} value={cvv} />
                            {cvvError && <div className="invalid-feedback">{cvvError}</div>}
                            <i id="cvc" className="fa fa-question-circle"></i>
                        </div>
                        <div className="cvc-preview-container two-card hide">
                            <div className="amex-cvc-preview"></div>
                            <div className="visa-mc-dis-cvc-preview"></div>
                        </div>
                    </div>
                    <button className='btn py-2 px-3 fw-bold mt-4 btn-primary border-0' onClick={handleBack}>Back</button>
                    <button id="PayButton" className="btn btn-block btn-success submit-button mt-4 mx-4" type="submit" onClick={handlePay}>
                        <span className="submit-button-lock"></span>
                        <span className="align-middle">Pay ₹{xyz.total}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
