const SelectRace = ({ input, label, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>{children}</select>
      {touched && error && <div>{error}</div>}
    </div>
  </div>
);

export default SelectRace;
