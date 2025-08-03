<<<<<<< HEAD
=======

>>>>>>> dev


const ProductsPage = () => {
    return <>
        <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight min-w-72">Products</p>
            <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal"
            >
                <span className="truncate">Add product</span>
            </button>
        </div>
        <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div
                        className="text-[#886364] flex border-none bg-[#f4f0f0] items-center justify-center pl-4 rounded-l-lg border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="24px"
                        data-weight="regular"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        placeholder="Search products"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border-none bg-[#f4f0f0] focus:border-none h-full placeholder:text-[#886364] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                        value=""
                    />
                </div>
            </label>
        </div>
        <div className="pb-3">
            <div className="flex border-b border-[#e5dcdc] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#181111] text-[#181111] pb-[13px] pt-4" href="#">
                    <p className="text-[#181111] text-sm font-bold leading-normal tracking-[0.015em]">All</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#886364] pb-[13px] pt-4" href="#">
                    <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">Active</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#886364] pb-[13px] pt-4" href="#">
                    <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">Drafts</p>
                </a>
            </div>
        </div>
        <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-lg border border-[#e5dcdc] bg-white">
                <table className="flex-1">
                    <thead>
                        <tr className="bg-white">
                            <th className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-120 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Product</th>
                            <th className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-240 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                Inventory
                            </th>
                            <th className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-360 px-4 py-3 text-left text-[#181111] w-60 text-sm font-medium leading-normal">Status</th>
                            <th className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-480 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                ClassNmaeclassNameic Tee
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                120 in stock
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$25</td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Cozy Hoodie
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                85 in stock
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$50</td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Leather Boots
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                45 in stock
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$120</td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Silver Necklace
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                200 in stock
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$75</td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Summer Dress
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                60 in stock
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                            <td className="table-f095d9f1-4542-48b9-83be-ae498a6219ff-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
};

export default ProductsPage;