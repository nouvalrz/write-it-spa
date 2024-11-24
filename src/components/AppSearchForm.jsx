import TextInput from './forms/TextInput';

function AppSearchForm({ onChange }) {
  return (
    <div className="app-search-form">
      <i className="fa-solid fa-magnifying-glass"></i>
      <TextInput
        placeholder="Find your note"
        className="app-search-form__input"
        onChange={onChange}
      />
    </div>
  );
}

export default AppSearchForm;
