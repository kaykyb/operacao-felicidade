import { ContestTicket, getContestTickets, getContests } from "@/lib/airtable";
import React from "react";

export const fetchCache = "force-no-store";
export const revalidate = 0;

export default async function ContestPage({
  params,
}: {
  params: { contest: string };
}) {
  const contests = await getContests();
  const tickets = await getContestTickets(params.contest);

  const contest = contests.find((c) => `${c.Rifa}` === params.contest);

  if (!contest) {
    throw new Error("Concurso não encontrada!");
  }

  return (
    <main className="px-4">
      <h1 className="text-2xl font-bold">{contest.Premio}</h1>
      <p className="mt-1 text-gray-600">
        R$ {contest.Valor} | {contest.Quantidade - contest.Comprados} números
        disponíveis.
      </p>
      <p className="mt-1 text-gray-600">{contest.Doador}</p>
      <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-4 mt-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket.ticket} ticket={ticket} />
        ))}
      </div>
    </main>
  );
}

const Ticket = ({ ticket }: { ticket: ContestTicket }) => {
  if (ticket.available) {
    return (
      <div className="border rounded py-2 flex flex-col items-center justify-center bg-pink-100 border-pink-300">
        <span className="text-xl">{ticket.ticket}</span>
        <span className="text-xs text-gray-600">disponível</span>
      </div>
    );
  }

  return (
    <div className="border rounded py-2 flex flex-col items-center justify-center opacity-50">
      <span className="text-xl">{ticket.ticket}</span>
      <span className="text-xs text-gray-600">indisponível</span>
    </div>
  );
};
