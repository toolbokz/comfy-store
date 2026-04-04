const Loading = () => {
  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
      <div className='text-center'>
        <span className='loading loading-ring loading-lg text-secondary'></span>
        <p className='body-sm mt-4'>Loading</p>
      </div>
    </div>
  );
};
export default Loading;
