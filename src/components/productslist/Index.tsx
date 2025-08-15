import  type {productTypeProps} from "./types";


const ProductCard = ({ product, inventory, status, price }: productTypeProps) => {
    return (
        <tr className="border-t border-t-[#e5dcdc]">
            <td className="table-col-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                {product}
            </td>
            <td className="table-col-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                {inventory}
            </td>
            <td className="table-col-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                ${price}
            </td>
            <td className="table-col-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 
                    ${status === "Active" ? "bg-[#f4f0f0] text-[#181111]" : "bg-[#e5dcdc] text-[#886364]"} 
                    text-sm font-medium leading-normal w-full`}>
                    <span className="truncate">{status}</span>
                </button>
            </td>
        </tr>
    );
};

export default ProductCard;