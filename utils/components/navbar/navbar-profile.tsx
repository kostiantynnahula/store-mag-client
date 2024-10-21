import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { SkeletonProfile } from "./skeleton-profile";
import Image from "next/image";

export const NavbarProfile = () => {
  const { isLoading, user } = useUser();

  return (
    <>
      {isLoading ? (
        <SkeletonProfile />
      ) : (
        <>
          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <>
                <Image
                  alt={user?.name || "User profile picture"}
                  src={user?.picture || "/avatar.png"}
                  className="h-8 w-8 rounded-full bg-gray-50"
                  width={32}
                  height={32}
                />
                <span className="hidden lg:flex lg:items-center">
                  <span
                    aria-hidden="true"
                    className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  >
                    {user?.nickname}
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 text-gray-400"
                  />
                </span>
              </>
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <Link
                  href="/profile"
                  className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                >
                  My Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <a
                  href="/api/auth/logout"
                  className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                >
                  Logout
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </>
      )}
    </>
  );
};
