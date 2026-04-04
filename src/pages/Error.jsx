import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className='min-h-screen grid place-items-center px-8 bg-base-100'>
        <div className='text-center'>
          <p className='font-serif text-8xl sm:text-9xl text-base-content/10'>
            404
          </p>
          <h1 className='heading-md mt-6'>Page Not Found</h1>
          <p className='body-lg mt-4 max-w-md mx-auto'>
            The page you are looking for does not exist or has been moved.
          </p>
          <div className='mt-10'>
            <Link to='/' className='premium-btn-primary px-10 py-3'>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen grid place-items-center px-8 bg-base-100'>
      <div className='text-center'>
        <h1 className='heading-md'>Something went wrong</h1>
        <p className='body-lg mt-4'>Please try again later</p>
        <div className='mt-10'>
          <Link to='/' className='premium-btn-primary px-10 py-3'>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Error;
