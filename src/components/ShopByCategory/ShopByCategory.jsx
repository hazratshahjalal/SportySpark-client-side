import { useState } from "react";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" text-center py-12">
      <h2 className="text-5xl font-semibold text-center pb-6">Shop By Category</h2>
      <div className="container bg-white mx-auto w-2/3 py-6">
        <div className="tabs flex justify-around tab-bordered">
          <div
            onClick={() => handleTabClick('sportsEquipment')}
            className={`tab text-2xl text-balck font-semibold sportsEquipment ${activeTab == 'sportsEquipment' ? 'bg-orange-300 text-bold text-black' : ""
              }`}
          >
            Sports Equipment
          </div>
          <div
            onClick={() => handleTabClick('remoteControl')}
            className={`tab text-2xl text-balck font-semibold sportsEquipment ${activeTab == 'remoteControl' ? 'bg-orange-300  text-bold text-black' : ""
              }`}
          >Remote Control Toys</div>
          <div
            onClick={() => handleTabClick('sportsGear')}
            className={`tab text-2xl text-balck font-semibold sportsEquipment ${activeTab == 'sportsGear' ? 'bg-orange-300 text-bold text-black' : ""
              }`}
          >Sports Gear</div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
