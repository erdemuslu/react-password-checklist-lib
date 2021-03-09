import React from "react";
import PasswordCheckList from "./PasswordCheckList";

export default {
  title: "Password Checklist",
  component: PasswordCheckList,
};

export const Default = (): React.ReactNode => (
  <PasswordCheckList
    password="Test1"
    passwordConfirm="Test1!"
    options={{
      length: {
        condition: 6,
        msg: "minLength message",
      },
      match: {
        msg: "match message",
      },
      specialChar: {
        msg: "specialChar message",
      },
      number: {
        msg: "Number message",
      },
      uppercase: {
        msg: "Uppercase message",
      },
    }}
  />
);
