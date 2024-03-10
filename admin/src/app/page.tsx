'use client';
import { redirect, usePathname } from 'next/navigation';
import { Toaster } from 'sonner'

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname == '/') {
    redirect('sign-in');
  }

  return (
    <Toaster position="bottom-center" />
  )
}
