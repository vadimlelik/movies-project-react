import React from 'react';

const Footer = ()=>{
    const data =  new Date()
    const dataYear = data.getFullYear() 
    
    return(
        <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
          © {dataYear} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )

}

export default Footer