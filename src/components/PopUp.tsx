import { useBoolean } from "../stores/useBoolean.ts";

const PopUp = () => {
  const { boolean } = useBoolean();

  return (
    <>
      {boolean && (
        <div className="w-1/3 text-left border p-4">
          If you accidentally close this website, your answers will be deleted.
          If you want to save the answers and see it again next year, a login is
          requirement.
        </div>
      )}
    </>
  );
};

export default PopUp;
