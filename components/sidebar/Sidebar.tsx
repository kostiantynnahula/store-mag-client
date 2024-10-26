"use client";

import { useSidebar } from "@/context";
import { Dialog, DialogPanel } from "@headlessui/react";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  const { open, setOpen } = useSidebar();

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              {children}
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
