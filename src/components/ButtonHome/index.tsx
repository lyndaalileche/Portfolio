import Link from 'next/link';

export default function AccueilButton() {
  return (
    <Link href="/">
      <a className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Accueil</a>
    </Link>
  );
}