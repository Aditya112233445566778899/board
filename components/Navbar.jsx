import { memo } from "react";

import Image from "next/image";
import Link from "next/link";

import cx from "classnames";

function Navbar() {
  const navBarItems = [
    {
      title: "Dashboard",
      iconPath: "assets/icons/dashboard-icon.svg",
      path: "/",
    },
    {
      title: "Transactions",
      iconPath: "assets/icons/transactions-icon.svg",
      path: "",
    },

    {
      title: "Schedules",
      iconPath: "assets/icons/schedule-icon.svg",
      path: "",
    },
    { title: "Users", iconPath: "assets/icons/user-icon.svg", path: "" },
    {
      title: "Settings",
      iconPath: "assets/icons/setting-icon.svg",
      path: "",
    },
  ];

  return (
    <nav className="bg-black rounded-[30px] py-[60px] pl-[50px] flex flex-col items-start grow-1">
      <p className="text-white font-bold text-4xl mb-[60px] w-72">Board.</p>
      <div className="flex-1">
        {navBarItems.map(({ title, iconPath, path }) => (
          <Link
            href={path}
            className="flex items-center gap-5 mb-10"
            key={title}
          >
            <Image src={iconPath} alt="icon" width={18} height={18} />
            <p className={cx("text-lg text-white", path && "font-bold")}>
              {title}
            </p>
          </Link>
        ))}
      </div>
      <p className="text-white text-sm mb-5">Help</p>
      <p className="text-white text-sm">Contact Us</p>
    </nav>
  );
}

export default memo(Navbar);
