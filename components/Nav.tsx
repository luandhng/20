import Link from "next/link";

export const Nav = () => {
  return (
    <div>
      <Link href="/notes">Notes</Link>
      <Link href="/links">Links</Link>
    </div>
  );
};
