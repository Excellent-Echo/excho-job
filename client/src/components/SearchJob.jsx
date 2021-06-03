export default function SearchJob() {
  return (
    <div className="md:mt-3 sm:mt-0 col-span-12 sm:col-span-3">
      <label htmlFor="search_job" className="sr-only">
        Search Job
      </label>
      <input
        type="text"
        name="search_job"
        id="search_job"
        className="w-full font-medium rounded-lg text-indigo-600 bg-white md:py-4 md:text-lg md:px-10"
        placeholder="Search job"
      />
    </div>
  );
}