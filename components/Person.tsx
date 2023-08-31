interface PersonModel {
  name: string;
}

const Person = ({ name }: PersonModel) => {
  return (
    <div className="">
      <div className="text-2xl font-semibold">
        <div>{name}</div>
      </div>
      <div className="grid grid-cols-6">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>

        <div className="flex justify-between border p-2 rounded-lg">
          <div className="">09:30</div>
          <div className="">30</div>
          <div className="">17:00</div>
        </div>

        <div className="flex justify-between border p-2 rounded-lg">
          <div className="">09:30</div>
          <div className="">30</div>
          <div className="">17:00</div>
        </div>
      </div>
    </div>
  );
};

export default Person;
