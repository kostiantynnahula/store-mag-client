import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Home = async () => {
  const session = await getSession();

  if (!session?.user) {
    return (
      <>
        <Link href="/api/auth/login">Login</Link>
      </>
    );
  }

  return <>Home page</>;
};

export default Home;
