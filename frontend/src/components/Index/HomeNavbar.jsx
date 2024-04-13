import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../CSS/HomeNavbar.css'
import { Link, useNavigate } from 'react-router-dom'

function HomeNavbar() {
    const navigate = useNavigate();
    const handletogohome = () => {
        navigate('/');
        setTimeout(() => {
          const menuSection = document.getElementById('menu');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 250);
      };

    const [chk1, setChk1] = useState(false)
    const [chk2, setChk2] = useState(false)
    const [chk3, setChk3] = useState(false)
    const [cartCount, setCartCount] = useState('0')

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const fetchCartCount = async () => {
        try {
            const response = await fetch('http://localhost:1300/api/cart');
            const data = await response.json();
            setCartCount(data.length);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        fetchCartCount();

        const handleCartUpdate = () => {
            fetchCartCount();
        };

        window.addEventListener('cartUpdated', handleCartUpdate);

        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdate);
        };
    }, []);

    return (
        <>
            <div className='container-fluid' style={{ zIndex: '999' }}>
                <div className="row" style={{ position: 'sticky' }}>
                    <nav className="navbar navbar-expand-lg pe-2 pe-lg-0 post_part" >  {/* style={{ borderBottom: '1px solid rgba(0,0,0,.1)'}} */}
                        <div className="container-fluid m-0 p-0">
                            <Link onClick={scrollToTop} to='/'><img src="./Data/logo/logo1.png" alt="" className=' logo_img' /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <Link onClick={scrollToTop} to='/' className='text-decoration-none'><li className='ps-3  nav-item nav_title hover_color d-flex justify-content-start' style={{ color: '#c0aa83' }}>Home</li></Link>
                                    <li className='nav-item hover_color' onMouseOver={() => setChk1(true)} onMouseLeave={() => setChk1(false)}>
                                        <a href="#click" className="menu text-decoration-none">
                                            <Link onClick={scrollToTop} to='/aboutus' className='text-decoration-none'> <span className="ps-3 p-lg-0 my-2 my-lg-0 nav_title1 d-flex justify-content-start">About Us <span className='d-none d-lg-block'>{chk1 ? (<FontAwesomeIcon icon="fa-solid fa-angle-down" style={{ transition: 'all .3s ease' }} className='ms-1 fs-6' />) : <FontAwesomeIcon icon="fa-solid fa-angle-right" className='ms-1 fs-6' style={{ transition: 'all .3s ease' }} />}</span></span></Link>
                                            <ul className="menu-dropdown dropdown_style d-none d-lg-block" style={{ zIndex: '9' }}>
                                                <Link onClick={scrollToTop} to='/aboutus' className='text-decoration-none'> <li className='p-3 aboutlink drop_text m-0 hover_color' style={{ zIndex: '99 !important' }}>About Us</li></Link>
                                                <Link onClick={scrollToTop} to='/onlineorder' className='text-decoration-none'> <li className='p-3 aboutlink drop_text m-0 hover_color'>Delivery</li></Link>
                                                <Link onClick={scrollToTop} to='/search' className='text-decoration-none'><li className='p-3 drop_text m-0 hover_color aboutlink'>Special offers</li></Link>
                                                <Link onClick={scrollToTop} to='/faq' className='text-decoration-none'><li className='p-3 aboutlink drop_text m-0 hover_color'>FAQ</li></Link>
                                            </ul>
                                        </a>
                                    </li>

                                    <li className='nav-item' onMouseOver={() => setChk2(true)} onMouseLeave={() => setChk2(false)}>
                                        <a href="#click" className="menu text-decoration-none">
                                            <Link onClick={scrollToTop} to='/products' className='text-decoration-none'><span className="ps-3 p-lg-0 my-2 my-lg-0 text-center nav_title1 d-flex justify-content-start"> Products <span className='d-none d-lg-block'>{chk2 ? (<FontAwesomeIcon icon="fa-solid fa-angle-down" style={{ transition: 'all .3s ease' }} className='ms-1 fs-6' />) : <FontAwesomeIcon icon="fa-solid fa-angle-right" className='ms-1 fs-6' style={{ transition: 'all .3s ease' }} />}</span></span></Link>
                                            <ul className="menu-dropdown dropdown_style d-none d-lg-block" style={{ zIndex: '9' }}>
                                                <Link onClick={scrollToTop} to='/products' className='text-decoration-none'> <li className='p-3 aboutlink drop_text m-0 hover_color'>Shop</li></Link>
                                                <Link onClick={scrollToTop} to='/cart' className='text-decoration-none'> <li className='p-3 drop_text m-0 hover_color aboutlink'>Cart</li></Link>
                                                <Link onClick={scrollToTop} to='/onlineorder' className='text-decoration-none'><li className='p-3 drop_text m-0 hover_color aboutlink'>Checkout</li></Link>
                                                <Link onClick={scrollToTop} to='/login' className='text-decoration-none'><li className='p-3 drop_text aboutlink m-0 hover_color'>My Account</li></Link>
                                            </ul>
                                        </a>
                                    </li>
                                    <li className='nav-item' onMouseOver={() => setChk3(true)} onMouseLeave={() => setChk3(false)}>
                                        <Link onClick={handletogohome} to='/' className="menu text-decoration-none">
                                            <span className="ps-3 p-lg-0 my-2 my-lg-0 text-center nav_title1 d-flex justify-content-start">Cafe Menu <span className='d-none d-lg-block'>{chk3 ? (<FontAwesomeIcon icon="fa-solid fa-angle-down" style={{ transition: 'all .3s ease' }} className='ms-1 fs-6' />) : <FontAwesomeIcon icon="fa-solid fa-angle-right" className='ms-1 fs-6' style={{ transition: 'all .3s ease' }} />}</span></span>
                                            <ul className="menu-dropdown dropdown_style d-none d-lg-block" style={{ zIndex: '9' }}>
                                                <li onClick={handletogohome} className='p-3 drop_text m-0 hover_color menu_color_hover'>Food For Mood</li>
                                                <li onClick={handletogohome} className='p-3 drop_text m-0 hover_color menu_color_hover'>Hot Classics</li>
                                                <li onClick={handletogohome} className='p-3 drop_text m-0 hover_color menu_color_hover'>All Time Chillers</li>
                                                <li onClick={handletogohome} className='p-3 drop_text m-0 hover_color menu_color_hover'>Cafe Specials</li>
                                            </ul>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link onClick={scrollToTop} to="/onlineorder" className="menu text-decoration-none">
                                            <span className="ps-3 p-lg-0 my-2 my-lg-0 text-center nav_title1 d-flex justify-content-start">Order Online</span>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link onClick={scrollToTop} to='/login' className='text-decoration-none'><span className="ps-3 p-lg-0 my-2 my-lg-0 text-center nav_title1 d-flex justify-content-start  d-block d-lg-none"> User </span></Link>
                                    </li>
                                </ul>
                                <div className='text-center mx-auto cart_postin d-none d-lg-block'>
                                    <div className='d-inline-flex cart_count_numb'>{cartCount}</div>
                                    <Link onClick={scrollToTop} to='/cart' style={{ textDecoration: 'none', color: 'black' }}><div className='d-inline-flex pt-1'><FontAwesomeIcon className='hover_color cart_count me-3' title='Show Your Shopping Cart' icon="fa-solid fa-cart-shopping" style={{ fontSize: '17px', cursor: 'pointer' }} /> </div></Link>
                                    <Link onClick={scrollToTop} to='/search' className='text-decoration-none text-black'><div className='d-inline-flex pt-1'><FontAwesomeIcon className='hover_color ms-3' title='Search' icon="fa-solid fa-magnifying-glass" style={{ fontSize: '17px', cursor: 'pointer' }} /> </div></Link>
                                </div>
                                <div className='text-center mx-auto d-none d-lg-block'>
                                    <Link onClick={scrollToTop} to='/login' style={{ textDecoration: 'none', color: 'black' }}><div className="px-3 py-2"><FontAwesomeIcon className='hover_color' title='User' icon="fa-solid fa-user" style={{ fontSize: '17px', cursor: 'pointer' }} /></div></Link>
                                </div>
                            </div>
                        </div>
                        {/* for moblie section */}
                        <div className='text-center cart_postin d-block d-lg-none post_abul'>
                            <div className='d-inline-flex cart_count_numb'>{cartCount}</div>
                            <Link onClick={scrollToTop} to='/cart' style={{ textDecoration: 'none', color: 'black' }}><div className='d-inline-flex pt-1'><FontAwesomeIcon className='hover_color cart_count me-1' title='Show Your Shopping Cart' icon="fa-solid fa-cart-shopping" style={{ fontSize: '19px', cursor: 'pointer' }} /> </div></Link>
                            <Link onClick={scrollToTop} to='/search' className='text-decoration-none text-black'><div className='d-inline-flex pt-1'><FontAwesomeIcon className='hover_color ms-3' title='Search' icon="fa-solid fa-magnifying-glass" style={{ fontSize: '19px', cursor: 'pointer' }} /> </div></Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default HomeNavbar