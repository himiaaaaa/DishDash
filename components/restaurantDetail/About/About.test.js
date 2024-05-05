import React from "react";
import { render } from "@testing-library/react-native";
import About from "./About.js";

describe("About component", () => {
  const mockRestaurant = {
    name: "Test Restaurant",
    image_url: "https://example.com/test_image.jpg",
    rating: 4.5,
    categories: [
      { title: "Category 1" },
      { title: "Category 2" },
    ],
  };

  const mockRoute = {
    params: {
      restaurant: mockRestaurant,
    },
  };

  it("renders correctly", () => {

    const { getByText, getByTestId } = render(
      <About route={mockRoute} />
    );

    const imageElement = getByTestId("restaurant-image");
    expect(imageElement.props.source.uri).toBe(mockRestaurant.image_url);

    expect(getByText(mockRestaurant.name)).toBeTruthy();

    const ratingStarText = `• ${mockRestaurant.rating} ⭐`;
    expect(getByText(ratingStarText)).toBeTruthy();

    mockRestaurant.categories.forEach((category) => {
      expect(getByText(category.title)).toBeTruthy();
    });
  });
});
