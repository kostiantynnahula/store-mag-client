import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { NavbarProfile } from "../navbar/navbar-profile";

type NavbarProps = {
  setSidebarOpen: (isOpen: boolean) => void;
};

export const Navbar = ({ setSidebarOpen }: NavbarProps) => {
  return (
    <>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>

        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form action="#" method="GET" className="relative flex flex-1">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            />
            <input
              id="search-field"
              name="search"
              type="search"
              placeholder="Search..."
              className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            />
          </form>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            />

            <NavbarProfile />
          </div>
        </div>
      </div>
    </>
  );
};