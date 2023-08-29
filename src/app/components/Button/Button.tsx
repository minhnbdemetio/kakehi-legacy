import clsx from "clsx";
import { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  text: string;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

const baseClasses = clsx(
  "inline-block text-1.5xl desktop:text-2xl text-center font-medium font-noto-sans-jp",
  "btn btn-contained-primary link-btn p-7 w-[330px] max-w-full"
);

export const Button: FC<Props> = ({
  text,
  href,
  className,
  onClick,
  ...props
}) => {
  if (href) {
    return (
      <a className={clsx(baseClasses, className)} href={href} {...props}>
        {text}
      </a>
    );
  }

  return (
    <button className={clsx(baseClasses, className)} {...props}>
      {text}
    </button>
  );
};
