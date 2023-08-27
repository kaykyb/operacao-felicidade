import { airtableBase, Contest, getContests } from "@/lib/airtable";
import Link from "next/link";

export const fetchCache = "force-no-store";
export const revalidate = 0;

export default async function Home() {
  const contests = await getContests();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
      {contests.map((contest) => (
        <ContestCard key={contest.Rifa} contest={contest} />
      ))}
    </main>
  );
}

const ContestCard = ({ contest }: { contest: Contest }) => {
  return (
    <Link href={`/contest/${contest.Rifa}`}>
      <div className="border p-4 rounded bg-pink-50 border-pink-300 flex flex-col">
        <span className="text-lg font-bold">{contest.Premio}</span>
        <span className="text-md mt-2">R${contest.Valor}</span>
        <span className="text-sm my-4">
          {contest.Quantidade - contest.Comprados} números disponíveis
        </span>
        <hr className="mt-2" />
        <span className="text-sm text-gray-600 mt-2">{contest.Doador}</span>
      </div>
    </Link>
  );
};
