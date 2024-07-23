import React from "react";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon portfolio !</h1>
        <p className="text-lg text-center">
          Je suis Lynda ALILECHE, une conceptrice développeuse d applications passionnée par la création de solutions innovantes et fonctionnelles.
        </p>
      </div>
    </main>
  );
}
