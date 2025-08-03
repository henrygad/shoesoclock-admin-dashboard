
const DashboardPage = () => {

    return <>
        <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight">Dashboard</p>
                <p className="text-[#886364] text-sm font-normal leading-normal">Welcome back, Sarah</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-4 p-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f4f0f0]">
                <p className="text-[#181111] text-base font-medium leading-normal">Total Sales</p>
                <p className="text-[#181111] tracking-light text-2xl font-bold leading-tight">$250,000</p>
                <p className="text-[#07885d] text-base font-medium leading-normal">+15%</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f4f0f0]">
                <p className="text-[#181111] text-base font-medium leading-normal">Orders Pending</p>
                <p className="text-[#181111] tracking-light text-2xl font-bold leading-tight">35</p>
                <p className="text-[#e75a08] text-base font-medium leading-normal">-5%</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f4f0f0]">
                <p className="text-[#181111] text-base font-medium leading-normal">Average Order Value</p>
                <p className="text-[#181111] tracking-light text-2xl font-bold leading-tight">$75</p>
                <p className="text-[#07885d] text-base font-medium leading-normal">+10%</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f4f0f0]">
                <p className="text-[#181111] text-base font-medium leading-normal">Customer Satisfaction</p>
                <p className="text-[#181111] tracking-light text-2xl font-bold leading-tight">92%</p>
                <p className="text-[#07885d] text-base font-medium leading-normal">+2%</p>
            </div>
        </div>
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Popular Products
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className=" flex flex-col gap-3 pb-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC845vke7RpuFDNKXXuBBOqKvJTbf-SQSew5_4EJay2w6LqhgYqEYGFvs_eDNwNimyMsz5fDnRFe5mItMWIv0ZR8mi1Tb7obhIHLFc1nx3lYXULTgktVqPaEDCII7Rd6X-2HFo9idtD6WSfdcJT2o4TeHYg3GFBtVwG0qvWx9LsNY_rpaWxXSVsiY-9XFEHPPbg2Eo3X5YR_BQ69PpS3G2ibjU_W5rA8e3UUw9fhyOwTeI_-1-IZxbnUc5bb0-5Bi4UGuyuf4VXd7A')"
                    }}
                ></div>
                <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">Summer Dress</p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">120 sales</p>
                </div>
            </div>
            <div className=" flex flex-col gap-3 pb-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1_f8e3fLL9C2FvqDR25vTFxVpHnkH0Ij0jRy6VWkVSiWUjjvYAEqXxua6lPCCckyvecehfYoLBC-ED6K-VL_oRgLnGnvPZQqIYfpiVLlL_g42VIyRWKgyp8y_4CDi43pNQ8ME5PDhbCR2XzVM92YZNMlBtDMoQB2kbfqmKvbwGXJTkq4au_IIjXZzblncU_oG7jLe3niM6pcUEE2MvgBjPsbLVX10sJC5siC3g9WKgi9ae6hsc_OKQqlH2c6HA7PbDI83N3uraDc')"
                    }}
                ></div>
                <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">Leather Boots</p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">95 sales</p>
                </div>
            </div>
            <div className=" flex flex-col gap-3 pb-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJVI7mS4W_bxIiEAKHOStF7unN_da1zvB09IAC0vAGxecrSfIVSoNOPci0GqiWeYVjAY-tWgApd1JDQLkHUAWYWpmgbizHirCwobRAr0NCGx28GPE9AX92WyRso6vaiYHFjcP2nzdEtvLEkqY23S1dAPXWGJOuyZn5BGFxYJym0_vasXceMRNbsGErsWP2h779XZB7dtGiGPgwySK49VqkQSJRKROumvszoP07bFrb6cw-LpE54L6ttYYBfGgTTtDCIv-gE8mF9Wg')"
                    }}
                ></div>
                <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">Casual T-Shirt</p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">150 sales</p>
                </div>
            </div>
            <div className=" flex flex-col gap-3 pb-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASoEvSokmCuUAiOMaC-_qrhfB3DuX6awFagNXt09NHcH_qsG3V3eePe3wQ8A9QlZJ-02BotdLI-Akz6-BajmJ0Mhn1wmW4c8emQmLalxD6uAvaedPeL9IU_FYRImOKl7LmMAMhlVVaDe_TYS-osTdBM2CqNcUJPFogJifbFE0qvJBtejE5yFlhTC-c7ee9NYnOgRp0hn3BmGKSFn0KECeLefO_gw1JO9QhkhHPt3k69vIAFcQCPkRMDj9nctdkIQEueIGmWQ-Wpl8')"
                    }}
                ></div>
                <div>
                    <p className="text-[#181111] text-base font-medium leading-normal">Silver Necklace</p>
                    <p className="text-[#886364] text-sm font-normal leading-normal">80 sales</p>
                </div>
            </div>
        </div>
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Activity</h2>
        <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-lg border border-[#e5dcdc] bg-white">
                <table className="flex-1">
                    <thead>
                        <tr className="bg-white">
                            <th className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-120 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                Order ID
                            </th>
                            <th className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-240 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">
                                Customer
                            </th>
                            <th className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-360 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Date</th>
                            <th className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-480 px-4 py-3 text-left text-[#181111] w-60 text-sm font-medium leading-normal">Status</th>
                            <th className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-600 px-4 py-3 text-left text-[#181111] w-[400px] text-sm font-medium leading-normal">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1001</td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Emily Carter
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                2023-08-15
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Shipped</span>
                                </button>
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$120</td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1002</td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                David Lee
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                2023-08-14
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Processing</span>
                                </button>
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$85</td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1003</td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Olivia Brown
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                2023-08-13
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Delivered</span>
                                </button>
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$150</td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1004</td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Ethan Clark
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                2023-08-12
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Shipped</span>
                                </button>
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$90</td>
                        </tr>
                        <tr className="border-t border-t-[#e5dcdc]">
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-120 h-[72px] px-4 py-2 w-[400px] text-[#181111] text-sm font-normal leading-normal">#1005</td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-240 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                Sophia Green
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-360 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">
                                2023-08-11
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                <button
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-medium leading-normal w-full"
                                >
                                    <span className="truncate">Delivered</span>
                                </button>
                            </td>
                            <td className="table-1104ba7a-ab22-459c-804f-c50fa98f2989-column-600 h-[72px] px-4 py-2 w-[400px] text-[#886364] text-sm font-normal leading-normal">$110</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
};

export default DashboardPage;
