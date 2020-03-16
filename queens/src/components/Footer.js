import React from 'react'


function Footer() {
    return (
       <div className="site-footer">
            <div className="container">
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <div className="mb-4">
                            <a href="https://twitter.com/Thejspencer" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                            <a href="https://www.instagram.com/jaspencer08/" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                            <a href="https://www.linkedin.com/in/jessica-spencer-43187148/" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                            
                            <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Design made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Footer;