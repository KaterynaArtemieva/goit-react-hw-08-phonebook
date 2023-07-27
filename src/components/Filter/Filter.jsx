import PropTypes from 'prop-types';

// import s from '../ContactForm/ContactForm.module.scss';

export const Filter = ({ filtration }) => {
  const handleFilterInput = ({ target: { value } }) => {
    filtration(value.toLowerCase());
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        required
        onChange={e => handleFilterInput(e)}
      />
    </label>
  );
};

// Filter.propTypes = {
//   filtration: PropTypes.func.isRequired,
// };