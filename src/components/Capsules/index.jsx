import Capsule from "./Capsule";
import Pagination from "rc-pagination";
import CapsuleModal from "./CapsuleModal";
import right_arrow from "../../assets/right-arrow.svg";
import left_arrow from "../../assets/left-arrow.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllCapsulesQuery } from "../../services/capsules";

export default function Capsules() {
  const [capsule, setCapsule] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [capsules, setCapsules] = useState([]);

  const { status, mission, reuseCount } = useSelector(
    (state) => state.capsules
  );

  const { data, isLoading } = useGetAllCapsulesQuery({
    status,
    mission,
    reuseCount,
  });

  useEffect(() => {
    if (!isLoading && currentPage === 1) {
      setCapsules(data?.slice(0, 8));
    } else if (!isLoading && currentPage === 2) {
      setCapsules(data?.slice(8, 16));
    } else if (!isLoading && currentPage === 3) {
      setCapsules(data?.slice(16, -1));
    }
  }, [isLoading, currentPage, data]);

  function renderCapsules() {
    if (isLoading) {
      return <div className="">Loading</div>;
    } else if (!isLoading && data.length > 0) {
      return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
          {capsules?.map((capsule) => (
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
    <section className="pb-[100px]">
      <div className="container px-4">
        {renderCapsules()}
        <Pagination
          pageSize={8}
          current={currentPage}
          total={data?.length}
          hideOnSinglePage={true}
          onChange={(currentPage) => setCurrentPage(currentPage)}
          nextIcon={<img src={right_arrow} alt="Next icon" />}
          prevIcon={<img src={left_arrow} alt="Previous icon" />}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: '30px',
          }}
        />
      </div>
      {capsule !== "" && (
        <CapsuleModal capsule={capsule} setCapsule={setCapsule} />
      )}
    </section>
  );
}
