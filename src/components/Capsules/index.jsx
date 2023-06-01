import Capsule from "./Capsule";
import Pagination from "rc-pagination";
import CapsuleModal from "./CapsuleModal";
import right_arrow from "../../assets/right-arrow.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllCapsulesQuery } from "../../services/capsules";

export default function Capsules() {
  const [capsule, setCapsule] = useState("");

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
            <Capsule
              key={capsule.capsule_serial}
              capsule={capsule}
              onClick={() => setCapsule(capsule.capsule_serial)}
            />
          ))}
        </div>
      );
    } else if (!isLoading && data.length <= 0) {
      return <div>No items found</div>;
    }
  }

  return (
    <section className="">
      <div className="container">
        {renderCapsules()}
        <Pagination
          pageSize={8}
          total={data?.length}
          hideOnSinglePage={true}
          nextIcon={<img src={right_arrow} alt="Next icon" />}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        />
      </div>
      {capsule !== "" && <CapsuleModal capsule={capsule} setCapsule={setCapsule} />}
    </section>
  );
}
