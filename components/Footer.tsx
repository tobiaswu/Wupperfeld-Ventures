import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer footer-center p-4 text-base-content container mx-auto">
      <hr className="w-full border-primary" />
      <aside className="flex items-center">
        <p className="text-base">
          Copyright © {new Date().getFullYear()} - All rights reserved by TW
          Software Solutions LLC
        </p>
        <p>•</p>
        <Link className="hover:text-primary" href="/privacy">
          <p className="text-base">Privacy</p>
        </Link>
      </aside>
    </footer>
  );
};
