import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from '../components';
import { Link } from 'react-router-dom';

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
    async ({ request }) => {
      const user = store.getState().userState.user;

      if (!user) {
        toast.warn('You must be logged in to view orders');
        return redirect('/login');
      }
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);
      try {
        const response = await queryClient.ensureQueryData(
          ordersQuery(params, user)
        );

        return { orders: response.data.data, meta: response.data.meta };
      } catch (error) {
        console.log(error);
        const errorMessage =
          error?.response?.data?.error?.message ||
          'There was an error fetching your orders';
        toast.error(errorMessage);
        if (error?.response?.status === 401 || 403) return redirect('/login');
        return null;
      }
    };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return (
      <section className='align-element py-20'>
        <div className='text-center py-20'>
          <h2 className='heading-md text-base-content/40'>No orders yet</h2>
          <p className='body-lg mt-4'>Start shopping to see your orders here</p>
          <Link to='/products' className='premium-btn-primary mt-8 px-10 py-3 inline-flex items-center'>
            Browse Products
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className='align-element py-20'>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </section>
  );
};
export default Orders;
