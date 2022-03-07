import { render } from "@testing-library/react";
import AddTask from "@/components/Home/AddTask";

it("renders add task unchanged", () => {
    const setTaskList = jest.fn();
    const { container } = render(<AddTask setTaskList={setTaskList} />);
    expect(container).toMatchSnapshot();
});
