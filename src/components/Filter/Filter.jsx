import { LabelSt, InputSt } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filtration }) => {
  const handleFilterInput = ({ target: { value } }) => {
    filtration(value.toLowerCase());
  };

  return (
    <LabelSt>
      Find contacts by name
      <InputSt
        type="text"
        name="filter"
        required
        onChange={e => handleFilterInput(e)}
      />
    </LabelSt>
  );
};
