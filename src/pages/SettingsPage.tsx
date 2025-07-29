import CenterPageContentUi from "../ui/page/CenterPageContentUi";


const SettingsPage = () => {
  return <>
    <CenterPageContentUi>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight">Settings</p>
          <p className="text-[#886364] text-sm font-normal leading-normal">Manage your store settings</p>
        </div>
      </div>
      <div className="pb-3">
        <div className="flex border-b border-[#e5dcdc] px-4 gap-8">
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#181111] text-[#181111] pb-[13px] pt-4" href="#">
            <p className="text-[#181111] text-sm font-bold leading-normal tracking-[0.015em]">General</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#886364] pb-[13px] pt-4" href="#">
            <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">Payments</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#886364] pb-[13px] pt-4" href="#">
            <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">Shipping</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#886364] pb-[13px] pt-4" href="#">
            <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">Taxes</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#886364] pb-[13px] pt-4" href="#">
            <p className="text-[#886364] text-sm font-bold leading-normal tracking-[0.015em]">Notifications</p>
          </a>
        </div>
      </div>
      <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Store details</h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Store name</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Store email</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Store phone</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Store address</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Store currency</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Store branding</h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Store logo</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Store favicon</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Store policies</h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Return policy</p>
          <textarea
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] min-h-36 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Shipping policy</p>
          <textarea
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] min-h-36 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#181111] text-base font-medium leading-normal pb-2">Terms of service</p>
          <textarea
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] min-h-36 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div className="flex px-4 py-3 justify-end">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Save changes</span>
        </button>
      </div>
    </CenterPageContentUi>
  </>;
};

export default SettingsPage;
