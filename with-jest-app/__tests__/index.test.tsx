import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
    it("renders a heading", () => {
        render(<Home />);
        const heading = screen.getByTestId("heading");
        expect(heading).toBeInTheDocument();
    });
    it("renders a footer", () => {
        render(<Home />);
        const footer = screen.getByTestId("footer");
        expect(footer).toBeInTheDocument();
    });
});
