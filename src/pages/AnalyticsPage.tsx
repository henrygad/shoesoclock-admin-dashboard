import CenterPageContentUi from "../ui/page/CenterPageContentUi";

const AnalyticesPage = () => {
    return <>
        <CenterPageContentUi>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight">
                        Analytics
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f4f0f0]">
                    <p className="text-[#181111] text-base font-medium leading-normal">Total Revenue</p>
                    <p className="text-[#181111] tracking-light text-2xl font-bold leading-tight">$120,000</p>
                    <p className="text-[#07885d] text-base font-medium leading-normal">+10%</p>
                </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f4f0f0]">
                    <p className="text-[#181111] text-base font-medium leading-normal">Orders</p>
                    <p className="text-[#181111] tracking-light text-2xl font-bold leading-tight">5,000</p>
                    <p className="text-[#07885d] text-base font-medium leading-normal">+5%</p>
                </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f4f0f0]">
                    <p className="text-[#181111] text-base font-medium leading-normal">Customers</p>
                    <p className="text-[#181111] tracking-light text-2xl font-bold leading-tight">2,000</p>
                    <p className="text-[#07885d] text-base font-medium leading-normal">+8%</p>
                </div>
            </div>
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Sales Performance</h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
                <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#e5dcdc] p-6">
                    <p className="text-[#181111] text-base font-medium leading-normal">Revenue Over Time</p>
                    <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight truncate">$120,000</p>
                    <div className="flex gap-1">
                        <p className="text-[#886364] text-base font-normal leading-normal">Last 30 Days</p>
                        <p className="text-[#07885d] text-base font-medium leading-normal">+10%</p>
                    </div>
                    <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                        <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path
                                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                                fill="url(#paint0_linear_1131_5935)"
                            ></path>
                            <path
                                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                                stroke="#886364"
                                stroke-width="3"
                                stroke-linecap="round"
                            ></path>
                            <defs>
                                <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#f4f0f0"></stop>
                                    <stop offset="1" stop-color="#f4f0f0" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="flex justify-around">
                            <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                            <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                            <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                            <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                            <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                            <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                            <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Top Selling Products</h2>
            <div className="px-4 py-3 @container">
                <div className="flex overflow-hidden rounded-xl border border-[#e5dcdc] bg-white">
                    <table className="flex-1">
                        <thead>
                            <tr className="bg-white">
                                <th className="table-91152710-1012-48bc-8188-33b58e500593-column-120 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Product</th>
                                <th className="table-91152710-1012-48bc-8188-33b58e500593-column-240 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                    Category
                                </th>
                                <th className="table-91152710-1012-48bc-8188-33b58e500593-column-360 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                    Units Sold
                                </th>
                                <th className="table-91152710-1012-48bc-8188-33b58e500593-column-480 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-t-[#e5dcdc]">
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                    Summer Dress
                                </td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">Clothing</td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">1,200</td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$30,000</td>
                            </tr>
                            <tr className="border-t border-t-[#e5dcdc]">
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                    Leather Boots
                                </td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">Shoes</td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">800</td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$24,000</td>
                            </tr>
                            <tr className="border-t border-t-[#e5dcdc]">
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                    Silver Necklace
                                </td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">Jewelry</td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">1,000</td>
                                <td className="table-91152710-1012-48bc-8188-33b58e500593-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$15,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Customer Behavior</h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
                <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#e5dcdc] p-6">
                    <p className="text-[#181111] text-base font-medium leading-normal">New vs. Returning Customers</p>
                    <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight truncate">60%</p>
                    <div className="flex gap-1">
                        <p className="text-[#886364] text-base font-normal leading-normal">Last 30 Days</p>
                        <p className="text-[#07885d] text-base font-medium leading-normal">+5%</p>
                    </div>
                    <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "60%" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">New</p>
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "30%" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Returning</p>
                    </div>
                </div>
                <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#e5dcdc] p-6">
                    <p className="text-[#181111] text-base font-medium leading-normal">Average Order Value</p>
                    <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight truncate">$60</p>
                    <div className="flex gap-1">
                        <p className="text-[#886364] text-base font-normal leading-normal">Last 30 Days</p>
                        <p className="text-[#07885d] text-base font-medium leading-normal">+2%</p>
                    </div>
                    <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "100" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "50%" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "50%" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "100" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "90%" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "10%" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                        <div className="border-[#886364] bg-[#f4f0f0] border-t-2 w-full" style={{ height: "20%" }}></div>
                        <p className="text-[#886364] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul</p>
                    </div>
                </div>
            </div>
        </CenterPageContentUi>
    </>;
};

export default AnalyticesPage;