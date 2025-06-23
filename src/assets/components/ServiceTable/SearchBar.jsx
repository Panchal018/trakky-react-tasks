export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search services..."
      onChange={(e) => onSearch(e.target.value)}
      className="border px-3 py-2 rounded w-full mb-4"
    />
  );
}
