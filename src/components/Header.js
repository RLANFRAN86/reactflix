import '../styles/Header.css';
import logo from '../images/captura.png'


const Header = () => {
  return (
    <header className='headerHome'>
      <img className='logo' src={logo} width="50px" />
      <img className='palomitas' src='https://cdn-icons-png.flaticon.com/512/3507/3507102.png' />
    </header>)
}

export default Header;

