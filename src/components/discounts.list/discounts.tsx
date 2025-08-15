import type { CouponTypeProps } from "./types";

const CouponCard = ({
  code,
  type,
  value,
  start_date,
  end_date,
  usage_limit,
  status,
}: CouponTypeProps) => {
  return (
    <tr className="border-t border-t-[#e5dcdc]">
      <td className="table-col-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
        {code}
      </td>
      <td className="table-col-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
        {type}
      </td>
      <td className="table-col-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
        {value}
      </td>
      <td className="table-col-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
        {start_date}
      </td>
      <td className="table-col-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
        {end_date}
      </td>
      <td className="table-col-720 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
        {usage_limit}
      </td>
      <td className="table-col-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full">
          {status === "Active" ? (
            <span className="truncate">Active</span>
          ) : (
            <span className="truncate">Inactive</span>
          )}
        </button>
      </td>
    </tr>
  );
};

export default CouponCard;
