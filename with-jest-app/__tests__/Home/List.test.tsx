import List from "@/components/Home/List";
import { render, screen } from "@testing-library/react";

describe("<List />", () => {
    it("component has correct task", () => {
        const setTaskList = jest.fn();
        const taskList = ["task1"];
        render(<List setTaskList={setTaskList} taskList={taskList} />);
        const listItem: any = screen.getByTestId("list-item");
        expect(listItem).toBeInTheDocument();
    });

    it("show no tasks if empty task list", () => {
        const setTaskList = jest.fn();
        const taskList: any = [];
        render(<List setTaskList={setTaskList} taskList={taskList} />);
        const heading: any = screen.getByTestId("no-tasks");
        expect(heading).toBeInTheDocument();
    });
});
