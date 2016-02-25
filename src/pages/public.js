import React from 'react';
import NavHelper from '../components/nav-helper';

class PublicPage extends React.Component {
  render() {
    return (
      <NavHelper className='container'>
        <header role='banner'>
          <h1>Labelr</h1>
        </header>
        <div>
          <p>We label stuff for you, because, we can&trade;</p>
          <a href='/repos' className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
          </a>
        </div>
      </NavHelper>
    );
  }
}

export default PublicPage;
