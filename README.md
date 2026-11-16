# concatena-labs-site

The website at [concatenalabs.com](https://concatenalabs.com): Concatena Labs, Inc., the free and
open-source Bitcoin development studio that builds Sequentia, its team, and the page of its Android
wallet, Ambra, at `/ambra/`. Sequentia is a Bitcoin sidechain for asset tokenization and
disintermediated exchanges.

It is a static [Astro](https://astro.build/) site, built into plain HTML in `dist/` and served by
GitHub Pages. It shares its palette (ink, gold and cream) and type (Montserrat) with
[sequentia.io](https://sequentia.io) and [docs.sequentia.io](https://docs.sequentia.io).

## Build and preview

Needs Node.js 22 (`.nvmrc`).

```sh
npm ci
npm run build       # writes dist/
npm run preview     # serves dist/ on http://localhost:4321
```

`npm run dev` serves the site with live reload while you edit.

## Where things are

| Path | What it holds |
|---|---|
| `src/pages/index.astro` | The home page: the studio and its team |
| `src/data/team.ts` | Each team member's name, role, photo, link and text |
| `src/pages/ambra/index.astro` | The Ambra page, with its own header |
| `src/site.ts` | Shared links (testnet, Ambra's download, Telegram, contact) and the `PREVIEW` switch |
| `src/layouts/Base.astro` | The page shell: head, a header slot, footer |
| `src/components/` | The Concatena Labs header with its Projects menu, and the footer |
| `src/styles/global.css` | Palette, type and every section's style |
| `public/img/` | The logos and images, kept here so the site depends on no other host |

## Add a page

Create `src/pages/<name>.astro`; it is served at `/<name>/`. Wrap it in the layout and build every
internal link with `url()`, so it works both at the preview address and at the domain:

```astro
---
import Base from '../layouts/Base.astro';
import Header from '../components/Header.astro';
import { url } from '../site';
---
<Base title="Name: Concatena Labs" description="One sentence on what the page is.">
  <Header slot="header" />
  <section class="section wrap">
    <h2>Heading</h2>
    <p>Text. <a href={url('ambra/')}>The Ambra wallet</a>.</p>
  </section>
</Base>
```

Link it from the Projects menu (`src/components/Header.astro`) or the footer if visitors should find it.

## Writing

Write in the present tense about what is true now, in plain words. Ambra's download link goes to
the public testnet download page (`AMBRA_DOWNLOAD` in `src/site.ts`), which always offers the
current release. The workflow refuses em and en dashes anywhere under `src/` and in this file. The network is
Sequentia; its token is the Sequence token (SEQ), named that way on first mention.

## Publish

`.github/workflows/deploy.yml` builds every pull request, and on every push to `main` builds and
publishes the site to GitHub Pages while the repository variable `PAGES_ENABLED` is `true`. It reads
the address Pages serves from (`actions/configure-pages`), so the same build works at
`https://concatenalabs.github.io/concatena-labs-site/` and, once the domain is set, at
`https://concatenalabs.com/`.

While `PREVIEW` is `true` in `src/site.ts`, every page sends `noindex`. Set it to `false` in the
same pull request that follows the domain switch.

## Pointing concatenalabs.com at this site

1. **DNS**, at the registrar of `concatenalabs.com` (Namecheap; replace the `@` and `www` records that
   point at the WordPress hosting, and keep the Google mail (`MX`) record):

   | Name | Type | Value |
   |---|---|---|
   | `@` | A | `185.199.108.153` |
   | `@` | A | `185.199.109.153` |
   | `@` | A | `185.199.110.153` |
   | `@` | A | `185.199.111.153` |
   | `@` | AAAA | `2606:50c0:8000::153` |
   | `@` | AAAA | `2606:50c0:8001::153` |
   | `@` | AAAA | `2606:50c0:8002::153` |
   | `@` | AAAA | `2606:50c0:8003::153` |
   | `www` | CNAME | `concatenalabs.github.io.` |

   GitHub serves `www.concatenalabs.com` as a redirect to `concatenalabs.com`. The Ambra page
   moves from `ambra.concatenalabs.com` to `concatenalabs.com/ambra/`: replace the `ambra` record
   with a URL redirect record (Namecheap: "URL Redirect Record", permanent) to
   `https://concatenalabs.com/ambra/`.

2. **Custom domain** on the repository, once the records resolve:

   ```sh
   gh api -X PUT repos/ConcatenaLabs/concatena-labs-site/pages -f cname=concatenalabs.com
   ```

3. **HTTPS**, once GitHub has issued the certificate (`gh api repos/ConcatenaLabs/concatena-labs-site/pages
   --jq .https_certificate.state` reads `approved`):

   ```sh
   gh api -X PUT repos/ConcatenaLabs/concatena-labs-site/pages -F https_enforced=true
   ```

4. **Rebuild** so links drop the preview's `/concatena-labs-site/` prefix:
   `gh workflow run deploy.yml -R ConcatenaLabs/concatena-labs-site`, then set `PREVIEW` to `false`.

Verifying `concatenalabs.com` for the organization (Organization settings, Pages, Add a domain) adds a
`TXT` record named `_github-pages-challenge-ConcatenaLabs` and stops any other GitHub account from
claiming the domain.
