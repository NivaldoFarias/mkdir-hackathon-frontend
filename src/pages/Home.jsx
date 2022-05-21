import { useContext } from 'react';
import TokenContext from '../hooks/TokenContext.js';

import { FaEdit, FaUserAlt } from 'react-icons/fa';
import { ImUser } from 'react-icons/im';

import logo from './../assets/logo-alt.png';
import Directories from './../components/Directories';
import Terminal from './../components/Terminal';

function Home() {
  const { token, setToken } = useContext(TokenContext);

  function buildHomePage() {
    return (
      <>
        <header className='header-container'>
          <figure className='logo'>
            <img className='logo__image' src={logo} alt='hackathon logo' />
            <figcaption className='logo__text'>
              <span>mkdir</span>&nbsp;hackathon
            </figcaption>
          </figure>
          <div className='nav'>
            <FaEdit className='edit-icon'></FaEdit>
            <FaUserAlt className='user-icon'></FaUserAlt>
          </div>
        </header>
        <Directories></Directories>
        <Terminal></Terminal>
      </>
    );
  }

  const homePage = buildHomePage();

  return (
    <>
      <main id='home-page'>{homePage}</main>
    </>
  );
}

export default Home;
