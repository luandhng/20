interface StaffModel {
  name: string;
}

const Staff = ({ name }: StaffModel) => {
  return (
    <div className="hover:bg-[#855ae1] hover:text-black cursor-pointer rounded-xl py-3 text-xl bg-[#1d1d1d] text-center">
      {name}
    </div>
  );
};

export default Staff;
