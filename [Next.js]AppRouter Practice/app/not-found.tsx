import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <h1>Page not found!</h1>
    </div>
  );
}
