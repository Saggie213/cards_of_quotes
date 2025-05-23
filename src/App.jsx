import React, { useEffect, useState } from "react";

const Navbar = () => (
  <nav className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
    <h1 className="text-2xl font-extrabold tracking-wide">📜 QuoteWorld</h1>
    <ul className="flex gap-6 text-lg">
      <li className="hover:underline cursor-pointer">Home</li>
      <li className="hover:underline cursor-pointer">Quotes</li>
      <li className="hover:underline cursor-pointer">Authors</li>
    </ul>
  </nav>
);

const QuoteCard = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 max-w-sm w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <p className="text-gray-800 text-lg italic leading-relaxed mb-4">“{quote}”</p>
    <div className="text-right">
      <p className="text-purple-600 font-semibold">- {author}</p>
    </div>
  </div>
);

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes?limit=50")
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes));
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-purple-100 min-h-screen">
      <Navbar />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {quotes.map((q) => (
          <QuoteCard key={q.id} quote={q.quote} author={q.author} />
        ))}
      </main>
    </div>
  );
};

export default QuotesPage;
