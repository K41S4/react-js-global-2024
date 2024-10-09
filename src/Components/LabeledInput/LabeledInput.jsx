export const LabeledInput = ({ label, value, onChange, id, type = 'text' }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} />
    </>
  );
};
