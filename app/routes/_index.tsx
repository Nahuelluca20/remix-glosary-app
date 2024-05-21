import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to your glossary</h1>
      <ul>
        <li>
          <Link to="/my-glossaries">My categories</Link>
        </li>
        <li>
          <Link to="/create-glossary">Create glossary</Link>
        </li>
      </ul>
    </div>
  );
}
