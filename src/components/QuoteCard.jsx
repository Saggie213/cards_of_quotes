import React from "react";
import { Link } from "react-router-dom";

const QuoteCard = ({ quote, author, id }) => {
    const isLong = quote.length > 120;
    const shortQuote = quote.slice(0, 120);

    return (
        <Link to={`/quote/${id}`}>
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 max-w-sm w-full hover:scale-105 transition-transform duration-300">
                <p className="text-gray-800 text-lg italic leading-relaxed mb-4">
                    “{isLong ? `${shortQuote}...` : quote}”
                </p>
                <div className="text-right">
                    <p className="text-purple-600 font-semibold">- {author}</p>
                </div>
            </div>
        </Link>
    );
};

export default QuoteCard;
