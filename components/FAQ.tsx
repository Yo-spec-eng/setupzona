import { JsonLd } from './JsonLd';
import { faqJsonLd } from '@/lib/seo';

export type FaqItem = { question: string; answer: string };

// Bloque de preguntas frecuentes. Genera el schema FAQPage automáticamente
// para optar al rich snippet de Google.
export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <section className="my-10">
      <h2 className="mb-4 text-2xl font-bold">Preguntas frecuentes</h2>
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">
              <span className="inline-flex w-full items-center justify-between">
                {item.question}
                <span className="ml-2 transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.answer}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  );
}
