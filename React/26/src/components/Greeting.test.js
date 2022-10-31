import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing in this case

    // Assert
    const helloWorldElement = screen.getByText("Hello World!", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Rendered good to see you! not Clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("Its good to see you!", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("render Changed if the button was cliked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Asset
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("!render good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Asset
    const paragraphElement = screen.queryByText("good to see you!", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
