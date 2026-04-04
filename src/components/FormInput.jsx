const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text font-sans text-xs font-medium uppercase tracking-wider text-base-content/60'>
          {label}
        </span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`premium-input ${size}`}
      />
    </div>
  );
};
export default FormInput;
