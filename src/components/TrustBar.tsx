const partners = [
  "Northbridge Systems",
  "Ferro Logistics",
  "Solace Health",
  "Kestrel Financial",
  "Bramwell Retail",
  "Ovation Media",
];

export default function TrustBar() {
  return (
    <div className="border-t border-white/10 bg-navy-2">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
          Trusted by L&amp;D and engineering teams at
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((name) => (
            <li
              key={name}
              className="font-display text-sm text-white/50 whitespace-nowrap"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
