import React, { useEffect, useState } from 'react'
import HomeNavbar from './HomeNavbar'
import HomeFooter from './HomeFooter'
import { Link, useNavigate } from 'react-router-dom'

function MyOrder() {
    const navigate = useNavigate();
    const [data, setData] = useState()
    const [show, setShow] = useState(false)
    const [alertShown, setAlertShown] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const fetchorderdata = async () => {
        try {
            const response = await fetch('http://localhost:1300/api/myorders');
            const data = await response.json();
            setData(data);
            if (data.length == 0)
                setShow(true)

        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const handleload = () => {
        let abc = JSON.parse(sessionStorage.getItem("islogin"))
        if (abc.loginornot === "false" && !alertShown) {
            alert("First Login to CheckOut!");
            navigate('/login');
            setAlertShown(true);
        }
    };

    useEffect(() => {
        fetchorderdata()
    }, [])


    return (
        <>
            <span onLoad={handleload}>
                <HomeNavbar />
                <div className="container-fluid">
                    <div className="row d-flex align-items-center text-center mb-2 mb-md-3">
                        <div className="col-12">
                            <h1 className='title_about my-2 mb-md-4'>My Orders</h1>
                        </div>
                    </div>
                </div>
                {!show && <div className="container">
                    <div className="row">
                        <>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th colSpan="3">Details</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((e, i) => (
                                        <tr key={i}>
                                            <td colSpan="3">
                                                {e.username} <br />
                                                {e.address} {e.townAndCity} {e.state} {e.pincode} <br />
                                                {e.phoneNumber} <br /> {e.dateAndTime} <br /> <span style={{ color: 'rgb(192, 170, 131)', fontWeight: '500', fontSize: '20px' }}>Products Details</span> <br />
                                                {e.items?.map((item, j) => (
                                                    <span key={j} >
                                                        {item.Name} * {item.Quantity} <br />
                                                    </span>
                                                ))}
                                            </td>
                                            <td style={{ color: 'black', fontSize: '22px', fontWeight: 'bold', paddingTop: '50px' }}>{e.grandTotal}₹</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    </div>
                </div>}
                {show && (
                    <div className="container text-center">
                        <h2 className="not_available mb-3">You Don't order Till Now</h2>
                        <Link to='/search' onClick={scrollToTop} className='text-decoration-none' ><button className='btn chkbtn1 width_media m-auto mb-5'>Go to Shop </button></Link>
                    </div>
                )}
                <HomeFooter />
            </span>
        </>
    )
}

export default MyOrder