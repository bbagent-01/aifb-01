import Link from 'next/link';

const footerLinks = {
  Navigation: [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  Compare: [
    { label: 'vs. In-House', href: '/vs-in-house' },
    { label: 'vs. Agencies', href: '/vs-agencies' },
    { label: 'vs. Freelancers', href: '/vs-freelancers' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-lg font-semibold tracking-tight text-text-primary mb-3">Brightbase</p>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Full-service creative for B2B SaaS teams. Design, development, video, and copy — one subscription, one team.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Brightbase</p>
          <p className="text-xs text-text-muted font-mono">hello@brightbase.co</p>
        </div>
      </div>
    </footer>
  );
}
