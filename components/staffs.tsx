"use client";

import { useStaffs } from "@/hooks/use-data";
import { Button } from "./ui/button";
import { useStaffStore } from "@/hooks/use-staff-store";

export const Staffs = () => {
  const { data } = useStaffs();
  const { setSelectedStaff, selectedStaff } = useStaffStore();

  return (
    <div className="border-r flex flex-col gap-2 p-2 border-neutral-200 w-56">
      {data?.map((item, index) => (
        <Button
          onClick={() => setSelectedStaff(item.user_id)}
          className="uppercase cursor-pointer"
          variant={selectedStaff === item.user_id ? "default" : "outline"}
          key={index}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};
