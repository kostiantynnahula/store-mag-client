"use client";

import Modal from "@/components/modal/Modal";
import { List } from "./components/List";
import { ModalProvider, SidebarProvider } from "@/context";
import { Header } from "./components/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { SupplierForm } from "./components/SupplierForm";

const Suppliers = () => {
  return (
    <SidebarProvider>
      <ModalProvider>
        <div className="px-4 sm:px-6 lg:px-8">
          <Header />
          <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <List />
              </div>
            </div>
          </div>
        </div>
        <Sidebar>
          <SupplierForm />
        </Sidebar>
        <Modal
          title="Delete supplier"
          message="Are you sure you want to delete this supplier?"
        />
      </ModalProvider>
    </SidebarProvider>
  );
};

export default Suppliers;
