


const Index = () => {
    return <>
        <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#171212] tracking-light text-[32px] font-bold leading-tight">Product Images</p>
                <p className="text-[#82686a] text-sm font-normal leading-normal">Manage and organize images for all your products.</p>
            </div>
        </div>
        <h3 className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Upload New Images</h3>
        <div className="flex flex-col p-4">
            <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#e4dddd] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                    <p className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Drag and drop images here</p>
                    <p className="text-[#171212] text-sm font-normal leading-normal max-w-[480px] text-center">Or click to browse your files</p>
                </div>
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Upload Images</span>
                </button>
            </div>
        </div>
        <h3 className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Existing Images</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi3yyukduLV9uqh9zHJkAe_C3XNy05LgxNZhiqqs4cBd-21yPogCqqQBt5-6u7zGmmZWfTIhicSI-FmbfbVgLwgz8Q9LP69CcxYhQIacSNn4kliM09tvBlpM6s_x8Eb06wwuQ1qVSs6KTpBHEThXJhqpU4Nqe-TKnNjkKhB6hDn3gXYw_BXjH5d6_X3oFuLBIwHP_jQJ6ITPpduFIfyS1PTAgVvUdMNjuzJTOCXH4tYoEujyNGWZEW-0o-1u62zldNj05vuPXB-Ww')" }}
                ></div>
            </div>
            <div className="flex flex-col gap-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBR_kd3pqbfKY8VT_vO--GDn_jrf637-8v6v4RkYkidqkwTt822VWyBAlNzeC-YW1NmtRH4cuwJa_z_kGTtEDids5Yj0ansDkBsFIharWWDEsLw2rlMi5zxnl4JhKyQo8vTCiUrCf7CqcBC6wOXSpzyhL_4JzdyTMVxSgaX-2moYz0tSMuFKG6JOpmot5vwJPzIjJ0-mb8767L6JJnwjbFiRLEHZqKmILSn-QsS9J9LvJqvErcqSFHL9ywkRLnLervEgZuiznl3kwM')" }}
                ></div>
            </div>
            <div className="flex flex-col gap-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDonEPVz06RQ9bssRbB_M7etYPuDsXitlGsJ0SvaVu_SbvnY0ICurEyFSrieeTK-rbnpe6N5DloaLuWo0eK9sxx583BoAT54kofHLMJlc0EE4IRXBO0pIA-lJkwiNEFFhDuduCOPxhoHqYCSnAwNgGopmv6NFKIIYtiuC6K16biiL4zniM1vgaSBqzEw9E6pPKufrpFa5zvkUNVOuoCm_qkx6X6NZVxTte05LPVSE7u5QxSeytcBZxly4mf5vf6IrXJfBRFmyx3Zuc')" }}
                ></div>
            </div>
            <div className="flex flex-col gap-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNgrbp5jiBQ3F3uRSrOlBd1A18iXfJOS4X575k5o-dd3eGQaqXSe3oRCPOLn7NpRSaqbVuga020za5BJxqMS0EiUlcEsoKQIcPyBocnmfrMHfewX2NxImL7NFPSs5LdRpQFGaKJM5Y2qT2OwS31Ca2GQM5pB65sj0NJnRrlyQv6QZOeI7fZMWoalbx0YWp-srCdvH8VN3H1A5h4pasBi0hdW-rA0qo4sks48z8VSpS-YQqmtF1PnXzXT_CLgD-LP8GfhwebOj0vOI')" }}
                ></div>
            </div>
            <div className="flex flex-col gap-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClIJoBqvHIgbDp6zMrnpUIF4esQF3hAEJKUbzojYaQZX_B0ChTnlHC3DJMktaZGtCWOXlJPPoiOnL98lj6zcUPd8z_yfN26R3g92nbXWWGpsSR3FWe_nuL_sV1dQlUDOijkGz6pvM2fjp93HaCBpQZx04biNijPIo63T47EwuM91g6dwLHkAJClm1xCCoQBU-MHPq_-NF5-CnmeyKV2ghU4jHXQzOBBOHoy3SqHOZRfvYwzna_JPM72bLlSz0d_R6qAGcF2bATZNk')" }}
                ></div>
            </div>
            <div className="flex flex-col gap-3">
                <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbXxKxLS0aqKN_-MVlhJZNeb19jdz4xtjDkXXnVAE2AC4YKLSWhOPlmEqepvaC30o91c57y2bdj7azYg9z41ZWAsrjWMJ6-TjkvnRwiz9cDCTMrLighWMVqoVMqywmeDncUNQ5kuTU4YUytc2jAlLhwlbDZbHJAgzqiYuoMaJy3FY28bi7J4C_7f5trt7XVXWHa-nDmWIJ9__-dKdQVczgjJd54_vviPf8nQI-wqLb4yeAYtZC9Oc1eNJYhWaiEpWFNQL8wAxRX4g')" }}
                ></div>
            </div>
        </div>
        <div className="flex items-center justify-center p-4">
            <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#171212]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                    </svg>
                </div>
            </a>
            <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#171212] rounded-full bg-[#f4f1f1]" href="#">1</a>
            <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#171212] rounded-full" href="#">2</a>
            <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#171212] rounded-full" href="#">3</a>
            <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#171212] rounded-full" href="#">4</a>
            <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#171212] rounded-full" href="#">5</a>
            <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#171212]" data-icon="CaretRight" data-size="18px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                </div>
            </a>
        </div>
    </>;
};

export default Index;
