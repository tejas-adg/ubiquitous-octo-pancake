//import { h } from "preact";

type LayoutProps = {
  children: preact.ComponentChildren;
};

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}