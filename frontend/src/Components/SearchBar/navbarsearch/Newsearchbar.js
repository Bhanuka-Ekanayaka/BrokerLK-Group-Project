
import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

function Autocomplete() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = value.trim() === '' ? [] : countries.filter(country =>
      country.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleClick = (value) => {
    setSearchTerm(value);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        id="myInput"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search Location"
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="autocomplete-items">
          {suggestions.map((suggestion, index) => (
            <div key={index} onClick={() => handleClick(suggestion)}>
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Autocomplete;

const countries = ["Colombo","Kandy","Galle","Negombo","Jaffna","Matara","Anuradhapura",
"Trincomalee","Batticaloa","Kurunegala","Ratnapura",
"Badulla","Kalutara","Matale","Panadura","Gampaha","Katunayake","Kalmunai","Wattala","Point Pedro",];

