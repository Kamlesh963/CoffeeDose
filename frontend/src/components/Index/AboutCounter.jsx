import React from 'react'
import '../CSS/AboutCounter.css'

function AboutCounter() {
    let counter1 = 0;
    setInterval(function () {
        if (counter1 <= 150) {
            if (document.getElementById('count1')) {
                document.getElementById('count1').innerHTML = counter1 + "+";
                counter1++;
            }
        }
        else {
            if (document.getElementById('count1'))
                document.getElementById('count1').innerHTML = "150+";
        }
    }, 50)


    let counter2 = 0;
    setInterval(function () {
        if (counter2 <= 210) {
            if (document.getElementById('count2')) {
                document.getElementById('count2').innerHTML = counter2 + "+";
                counter2++;
            }
        }
        else {
            if (document.getElementById('count2'))
                document.getElementById('count2').innerHTML = "210+";
        }
    }, 40)
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: 'black' }}>
                <div className="row">
                    <div className="col-12 col-sm-7 p-2">
                        <img src="https://img.freepik.com/premium-photo/interior-bar-design_863013-75949.jpg?size=626&ext=jpg&uid=R123337181&ga=GA1.1.966068405.1706683627&semt=sph" alt="" className='counter_img' />
                    </div>
                    <div className="col-12 col-sm-5 my-auto">
                        <h1 className='counter_main '>Enhancing Your Feelings</h1>
                        <div className='text-white mx-auto' style={{ width: '78%' }}>From signature delights such as beef tartare and the best mashed potato in Paris, all the way to unique specialities such as thinly sliced Brittany artichokes with truffles.</div>
                        <div className="row text-center mb-2 mb-sm-0">
                            <div className="col-6">
                                <div class="count_number" id="count1"></div>
                                <span className='title_count'>Clients Every Day</span>
                            </div>
                            <div className="col-6">
                                <div class="count_number" id="count2"></div>
                                <span className='title_count '>Great Moments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCounter