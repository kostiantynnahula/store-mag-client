import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  MapPinIcon,
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Employees", href: "#", icon: UsersIcon, current: false },
  { name: "Supplier", href: "#", icon: BriefcaseIcon, current: false },
  { name: "Products", href: "#", icon: DevicePhoneMobileIcon, current: false },
  { name: "Stores", href: "#", icon: MapPinIcon, current: false },
  { name: "Schedule", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
