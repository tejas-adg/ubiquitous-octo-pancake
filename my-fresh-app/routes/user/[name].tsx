// Regular parameter - REQUIRES a name
// ✅ /user/john      - Works
// ❌ /user          - 404 Error (name is required)

import { PageProps } from "$fresh/server.ts";

export default function UserProfile(props: PageProps) {
  return <div>User Profile: {props.params.name}</div>;
}
