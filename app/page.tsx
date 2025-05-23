import { Link } from '@heroui/link';
import { Snippet } from '@heroui/snippet';
import { Code } from '@heroui/code';
import { button as buttonStyles } from '@heroui/theme';

import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import LandingPageLayout from '@/components/templates/LandingPageLayout';
import { Button } from '@heroui/button';

export default function Home() {
  return (
    <LandingPageLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Catat&nbsp;</span>
          <span className={title({ color: 'violet' })}>Keuangan&nbsp;</span>
          <br />
          <span className={title()}>Seflexibel yang anda ingingkan</span>
          <div className={subtitle({ class: 'mt-4' })}>Flexible, Mudah, Aman dan terpercaya.</div>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
            href={siteConfig.links.docs}
          >
            Daftar Sekarang
          </Link>
          {/* <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub
        </Link> */}
        </div>

        {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
      </section>
    </LandingPageLayout>
  );
}
