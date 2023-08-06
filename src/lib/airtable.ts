import Airtable from "airtable";

export const airtableBase = new Airtable().base(
  process.env.AIRTABLE_BASE_ID as string
);

export type Contest = {
  Rifa: number;
  Premio: string;
  Valor: number;
  Quantidade: number;
  Doador: string;
  Comprados: number;
};

export async function getContests(): Promise<Contest[]> {
  const table = await airtableBase.table("Premios").select().all();
  return table.map((rifa) => rifa.fields as Contest);
}

export type ContestTicket = {
  ticket: number;
  available: boolean;
};

export async function getContestTickets(
  contest: string
): Promise<ContestTicket[]> {
  const table = await airtableBase.table(`Rifa ${contest}`).select().all();

  return table
    .map((rifa) => ({
      ticket: rifa.fields.Bilhete as number,
      available: !rifa.fields.Nome,
    }))
    .sort((a, b) => a.ticket - b.ticket);
}
