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
  StarIcon,
} from "@/components/icons";
import { WaveDivider } from "@/components/divider";
import { NewsletterForm } from "@/components/newsletter-form";

const socialLinks = [
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: siteConfig.social.spotify, label: "Spotify", Icon: SpotifyIcon },
  { href: siteConfig.social.appleMusic, label: "Apple Music", Icon: AppleMusicIcon },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="relative mt-24 bg-plum text-parchment">
      <WaveDivider className="-translate-y-full" color="var(--color-plum)" />

      <div className="mx-auto max-w-6xl px-5 pb-10 pt-2">
        <div className="grid gap-10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-semibold">
              <StarIcon className="h-5 w-5 text-gold" />
              Loulou &amp; Lou
            </div>
            <p className="mt-3 max-w-xs text-sm text-parchment/70">{dict.footer.tagline}</p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gold">
              {dict.footer.sections}
            </div>
            <ul className="mt-3 space-y-2">
              {sections.map((s) => (
                <li key={s.key}>
                  <Link
                    href={`/${locale}${s.href}`}
                    className="flex items-center gap-2 text-sm text-parchment/80 hover:text-parchment"
                  >
                    <SectionIcon section={s.key} className="h-4 w-4 opacity-70" />
                    {dict.nav[s.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gold">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-parchment/10 transition-colors hover:bg-parchment/20"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gold">
              {dict.footer.newsletterTitle}
            </div>
            <NewsletterForm
              placeholder={dict.footer.newsletterPlaceholder}
              cta={dict.footer.newsletterCta}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-parchment/15 pt-6 text-xs text-parchment/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Loulou & Lou. {dict.footer.rights}
          </p>
          <p>Made in the Netherlands, for the whole world.</p>
        </div>
      </div>
    </footer>
  );
}
