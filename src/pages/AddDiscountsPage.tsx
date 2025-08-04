

const AddDiscountsPage = () => {
    return <>
        <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight min-w-72">Discounts</p>
            <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal"
            >
                <span className="truncate">Create discount</span>
            </button>
        </div>
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Create New Discount</h2>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181111] text-base font-medium leading-normal pb-2">Discount Code</p>
                <input
                    placeholder="Enter discount code"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
                    value=""
                />
            </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181111] text-base font-medium leading-normal pb-2">Discount Type</p>
                <select
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 bg-[image:--select-button-svg] placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
                >
                    <option value="one">Select discount type</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                </select>
            </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181111] text-base font-medium leading-normal pb-2">Discount Value</p>
                <input
                    placeholder="Enter discount value"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
                    value=""
                />
            </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181111] text-base font-medium leading-normal pb-2">Start Date</p>
                <input
                    placeholder="Select start date"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
                    value=""
                />
            </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181111] text-base font-medium leading-normal pb-2">End Date</p>
                <input
                    placeholder="Select end date"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
                    value=""
                />
            </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181111] text-base font-medium leading-normal pb-2">Usage Limit</p>
                <input
                    placeholder="Enter usage limit"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
                    value=""
                />
            </label>
        </div>
        <div className="flex px-4 py-3 justify-start">
            <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e82630] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
                <span className="truncate">Create Discount</span>
            </button>
        </div>
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Existing Discounts</h2>
        <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-xl border border-[#e5dcdc] bg-white">
                <table className="flex-1">
                    <thead>
                        <tr className="bg-white">
                            <th className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-120 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Code</th>
                            <th className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-240 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Type</th>
                            <th className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-360 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Value</th>
                            <th className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-480 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                Start date
                            </th>
                            <th className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-600 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                End date
                            </th>
                            <th className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-720 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                Usage limit
                            </th>
                            <th className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-840 px-4 py-3 text-left text-[#181111] w-60 text-sm font-medium leading-normal">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">SUMMER20</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Percentage
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">20%</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Jul 1, 2024
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Jul 31, 2024
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">1000</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                BACKTOSCHOOL
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Fixed amount
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$50</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Aug 15, 2024
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Sep 15, 2024
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">500</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                HOLIDAY15
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Percentage
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">15%</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Nov 1, 2024
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Dec 31, 2024
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Unlimited
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Inactive</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                NEWYEAR25
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Percentage
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">25%</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Jan 1, 2025
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Jan 31, 2025
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">2000</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Inactive</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                SPRINGBREAK
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Fixed amount
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$25</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Mar 1, 2025
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Mar 31, 2025
                            </td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-720 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">1000</td>
                            <td className="table-4e3b45fe-7e13-4bbd-bf2d-158bb3845ef1-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Inactive</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
};

export default AddDiscountsPage;