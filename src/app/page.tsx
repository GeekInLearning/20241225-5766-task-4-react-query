import TableUser from "@/component/table/table-user";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around bg-slate-50">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Table User
        </h1>
        <TableUser />
      </section>
    </main>
  );
}
