import { render } from "@testing-library/react";
import List from "@/components/Home/List";

it("renders List of tasks unchanged", () => {
    const setTaskList = jest.fn();
    const taskList = ["task1", "task1"];
    const { container } = render(<List setTaskList={setTaskList} taskList={taskList} />);
    expect(container).toMatchSnapshot();
});
