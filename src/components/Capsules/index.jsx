/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import { useGetCapsulesMutation } from "../../services/capsules";
import { useSelector } from "react-redux";
import Pagination from "rc-pagination";
import Capsule from "./Capsule";
import CapsuleModal from "./CapsuleModal";

export default function Capsules() {
  const [capsuleId, setCapsuleId] = useState("");

  const { serial, status, reuseCount } = useSelector((state) => state.capsules);

  const [getCapsules, { data: capsules, isLoading, isSuccess }] =
    useGetCapsulesMutation();

  useEffect(() => {
    getCapsules({ page: 1, serial, status, reuse_count: reuseCount });
  }, [serial, status, reuseCount]);

  function renderCapsules() {
    if (isLoading) {
      return <div>Loading capsules</div>;
    } else if (!isLoading && isSuccess) {
      return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {capsules?.docs?.map((capsule) => (
            <Capsule
              key={capsule.id}
              capsule={capsule}
              setCapsuleId={setCapsuleId}
            />
          ))}
        </div>
      );
    } else if (!isLoading && !isSuccess) {
      return <div>Failed to load capsules</div>;
    } else if (!isLoading && capsules.length < 0) {
      return <div>Couldn't find any capsule</div>;
    }
  }

  return (
    <section className="pb-[100px]">
      <div className="container px-4">
        {renderCapsules()}
        <Pagination
          hideOnSinglePage={true}
          current={capsules?.page}
          pageSize={8}
          onChange={(page) => getCapsules({ page })}
          nextIcon={<RightArrow width={20} height={20} />}
          prevIcon={<LeftArrow width={20} height={20} />}
          total={capsules?.totalDocs}
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "50px",
          }}
        />
      </div>
      {capsuleId !== "" && (
        <CapsuleModal capsuleId={capsuleId} setCapsuleId={setCapsuleId} />
      )}
    </section>
  );
}
