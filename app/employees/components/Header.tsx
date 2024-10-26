import { useSidebar } from "@/context";

export const Header = () => {
  const { setOpen } = useSidebar();

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Employee
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the employee that are registered in the system.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setOpen(true)}
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-4">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Nikita"
          className="block rounded-md border-0 py-1.5 pl-1.5 w-1/3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};
