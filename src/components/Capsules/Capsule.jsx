import PropTypes from "prop-types";
import Badge from "../Badge";
import default_image from "../../assets/default-capsule.jpg";

export default function Capsule({ capsule }) {
  return (
    <div className="border rounded-md relative">
      <img
        src={capsule.image ? capsule.image : default_image}
        alt="Capsule thumbnail"
        className="overflow-hidden rounded-t-md"
      />
      <Badge status={capsule.status} />
      <div className="p-3">
        <div className="flex gap-2 mb-2 border-b pb-2">
          <div className="text-sm">
            <span className="font-medium">Name:</span>{" "}
            <span>{capsule.capsule_serial}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Mission:</span>{" "}
            <span>{capsule?.missions[0]?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Landings:</span>{" "}
            <span>{capsule.landings}</span>
          </div>
        </div>
        <p>{capsule.details}</p>
      </div>
    </div>
  );
}

Capsule.propTypes = {
  capsule: PropTypes.object.isRequired,
};
