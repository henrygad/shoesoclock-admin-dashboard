
import CustomerData from "../assets/data/customer.json";
import CustomerCard from "../components/customercard/Index";


const CustomersPage = () => {
    return <>
        <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight">Customer</p>
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
                        placeholder="Search customers"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border-none bg-[#f4f0f0] focus:border-none h-full placeholder:text-[#886364] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                        value=""
                    />
                </div>
            </label>
        </div>
        <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-lg border border-[#e5dcdc] bg-white">
                <table className="flex-1">
                    <thead>
                        <tr className="bg-white">
                            <th className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Name</th>
                            <th className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Email</th>
                            <th className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                Location
                            </th>
                            <th className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Orders</th>
                            <th className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Spent</th>
                            <th className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 px-4 py-3 text-left text-[#181111] w-60 text-sm font-medium leading-normal">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CustomerData?.length ?
                                CustomerData.map((customer) =>
                                    <CustomerCard
                                        key={customer.id}
                                        id={customer.id}
                                        name={customer.name}
                                        email={customer.email}
                                        location={customer.location}
                                        order={customer.orders}
                                        spent={customer.spent}
                                        status={customer.status }
                                    />
                                ) :
                                <tr className="border-t border-t-[#e5dcdc]">
                                    <td className="h-[72px] px-4 py-2 w-full text-[#181111] text-sm font-normal leading-normal">
                                        No customers
                                    </td>
                                </tr>
                        }
                        {/* <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Sophia Carter
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                sophia.carter@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                New York, USA
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">12</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$1,200</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Liam Bennett
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                liam.bennett@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                London, UK
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">8</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$850</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Olivia Hayes
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                olivia.hayes@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Paris, France
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">5</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$500</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Inactive</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Noah Parker
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                noah.parker@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Berlin, Germany
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">15</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$1,500</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Ava Mitchell
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                ava.mitchell@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Tokyo, Japan
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">7</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$700</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Ethan Reed
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                ethan.reed@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Sydney, Australia
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">10</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$1,000</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Isabella Foster
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                isabella.foster@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Toronto, Canada
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">6</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$600</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Inactive</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Mason Brooks
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                mason.brooks@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Rome, Italy
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">9</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$950</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Mia Coleman
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                mia.coleman@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Madrid, Spain
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">4</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$400</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Inactive</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">
                                Alexander Ward
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                alexander.ward@email.com
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Seoul, South Korea
                            </td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-480 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">11</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$1,100</td>
                            <td className="table-0a862da2-6b95-40e1-a752-3f3d37b53d65-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Active</span>
                                </button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    </>;
};

export default CustomersPage;