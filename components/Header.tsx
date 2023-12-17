import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="navbar">
      <div className="flex-1 p-4">
        <Link href="/">
          <Image
            className="w-auto"
            src="/wv_logo.webp"
            alt="Wupperfeld Ventures logo"
            width={100}
            height={50}
          />
        </Link>
      </div>
      <div className="navbar-end p-4">
        <Link
          href="mailto:tobias@wupperfeld.org"
          className="btn btn-neutral rounded-md"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
