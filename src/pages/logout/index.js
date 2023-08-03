import { logout } from '../../redux/slices/authSlice';
import withAuth from "../../hoc/withAuth";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Logout = () => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        if (!isLoggedIn)
        router.push('/login')
    }, [isLoggedIn])

    return "Hello";
}

export default withAuth(Logout)