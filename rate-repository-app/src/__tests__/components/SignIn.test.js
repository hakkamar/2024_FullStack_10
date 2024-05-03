import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";

import { expect, jest } from "@jest/globals";

import { SingInContainer } from "../../components/SignIn";

describe("SignIn", () => {
  describe("SingInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      const onSubmit = jest.fn();

      const { getByPlaceholderText } = render(
        <SingInContainer onSubmit={onSubmit} />
      );

      const usernameField = getByPlaceholderText("username");
      const passwordField = getByPlaceholderText("password");
      const submitBtn = screen.getByTestId("SingInButton");

      fireEvent.changeText(usernameField, "kalle");
      fireEvent.changeText(passwordField, "password");
      fireEvent.press(submitBtn);

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument

        //screen.debug();

        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
