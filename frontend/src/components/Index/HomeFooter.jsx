import React from 'react'
import '../CSS/HomeFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function HomeFooter() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })}
    return (
        <>
            <div className="container-fluid footer_background">
                <footer className="footer-section">
                    <div className="container">
                        <div className="footer-cta pt-5 pb-3 pb-sm-4 pb-md-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta mb-2 mb-sm-1 mb-md-0 d-flex">
                                        <FontAwesomeIcon className='footer_icons ' icon="fas fa-map-marker-alt" />
                                        <div className="cta-text">
                                            <h4>Find us</h4>
                                            <span>Sector-10, Kumbha Marg near HDFC bank Pratap Nagar Jaipur, Rajasthan 302033</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta mb-2 mb-sm-1 mb-md-0">
                                        <FontAwesomeIcon className='footer_icons' icon="fas fa-phone" />
                                        <div className="cta-text">
                                            <h4>Call us</h4>
                                            <span>+91 9928XXXXX</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta mb-2 mb-sm-1 mb-md-0 d-flex">
                                        <FontAwesomeIcon className='footer_icons' icon="far fa-envelope-open" />
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>CoffeeDose@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <Link to='/' className='text-decoration-none'><div className="logo logofont ms-3 z-3"> <span>Coffee</span> Dose</div></Link>
                                        </div>
                                        <div className="footer-text">
                                            <p>Coffee Dose, with their inviting ambiance and aromatic coffee, serve as social hubs. They offer a cozy escape, fostering conversations and creativity over delightful beverages and delectable treats.</p>
                                        </div>
                                        <div className="footer-social-icon mb-2">
                                            <span>Follow us</span>
                                            <a href="https://www.facebook.com/"><FontAwesomeIcon className='footer_icons fb_bg' icon="fab fa-facebook-f facebook-bg" /></a>
                                            <a href="https://twitter.com/"><FontAwesomeIcon className='footer_icons tw_bg' icon="fa-brands fa-x-twitter" /></a>
                                            <a href="https://plus.google.com/"><FontAwesomeIcon className='footer_icons goog_bg' icon="fab fa-google-plus-g google-bg" /></a>
                                            <a href="https://www.instagram.com/"><FontAwesomeIcon className='footer_icons insta' icon="fa-brands fa-instagram" /></a>
                                            <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon className='footer_icons linkdin' icon="fa-brands fa-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul className='footer_unorder_list'>
                                            <Link to='/' onClick={scrollToTop}><li><a href="#">Home</a></li></Link>
                                            <Link to='/aboutus' onClick={scrollToTop}><li><a href="#">About Us</a></li></Link>
                                            <Link to='/products'onClick={scrollToTop}><li><a href="#">Products</a></li></Link>
                                            <Link to='/search' onClick={scrollToTop}><li><a href="#">Search</a></li></Link>
                                            <Link to='/onlineorder' onClick={scrollToTop}><li><a href="#">CheckOut</a></li></Link>
                                            <Link to='/cart' onClick={scrollToTop}><li><a href="#">Cart</a></li></Link>
                                            <Link to='/search' onClick={scrollToTop}><li><a href="#">Special Offers</a></li></Link>
                                            <Link to='/onlineorder' onClick={scrollToTop}><li><a href="#">Delivery</a></li></Link>
                                            <Link to='/login' onClick={scrollToTop}><li><a href="#">My Account</a></li></Link>
                                            <Link to='/faq' onClick={scrollToTop}><li><a href="#">FAQ's</a></li></Link>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    {/* <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Subscribe</h3>
                                        </div>
                                        <div className="footer-text mb-25">
                                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        </div>
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email Address" class="form-control"/>
                                                <button><FontAwesomeIcon className='footer_icons' icon="fab fa-telegram-plane" /></button>
                                            </form>
                                        </div>
                                    </div> */}
                                    <Link to='/products'><img src="https://img.freepik.com/free-photo/coffee-shop-table-with-wood-chair-coffee-cup-saucer-generated-by-artificial-intelligence_188544-84849.jpg?t=st=1710750124~exp=1710753724~hmac=4bf508f3bc40e0d3ca352abedf77cba08909b0cc6af015d4f0270d30d3968e87&w=1060" alt="" style={{height:'250px', width:'250px',borderRadius:'10px',opacity:'0.8',cursor:'pointer'}} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                                    <div className="copyright-text">
                                        <p>Copyright &copy; 2024, All Right Reserved <a href="#!" className='text-decoration-none'>Coffee Dose</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default HomeFooter