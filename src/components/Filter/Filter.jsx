import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
