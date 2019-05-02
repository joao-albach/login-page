import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";
import Login from "./Login";
import InputErrorMessage from "components/InputErrorMessage";

function simulateChange(
  instance: TestRenderer.ReactTestInstance,
  value: string
) {
  TestRenderer.act(() => {
    instance.props.onChange({ target: { value } });
  });
}

function simulateBlur(instance: TestRenderer.ReactTestInstance) {
  TestRenderer.act(() => {
    instance.props.onBlur();
  });
}

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

    simulateChange(inputInstance, "email@email.com");

    expect(inputInstance.props.value).toBe("email@email.com");
  });

  it("should validate the email format", () => {
    const invalidMail = "oijkdoapsjkdsa";
    const testRenderer = TestRenderer.create(<Login />);
    const testeInstance = testRenderer.root;
    const inputInstance = testeInstance.findByProps({ type: "email" });
    const errorMsgInstance = testeInstance.findByProps({
      id: "email-error"
    });

    simulateChange(inputInstance, "invalidemail.com");
    simulateBlur(inputInstance);
    expect(errorMsgInstance.children.length).toEqual(1);

    simulateChange(inputInstance, "valid@email.com");
    simulateBlur(inputInstance);
    expect(errorMsgInstance.children.length).toEqual(0);
  });

  it("should update password on user input", () => {
    const testRenderer = TestRenderer.create(<Login />);
    const testeInstance = testRenderer.root;
    const inputInstance = testeInstance.findByProps({ type: "password" });

    simulateChange(inputInstance, "123456");

    expect(inputInstance.props.value).toBe("123456");
  });
});
