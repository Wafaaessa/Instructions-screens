import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import OnboardingScreen from "./OnboardingScreen.tsx";

describe("OnboardingScreen", () => {
  const mockOnFinish = jest.fn();

  it("renders the first page correctly", () => {
    const { getByText, getByTestId } = render(<OnboardingScreen onFinish={mockOnFinish} />);
    expect(getByText("StorkyApp Instructions")).toBeTruthy();
    expect(getByText("Follow these instructions to prevent being blocked")).toBeTruthy();
    expect(getByTestId("image")).toBeTruthy();
  });

  it("navigates to the next page when 'Continue' is pressed", () => {
    const { getByText, queryByText } = render(<OnboardingScreen onFinish={mockOnFinish} />);
    fireEvent.press(getByText("Continue"));
    expect(queryByText("StorkyApp Instructions")).toBeNull();
    expect(getByText("Login from another device")).toBeTruthy();
  });

  it("skips to the last page when 'Skip' is pressed", () => {
    const { getByText, queryByText } = render(<OnboardingScreen onFinish={mockOnFinish} />);
    fireEvent.press(getByText("Continue")); // Move to the second page
    fireEvent.press(getByText("Skip"));
    expect(queryByText("Login from Emulators")).toBeNull();
    expect(getByText("Developer Options")).toBeTruthy();
  });

  
  

  it("displays correct buttons on each page", () => {
    const { getByText, queryByText, rerender } = render(<OnboardingScreen onFinish={mockOnFinish} />);

    expect(getByText("Continue")).toBeTruthy();
    expect(queryByText("Skip")).toBeNull();
    expect(queryByText("Next")).toBeNull();

    fireEvent.press(getByText("Continue"));
    expect(getByText("Skip")).toBeTruthy();
    expect(getByText("Next")).toBeTruthy();

    rerender(<OnboardingScreen onFinish={mockOnFinish} />);
    fireEvent.press(getByText("Skip"));
    expect(getByText("Done")).toBeTruthy();
    expect(queryByText("Skip")).toBeNull();
    expect(queryByText("Next")).toBeNull();
  });
});
