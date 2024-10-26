import { useModal, useSidebar } from "@/context";
import { employees } from "@/constants";

export const List = () => {
  const { setOpen } = useModal();
  const { setOpen: setSidebarOpen } = useSidebar();

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Store
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Role
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {employees.map((employee) => (
          <tr key={employee.email}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {employee.name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {employee.store}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {employee.email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {employee.role}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <div className="flex flex-row gap-3">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  Edit
                </button>
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => setOpen(true)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
