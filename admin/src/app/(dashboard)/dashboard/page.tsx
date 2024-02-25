import Sidebar from '../../components/dashboard/sidebar';
import Header from '../../components/dashboard/header';
import Title from '../../components/dashboard/Title';
import DashboardCard from '../../components/dashboard/dashboardCard';

export default function page() {
  return (
    <>
      <Title title='Dashboard' />
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
    </>
  );
}
