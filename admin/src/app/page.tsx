'use client';
import { redirect, usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname == '/') {
    redirect('sign-in');
  }
}
