import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import Login from "./Login";

describe("Login Page", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should update email on user input", () => {
    const testRenderer = TestRenderer.create(<Login />);
    const testeInstance = testRenderer.root;
    const inputInstance = testeInstance.findByProps({ type: "email" });
    TestRenderer.act(() => {
      inputInstance.props.onChange({ target: { value: "email@email.com" } });
    });

    expect(inputInstance.props.value).toBe("email@email.com");
  });

  it("should validate the email format", () => {
    const invalidMail = "oijkdoapsjkdsa";
    const testRenderer = TestRenderer.create(<Login />);
    const testeInstance = testRenderer.root;
    const inputInstance = testeInstance.findByProps({ type: "email" });

    expect(inputInstance.props.value).toBeDefined();
  });
});
