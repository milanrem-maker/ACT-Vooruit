import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="page-shell section-space">
      <div className="card-surface px-6 py-10 text-center sm:px-10">
        <p className="eyebrow mb-4">Pagina niet gevonden</p>
        <h1 className="font-display text-5xl leading-tight text-ink-900 sm:text-6xl">
          Deze pagina is er niet meer of nog niet.
        </h1>
        <p className="mx-auto mt-5 max-w-prose leading-8 text-ink-600">
          Ga terug naar de homepage of neem contact op als je zocht naar
          informatie over ACT-based coaching of een gratis kennismakingsgesprek.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Naar home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Naar contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
