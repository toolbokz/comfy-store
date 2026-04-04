import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className='bg-base-200/50 border border-base-300/50 p-6 sm:p-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end'>
      <FormInput
        type='search'
        label='Search'
        name='search'
        size='input-sm'
        defaultValue={search}
      />
      <FormSelect
        label='Category'
        name='category'
        list={meta.categories}
        size='select-sm'
        defaultValue={category}
      />
      <FormSelect
        label='Company'
        name='company'
        list={meta.companies}
        size='select-sm'
        defaultValue={company}
      />
      <FormSelect
        label='Sort By'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
        defaultValue={order}
      />
      <FormRange
        name='price'
        label='Price Range'
        size='range-sm'
        price={price}
      />
      <FormCheckbox
        name='shipping'
        label='Free Shipping'
        size='checkbox-sm'
        defaultValue={shipping}
      />
      <button type='submit' className='premium-btn-primary btn-sm'>
        Apply Filters
      </button>
      <Link to='/products' className='premium-btn-outline btn-sm inline-flex items-center'>
        Reset
      </Link>
    </Form>
  );
};
export default Filters;
