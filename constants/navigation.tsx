import {
  CalendarIcon,
  // ChartPieIcon,
  // DocumentDuplicateIcon,
  MapPinIcon,
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Employees", href: "employees", icon: UsersIcon, current: false },
  { name: "Supplier", href: "suppliers", icon: BriefcaseIcon, current: false },
  {
    name: "Products",
    href: "products",
    icon: DevicePhoneMobileIcon,
    current: false,
  },
  { name: "Stores", href: "stores", icon: MapPinIcon, current: false },
  { name: "Schedule", href: "schedule", icon: CalendarIcon, current: false },
  // { name: "Documents", href: "/", icon: DocumentDuplicateIcon, current: false },
  // { name: "Reports", href: "/", icon: ChartPieIcon, current: false },
];
