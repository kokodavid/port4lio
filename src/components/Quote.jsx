import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://zenquotes.io/api/random');
      const [data] = await response.json();
      setQuote({
        text: data.q,
        author: data.a
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
        {isLoading ? (
          <div className="animate-pulse flex flex-col items-center space-y-4">
            <div className="h-4 bg-gray-300/20 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300/20 rounded w-1/2"></div>
          </div>
        ) : (
          <>
            <p className="text-gray-200 text-lg mb-4 italic">
              "{quote.text}"
            </p>
            <p className="text-gray-300 text-right">
              — {quote.author}
            </p>
            <button
              onClick={fetchQuote}
              className="mt-4 text-indigo-300 hover:text-indigo-200 text-sm transition-colors"
            >
              Get new quote
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quote; 