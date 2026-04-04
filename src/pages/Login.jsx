import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action =
  (store) =>
    async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);

      try {
        const response = await customFetch.post('/auth/local', data);
        store.dispatch(loginUser(response.data));
        toast.success('Logged in successfully');
        return redirect('/');
      } catch (error) {
        const errorMessage =
          error?.response?.data?.error?.message ||
          'Please double check your credentials';
        toast.error(errorMessage);
        return null;
      }
    };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('Welcome, guest');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Guest login error. Please try again.');
    }
  };

  return (
    <section className='min-h-screen grid place-items-center bg-base-200/30 px-4'>
      <Form
        method='post'
        className='w-full max-w-md bg-base-100 border border-base-300/50 p-10'
      >
        <div className='text-center mb-8'>
          <Link to='/' className='font-serif text-2xl tracking-wider'>
            COMFY
          </Link>
          <h4 className='font-serif text-xl mt-6'>Welcome Back</h4>
          <p className='body-sm mt-2'>Sign in to your account</p>
        </div>
        <div className='flex flex-col gap-y-4'>
          <FormInput type='email' label='Email' name='identifier' />
          <FormInput type='password' label='Password' name='password' />
        </div>
        <div className='mt-8 flex flex-col gap-y-3'>
          <SubmitBtn text='Sign In' />
          <button
            type='button'
            className='premium-btn-outline btn-block'
            onClick={loginAsGuestUser}
          >
            Continue as Guest
          </button>
        </div>
        <p className='text-center mt-8 text-sm text-base-content/60'>
          Don&apos;t have an account?{' '}
          <Link
            to='/register'
            className='text-secondary hover:text-base-content transition-colors font-medium'
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
