import { Outlet } from "@remix-run/react";
import BackButton from "~/components/buttons/back-button";

export default function $() {
  return (
    <div>
      <div className="mb-3">
        <BackButton />
      </div>
      <Outlet />
    </div>
  );
}
