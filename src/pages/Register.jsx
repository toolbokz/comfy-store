import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('Account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'Please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className='min-h-screen grid place-items-center bg-base-200/30 px-4'>
      <Form
        method='POST'
        className='w-full max-w-md bg-base-100 border border-base-300/50 p-10'
      >
        <div className='text-center mb-8'>
          <Link to='/' className='font-serif text-2xl tracking-wider'>
            COMFY
          </Link>
          <h4 className='font-serif text-xl mt-6'>Create Account</h4>
          <p className='body-sm mt-2'>Join the Comfy community</p>
        </div>
        <div className='flex flex-col gap-y-4'>
          <FormInput type='text' label='Username' name='username' />
          <FormInput type='email' label='Email' name='email' />
          <FormInput type='password' label='Password' name='password' />
        </div>
        <div className='mt-8'>
          <SubmitBtn text='Create Account' />
        </div>
        <p className='text-center mt-8 text-sm text-base-content/60'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='text-secondary hover:text-base-content transition-colors font-medium'
          >
            Sign In
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
