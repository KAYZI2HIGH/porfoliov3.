"use client";
import { useTheme } from "next-themes";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loading = () => {
  const { theme } = useTheme();
  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-white/5 backdrop-blur-sm">
      <ClimbingBoxLoader
        color={theme === "light" ? "#000000" : "#ffffff"}
        size={15}
      />
    </div>
  );
};

export default Loading;
