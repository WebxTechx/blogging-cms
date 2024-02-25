import Sidebar from '../components/dashboard/sidebar';
import Header from '../components/dashboard/header';

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='d-flex flex-column flex-lg-row h-lg-100 gap-1'>
      <Sidebar />
      <div className='flex-lg-fill overflow-x-auto ps-lg-1 vstack vh-lg-100 position-relative'>
        <Header />
        <div className='flex-fill overflow-y-lg-auto scrollbar bg-body rounded-top-4 rounded-top-start-lg-4 rounded-top-end-lg-0 border-top border-lg shadow-2'>
          <div className='container-fluid px-3 py-5 p-lg-6 p-xxl-8'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
