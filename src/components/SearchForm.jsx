import { useState } from "react";
import Input from "./Input";

export default function SearchForm() {
  // these states represent search filter's values
  const [status, setStatus] = useState("");
  const [mission, setMission] = useState("");
  const [reuseCount, setReuseCount] = useState("");

  // this function will submit the form
  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("form submitted");
  }

  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="border p-[30px] rounded-md">
          <h2 className="text-4xl font-bold mb-8">
            Find Your Space Capsule: Explore SpaceX’s Mission-Specific Data
          </h2>
          <form className="flex gap-2" onSubmit={onSubmitHandler}>
            <Input
              placeholder="Status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            />
            <Input
              placeholder="Mission"
              value={mission}
              onChange={(event) => setMission(event.target.value)}
            />
            <Input
              placeholder="Reuse count"
              value={reuseCount}
              onChange={(event) => setReuseCount(event.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white font-semibold rounded-md px-4">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
