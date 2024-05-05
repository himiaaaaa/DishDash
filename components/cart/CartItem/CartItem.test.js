import React from "react";
import { render } from "@testing-library/react-native";
import OrderItem from "./CartItem.js";

describe("OrderItem component", () => {
  it("renders the item correctly", () => {
    
    const mockItem = {
      title: "Test Item",
      price: "$10.99",
    };

    const { getByText } = render(<OrderItem item={mockItem} />);

    const titleElement = getByText(mockItem.title);
    expect(titleElement).toBeTruthy();
    expect(titleElement.props.children).toBe(mockItem.title);

    const priceElement = getByText(mockItem.price);
    expect(priceElement).toBeTruthy();
    expect(priceElement.props.children).toBe(mockItem.price);
  });
});
