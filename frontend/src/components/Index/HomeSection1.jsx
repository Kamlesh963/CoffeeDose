import React from 'react'

function HomeSection1() {
    return (
        <>
            <div className="container-fluid p-0" style={{ overflow: 'hidden' }}>
                <div className="row p-0">
                    <div className="col-12 d-none d-md-block" style={{ cursor: 'pointer' }}>
                        <img src="../Data/Images/coffee_homepage.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="col-12 d-md-none" style={{ cursor: 'pointer' }}>
                        <img src="../Data/Images/coffee_homepage_mobile.jpg" alt="" className='img-fluid' style={{ maxHeight: '' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection1