import type { orderTypeProps } from "./types";

const OrderCard = ({ orderid, date, customer, total, paymentstatus, fulfillmentstatus }: orderTypeProps) => {
    return (
        <tr className="border-t border-t-[#e5dcdc]">
            <td className="table-col-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                {orderid}
            </td>
            <td className="table-col-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                {date}
            </td>
            <td className="table-col-360 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                {customer}
            </td>
            <td className="table-col-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                ${total}
            </td>
            <td className="table-col-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 
                    ${paymentstatus === "Paid" ? "bg-[#f4f0f0] text-[#181111]" : "bg-[#e5dcdc] text-[#886364]"} 
                    text-sm font-medium leading-normal w-full`}>
                    <span className="truncate">{paymentstatus}</span>
                </button>
            </td>
            <td className="table-col-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 
                    ${fulfillmentstatus === "Fulfilled" ? "bg-[#f4f0f0] text-[#181111]" : "bg-[#e5dcdc] text-[#886364]"} 
                    text-sm font-medium leading-normal w-full`}>
                    <span className="truncate">{fulfillmentstatus}</span>
                </button>
            </td>
        </tr>
    );
};

export default OrderCard;
