import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className='align-element py-20 text-center'>
      <h4 className='heading-md text-base-content/40'>Something went wrong</h4>
      <p className='body-lg mt-4'>Please try refreshing the page</p>
    </div>
  );
};
export default ErrorElement;
