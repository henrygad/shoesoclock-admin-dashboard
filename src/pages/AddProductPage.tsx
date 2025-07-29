import CenterPageContentUi from "../ui/page/CenterPageContentUi";

const AddProductPage = () => {
    return <>
        <CenterPageContentUi>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#171212] tracking-light text-[32px] font-bold leading-tight min-w-72">Add Product</p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#171212] text-base font-medium leading-normal pb-2">Product Name</p>
                    <input
                        placeholder="Enter product name"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-14 placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                        value=""
                    />
                </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#171212] text-base font-medium leading-normal pb-2">Description</p>
                    <textarea
                        placeholder="Enter product description"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none min-h-36 placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                    ></textarea>
                </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#171212] text-base font-medium leading-normal pb-2">Price</p>
                    <input
                        placeholder="Enter product price"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-14 placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                        value=""
                    />
                </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#171212] text-base font-medium leading-normal pb-2">Category</p>
                    <select
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                    >
                        <option value="one">Select category</option>
                        <option value="two">two</option>
                        <option value="three">three</option>
                    </select>
                </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#171212] text-base font-medium leading-normal pb-2">Inventory</p>
                    <input
                        placeholder="Enter inventory count"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-14 placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                        value=""
                    />
                </label>
            </div>
            <h3 className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Product Images</h3>
            <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6LG85_cEoMAFTcBk0OzuwC1KTCTUhbcPiyOlA4F_ULbBbZxuVW79nwwscc1E3WlofkW9zFXBsiXjGRM812STNeGOUmAlotM9SLbvYcjQgsZ7hv8aMy0rSI_ZItW8vm7WGAzZPeUHFfttuN4pm0J66CD3fkWWW36G4IdqCzaQXkjjLuXPsCiLF_JMkFzt7BkO7DO0mvftwEA3pcH3mHhoJJHcGh_AMHL86jFBU49vAdflurO1wy1VPobORdsixNUlI_9yQec-nGGs')" }}
                    ></div>
                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                        <p className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em]">Main Product Image</p>
                        <div className="flex items-end gap-3 justify-between">
                            <p className="text-[#82686a] text-base font-normal leading-normal">Upload a high-quality image to showcase your product</p>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#e8b4b7] text-[#171212] text-sm font-medium leading-normal"
                            >
                                <span className="truncate">Upload Image</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Additional Images</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv-ztL5-UtmU3EunHRQBCClS2tawyih3tJBjskswMhDQRcwP7LTKGaEOJWMJTrkR5BaXFWDi9enQBAystaPMgj2HFZpqvqxIouOzGEuKta6N2wT79vePv9ELGF-4mfKIbFDEgmcPWk7pbNo0zB2p4Er9dXpe9puxRvoOgWrfabkDdRYfvE0pGZBmpRKarIfpWB4v-cPDH8JRAbIov2g-RvBcp1N-bDWhJsLAvURi7jZMRlYSa7i5lwFBKhK0Ph7vtL0iKR5RrcTi4')" }}
                    ></div>
                </div>
                <div className="flex flex-col gap-3">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOOvoo-gUZjNjCioEa9sWk42Sgpl8Qx1elEf4EbP33IttNvdWhWpXZJAgf_GhugxCnOqwFSQuk9EWs7GgB9FKKiKW5w7bPEBoLNUYFPtKHlIRkDW3StGkkrw5p11xdlo0EbAx4o_Rhm1--UkaZ_FEGwQDi3TtEuN38aSD-tMMRKbdD3lQh1PJ7UdznAfOycEZTo6b0XwNeXFIQtgvmH3r--xOPd_aO1ekXGBrnDzm--qyLqz47SDoLcp0HPqap29EP0cXedjLbf5Q')" }}
                    ></div>
                </div>
                <div className="flex flex-col gap-3">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAujC_4hsGrb6auMbmrAvunpANartwG7Z-vAPdCtBanu3aDIoshz1jPIFajZi4IYpfopbzJrFcmGq72A3JPiL-giyOKXf-btKGpLgd-YqhXqD41w6A3-OLibKvq6QD7wCQLxjJr-Z_CLg1K0pXtqiNl5Q0PfEfIl6aqZL180yTK3iG6416v2U5q9XmW3oBW1VSdFTKU4XyC_6Oq7yKxs5-ZHYJzhY9LNiCqRiJIe71wcVrYjCOWlNMJyw9eq4AStrS8P98qVlKaNoc')" }}
                    ></div>
                </div>
            </div>
            <div className="flex justify-stretch">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Edit</span>
                    </button>
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Remove</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col p-4">
                <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#e4dddd] px-6 py-14">
                    <div className="flex max-w-[480px] flex-col items-center gap-2">
                        <p className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Upload Images</p>
                        <p className="text-[#171212] text-sm font-normal leading-normal max-w-[480px] text-center">Drag and drop images here, or click to browse</p>
                    </div>
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Upload</span>
                    </button>
                </div>
            </div>
            <div className="flex px-4 py-3 justify-end">
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e8b4b7] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Save Product</span>
                </button>
            </div>
        </CenterPageContentUi>
    </>;
};

export default AddProductPage;