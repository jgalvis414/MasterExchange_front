const Field = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Field;
