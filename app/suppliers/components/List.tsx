import { useModal, useSidebar } from "@/context";
import { suppliers } from "../../../constants/suppliers";

export const List = () => {
  const { setOpen: onDelete } = useModal();
  const { setOpen: onEdit } = useSidebar();

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
            className="px-3 py-3.5 w-1/12 text-left text-sm font-semibold text-gray-900"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {suppliers.map((supplier, i) => (
          <tr key={i}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {supplier.name}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <div className="flex flex-row gap-3">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => onEdit(true)}
                >
                  Edit
                </button>
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => onDelete(true)}
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
