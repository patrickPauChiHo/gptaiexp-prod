import React from "react";
import ThemeToggle from "./ThemeToggle";
import { GiRobotGolem } from "react-icons/gi";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <GiRobotGolem className="w-10 h-10 text-primary" />
      <h2 className="text-lg font-extrabold text-primary mr-auto">
        GPATAIexperience
      </h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
