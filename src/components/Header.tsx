import React from 'react';
import './Header.scss';

const Header: React.FC = () => (
  <header className="header">
    <h1>Sudhavamsikiran Damojipurapu</h1>
    <h2>|Enterprise Architect|Gen AI|Azure and AWS|Solution Architecture|TOGAF|Cybersecurity|PSPO®|CSM®|</h2>
    <nav>
      <text>Connect with Me</text>
      <a href="https://www.linkedin.com/in/dsudhavamsikiran/"><img src="https://i.sstatic.net/gVE0j.png"/> LinkedIn</a>|{''}
      <a href="https://github.com/sudhavamsikiran"><img src="https://i.sstatic.net/tskMh.png"/> GitHub</a>|{''}
      <a href="https://medium.com/@sdamojipurapu">Medium</a>|{''}
   </nav>
  </header>
);

export default Header;