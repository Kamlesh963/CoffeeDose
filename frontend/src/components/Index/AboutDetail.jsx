import React from 'react'
import '../CSS/AboutDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AboutDetail() {
    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex align-items-center text-center mb-2 mb-md-3">
                    <div className="col-12">
                        <h1 className='title_about my-2 mb-md-4'>About Us</h1>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                        <img src="https://img.freepik.com/free-photo/young-woman-eating-croissants-cafe_1303-20408.jpg?size=626&ext=jpg&ga=GA1.1.966068405.1706683627&semt=ais" alt="" className='img-fluid' />
                    </div>
                    <div className="col-12 col-md-6  align-items-center">
                        <h2 className='align-items-center'>The Coffee Dose</h2>
                        <p>🌟 <b>Welcome to Coffee Dose! </b>Indulge in a sensory journey at our cozy haven. Immerse yourself in a blend of aromatic coffees, delectable treats, and a warm ambiance. Savor moments, share laughter, and make memories — because here, every cup tells a story. Cheers to unforgettable experiences! ☕🍰 #CafeLife</p>
                        <button className='about_read my-2 rounded-pill'>Read More</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center mb-3">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="icon1"><img src="../Data/Images/cold_coffee.jpg" alt="" className='img-fluid' style={{ height: '200px', width: '200px' }} /></div>
                        <div className="iocn_title my-2">Cold Coffee</div>
                        <div className="icon_content">Cold coffee, a refreshing beverage, combines coffee with cold milk or ice, offering a chilled, energizing alternative to traditional hot coffee.</div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="icon1"><img src="../Data/Images/hot_coffee.jpg" alt="" className='img-fluid' style={{ height: '200px', width: '200px' }} /></div>
                        <div className="iocn_title my-2">Hot Drinks</div>
                        <div className="icon_content"> Hot coffee is a comforting beverage enjoyed globally, offering warmth, rich flavor, and a delightful pick-me-up for diverse cultures and lifestyles. </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="icon1"><img src="../Data/Images/snacks.jpg" alt="" className='img-fluid' style={{ height: '200px', width: '200px' }} /></div>
                        <div className="iocn_title my-2">Snacks</div>
                        <div className="icon_content"> Snacks are delightful, convenient treats, satisfying cravings with a variety of flavors, textures, and portable options for on-the-go enjoyment. </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="icon1"><img src="../Data/Images/dessert.jpg" alt="" className='img-fluid' style={{ height: '200px', width: '200px' }} /></div>
                        <div className="iocn_title my-2">Dessert</div>
                        <div className="icon_content">Dessert is a delightful culinary finale, offering sweet satisfaction and indulgence, often featuring cakes, pastries, or frozen treats. </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutDetail