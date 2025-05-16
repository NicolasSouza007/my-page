import Link from 'next/link';

export default function Sidebar({ title = 'Artigos Relacionados', links }) {
  return (
    <aside className="w-1/4 p-6 sticky top-0 h-[600px] overflow-auto bg-gray-100">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul className="space-y-3 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-blue-700 hover:underline text-lg">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
