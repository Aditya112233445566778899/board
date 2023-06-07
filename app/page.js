import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScheduleCard from "@/components/ScheduleCard";
import StatusCard from "@/components/StatusCard";
import Chart from "@/components/Chart";

export default function Home() {
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

  const renderTodaySchedule = () => (
    <div className="bg-white rounded-[20px] py-8 px-10 w-[480px]">
      <div className="flex w-full items-center">
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
      <div className="flex flex-col gap-3 mt-4">
        {scheduleData.map((item) => (
          <ScheduleCard props={item} />
        ))}
      </div>
    </div>
  );

  const renderSearchBar = () => (
    <div className="flex items-center py-3 px-4 bg-white rounded-[10px] mr-3">
      <input
        placeholder="Search..."
        className="bg-white placeholder:text-placeholderColor text-sm outline-none"
      />
      <Image src="assets/icons/search-icon.svg" width={12} height={12} />
    </div>
  );

  const renderRightSideHeader = () => (
    <div className="flex items-center mb-10">
      <p className="flex-1 font-bold text-black text-xl">Dashboard</p>
      {renderSearchBar()}
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
    <div>
      <Chart />
    </div>
  );

  const renderRightSideBottomPart = () => (
    <div className="flex items-center justify-between">
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
    <main className="p-10 flex items-start gap-[60px] w-full bg-backgroundColor">
      <Navbar />
      {renderRightSidePart()}
    </main>
  );
}
