import Input from "./Input";
import down_arrow from "../assets/down-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeReuseCount,
  changeSerial,
  changeStatus,
} from "../features/capsulesSlice";

export default function SearchForm() {
  const { serial, reuseCount } = useSelector((state) => state.capsules);

  const dispatch = useDispatch();

  return (
    <section data-testId="search-form" className="relative py-[6.25rem]">
      <div className="container px-4">
        <div className="p-[1.875rem] bg-white rounded-lg -mt-[11.0625rem] w-[80%] mx-auto shadow-[0rem_1.875rem_1.875rem_rgba(0,0,0,0.1)]">
          <div className="flex gap-4 md:flex-row flex-col">
            <select
              data-testId="select"
              className="[appearance:none] [-webkit-appearance:none] [-moz-appearance:none] !bg-no-repeat !bg-right !bg-[1.5625rem,1.5625rem] border border-[#cecece] py-2 px-3 focus:outline-none rounded-md w-full focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#cecece]"
              onChange={(event) => dispatch(changeStatus(event.target.value))}
              style={{ background: `url('${down_arrow}')` }}
            >
              <option value="">Search by status</option>
              <option value="active">Active</option>
              <option value="retired">Retired</option>
              <option value="unknown">Unknown</option>
              <option value="destroyed">Destroyed</option>
            </select>
            <Input
              placeholder="Search by serial"
              value={serial}
              onChange={(event) => dispatch(changeSerial(event.target.value))}
            />
            <Input
              placeholder="Search by reuse count"
              value={reuseCount}
              onChange={(event) =>
                dispatch(changeReuseCount(event.target.value))
              }
            />
          </div>
          <div
            data-testId="trending-serials"
            className="mt-4 flex md:flex-row flex-col gap-4"
          >
            <div className="font-bold text-sm">Trending serials: </div>
            <div className="flex gap-4">
              <span
                data-testId="serial"
                onClick={() => dispatch(changeSerial('C101'))}
                className="text-xs font-medium border border-[#cecece] p-0.5 px-2.5 cursor-pointer"
              >
                C101
              </span>
              <span
                data-testId="serial"
                onClick={() => dispatch(changeSerial('C204'))}
                className="text-xs font-medium border border-[#cecece] p-0.5 px-2.5 cursor-pointer"
              >
                C204
              </span>
              <span
                data-testId="serial"
                onClick={() => dispatch(changeSerial('C212'))}
                className="text-xs font-medium border border-[#cecece] p-0.5 px-2.5 cursor-pointer"
              >
                C212
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
