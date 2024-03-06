import classnames from "classnames";
import { Link } from "react-router-dom";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  linkTo?: string;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  hidden?: boolean;
}

export interface ButtonsListProps {
  buttons: ButtonProps[];
}

export default function ButtonsList(props: ButtonsListProps) {
  const buttons = props.buttons.filter((button) => !button.hidden);

  if (buttons.length === 0) {
    return null;
  }

  return (
    <div className={"flex gap-4"}>
      {buttons.map((button) => {
        const variant = button.variant ?? "primary";
        const className = `${classnames(
          variant === "primary"
            ? "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
            : "",
          variant === "danger"
            ? "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            : "",
          variant === "secondary"
            ? "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            : "",
        )} ${button.className}`;
        return button.linkTo ? (
          <Link key={button.label} to={button.linkTo} className={className}>
            {button.label}
          </Link>
        ) : (
          <button
            key={button.label}
            onClick={button.onClick}
            className={className}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
}
