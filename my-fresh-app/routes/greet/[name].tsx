// This is a dynamic route, accessible at: https://beamcampus.com/greet/{name}
// Example: https://beamcampus.com/greet/john
// The [name] in brackets means it's a dynamic parameter

import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
