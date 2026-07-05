import * as React from "react";
import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-md">
      <h1 className="text-display text-primary-text mb-xs">404</h1>
      <h2 className="text-subheading text-secondary-text mb-lg">Page Not Found</h2>
      <p className="text-body text-muted-text max-w-sm mb-xl">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="outline">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
