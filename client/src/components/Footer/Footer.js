import React from "react";
import '../Footer/footer.css'


function Footer() {
    return (
        <div className="footer" >
            <footer id="footer">
               
                <div className="icons-div"> 
                    <a href="https://www.instagram.com/aldov__/" target="_blank" rel="noreferrer"><i className="icons fa-brands fa-instagram fa-xl"></i></a>
                    <a href="https://www.facebook.com/aldo.huertavalencia" target="_blank" rel="noreferrer"><i className="icons fa-brands fa-facebook fa-xl"></i></a>
                    <a href="https://github.com/Av720" target="_blank" rel="noreferrer"><i className="icons fa-brands fa-github fa-xl"></i></a>
                    <a href="https://www.linkedin.com/in/aldo-valencia-95b250237/" target="_blank" rel="noreferrer"><i className="icons fa-brands fa-linkedin fa-xl"></i></a>
                </div>
            </footer>

        </div>
    )
}

export default Footer;