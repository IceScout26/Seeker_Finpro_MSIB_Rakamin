export default function CompanyJob() {
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
            <div className="mt-2">
              <textarea
                name="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full h-32 p-2.5 "
                placeholder="Description"
                required
              ></textarea>
            </div>
            <div className="pt-5 text-2xl font-semibold text-gray-800">
              Expertise
            </div>
            <div className="mt-2">
              <textarea
                name="expertise"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full h-32 p-2.5 "
                placeholder="Expertise"
                required
              ></textarea>
            </div>
            {/* <div className="pt-5 text-2xl font-semibold text-gray-800">
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
            /> */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-2xl font-semibold text-gray-800 leading-6 "
                >
                  Salary
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-2xl font-semibold text-gray-800 leading-6"
                >
                  Due
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                  />
                </div>
              </div>
            </div>
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
}
