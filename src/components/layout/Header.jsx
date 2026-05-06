import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import '../../assets/css/header.css';
import useToast from '../../hooks/useToast';
import { useDebounce } from '../../hooks/useDebounce';
import { setSearchQuery } from '../../reducers/taskSlices';
import { selectFilteredTasks } from '../../reducers/taskSelector';

const Header = () => {
    const navigate = useNavigate();
    const filteredTasks = useSelector(selectFilteredTasks);
    const dispatch = useDispatch()
    const { successToast } = useToast();

    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    const totalMatches = filteredTasks.length;

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userinfo');
        successToast('Logout successfully.')
        navigate('/signin', { replace: true });
    }

    const debouncedSearch = useDebounce(value =>
        dispatch(setSearchQuery(value))
    );

    return (
        <header className="header">
            <h1>✅{`${userInfo.firstName}'s TaskHub [${totalMatches}]`}</h1>
            <input
                type="text"
                placeholder="Search Task..."
                onChange={ event => debouncedSearch(event.target.value) }
            />
            <button className="logout-btn" onClick={ handleLogout }>
                Logout
            </button>
        </header>
    );
};

export default Header;
