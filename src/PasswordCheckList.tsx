import "./styles.css";
import React, { useCallback } from "react";
import RulesStore from "./PasswordCheckListHelper";
import { IStore } from "./PasswordCheckListHelper";

export interface PasswordCheckListProps {
  password: string;
  passwordConfirm: string;
  icons?: {
    success?: React.ElementType;
    error?: React.ElementType;
  };
  options: IStore;
}

const PasswordCheckList: React.FC<PasswordCheckListProps> = ({
  password,
  passwordConfirm,
  icons,
  options,
}: PasswordCheckListProps) => {
  const activeRules = useCallback(
    () =>
      new (RulesStore as any)({
        payload: {
          password,
          passwordConfirm,
        },
        ...options,
      }).getActiveRules(),
    [password, passwordConfirm, options],
  )();

  return (
    <ul className="password-checklist">
      {Object.keys(activeRules).map(
        (activeRuleKey: string, activeRuleIndex: number) => {
          const Icon = (activeRules[activeRuleKey].valid
            ? icons?.success
            : icons?.error) as React.ElementType;

          return (
            <li
              key={activeRuleIndex.toString()}
              className={`password-checklist__item${
                password || passwordConfirm
                  ? `${
                      activeRules[activeRuleKey].valid
                        ? " is-success"
                        : " is-wrong"
                    }`
                  : ""
              }`}
            >
              {(password || passwordConfirm) && Icon && (
                <span>
                  <Icon />
                </span>
              )}
              <p>{activeRules[activeRuleKey].msg}</p>
            </li>
          );
        },
      )}
    </ul>
  );
};

export default PasswordCheckList;
