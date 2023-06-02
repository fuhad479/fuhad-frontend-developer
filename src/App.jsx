import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import Capsules from "./components/Capsules";

function App() {
  return (
    <>
      <Banner />
      <SearchForm />
      <Capsules />
    </>
  );
}

export default App;

/* function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
 */
