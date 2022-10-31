import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("Render posts if requests succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);

    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
