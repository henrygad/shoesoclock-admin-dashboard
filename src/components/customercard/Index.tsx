import type { customerTypeProps } from "./types";


const CustomerCard = ({ id, name, email, location, order, spent, status }: customerTypeProps) => {
    return (
        <tr className="border-t border-t-[#e5dcdc]">
            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                {name}
            </td>
            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                {email}
            </td>
            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                {location}
            </td>
            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                {order}
            </td>
            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                {spent}
            </td>
            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full">
                    {status ? <span className="truncate">Active</span> : <span className="truncate">Inactive</span>}
                </button>
            </td>
        </tr>
    );
};

export default CustomerCard;
