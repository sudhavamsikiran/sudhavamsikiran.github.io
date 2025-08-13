import React from 'react';
import './Header.scss';

const Header: React.FC = () => (
  <header className="header">
    <h1>Sudhavamsikiran Damojipurapu</h1>
    <h2>Enterprise Architect|Gen AI Deep Learning | Azure and AWS Cloud-Native Architecture| Solution designing|Solution Architecture | TOGAF Practitioner|Cybersecurity|PSPO®|CSM®</h2>
    <nav>
      <text>Connect with Me</text>
      <a href="https://www.linkedin.com/in/dsudhavamsikiran/">LinkedIn</a> |{' '}
      <a href="https://github.com/sudhavamsikiran">GitHub</a> |{''}
      <a href="https://medium.com/@sdamojipurapu">Medium</a> |{''}
    </nav>
  </header>
);

export default Header;