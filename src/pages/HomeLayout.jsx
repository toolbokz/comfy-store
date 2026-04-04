import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading, ScrollToTop } from '../components';
import Footer from '../components/Footer';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
      <Footer />
    </>
  );
};
export default HomeLayout;
