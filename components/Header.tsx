import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/">
        <Image src="/logo.png" alt="Logo de Path" width={150} height={45} />
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
