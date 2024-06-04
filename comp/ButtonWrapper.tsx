"use client";

import { useCallback } from "react";
import Button1 from "./Button1";

interface ButtonWrapperProps {
  onSubmit: () => void;
  ActionLabel: string;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  ActionLabel,
  onSubmit,
  disabled,
}) => {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);
  return (
    <Button1 disabled={disabled} label={ActionLabel} onClick={handleSubmit} />
  );
};
export default ButtonWrapper;
