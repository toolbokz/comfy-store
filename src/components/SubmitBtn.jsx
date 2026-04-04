import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='premium-btn-primary btn-block'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner loading-sm'></span>
          Processing...
        </>
      ) : (
        text || 'Submit'
      )}
    </button>
  );
};
export default SubmitBtn;
