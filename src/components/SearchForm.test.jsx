import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchForm from "./SearchForm";

describe("renders search form component", () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    capsules: {
      status: "",
      serial: "",
      reuseCount: "",
    },
  });

  it("renders the component", () => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });

  it("renders selectable dropdown", () => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    expect(screen.getByTestId("select")).toBeInTheDocument();
  });

  it("renders trending serials section", () => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    expect(screen.getByTestId("trending-serials")).toBeInTheDocument();
  });

  it("renders trending serial badge", () => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    expect(screen.getAllByTestId("serial")[0]).toBeInTheDocument();
  });
});
