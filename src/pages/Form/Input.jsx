export const Input = ({ type, className, value, onChange }) => {
  return (
    <div>
      <input type={type} className={className} value={value} onChange={onChange} />
    </div>
  );
};