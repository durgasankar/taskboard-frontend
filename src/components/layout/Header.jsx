import { useNavigate } from 'react-router-dom';
import '../../assets/css/header.css';
import useToast from '../../hooks/useToast';

const Header = () => {
    const navigate = useNavigate();
    const { successToast } = useToast();
    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    console.log(userInfo)

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userinfo');
        successToast('Logout successfully.')
        navigate('/signin', { replace: true });
    }

    return (
        <header className="header">
            <h1>📚 {userInfo.firstName}'s Dashboard</h1>
            <input
                type="text"
                placeholder="Search Task..."
            />
            <button className="logout-btn" onClick={ handleLogout }>
                Logout
            </button>
        </header>
    );
};

export default Header;
