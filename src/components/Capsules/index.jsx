import Capsule from "./Capsule";
import { useSelector } from "react-redux";
import { useGetAllCapsulesQuery } from "../../services/capsules";

export default function Capsules() {
  const { status, mission, reuseCount } = useSelector(
    (state) => state.capsules
  );

  const { data, isLoading } = useGetAllCapsulesQuery({
    status,
    mission,
    reuseCount,
  });

  function renderCapsules() {
    if (isLoading) {
      return <div className="">Loading</div>;
    } else if (!isLoading && data.length > 0) {
      return (
        <div className="grid grid-cols-4 gap-5">
          {data.map((capsule) => (
            <Capsule key={capsule.capsule_serial} capsule={capsule} />
          ))}
        </div>
      );
    } else if (!isLoading && data.length <= 0) {
      return <div>No items found</div>;
    }
  }

  return (
    <section className="">
      <div className="container">{renderCapsules()}</div>
    </section>
  );
}
