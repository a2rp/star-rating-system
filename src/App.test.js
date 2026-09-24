import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("updates the selected rating", () => {
    render(<App />);

    fireEvent.click(
        screen.getByRole("button", { name: "4 stars" }),
    );

    expect(screen.getByText("4/5")).toBeInTheDocument();
});