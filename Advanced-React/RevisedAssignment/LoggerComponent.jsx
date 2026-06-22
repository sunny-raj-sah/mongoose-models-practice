import useLogger from "./useLogger";

function LoggerComponent() {
  const { value, setValue } = useLogger("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />

      <p>Current value: {value}</p>
    </div>
  );
}

export default LoggerComponent;