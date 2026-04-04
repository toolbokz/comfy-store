const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text font-sans text-xs font-medium uppercase tracking-wider text-base-content/60'>
          {label}
        </span>
      </label>
      <select
        name={name}
        id={name}
        className={`premium-select ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
