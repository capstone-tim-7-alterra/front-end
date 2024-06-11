import React, { useState, useRef, useEffect } from "react";
import IconLogOut from "../../assets/iconSidebar/iconLogOut.png";

export default function headerDashboard() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    handleClick("LogOut");
  };

  return (
    <>
      {/* relative jika ingin mengganti fixed */}
      <header className="fixed w-[1140px] h-[108px] left-[300px] bg-primary-100 shadow-custom-1 shadow-custom-2 flex justify-between pt-[0px] pr-[24px] pb-[0px] pl-[24px] z-40 font-poppins">
        <div className="flex items-center">
          <h2 className="w-[137px] h-[32px] text-2xl font-semibold text-secondary-50">
            Dashboard
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex items-center  w-[179px] h-[40px] gap-[8px] mx-auto">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex flex-row items-center w-full px-4 py-2 text-sm font-semibold">
                <span className="w-[99px] h-[21px] text-neutral-21 text-[14px] leading-[21px] font-semibold">
                  Admin Nanda
                </span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`inline w-[32px] h-[32px] gap-[1px] transition-transform duration-200 transform text-neutral-21 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}>
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
              {open && (
                <div
                  ref={wrapperRef}
                  className="absolute bg-primary-100 rounded-md mx-auto mt-[32px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] items-center right-6 shadow-custom-1 shadow-custom-2 ">
                  {/* Button Log Out */}
                  <div
                    className="flex w-[145px] h-[58px]  mx-auto items-center"
                    onClick={handleMenuClick}>
                    <a
                      href="#"
                      className="relative flex w-[167px] h-[24px] gap-[10px] mx-auto">
                      <div>
                        <img
                          src={IconLogOut}
                          alt="Button LogOut Icon"
                          className="w-[24px] h-[20px]"
                        />
                      </div>
                      <span className="text-base-100  w-[100px] h-[40px] text-[14px] font-semibold leading-3 mt-2">
                        Log Out
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
