import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const QuoteDetail = () => {
    const { id } = useParams();
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/quotes/${id}`)
            .then((res) => res.json())
            .then((data) => setQuote(data));
    }, [id]);

    if (!quote) return <div className="p-6">Loading...</div>;

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-md mt-6">
                <p className="text-xl italic text-gray-800 mb-4">“{quote.quote}”</p>
                <p className="text-right text-purple-600 font-bold">— {quote.author}</p>
                <Link to="/" className="mt-6 inline-block text-indigo-700 underline">← Back to Quotes</Link>
            </div>
            <Footer />
        </div>
    );
};

export default QuoteDetail;
