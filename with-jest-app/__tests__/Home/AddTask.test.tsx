import AddTask from "@/components/Home/AddTask";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<AddTask />", () => {
    it("component has an input", () => {
        const setTaskList = jest.fn();
        render(<AddTask setTaskList={setTaskList} />);
        const input: any = screen.getByTestId("input");
        expect(input).toBeInTheDocument();
    });

    it("detect change in input", () => {
        const setTaskList = jest.fn();
        render(<AddTask setTaskList={setTaskList} />);
        const input: any = screen.getByTestId("input");
        fireEvent.change(input, { target: { value: "task 1" } });
        expect(input.value).toBe("task 1");
    });

    it("component has addbutton", () => {
        const setTaskList = jest.fn();
        render(<AddTask setTaskList={setTaskList} />);
        const button = screen.getByTestId("add-button");
        expect(button).toBeInTheDocument();
    });

    it("add task in localstorage", () => {
        const setTaskList = jest.fn();
        render(<AddTask setTaskList={setTaskList} />);

        const button = screen.getByTestId("add-button");
        jest.spyOn(Object.getPrototypeOf(window.localStorage), "getItem");
        const setItem = Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
        fireEvent.click(button, { name: "Add" });
    });
});
