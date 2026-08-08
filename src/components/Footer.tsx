import SocialIcons from "@/components/SocialIcons";

const columns = [
  {
    heading: "Programs",
    links: ["Applied Data Science", "AI & ML Engineering", "Product Management", "Growth & Digital Marketing"],
  },
  {
    heading: "Company",
    links: ["About", "Practitioner Instructors", "Careers", "Contact"],
  },
  {
    heading: "Resources",
    links: ["For L&D Teams", "For Engineering Leaders", "Case Studies", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-2 text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-2">
            <span className="font-display text-lg font-semibold text-white">
              Accredited <span className="text-accent">Enterprise</span>
            </span>
            <p className="mt-3 max-w-[32ch] text-sm">
              Structured upskilling for teams that need training to show up
              in the roadmap.
            </p>

            <dl className="mt-6 flex flex-col gap-2 text-sm">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href="mailto:hello@accreditedenterprise.com" className="hover:text-white">
                    hello@accreditedenterprise.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Office address</dt>
                <dd className="max-w-[32ch]">
                  500 Market Street, Suite 300, San Francisco, CA 94105
                </dd>
              </div>
            </dl>

            <SocialIcons className="mt-6" />
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold text-white">{col.heading}</h4>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Accredited Enterprise. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
