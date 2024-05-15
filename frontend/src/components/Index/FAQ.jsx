import React from 'react'
import '../CSS/AboutDetail.css'
import HomeNavbar from './HomeNavbar'
import HomeFooter from './HomeFooter'

function FAQ() {

    return (
        <>
            <HomeNavbar />
            <div className="container-fluid">
                <div className="row d-flex align-items-center text-center mb-2 mb-md-3">
                    {/* <div className="col-12">
                        <h1 className='title_about my-2 mb-md-4'>FAQ's</h1>
                    </div> */}
                    <div className="col-12 p-2">
                        <img src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?size=626&ext=jpg&uid=R123337181&ga=GA1.1.966068405.1706683627&semt=sph" alt="" className='' style={{ height: '350px' }} />
                    </div>
                </div>
            </div>
            <div className="container mb-3">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item mb-2 mb-md-3">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed title_accordian" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                01 . Are Gratuities Included in the Price?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body context_accordian">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2 mb-md-3">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed title_accordian" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                02 . Where Can I Find the Menu?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"context_accordian>Vim eu gubergren euripidis. Ei mei ullum iusto, suas posidonium at eum. Qui et exerci pertinacia, vix id modo persius corrumpit, duo at melius definitiones. Ex nostrud petentium repudiandae sit, quo nusquam complectitur no.</div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2 mb-md-3">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed title_accordian" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                03 . Where Do You Get the Products?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"context_accordian>Sed illud verear appareat id. Pro id vocent recteque intellegat, pri verear principes incorrupte cu, tollit graeco indoctum nam at. Mazim admodum sed te, phaedrum euripidis eu mel. An causae regione per, malis perfecto duo at.</div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2 mb-md-3">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed title_accordian" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                04 . How Can I Reserve a Table?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"context_accordian>Mucius scribentur sit cu, ei eos natum meliore democritum, te modo possit probatus pro. Ei quo assum graeci, nec tollit deleniti lucilius ex. Veniam essent iudicabit cu nam. Ubique apeirian ea sea.</div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2 mb-md-3">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed title_accordian" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                05 . Can I switch to a different plan?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"context_accordian>Mucius scribentur sit cu, ei eos natum meliore democritum, te modo possit probatus pro. Ei quo assum graeci, nec tollit deleniti lucilius ex. Veniam essent iudicabit cu nam. Ubique apeirian ea sea.</div>
                        </div>
                    </div>
                    <div className="accordion-item mb-2 mb-md-3">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <button className="accordion-button collapsed title_accordian" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                06 . What is the special menu offer?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"context_accordian>Vim eu gubergren euripidis. Ei mei ullum iusto, suas posidonium at eum. Qui et exerci pertinacia, vix id modo persius corrumpit, duo at melius definitiones. Ex nostrud petentium repudiandae sit, quo nusquam complectitur no.</div>
                        </div>
                    </div>
                </div>
            </div>



            <HomeFooter />
        </>
    )
}

export default FAQ