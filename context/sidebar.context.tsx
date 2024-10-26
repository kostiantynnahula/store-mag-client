import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = createContext<SidebarContextProps>({
  open: false,
  setOpen: (open: boolean) => {},
});

export const useSidebar = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
