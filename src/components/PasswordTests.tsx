import { render, screen } from "@testing-library/react";
import { Password } from "./Password";
import { extractDigits } from "./StartAttempt.test";

describe("Password Tests", () => {
    beforeEach(() => {
        render(<Password />);
    });

    test("length is 16 characters long", () => {
        const passwordElement = screen.getByTestId("password");
        const password = passwordElement.textContent;
        expect(password?.length).toBe(16);
    });

    test("Password includes special characters", () => {
        const passwordElement = screen.getByTestId("password");
        const password = passwordElement.textContent;
        expect(password).toMatch(/[^a-zA-Z]\W\S/i);
    });

    test("Password contains number", () => {
        const passwordElement = screen.getByTestId("password");
        const password = passwordElement.textContent;
        expect(password).toMatch(/[0-9]/i);
    });

    test("Password contains letter", () => {
        const passwordElement = screen.getByTestId("password");
        const password = passwordElement.textContent;
        expect(password).toMatch(/[a-z]/i);
    });

    test("Password does not start with special character or number", () => {
        const passwordElement = screen.getByTestId("password");
        const password = passwordElement.textContent;
        expect(password?.charAt(0)).toMatch(/[a-z]/i);
    });
});
