import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from '@/components';

const RootLayout = () => {
  return (
    <div className='container mx-auto'>
      <ToastContainer position='bottom-left' autoClose={1500} theme='colored' />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
