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
    <div>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="input input-bordered max-w-xs m-3 w-96"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
