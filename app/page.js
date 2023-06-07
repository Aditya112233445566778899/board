import Image from "next/image";

import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import PieChart from "@/components/PieChart";
import LineChart from "@/components/LineChart";
import StatusCard from "@/components/StatusCard";
import ScheduleCard from "@/components/ScheduleCard";

const scheduleData = [
  {
    borderColor: "border-[#9BDD7C]",
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    description: "at Sunset Road, Kuta, Bali",
  },
  {
    borderColor: "border-[#6972C3]",
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    description: "at Central Jakarta",
  },
];

const statusCards = [
  {
    bgColor: "bg-tCardBg",
    iconName: "card-icon.svg",
    title: "Total Revenues",
    value: "$2,129,430",
  },
  {
    bgColor: "bg-tCardBg2",
    iconName: "transaction-icon.svg",
    title: "Total Transactions",
    value: "1,520",
  },
  {
    bgColor: "bg-tCardBg3",
    iconName: "thumbs-up-icon.svg",
    title: "Total Likes",
    value: "9,721",
  },
  {
    bgColor: "bg-tCardBg4",
    iconName: "users-icon.svg",
    title: "Total Users",
    value: "892",
  },
];

export default function Home() {
  const renderPieChat = () => (
    <div className="bg-white rounded-[20px] py-8 px-10 w-[480px]">
      <div className="flex w-full items-center mb-5">
        <p className="text-black font-bold text-lg flex-1">Top products</p>
        <button className="text-subTitle text-xs flex items-center gap-2">
          May - June 2021
          <Image
            alt="icon"
            src="assets/icons/right-cap-icon.svg"
            width={5}
            height={5}
            className="rotate-90"
          />
        </button>
      </div>
      <PieChart />
    </div>
  );

  const renderTodaySchedule = () => (
    <div className="bg-white rounded-[20px] py-8 px-10 w-[480px]">
      <div className="flex items-center">
        <p className="text-black font-bold text-lg flex-1">Today’s schedule</p>
        <button className="text-subTitle text-xs flex items-center gap-2">
          See All
          <Image
            alt="icon"
            src="assets/icons/right-cap-icon.svg"
            width={5}
            height={5}
          />
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {scheduleData.map((item) => (
          <ScheduleCard props={item} />
        ))}
      </div>
    </div>
  );

  const renderRightSideHeader = () => (
    <div className="flex items-center mb-10">
      <p className="flex-1 font-bold text-black text-xl">Dashboard</p>
      <Input
        placeholder="Search..."
        className="text-black bg-white"
        type="text"
        iconName="search-icon.svg"
        wrapperClassName="bg-white py-1"
      />
      <Image
        src="assets/icons/bell-icon.svg"
        alt="icon"
        width={20}
        height={20}
        className="mx-5"
      />
      <Image
        src="http://3.bp.blogspot.com/-As-olkkh0no/T1RWk2I53HI/AAAAAAAAQsI/vSU73goD6Jo/s1600/BEN10+18.jpg"
        alt="icon"
        width={30}
        height={30}
        className="rounded-full aspect-square object-cover"
      />
    </div>
  );

  const renderRightSideCard = () => (
    <div className="flex items-center justify-between">
      {statusCards.map(({ bgColor, iconName, title, value }) => (
        <StatusCard
          key={title}
          bgColor={bgColor}
          iconName={iconName}
          title={title}
          value={value}
        />
      ))}
    </div>
  );

  const renderChat = () => (
    <div className="my-10 py-8 px-10 bg-white rounded-[20px]">
      <div className="flex items-center w-full">
        <div className="flex-1">
          <p className="text-black font-bold text-lg flex-1">Activities</p>
          <button className="text-subTitle text-sm flex items-center gap-1 mt-1">
            May - June 2021
            <Image
              alt="icon"
              src="assets/icons/right-cap-icon.svg"
              width={5}
              height={5}
              className="rotate-90"
            />
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-[10px] mr-8">
            <div className="w-[10px] h-[10px] bg-[#E9A0A0] rounded-full" />
            <p className="text-black text-sm">Guest</p>
          </div>
          <div className="flex items-center gap-[10px] mr-8">
            <div className="w-[10px] h-[10px] bg-[#9BDD7C] rounded-full" />
            <p className="text-black text-sm">User</p>
          </div>
        </div>
      </div>
      <LineChart />
    </div>
  );

  const renderRightSideBottomPart = () => (
    <div className="flex justify-between mb-10">
      {renderPieChat()}
      {renderTodaySchedule()}
    </div>
  );

  const renderRightSidePart = () => (
    <div className="flex-1">
      {renderRightSideHeader()}
      {renderRightSideCard()}
      {renderChat()}
      {renderRightSideBottomPart()}
    </div>
  );

  return (
    <main className="w-full p-10 flex bg-backgroundColor gap-[60px]">
      <Navbar />
      {renderRightSidePart()}
    </main>
  );
}
