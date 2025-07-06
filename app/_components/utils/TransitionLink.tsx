"use client";
import Link, { LinkProps } from "next/link";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.remove("page-transition");
  }, [pathname]);
  
  const router = useRouter();
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (href === pathname) return;
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    router.push(href);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};