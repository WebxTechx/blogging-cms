import Sidebar from '../../components/dashboard/sidebar';

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default page;
