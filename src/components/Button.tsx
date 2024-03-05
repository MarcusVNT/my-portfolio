import { styled } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const Button = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "4px",
    padding: "4px 16px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      transition: "0.15s",
    },
  }));

  return <Button onClick={onClick}>{children}</Button>;
};

export default Button;
