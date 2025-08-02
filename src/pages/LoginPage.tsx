import { useAppDispatch } from "../store";
import { login } from "../store/slices/userSlice";
import CenterPageContentUi from "../ui/page/CenterPageContentUi";
import Image from "../assets/images/bethora-logo.png";
const LoginPage = () => {
  const appDispatch = useAppDispatch();
  const handleLoginForm = (e: React.FormEvent) => {
    e.preventDefault();
    appDispatch(login({ email: "henrygad.orji@gmail.com" }));
  };
  return (
    <>
      <CenterPageContentUi>
      
      <div className="flex items-center justify-center min-h-screen">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-auto items-center   bg-white rounded-xl shadow-xl   
justify-center   place-items-center 
  max-w-[987px]

  ">

     <div className="m-auto  ">  
   
        <div className=" ">

        <form 
          onSubmit={handleLoginForm}
        >
                  <h2 className=" text-[#171212] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Welcome back   
        </h2> 
          <div className=" max-w-[480px] items-end gap-4 px-4 py-3">
            <label className=" min-w-40 ">
              <p className="text-[#171212] text-base font-medium leading-normal pb-2">
                Username
              </p>
              <input
                placeholder="Enter your username"
                className="form-input  w-full min-w-100  resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-14 placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div className=" max-w-[480px]  items-end gap-4 px-4 py-3">
            <label className=" min-w-40 ">
              <p className="text-[#171212] text-base font-medium leading-normal pb-2">
                Password
              </p>
              <input
                placeholder="Enter your password"
                className="form-input  w-full min-w-100   resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f1] focus:border-none h-14 placeholder:text-[#82686a] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div className=" px-4 py-3">
     <button className=" min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4  bg-[#f4f1f1] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Login</span>
            </button>
          </div>
        </form>
        <p className="text-[#82686a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
          Forgot Password?
        </p>

    </div>

</div>
   
     <img src={Image} alt="Bethora Logo"  />
       </div> 
       </div>
      </CenterPageContentUi>
    </>
  );
};

export default LoginPage;
