import { formatPrice } from '../utils';
import { useState } from 'react';

const FormRange = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text font-sans text-xs font-medium uppercase tracking-wider text-base-content/60'>
          {label}
        </span>
        <span className='text-sm font-medium'>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type='range'
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-secondary ${size}`}
        step={step}
      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='text-base-content/40'>$0</span>
        <span className='text-base-content/40'>Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};
export default FormRange;
