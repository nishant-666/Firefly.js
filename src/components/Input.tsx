interface Input {
  name?: string;
  id?: string;
  type: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({
  name = "",
  id = "",
  type,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs m-3"
      onChange={onChange}
    />
  );
};

export default Input;
