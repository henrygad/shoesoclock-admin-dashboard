import { useAppDispatch } from "../store";
import { login } from "../store/slices/userSlice";

const LoginPage = () => {
  const appDispatch = useAppDispatch();
  const handleLoginForm = (e: React.FormEvent) => {
    e.preventDefault();
    appDispatch(login({ email: "henrygad.orji@gmail.com" }));
  };


  return <div className="relative font-main size-full h-screen flex flex-col bg-white group/design-root overflow-hidden">
    <div className="layout-container flex-1 flex h-full grow flex-col">
      <header className="border-b border-solid border-b-[#f4f0f0] px-10 py-3">
      </header>
      <main className="flex-1 flex overflow-hidden">
        <div className="flex flex-1 justify-center py-4 sm:py-6">
          <div className="flex flex-col max-w-[960px] flex-1">
           {/*  <h2 className="text-[#171212] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Welcome back
            </h2>
            <img src="" alt="" />
            <form
              onSubmit={handleLoginForm}
            >
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#171212] text-base font-medium leading-normal pb-2">
                    Username
                  </p>
                  <input
                    placeholder="Enter your username"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-14 placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                    value=""
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#171212] text-base font-medium leading-normal pb-2">
                    Password
                  </p>
                  <input
                    placeholder="Enter your password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-14 placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                    value=""
                  />
                </label>
              </div>
              <div className="flex px-4 py-3">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#e8b4b7] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Login</span>
                </button>
              </div>
            </form>
            <p className="text-[#82686a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
              Forgot Password?
            </p> */}
          </div>
        </div>
      </main>
      <footer className="w-full flex items-center overflow-hidden">

      </footer>
    </div>
  </div>;
};

export default LoginPage;
