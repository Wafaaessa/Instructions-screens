import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen/HomeScreen"; 

describe("HomeScreen", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<HomeScreen />);
    const title = getByText(/Welcome To StorkyApp/i);
    expect(title).toBeTruthy();
  });

  it("renders the description correctly", () => {
    const { getByText } = render(<HomeScreen />);
    const description = getByText(/Lorem ipsum dolor sit amet/i); 
    expect(description).toBeTruthy();
  });

  it("renders the image correctly", () => {
    const { getByTestId } = render(<HomeScreen />);
    const image = getByTestId("home-screen-image"); 
    expect(image).toBeTruthy();
  });

  it("handles 'Get Started' button press", () => {
    const { getByText } = render(<HomeScreen />);
    const button = getByText("Get Started");
    fireEvent.press(button);
  });

  it("shows correct image and description based on currentPage", () => {
    const { getByText, getByTestId } = render(<HomeScreen />);
    const description = getByText(/Lorem ipsum dolor sit amet/i); 
    const image = getByTestId("home-screen-image");

    expect(description).toBeTruthy();
    expect(image.props.source).toBe(require("@/assets/images/welcome.png"));
  });
});
