import { render } from "@testing-library/react";
import AddTask from "@/components/Home/AddTask";

it("renders homepage unchanged", () => {
    const { container } = render(<AddTask setTaskList={() => console.log("first")} />);
    expect(container).toMatchSnapshot();
});
