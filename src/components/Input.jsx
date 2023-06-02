export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      data-testId="input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-[#cecece] py-2 px-3 focus:outline-none rounded-md w-full focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#cecece]"
    />
  );
}
