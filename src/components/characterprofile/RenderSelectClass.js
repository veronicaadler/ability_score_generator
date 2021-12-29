const RenderSelectClass = ({
    input,
    label,
    meta: { touched, error },
    children,
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <div>
          <select {...input}>{children}</select>
          {touched && error && <div>{error}</div>}
        </div>
      </div>
    </div>
  );

  export default RenderSelectClass;