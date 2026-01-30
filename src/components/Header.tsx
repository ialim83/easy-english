import { FaBookReader } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
function Header() {
  return (
    <div className="py-2 px-2 md:px-0 w-[85%] mx-auto md:flex items-center justify-between hidden">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-yellow-400 ">
            <FaBookReader size={40} />
          </div>
          <div className="font-bold text-yellow-400 tracking-widest">*ASM*</div>
        </div>

        <div className="">
          <h1 className=" text-green-500 text-xl md:text-3xl dark:text-slate-400 heading2">
            ASM English Academy
          </h1>
          <div className="dark:text-slate-400 ">
            <ul className="flex flex-row gap-1 items-center">
              <li>
                <a href="tel:+8801860060068">
                  <MdLocalPhone />
                </a>
              </li>
              <li>
                <a href="tel:+8801860060068">01860060068/ </a>
              </li>
              <li>
                <a href="tel:+8801751337773">01751337773</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <img
          src="/man.jpg"
          alt=""
          className="w-24 h-24 rounded-full border border-slate-500 "
        />
      </div>
    </div>
  );
}

export default Header;
