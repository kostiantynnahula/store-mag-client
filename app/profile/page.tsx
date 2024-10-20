import { getSession, getAccessToken } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import Link from "next/link";

const Profile = async () => {
  const session = await getSession();

  if (!session?.user) {
    return redirect("/");
  }

  const user = session.user;

  const accessToken = await getAccessToken();

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{accessToken.accessToken}</p>
        <Link href="/">Home</Link>
      </div>
    )
  );
};

// export default withPageAuthRequired(Profile, { returnTo: "/profile" });
export default Profile;
