import PropTypes from "prop-types";
import cross_icon from "../../assets/cross-icon.svg";
import default_image from "../../assets/default-capsule.jpg";
import { useGetCapsuleByNameQuery } from "../../services/capsules";

export default function CapsuleModal({ capsule, setCapsule }) {
  const { data, isLoading } = useGetCapsuleByNameQuery(capsule);

  console.log(data);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
      <div className="bg-white p-4 relative rounded-md md:max-w-[400px] md:max-w-full w-[70%]">
        <img
          src={cross_icon}
          alt="Cross icon"
          width={25}
          height={25}
          className="absolute -right-[35px] cursor-pointer"
          onClick={() => setCapsule("")}
        />
        {isLoading ? (
          "Loading"
        ) : (
          <div className="">
            <img
              src={default_image}
              width={400}
              height={300}
              alt="Capsule image"
              className="rounded-md mb-3"
            />
            <p className="mb-3">{data.details}</p>
            <div className="flex justify-between">
              <span className="font-bold">Name:</span>{" "}
              <span>{data.capsule_serial}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Landings:</span>{" "}
              <span>{data.landings}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Original launch:</span>{" "}
              <span>{`${new Date(data.original_launch).getDate()}/${new Date(
                data.original_launch
              ).getMonth()}/${new Date(
                data.original_launch
              ).getFullYear()}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Launch unix:</span>{" "}
              <span>{data.original_launch_unix}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Reuse count:</span>{" "}
              <span>{data.reuse_count}</span>
            </div>
            {data?.missions?.map((mission, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span className="font-bold">Mission:</span>{" "}
                  <span>{mission.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Flight:</span>{" "}
                  <span>{mission.flight}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

CapsuleModal.propTypes = {
  capsule: PropTypes.string.isRequired,
  setCapsule: PropTypes.func.isRequired,
};
