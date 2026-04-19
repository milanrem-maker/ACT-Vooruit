import type { FaqItem } from "@/content/site-content";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details className="card-surface group px-6 py-5" key={item.question}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <span className="text-lg font-semibold text-ink-900">
              {item.question}
            </span>
            <span className="mt-1 text-2xl leading-none text-sage-700 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-prosewide pr-6 leading-8 text-ink-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
