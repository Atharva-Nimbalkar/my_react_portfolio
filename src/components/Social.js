import React from 'react';
import { FaTwitter,FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';

function Social() {
  return (
    <>
    <footer>
    <div className="social">
      <h3>Social Follow</h3>
      <a href={"https://www.linkedin.com/in/atharvanimbalkar/"} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon insta"/>
        </a>
      <a href={"https://twitter.com/atharva2753"} target="_blank" rel="noopener noreferrer" className='icon x'>
          <FaTwitter />
        </a>
        <a href={"https://www.instagram.com/atharva_nimbalkar2753/"} target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon insta"/>
        </a>
        <a href={"https://github.com/Atharva-Nimbalkar"} target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon insta"/>
        </a>
    </div>
    <div className="footext">
      <li>Crafted with Soul and Care by Atharva</li>
    </div>
    </footer>
    </>
  );
};

export default Social;