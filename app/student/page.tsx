import { sql } from "@vercel/postgres";

export default async function Cart({
  params,
}: {
  params: { FNavn: string };
}): Promise<JSX.Element> {
  const { rows } =
    await sql`SELECT * from public.elev where eId=${params.FNavn}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}
