import Capsule from "./Capsule";
import { useGetAllCapsulesQuery } from "../../services/capsules";

export default function Capsules() {
  const { data, isLoading } = useGetAllCapsulesQuery({status: 'active'});

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
