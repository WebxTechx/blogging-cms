import Image from 'next/image';
import Header from './components/Header';
import Alert from './components/Alert';

export default function Home() {
  return (
    <main>
      <Alert />
      <Header />
    </main>
  );
}
