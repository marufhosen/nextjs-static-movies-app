import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>This page can not be found</p>
      <Link href="/">Go to home page</Link>
    </div>
  );
};

export default NotFound;
