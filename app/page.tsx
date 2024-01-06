import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LinkList from "./components/LinkList";
import { useRouter } from "next/router";
import clsx from "clsx";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return <main className="text-center"></main>;
}
