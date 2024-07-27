import { getServerSession } from "next-auth";
import { authConfig } from "../lib/authConfig";
import LogoutButton from "../_components/LogoutButton";

export default async function Page() {
  const data = await getServerSession(authConfig);
  return (
    <main>
      You have found the secret!
      <p>{JSON.stringify(data)}</p>
      <LogoutButton />
    </main>
  );
}
