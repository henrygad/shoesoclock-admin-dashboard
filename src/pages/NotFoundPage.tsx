import CenterPageContentUi from "../ui/page/CenterPageContentUi";

const NotFoundPage = () => {
  return <>
    <CenterPageContentUi>
      <div className="flex flex-col px-4 py-6">
        <div className="flex flex-col items-center gap-6">
          <div
            className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl w-full max-w-[360px]"
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaTujZsU2AfzN06hDPvbv70l26Av_qvEfinZmqHP_R0UGjk8ICYttaoEUmqxV3qTOLGTq0PWbq_8RQXTrcbpxCN991WxCgdnDw5iIS4Gd1Ri0dnK2YebAqY52M4DYd61nUIoqHNVtVGOC7f0OXYrDqXb_T0YYw7pXgZ94l_nsPgJB_jMHDnaZqQWjeH4mUzA9YpQxW97Qa9TBCxrbprzxLktoBJ70ZqNs0RKd2_tNvGvwGBSbiUXBFHjgSRjEj_zCJKOfYBB67rl4')"}}
          ></div>
          <div className="flex max-w-[480px] flex-col items-center gap-2">
            <p className="text-[#171212] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Page Not Found</p>
            <p className="text-[#171212] text-sm font-normal leading-normal max-w-[480px] text-center">
              The page you are looking for does not exist or has been moved. Please check the URL or use the navigation to find your way back.
            </p>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f1f1] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Go to Dashboard</span>
          </button>
        </div>
      </div>
    </CenterPageContentUi>
  </>;
};

export default NotFoundPage;
