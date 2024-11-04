import styles from './LabeledInput.module.css';

export const LabeledInput = ({ label, value, onChange, id, onBlur, type = 'text' }) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type={type} id={id} name={id} value={value} onChange={onChange} onBlur={onBlur} />
    </>
  );
};
