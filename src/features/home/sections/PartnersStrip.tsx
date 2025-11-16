import { TRUSTED_PARTNERS } from "../data/highlights";

export const PartnersStrip = () => {
  return (
    <section className="border-y border-white/5 bg-[#050714] py-8">
      <div className="container-tight flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-white/40">Utilisé par</p>
          <p className="text-white">
            +500 commerces locaux, franchisés et réseaux nationaux.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 opacity-80 grayscale">
          {TRUSTED_PARTNERS.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="h-6 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
