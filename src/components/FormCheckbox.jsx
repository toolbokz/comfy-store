const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className='form-control items-center'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text font-sans text-xs font-medium uppercase tracking-wider text-base-content/60'>
          {label}
        </span>
      </label>
      <input
        type='checkbox'
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-secondary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
