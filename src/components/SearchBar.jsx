import { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");
  const { onSubmit } = props;
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search">
      <form onSubmit={onFormSubmit} className="search__form">
        <div className="search__show">
          <input
            className="search__input"
            onChange={handleChange}
            value={term}
            placeholder="Search Images"
            id="image"
          />
          <label htmlFor="image" className="search__label">
            Search Images
          </label>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
