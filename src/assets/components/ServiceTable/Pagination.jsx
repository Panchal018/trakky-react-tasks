export default function Pagination({ next, previous, disableNext, disablePrevious }) {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <button
        onClick={previous}
        disabled={disablePrevious}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={next}
        disabled={disableNext}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
