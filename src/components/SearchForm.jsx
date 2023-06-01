import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  changeMission,
  changeReuseCount,
} from "../features/capsulesSlice";
import Input from "./Input";

export default function SearchForm() {
  const dispatch = useDispatch();

  const { status, mission, reuseCount } = useSelector(
    (state) => state.capsules
  );

  // this function will submit the form
  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("form submitted");
  }

  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="border p-[30px] rounded-md shadow-[0_0_50px_rgba(0,0,0,0.1)]">
          <h2 className="text-4xl font-bold mb-8">
            Find Your Space Capsule: Explore SpaceX’s Mission-Specific Data
          </h2>
          <form className="flex gap-2" onSubmit={onSubmitHandler}>
            <select
              onChange={(event) => dispatch(changeStatus(event.target.value))}
              defaultValue={status}
              className="border w-full focus:outline-none rounded-md p-4"
            >
              <option value="">Select a status</option>
              <option value="active">Active</option>
              <option value="retired">Retired</option>
              <option value="unknown">Unknown</option>
              <option value="destroyed">Destroyed</option>
            </select>
            <Input
              placeholder="Mission"
              value={mission}
              onChange={(event) => dispatch(changeMission(event.target.value))}
            />
            <Input
              placeholder="Reuse count"
              value={reuseCount}
              onChange={(event) =>
                dispatch(changeReuseCount(event.target.value))
              }
            />
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold rounded-md px-4"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
