interface WeekModel {
  date: string;
}

const Week = ({ date }: WeekModel) => {
  return (
    <div className="flex flex-col bg-[#1d1d1d] rounded-xl gap-32 p-6 text-xl">
      <div>{date}</div>
      <div className="grid grid-cols-2">
        <div className="text-[#5dbe74]">09:00</div>
        <div className="text-[#8f9b9d] justify-self-end">12:00</div>
        <div className="text-[#8f9b9d]">12:30</div>
        <div className="text-[#e1765a] justify-self-end">17:00</div>
      </div>
    </div>
  );
};

export default Week;
