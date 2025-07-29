import CenterPageContentUi from "../ui/page/CenterPageContentUi";

const OrderDetailsPage = () => {
    return <>
        <CenterPageContentUi>
            <div className="flex flex-wrap gap-2 p-4">
                <a className="text-[#82686a] text-base font-medium leading-normal" href="#">Orders</a>
                <span className="text-[#82686a] text-base font-medium leading-normal">/</span>
                <span className="text-[#171212] text-base font-medium leading-normal">Order #12345</span>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#171212] tracking-light text-[32px] font-bold leading-tight">Order #12345</p>
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Placed on July 15, 2024 at 2:30 PM</p>
                </div>
            </div>
            <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Customer Information</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Customer Name</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">Sophia Bennett</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Email</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">sophia.bennett@email.com</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Phone</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">(555) 123-4567</p>
                </div>
            </div>
            <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Order Summary</h2>
            <div className="px-4 py-3 @container">
                <div className="flex overflow-hidden rounded-xl border border-[#e4dddd] bg-white">
                    <table className="flex-1">
                        <thead>
                            <tr className="bg-white">
                                <th className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-120 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">Product</th>
                                <th className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-240 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">
                                    Quantity
                                </th>
                                <th className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-360 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">Price</th>
                                <th className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-480 px-4 py-3 text-left text-[#171212] w-[400px] text-sm font-medium leading-normal">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-t-[#e4dddd]">
                                <td className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#171212] text-sm font-normal leading-normal">
                                    Eco-Friendly Water Bottle
                                </td>
                                <td className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">2</td>
                                <td className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-360 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">$15.00</td>
                                <td className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-480 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">$30.00</td>
                            </tr>
                            <tr className="border-t border-t-[#e4dddd]">
                                <td className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#171212] text-sm font-normal leading-normal">
                                    Organic Cotton T-Shirt
                                </td>
                                <td className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">1</td>
                                <td className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-360 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">$25.00</td>
                                <td className="table-90445939-c44a-4188-a1d1-2d9fdc0d681e-column-480 h-[72px] px-4 py-2 w-[400px] text-[#82686a] text-sm font-normal leading-normal">$25.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>               
            </div>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Subtotal</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">$55.00</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Shipping</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">$5.00</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Total</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">$60.00</p>
                </div>
            </div>
            <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Shipping Address</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Name</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">Sophia Bennett</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Address</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">123 Maple Street</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">City</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">Anytown</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Zip Code</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">12345</p>
                </div>
            </div>
            <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Payment Information</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Payment Method</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">Credit Card</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e4dddd] py-5">
                    <p className="text-[#82686a] text-sm font-normal leading-normal">Card Number</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal">************1234</p>
                </div>
            </div>
            <h2 className="text-[#171212] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Order Status</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#171212] text-base font-medium leading-normal pb-2">Status</p>
                    <select
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border border-[#e4dddd] bg-white focus:border-[#e4dddd] h-14 bg-[image:--select-button-svg] placeholder:text-[#82686a] p-[15px] text-base font-normal leading-normal"
                    >
                        <option value="one"></option>
                        <option value="two">two</option>
                        <option value="three">three</option>
                    </select>
                </label>
            </div>
            <div className="flex justify-stretch">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e8b4b7] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Update Status</span>
                    </button>
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Contact Customer</span>
                    </button>
                </div>
            </div>
        </CenterPageContentUi>
    </>;
};

export default OrderDetailsPage;