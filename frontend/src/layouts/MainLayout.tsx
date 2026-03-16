import Navbar from '@/layouts/navigation/Navbar';
import Footer from '@/layouts/navigation/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
