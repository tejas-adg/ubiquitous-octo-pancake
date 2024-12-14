// This will be accessible at: https://beamcampus.com/greet/john/doe
// Both firstName and lastName will be available in props.params

import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const { firstName, lastName } = props.params;
  return <div>Hello {firstName} {lastName}</div>;
}
