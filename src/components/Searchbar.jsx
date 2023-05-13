import PropTypes from 'prop-types';
import '../styles/index.css'

import { BsSearch } from "react-icons/bs";

function Searchbar({ showName, handleSearchShow }) {
  return (
    <div className='search'>
    <input className='input'
      type="search"
      placeholder=" Search what's in your heart..."
      aria-label="Search"
      value={showName}
      onChange={handleSearchShow}
    />
    </div>
  );
}

Searchbar.propTypes = {
  showName: PropTypes.string,
  handleSearchShow: PropTypes.func,
}.isRequired;

export default Searchbar;
