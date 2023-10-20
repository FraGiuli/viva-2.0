import Link from "next/link";
import { Text } from "@nextui-org/react";

export default function LinkDropdown({
  children,
  className,
  isActive,
  href,
  description,
  target,
  ...otherProps
}) {
  console.log("target", target);
  return (
    <Link
      href={href}
      className={`${className} roboto p-[8px] leading-5 ${
        isActive ? "activeLink" : "noActiveLink"
      } block`}
      target={target}
      {...otherProps}
    >
      {children}
      <p className="text-xs text-gray-600">{description}</p>
    </Link>
  );
}
