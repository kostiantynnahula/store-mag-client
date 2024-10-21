import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getSession();

  if (!session?.user) {
    return redirect("/");
  }

  const user = session.user;

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
