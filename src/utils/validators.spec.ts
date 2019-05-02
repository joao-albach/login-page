import { validateEmail, validatePassword } from "./validators";

describe("email validator", () => {
  it("should allow valid email", () => {
    const validEmail = "email@email.com";
    expect(validateEmail(validEmail)).toBeTruthy();
  });
  it("should reject invalid email", () => {
    expect(validateEmail("email@email.")).toBeFalsy();
    expect(validateEmail("@email.com")).toBeFalsy();
    expect(validateEmail("email.com")).toBeFalsy();
    expect(validateEmail("aaa")).toBeFalsy();
  });
});

describe("password validator", () => {
  it("should allow valid password", () => {
    const validPassword = "123456";
    expect(validatePassword(validPassword)).toBeTruthy();
  });
  it("should reject invalid password", () => {
    expect(validatePassword("12345")).toBeFalsy();
    expect(validatePassword("adasdasd")).toBeFalsy();
    expect(validatePassword("123456789")).toBeFalsy();
    expect(validatePassword("1234H6")).toBeFalsy();
    expect(validatePassword("")).toBeFalsy();
  });
});
