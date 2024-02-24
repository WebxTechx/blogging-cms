import Sidebar from '../components/dashboard/sidebar';
import Header from '../components/dashboard/header';
import DashboardCard from '../components/dashboard/dashboardCard';

export default function page() {
  return (
    <div className='d-flex flex-column flex-lg-row h-lg-100 gap-1'>
      <Sidebar />
      <div className='flex-lg-fill overflow-x-auto ps-lg-1 vstack vh-lg-100 position-relative'>
        <Header />
        <div className='flex-fill overflow-y-lg-auto scrollbar bg-body rounded-top-4 rounded-top-start-lg-4 rounded-top-end-lg-0 border-top border-lg shadow-2'>
          <div className='container-fluid px-3 py-5 p-lg-6 p-xxl-8'>
            <div className='mb-6 mb-xl-10'>
              <div className='row g-3 align-items-center'>
                <div className='col'>
                  <h1 className='ls-tight'>Analytics</h1>
                </div>
                <div className='col'>
                  <div className='hstack gap-2 justify-content-end'>
                    <button
                      type='button'
                      className='btn btn-sm btn-neutral d-none d-sm-inline-flex'
                      data-bs-target='#depositLiquidityModal'
                      data-bs-toggle='modal'
                    >
                      <span className='pe-2'>
                        <i className='bi bi-plus-circle'></i>
                      </span>
                      <span>Liquidity</span>
                    </button>{' '}
                    <a
                      href='page-overview.html'
                      className='btn d-inline-flex btn-sm btn-dark'
                    >
                      <span>Trade</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='row row-cols-xl-4 g-3 g-xl-6'>
              <div className='col'>
                <DashboardCard />
              </div>
              <div className='col'>
                <DashboardCard />
              </div>
              <div className='col'>
                <DashboardCard />
              </div>
              <div className='col'>
                <DashboardCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
