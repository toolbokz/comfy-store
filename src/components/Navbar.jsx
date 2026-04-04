import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className='bg-base-100 border-b border-base-300/50 sticky top-0 z-50 backdrop-blur-sm bg-base-100/95'>
      <div className='align-element'>
        <div className='navbar px-0 min-h-[4rem]'>
          <div className='navbar-start'>
            {/* DROPDOWN */}
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden pl-0'>
                <FaBarsStaggered className='h-5 w-5' />
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100 border border-base-300/50 w-56'
              >
                <NavLinks />
              </ul>
            </div>
            {/* TITLE */}
            <NavLink
              to='/'
              className='font-serif text-2xl tracking-wider hover:opacity-70 transition-opacity'
            >
              COMFY
            </NavLink>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal gap-1'>
              <NavLinks />
            </ul>
          </div>
          <div className='navbar-end gap-2'>
            {/* THEME TOGGLE */}
            <label className='swap swap-rotate btn btn-ghost btn-sm btn-circle'>
              <input type='checkbox' onChange={handleTheme} />
              <BsSunFill className='swap-on h-4 w-4' />
              <BsMoonFill className='swap-off h-4 w-4' />
            </label>
            {/* CART */}
            <NavLink to='/cart' className='btn btn-ghost btn-circle btn-sm'>
              <div className='indicator'>
                <BsCart3 className='h-5 w-5' />
                <span className='badge badge-sm badge-secondary indicator-item text-[10px]'>
                  {numItemsInCart}
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
