export default function SearchJobType() {
  return (
    <div className="md:mt-3 sm:mt-0 col-span-12 sm:col-span-3">
      <label
        htmlFor="country"
        className="sr-only block text-sm font-medium text-gray-700"
      >
        Type
      </label>
      <select
        id="country"
        name="country"
        autoComplete="country"
        className="w-full font-medium rounded-lg text-indigo-600 bg-white md:py-4 md:text-lg md:px-10"
      >
        <option>Type</option>
      </select>
    </div>
  );
}