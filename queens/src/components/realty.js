import React from 'react';
// import Carousel from 'nuka-carousel';

function Realty() {
    return (
    <div className="site-section" id="studio-section">
       <div className="container">
            <div class="row mb-5 ">
                <div class="col-md-7 section-title text-center mx-auto">
                    <h2>Licensed Realtor at Keller Williams Realty, Inc.</h2>
                         <span className="sub-title mb-2 d-block">Greator Los Angeles area</span>
                    <h2 className="title text-primary mb-3">Some of the homes I've sold</h2>
                </div>
            </div>
            <div id="posts" class="row no-gutter">
                <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <a href="images/house_1.jpg" className="item-wrap" data-fancybox="gal">
                        <span className="icon-search2"></span>
                        <img className="img-fluid" src="images/house_1.jpg" alt="house 1"/>
                    </a>
                </div>
                <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <a href="images/house_2.jpg" className="item-wrap" data-fancybox="gal">
                        <span className="icon-search2"></span>
                        <img className="img-fluid" src="images/house_2.jpg" alt="house 2"/>
                    </a>
                </div>
                <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <a href="images/house_3.jpg" className="item-wrap" data-fancybox="gal">
                        <span className="icon-search2"></span>
                        <img className="img-fluid" src="images/house_3.jpg" alt="house 3"/>
                    </a>
                </div>
                <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <a href="images/house_4.jpg" className="item-wrap" data-fancybox="gal">
                        <span className="icon-search2"></span>
                        <img className="img-fluid" src="images/house_4.jpg" alt="house 4"/>
                    </a>
                </div>
                <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <a href="images/house_5.jpg" className="item-wrap" data-fancybox="gal">
                        <span className="icon-search2"></span>
                        <img className="img-fluid" src="images/house_5.jpg" alt="house 5"/>
                    </a>
                </div>
                <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <a href="images/house_6.jpg" className="item-wrap" data-fancybox="gal">
                        <span className="icon-search2"></span>
                        <img className="img-fluid" src="images/house_6.jpg" alt="house 6"/>
                    </a>
                </div>
            
        {/* <div className="for-sale">
          <h2>Current Listings:</h2>
           list will be created in the BE   
        </div>  */}
            </div>
        </div> 
    </div>
    )
}

export default Realty;