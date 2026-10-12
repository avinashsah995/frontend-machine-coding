import React, { useEffect, useRef, useState } from "react";

const AutoCompleteSearch = () => {
  const [inputData, setInputData] = useState("");
  const [suggestionsData, setSuggestionsData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [cachedSuggestions, setCachedSuggestions] = useState({});
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const suggestionRef = useRef([]);

  const getSuggestions = async () => {
    if (cachedSuggestions[inputData]) {
      setSuggestionsData(cachedSuggestions[inputData]);
      return;
    }
    const data = await fetch(
      `https://dummyjson.com/products/search?q=${inputData}`,
    );
    const result = await data.json();
    setSuggestionsData(result.products);
    setCachedSuggestions({ ...cachedSuggestions, [inputData]: result.products });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 300);

    return () => clearTimeout(timer);
  }, [inputData]);

  useEffect(() => {
    if(activeSuggestion > 0) {
        suggestionRef.current[activeSuggestion].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        })
    }    
  }, [activeSuggestion])

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveSuggestion((prev) => prev === suggestionsData.length - 1 ? prev : prev + 1 )
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion((prev) =>
        prev === 0 ? 0 : prev - 1,
      );
    }
  }

  return (
    <div className="auto-complete-search">
      <h1 className="text-center w-full flex ">Auto Complete Search</h1>
      <hr />
      <div className="auto-complete-search-container">
        <input
          type="text"
          placeholder="Serach"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onKeyDown={(e) => handleKeyDown(e)}
          className="auto-complete-search-input"
        />
        {suggestionsData.length > 0 &&
          showSuggestions && (
            <div className="auto-complete-search-suggestions">
              {suggestionsData.map((suggestion, index) => {
                return <span key={suggestion.id} ref={(el) => suggestionRef.current[index] = el} className={index === activeSuggestion && 'active'}>{suggestion.title}</span>;
              })}
            </div>
          )}
      </div>
    </div>
  );
};

export default AutoCompleteSearch;
