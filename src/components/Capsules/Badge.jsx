import { useEffect, useState } from "react";

export default function Badge({ capsuleStatus }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (capsuleStatus === "retired") {
      setColor("bg-blue-100 text-blue-800");
    } else if (capsuleStatus === "unknown") {
      setColor("bg-yellow-100 text-yellow-800");
    } else if (capsuleStatus === "active") {
      setColor("bg-green-100 text-green-800");
    } else if (capsuleStatus === "destroyed") {
      setColor("bg-red-100 text-red-800");
    }
  }, [capsuleStatus]);

  return (
    <span
      data-testId="badge"
      className={`${color} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full capitalize`}
    >
      {capsuleStatus}
    </span>
  );
}
