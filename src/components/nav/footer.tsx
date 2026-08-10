import Link from "next/link";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { primaryNavItems } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/logo";
import { YoutubeIcon, SpotifyIcon, AppleMusicIcon, InstagramIcon, FacebookIcon, HeartIcon, MailIcon, UserIcon } from "@/components/icons";

const socialLinks = [
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: siteConfig.social.spotify, label: "Spotify", Icon: SpotifyIcon },
  { href: siteConfig.social.appleMusic, label: "Apple Music", Icon: AppleMusicIcon },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
];

const secondaryLinks = [
  { href: "/favorites", label: ui.nav.favorites, Icon: HeartIcon },
  { href: "/club", label: ui.nav.club, Icon: MailIcon },
  { href: "/account", label: ui.nav.account, Icon: UserIcon },
];

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-24 mb-16 border-t-2 border-ink/10 bg-white sm:mb-0">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size={56} />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">{t(ui.footer.tagline, locale)}</p>
          </div>

          <div>
            <div className="font-display text-sm font-semibold text-orange-deep">{t(ui.footer.explore, locale)}</div>
            <ul className="mt-3 space-y-2">
              {[...primaryNavItems, ...secondaryLinks].map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-2 text-sm text-ink-soft hover:text-ink">
                    <Icon className="h-4 w-4 opacity-70" />
                    {t(label, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold text-orange-deep">{t(ui.footer.follow, locale)}</div>
            <ul className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink-soft">
          <p>
            © {new Date().getFullYear()} Loulou & Lou. {t(ui.footer.rights, locale)}
          </p>
        </div>
      </div>
    </footer>
  );
}
