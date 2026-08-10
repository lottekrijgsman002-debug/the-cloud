import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { sections, siteConfig } from "@/data/site";
import { SectionIcon } from "@/components/section-icon";
import {
  YoutubeIcon,
  SpotifyIcon,
  AppleMusicIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";
import { NewsletterForm } from "@/components/newsletter-form";
import { Logo } from "@/components/logo";

const socialLinks = [
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: siteConfig.social.spotify, label: "Spotify", Icon: SpotifyIcon },
  { href: siteConfig.social.appleMusic, label: "Apple Music", Icon: AppleMusicIcon },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14">
        <div className="grid gap-10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">{dict.footer.tagline}</p>
          </div>

          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-wide text-orange-deep">
              {dict.footer.sections}
            </div>
            <ul className="mt-3 space-y-2">
              {sections.map((s) => (
                <li key={s.key}>
                  <Link
                    href={`/${locale}${s.href}`}
                    className="flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
                  >
                    <SectionIcon section={s.key} className="h-4 w-4 opacity-70" />
                    {dict.nav[s.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-wide text-orange-deep">
              {dict.footer.follow}
            </div>
            <ul className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition-transform hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-wide text-orange-deep">
              {dict.footer.newsletterTitle}
            </div>
            <NewsletterForm
              placeholder={dict.footer.newsletterPlaceholder}
              cta={dict.footer.newsletterCta}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink/15 pt-6 text-xs text-ink-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} Loulou & Lou. {dict.footer.rights}
          </p>
          <p>Made in the Netherlands, for the whole world.</p>
        </div>
      </div>
    </footer>
  );
}
