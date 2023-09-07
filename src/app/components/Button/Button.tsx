import clsx from "clsx";
import Link from "next/link";
import {
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

const baseClasses = clsx(
  "inline-block text-1.5xl xl:text-2xl leading-snug text-center font-medium font-noto-sans-jp",
  "btn btn-contained-primary link-btn p-7 w-[330px] max-w-full"
);

export const Button: FC<Props> = ({ children, href, className, ...props }) => {
  if (href) {
    return (
      <Link href={href} className={clsx(baseClasses, className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clsx(baseClasses, className)} {...props}>
      {children}
    </button>
  );
};
