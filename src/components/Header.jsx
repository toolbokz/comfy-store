import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };

  return (
    <header className='bg-neutral py-2'>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <div className='flex gap-x-6 items-center'>
            <p className='text-neutral-content/70 text-xs font-sans tracking-wide'>
              Hello, {user.username}
            </p>
            <button
              className='text-neutral-content/70 hover:text-neutral-content text-xs font-sans tracking-wide uppercase transition-colors'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 items-center'>
            <Link
              to='/login'
              className='text-neutral-content/70 hover:text-neutral-content text-xs font-sans tracking-wide transition-colors'
            >
              Sign In / Guest
            </Link>
            <Link
              to='/register'
              className='text-neutral-content/70 hover:text-neutral-content text-xs font-sans tracking-wide transition-colors'
            >
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
