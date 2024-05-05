import React from "react";
import { render } from "@testing-library/react-native";
import SearchBar from "./SearchBar.js"
describe("SearchBar component", () => {
  
  it("renders correctly", () => {

    const { getByPlaceholderText, getByTestId } = render(
      <SearchBar setCity={() => {}} />
    )
    
    const inputElement = getByPlaceholderText("Search location");
    expect(inputElement).toBeTruthy()

    const leftButton = getByTestId("location-icon");
    expect(leftButton).toBeTruthy()

    const rightButton = getByTestId("search-icon");
    expect(rightButton).toBeTruthy()

  });
});

