import Link from "next/link";
import { Text } from "@nextui-org/react";

export default function LinkDropdown({
  children,
  className,
  isActive,
  href,
  description,
  ...otherProps
}) {
  return (
    <Link
      href={href}
      className={`${className} roboto p-[8px] leading-5 ${
        isActive ? "activeLink" : "noActiveLink"
      } block`}
      {...otherProps}
    >
      {children}
      <p className="text-xs text-gray-600">{description}</p>
    </Link>
  );
}
