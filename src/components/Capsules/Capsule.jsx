import capsule_image from "../../assets/capsule.webp";
import Badge from "./Badge";

export default function Capsule({ capsule, setCapsuleId }) {
  return (
    <div
      data-testId="capsule"
      onClick={() => setCapsuleId(capsule.id)}
      className="border border-[#cecece] rounded-md overflow-hidden cursor-pointer hover:scale-[1.05] shadow-[0px_0px_30px_rgba(0,0,0,0.1)] transition duration-300"
    >
      <img src={capsule_image} alt="Capsule preview" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold">{capsule.serial}</h3>
          <Badge capsuleStatus={capsule.status} />
        </div>
        <h2 className="">{capsule.last_update}</h2>
      </div>
    </div>
  );
}
