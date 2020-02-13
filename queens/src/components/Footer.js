import React from 'react'
// import Nav from '../components/Nav'
// import instagram from '../assets/instagram.png'
// import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
       <div className="site-footer">
            <div class="container">
            <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                <div className="mb-4">
                  
                  <a href="https://twitter.com/Thejspencer" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                  <a href="https://www.instagram.com/jaspencer08/" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                  <a href="https://www.linkedin.com/in/jessica-spencer-43187148/" class="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                </div>
                {/* <a href="https://www.instagram.com/ascendedqueens/">
                        <img 
                            className="icon-instagram" 
                            alt="insta-icon"
                            src={instagram}
                            width="30"
                            height="30"
                        />
                </a> */}

                {/* <a href="https://www.linkedin.com/in/jessica-spencer-43187148/">
                    <img 
                        className="icon-linkedin"
                        alt="linkedin"
                        src={linkedin}
                        width="30"
                        height="30"
                    />
                </a> */}
                <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                 Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
                </div>
            </div>

            </div>
        </div>

        
    )
}

export default Footer;