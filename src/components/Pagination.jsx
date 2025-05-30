import React from "react";

const Pagination = ({ total, current, onPageChange }) => {
    const totalPages = Math.ceil(total / 10);

    return (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`px-4 py-2 rounded-full ${current === i ? "bg-purple-600 text-white" : "bg-white border"
                        }`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
