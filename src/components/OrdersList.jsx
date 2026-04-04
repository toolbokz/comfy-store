import { useLoaderData } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className='mt-8'>
      <p className='body-sm mb-6'>
        Total orders: {meta.pagination.total}
      </p>
      <div className='overflow-x-auto border border-base-300/50'>
        <table className='table'>
          <thead>
            <tr className='bg-base-200/50'>
              <th className='font-sans text-xs font-semibold uppercase tracking-wider text-base-content/50'>
                Name
              </th>
              <th className='font-sans text-xs font-semibold uppercase tracking-wider text-base-content/50'>
                Address
              </th>
              <th className='font-sans text-xs font-semibold uppercase tracking-wider text-base-content/50'>
                Products
              </th>
              <th className='font-sans text-xs font-semibold uppercase tracking-wider text-base-content/50'>
                Cost
              </th>
              <th className='font-sans text-xs font-semibold uppercase tracking-wider text-base-content/50 hidden sm:table-cell'>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;
              const date = day(createdAt).format('hh:mm a - MMM Do, YYYY');
              return (
                <tr key={id} className='border-b border-base-300/30'>
                  <td className='text-sm'>{name}</td>
                  <td className='text-sm'>{address}</td>
                  <td className='text-sm'>{numItemsInCart}</td>
                  <td className='text-sm font-medium'>{orderTotal}</td>
                  <td className='text-sm hidden sm:table-cell text-base-content/60'>
                    {date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersList;
