import { AffiliateButton } from './AffiliateButton';

export type ComparisonRow = {
  name: string;
  bestFor: string;
  specs: string;
  price: string;
  rating: number; // 0-5
  asin?: string;
  href?: string;
};

// Tabla comparativa para artículos de compra. Va arriba del todo
// para capturar el snippet de Google y maximizar conversión.
export function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-600 dark:bg-gray-900 dark:text-gray-300">
          <tr>
            <th className="px-4 py-3">Modelo</th>
            <th className="px-4 py-3">Mejor para</th>
            <th className="px-4 py-3">Destacado</th>
            <th className="px-4 py-3">Precio</th>
            <th className="px-4 py-3">Nota</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {rows.map((r) => (
            <tr key={r.name} className="align-middle">
              <td className="px-4 py-4 font-semibold">{r.name}</td>
              <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{r.bestFor}</td>
              <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{r.specs}</td>
              <td className="px-4 py-4 font-medium">{r.price}</td>
              <td className="px-4 py-4">
                <span className="text-amber-500">{'★'.repeat(Math.round(r.rating))}</span>
                <span className="text-gray-300 dark:text-gray-600">
                  {'★'.repeat(5 - Math.round(r.rating))}
                </span>
              </td>
              <td className="px-4 py-4">
                <AffiliateButton href={r.href} asin={r.asin} label="Ver precio" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
