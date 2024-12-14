// Optional parameter - name is optional
// ✅ /profile/john   - Shows "Profile: john"
// ✅ /profile        - Shows "Profile: Guest"

import { PageProps } from "$fresh/server.ts";

export default function Profile(props: PageProps) {
  const name = props.params.name || "Guest";
  return <div>Profile: {name}</div>;
}
