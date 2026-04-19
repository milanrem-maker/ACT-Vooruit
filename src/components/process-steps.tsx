import type { ProcessStep } from "@/content/site-content";

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-5 lg:grid-cols-2">
      {steps.map((step) => (
        <li className="card-surface px-6 py-6 sm:px-8 sm:py-8" key={step.step}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Stap {step.step}</p>
              <h3 className="font-display text-3xl leading-tight text-ink-900">
                {step.title}
              </h3>
            </div>
            <span className="pill shrink-0">{step.duration}</span>
          </div>
          <p className="mt-4 leading-8 text-ink-600">{step.description}</p>
          <p className="mt-4 rounded-2xl bg-sand-50 px-4 py-4 text-sm leading-7 text-ink-600">
            {step.expectation}
          </p>
        </li>
      ))}
    </ol>
  );
}
