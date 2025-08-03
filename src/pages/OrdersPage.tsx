import CenterPageContentUi from "../ui/page/CenterPageContentUi";

const OrdersPage = () => {
    return <>
        <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight">Orders</p>
            </div>
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
                        placeholder="Search orders"
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
                    <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">To fulfill</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#886364] pb-[13px] pt-4" href="#">
                    <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">To ship</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#886364] pb-[13px] pt-4" href="#">
                    <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">Completed</p>
                </a>
            </div>
        </div>
        <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-lg border border-[#e5dcdc] bg-white">
                <table className="flex-1">
                    <thead>
                        <tr className="bg-white">
                            <th className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Order</th>
                            <th className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Date</th>
                            <th className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                Customer
                            </th>
                            <th className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Total</th>
                            <th className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 px-4 py-3 text-left text-[#181111] w-60 text-sm font-medium leading-normal">
                                Payment status
                            </th>
                            <th className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 px-4 py-3 text-left text-[#181111] w-60 text-sm font-medium leading-normal">
                                Fulfillment status
                            </th>
                            <th
                                className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 px-4 py-3 text-left text-[#181111] w-60 text-[#886364] text-sm font-medium leading-normal"
                            ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1001</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 20, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Sophia Clark
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$120.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1002</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 19, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Liam Carter
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$85.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1003</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 18, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Olivia Bennett
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$250.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1004</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 17, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Noah Turner
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$150.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1005</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 16, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Ava Mitchell
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$90.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1006</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 15, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Ethan Hayes
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$180.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1007</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 14, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Isabella Reed
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$110.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1008</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 13, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Jackson Foster
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$75.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1009</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 12, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Mia Coleman
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$200.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1010</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                May 11, 2024
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Aiden Brooks
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$130.00</td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Paid</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Fulfilled</span>
                                </button>
                            </td>
                            <td className="table-cfb6d4af-6e0e-44ae-a1b3-773e95fac24f-column-840 h-[72px] px-4 py-2 w-60 text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">
                                View
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
};

export default OrdersPage;