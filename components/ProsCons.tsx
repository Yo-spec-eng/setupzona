// Lista de pros y contras para fichas de producto dentro de los artículos.
export function ProsCons({
  pros,
  cons,
}: {
  pros: string[];
  cons: string[];
}) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
        <h4 className="mb-2 font-semibold text-emerald-700 dark:text-emerald-400">
          ✅ Pros
        </h4>
        <ul className="space-y-1 text-sm">
          {pros.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950/40">
        <h4 className="mb-2 font-semibold text-rose-700 dark:text-rose-400">
          ❌ Contras
        </h4>
        <ul className="space-y-1 text-sm">
          {cons.map((c) => (
            <li key={c}>• {c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
