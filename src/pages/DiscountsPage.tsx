import CenterPageContentUi from "../ui/page/CenterPageContentUi";

const DiscountsPage = () => {
    return <>
        <CenterPageContentUi>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#171212] tracking-light text-[32px] font-bold leading-tight min-w-72">Discounts</p>
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-medium leading-normal"
                >
                    <span className="truncate">Create discount</span>
                </button>
            </div>
            <div className="px-4 py-3 @container">
                <div className="flex overflow-hidden rounded-xl border border-[#e4dddd] bg-white">
                    <table className="flex-1">
                        <thead>
                            <tr className="bg-white">
                                <th className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-120 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">Code</th>
                                <th className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-240 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">Type</th>
                                <th className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-360 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">Value</th>
                                <th className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-480 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">
                                    Start date
                                </th>
                                <th className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-600 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">
                                    End date
                                </th>
                                <th className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-720 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">
                                    Usage limit
                                </th>
                                <th className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-840 px-4 py-3 text-left text-[#171212] w-60 text-sm font-medium leading-normal">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-t-[#e4dddd]">
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-120 h-[72px] px-4 py-2 w-[400px] text-[#171212] text-sm font-normal leading-normal">SUMMER20</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-240 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Percentage
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-360 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">20%</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-480 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Jul 1, 2024
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-600 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Jul 31, 2024
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-720 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">1000</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-medium leading-normal w-full"
                                    >
                                        <span className="truncate">Active</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-t-[#e4dddd]">
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-120 h-[72px] px-4 py-2 w-[400px] text-[#171212] text-sm font-normal leading-normal">
                                    BACKTOSCHOOL
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-240 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Fixed amount
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-360 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">$50</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-480 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Aug 15, 2024
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-600 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Sep 15, 2024
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-720 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">500</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-medium leading-normal w-full"
                                    >
                                        <span className="truncate">Active</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-t-[#e4dddd]">
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-120 h-[72px] px-4 py-2 w-[400px] text-[#171212] text-sm font-normal leading-normal">
                                    HOLIDAY15
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-240 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Percentage
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-360 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">15%</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-480 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Nov 1, 2024
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-600 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Dec 31, 2024
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-720 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Unlimited
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-medium leading-normal w-full"
                                    >
                                        <span className="truncate">Inactive</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-t-[#e4dddd]">
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-120 h-[72px] px-4 py-2 w-[400px] text-[#171212] text-sm font-normal leading-normal">
                                    NEWYEAR25
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-240 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Percentage
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-360 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">25%</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-480 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Jan 1, 2025
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-600 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Jan 31, 2025
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-720 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">2000</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-medium leading-normal w-full"
                                    >
                                        <span className="truncate">Inactive</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-t-[#e4dddd]">
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-120 h-[72px] px-4 py-2 w-[400px] text-[#171212] text-sm font-normal leading-normal">
                                    SPRINGBREAK
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-240 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Fixed amount
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-360 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">$25</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-480 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Mar 1, 2025
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-600 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">
                                    Mar 31, 2025
                                </td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-720 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">1000</td>
                                <td className="table-30ce3cdf-9447-4a2c-bae9-a09b5ec3f7ed-column-840 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-medium leading-normal w-full"
                                    >
                                        <span className="truncate">Inactive</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>               
            </div>
        </CenterPageContentUi>
    </>;
};

export default DiscountsPage;