export function Button({ children, className }) {
  return (
    <button className={`bg-white text-black rounded px-4 py-2 hover:bg-gray-200 ${className}`}>
      {children}
    </button>
  );
}