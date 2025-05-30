import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuoteCard from "../components/QuoteCard";
import Pagination from "../components/Pagination";

const Home = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch("https://dummyjson.com/quotes?limit=1454")
            .then((res) => res.json())
            .then((data) => setQuotes(data.quotes));
    }, []);

    const pageQuotes = quotes.slice(currentPage * 10, currentPage * 10 + 10);

    return (
        <div className="bg-gradient-to-br from-gray-100 to-purple-100 min-h-screen flex flex-col">
            <Navbar />
            <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center flex-grow">
                {pageQuotes.map((q) => (
                    <QuoteCard key={q.id} id={q.id} quote={q.quote} author={q.author} />
                ))}
            </main>
            <Pagination total={quotes.length} current={currentPage} onPageChange={setCurrentPage} />
            <Footer />
        </div>
    );
};

export default Home;
