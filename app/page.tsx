import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      {/* {session && <p>{session.user!.name}</p>} */}
      <Link href="/users">Users</Link>
    </main>
  );
}
