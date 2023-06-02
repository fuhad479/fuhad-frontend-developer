import capsule_modal from "../../assets/capsule.webp";
import { ReactComponent as CrossIcon } from "../../assets/cross-icon.svg";
import { useGetCapsuleQuery } from "../../services/capsules";

export default function CapsuleModal({ capsuleId, setCapsuleId }) {
  const { data, isLoading } = useGetCapsuleQuery(capsuleId);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] z-0 after:-z-[1]">
      {isLoading ? (
        <div className="w-[60%] p-[30px] bg-white rounded-lg overflow-hidden shadow-xl z-0">
          Loading
        </div>
      ) : (
        <div className="w-[60%] bg-white rounded-lg overflow-hidden shadow-xl z-0">
          <div className="w-full h-[300px] relative">
            <img
              src={capsule_modal}
              alt="Capsule preview"
              className="w-full h-full object-cover"
            />
            <div className="after:absolute after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.3)]"></div>
            <button
              type="button"
              onClick={() => setCapsuleId("")}
              className="absolute top-[20px] right-[20px] w-[30px] h-[30px] flex items-center justify-center bg-[rgba(255,255,255,0.4)] rounded-full"
            >
              <CrossIcon width={20} height={20} strokeWidth={2} />
            </button>
          </div>
          <div className="p-[30px]">
            <h2 className="font-bold text-xl mb-[20px]">{data?.last_update}</h2>
            <div className="flex justify-between">
              <span className="font-medium">Serial number:</span>
              <span>{data?.serial}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Landed on land:</span>
              <span>{data?.land_landings} times</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Landed on water:</span>
              <span className="capitalize">{data?.water_landings}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total reused:</span>
              <span>{data?.reuse_count} times</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Current status:</span>
              <span className="capitalize">{data?.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Type:</span>
              <span className="capitalize">{data?.type}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
