"use client";
import { useRouter } from "next/navigation";

export default function Button({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(route)}
      className="bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
    >
      {children}
    </button>
  );
}
