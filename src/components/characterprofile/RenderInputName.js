const RenderInputName = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && error && <div>{error}</div>}
    </div>
  </div>
);

export default RenderInputName;
