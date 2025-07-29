import CenterPageContentUi from "../ui/page/CenterPageContentUi";

const ProductDetailsPage = () => {
    return <>
        <CenterPageContentUi>
            <div className="flex flex-wrap gap-2 p-4">
                <a className="text-[#886364] text-base font-medium leading-normal" href="#">Products</a>
                <span className="text-[#886364] text-base font-medium leading-normal">/</span>
                <span className="text-[#181111] text-base font-medium leading-normal">Product Details</span>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight">Product Details</p>                
                </div>
            </div>
            <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqSUX_EUSIzWIN6jcynOwflacWBQ34XXDdFwLYQY3aOWcJcn2iyC1rohuEc5BqT5Sg1NFCYfNpD_aJIIV8SpIoYaez9ejjw9m00b-vX4iZm-dcM2nq8bvjp97je7AowdVrlaCqHH_EEJ9n8dQCO75qnQx4evOX09fod8jxepPbI7D9Buux2d3yjJ1_OPzOr-lFQhK5VwQApgvo9DGaSEcx3dpV8-WTJ5Yu0-lbZdOyaTvhAJVVp0VQGdJDLVpUoa4ShAT3Pl_YJjw')"}}
                    ></div>
                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                        <p className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em]">Elegant Summer Dress</p>
                        <div className="flex items-end gap-3 justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="text-[#886364] text-base font-normal leading-normal">
                                    A beautiful summer dress made from lightweight cotton, perfect for warm weather. Available in multiple sizes and colors.
                                </p>
                                <p className="text-[#886364] text-base font-normal leading-normal">SKU: 1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Product Information</h2>
            <div className="p-4 grid grid-cols-2">
                <div className="flex flex-col gap-1 border-t border-solid border-t-[#e5dcdc] py-4 pr-2">
                    <p className="text-[#886364] text-sm font-normal leading-normal">Product Name</p>
                    <p className="text-[#181111] text-sm font-normal leading-normal">Elegant Summer Dress</p>
                </div>
                <div className="flex flex-col gap-1 border-t border-solid border-t-[#e5dcdc] py-4 pl-2">
                    <p className="text-[#886364] text-sm font-normal leading-normal">Description</p>
                    <p className="text-[#181111] text-sm font-normal leading-normal">
                        A beautiful summer dress made from lightweight cotton, perfect for warm weather. Available in multiple sizes and colors.
                    </p>
                </div>
                <div className="flex flex-col gap-1 border-t border-solid border-t-[#e5dcdc] py-4 pr-2">
                    <p className="text-[#886364] text-sm font-normal leading-normal">Price</p>
                    <p className="text-[#181111] text-sm font-normal leading-normal">$49.99</p>
                </div>
                <div className="flex flex-col gap-1 border-t border-solid border-t-[#e5dcdc] py-4 pl-2">
                    <p className="text-[#886364] text-sm font-normal leading-normal">Category</p>
                    <p className="text-[#181111] text-sm font-normal leading-normal">Dresses</p>
                </div>
                <div className="flex flex-col gap-1 border-t border-solid border-t-[#e5dcdc] py-4 pr-2">
                    <p className="text-[#886364] text-sm font-normal leading-normal">Brand</p>
                    <p className="text-[#181111] text-sm font-normal leading-normal">Fashion Brand</p>
                </div>
                <div className="flex flex-col gap-1 border-t border-solid border-t-[#e5dcdc] py-4 pl-2">
                    <p className="text-[#886364] text-sm font-normal leading-normal">Stock</p>
                    <p className="text-[#181111] text-sm font-normal leading-normal">In Stock (100 units)</p>
                </div>
                <div className="flex flex-col gap-1 border-t border-solid border-t-[#e5dcdc] py-4 pr-2">
                    <p className="text-[#886364] text-sm font-normal leading-normal">Sizes</p>
                    <p className="text-[#181111] text-sm font-normal leading-normal">S, M, L, XL</p>
                </div>
                <div className="flex flex-col gap-1 border-t border-solid border-t-[#e5dcdc] py-4 pl-2">
                    <p className="text-[#886364] text-sm font-normal leading-normal">Colors</p>
                    <p className="text-[#181111] text-sm font-normal leading-normal">Blue, White, Yellow</p>
                </div>
            </div>
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Product Images</h2>
            <div className="flex w-full grow bg-white @container p-4">
                <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-xl grid grid-cols-[2fr_1fr_1fr]">
                    <div
                        className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBL0Ufu9Knxi2-0zyQdELDKFWnbiWGgtJePyRyu6NvIdMa54P5GL3XeWYmLxQy-HzLD4j0mej_NtRw8fn5lag6YJQFRTFauBZTaGnSH-rJFrxOgt_gmrji1r0oR-2Y4222FfxwYBb1sz1dENMW9agKxFeKb9wz1SzZsp9gyCxyvJLRop45dQf7THUnY_NLZA9DWCaV6SwViLQRICgCjqHidhVAElHLskkCs-E1oJ17rbzuWglFUDyHbwlBQ6Q6EJugLcEXV1q98uLQ')"}}
                    ></div>
                    <div
                        className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBc-GMfXWpVmoE2YmZx090m23V5TFgwiMRoY3bTRcrKoVyr0qiRCdjZ5rsHJNoXBMyYO7MrdPoMo1cOEQlwSvtDzjWcRNOOHIhcVZbyqpl4iNQ_VJeilruceWlYXmc158MeM8HQoP83t1_Sp8X-touhOnlIV_qm5hLPGXeryRv5cyztKzTfq9cz4Cw9Qsuc8DRFTEfvsQnz9ANPwYG2fawVLHijLHhZ-IZefWRrxreplNY_up4dLRdKotkVwyAFaZac3bl7CCAX4YA')"}}
                    ></div>
                    <div
                        className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCi8yHtd830JxwPhOVXLga6aHxdk51nB8aTjzE16DplqCoFT05zXDVoR6_VManC98ObslN93MQNi9uK9Z_aaJwUdpGi-iNjj_qONKNSTLKwsPdiqckgrLfUNyZEpCo3BVX8C4E-6aEf4H-0WXhJ6K6ubQ5sZIhinDtRigl4QQijQM7EiQdPIfVcX8panS9dTd88V4fZc0wJ3XjpW3v2OOWOx56ay67CdK2UoaQ7QTlSuR5686qiOD_GGkLrT-epEYyQ17Phtr-bAIQ')"}}
                    ></div>
                </div>
            </div>
            <div className="flex justify-stretch">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f0f0] text-[#181111] text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Edit Product</span>
                    </button>
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e82630] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Update Product</span>
                    </button>
                </div>
            </div>
        </CenterPageContentUi>
    </>;
};

export default ProductDetailsPage;