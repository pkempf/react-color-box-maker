import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

const addBox = (boxList, height = "4", width = "4", color = "blue") => {
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const backgroundColorInput = boxList.getByLabelText("Background Color");
  fireEvent.change(heightInput, { target: { value: height } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(backgroundColorInput, { target: { value: color } });
  const addBoxButton = boxList.getByText("Create a new box");
  fireEvent.click(addBoxButton);
};

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches the snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds a new box", () => {
  const boxList = render(<BoxList />);

  // empty, to start
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  // add the box
  addBox(boxList);

  // make sure we added a box
  const removeButton = boxList.getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveClass("Box-box");

  // form should be empty again
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("removes a box", () => {
  const boxList = render(<BoxList />);
  addBox(boxList);

  // find the button
  const removeButton = boxList.getByText("X");

  // click it
  fireEvent.click(removeButton);

  // it shouldn't be there anymore
  expect(removeButton).not.toBeInTheDocument();
});
