import Link from 'next/link';
// import { useRouter } from 'next/router';

export default function Title({
  title,
  children,
  visibleSettingNav,
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
  visibleSettingNav?: React.ReactNode;
}) {
  // const router = useRouter();
  // const currentUrl = router.asPath;
  // console.log(currentUrl);

  return (
    <div className='mb-6 mb-xl-10'>
      <div className='row g-3 align-items-center'>
        <div className='col'>
          <h1 className='ls-tight'>{title}</h1>
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
      <ul
        className={`nav nav-tabs nav-tabs-flush gap-6 overflow-x border-0 mt-4 ${visibleSettingNav == true ? '' : 'd-none'}`}
      >
        <li className='nav-item'>
          <Link href='setting' className={`nav-link`}>
            General
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='billing' className={`nav-link`}>
            Billing
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='password' className={`nav-link`}>
            Password
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='notifications' className={`nav-link`}>
            Notifications
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='team' className={`nav-link`}>
            Team
          </Link>
        </li>
        {/* ${pathname == 'setting' ? 'active' : ''} */}
      </ul>
    </div>
  );
}
