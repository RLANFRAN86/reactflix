import '../styles/Header.css';
import logo from '../images/captura.png'
import HomeButton from './buttons/HomeButton';
import ReturnButton from './buttons/ReturnButton';

const HeaderWithBtns = () => {
    return (
        <header className='headerBtn'>
            <img className='logo' src={logo} />
            <img className='palomitas' src='https://cdn-icons-png.flaticon.com/512/3507/3507102.png' />
            <div className='btnHeader'></div>
                <HomeButton />
                <ReturnButton />
        </header>)
}

export default HeaderWithBtns;