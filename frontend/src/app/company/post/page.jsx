export const CompanyJob = () => {
  return (
    <div className="container h-full w-full bg-white">
      <div className="grid grid-rows-4 grid-flow-col gap-4 h-full w-full">
        <form className="flex flex-col gap-2">
          <div className="text-justify m-20">
            <div className="text-2xl font-semibold text-gray-800">Title</div>
            <input
              name="title"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Judul"
              required
            />

            <div className="pt-5 text-2xl font-semibold text-gray-800">
              Job Description
            </div>
            <input
              name="job-description"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full h-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
            <div className="pt-5 text-2xl font-semibold text-gray-800">
              Expertise
            </div>
            <input
              name="expertise"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full h-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
            <div className="pt-5 text-2xl font-semibold text-gray-800">
              Salary
            </div>
            <input
              name="salary"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Judul"
              required
            />
            <div className="pt-5 text-2xl font-semibold text-gray-800">
              Due Date
            </div>
            <input
              name="due-date"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Judul"
              required
            />
          </div>

          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className="border-2 border-black rounded-xl px-2 shadow-xl"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
