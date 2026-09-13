# Fisher Blast: Ocean Merge — Legal & Support Site

Static legal/support pages for Fisher Blast: Ocean Merge (`com.tavook.fisherblast`).

## Pages

- `index.html` — legal/support landing page
- `privacy.html` — Privacy Policy
- `terms.html` — Terms & Conditions
- `support.html` — Support information
- `data-deletion.html` — external data deletion request instructions
- `app-ads.txt` — AdMob authorized seller declaration
- `style.css` — shared site styling

## Important: app-ads.txt hosting

AdMob checks `app-ads.txt` at the **hostname root**, not inside a project subfolder.

If the Google Play developer website is:

`https://burakblend.github.io/fisherblast/`

AdMob will normally look for:

`https://burakblend.github.io/app-ads.txt`

Therefore, publishing this repository only as a GitHub Pages project site does **not** by itself guarantee that AdMob can crawl the file at the required root URL.

The current authorized seller line is:

`google.com, pub-4339734324285926, DIRECT, f08c47fec0942fa0`

Before relying on it, verify that the publisher ID matches **AdMob → Settings → Account information**.

Recommended options:

1. publish the same `app-ads.txt` at `https://burakblend.github.io/app-ads.txt` using the GitHub Pages user-site/root repository; or
2. use a root-capable host such as Firebase Hosting and set that hostname as the developer website in Google Play.

After changing the developer website or app-ads.txt, allow time for AdMob to crawl and verify it.

## Release checklist

Before each production release, keep these synchronized with the actual app behavior:

- Privacy Policy
- Terms & Conditions
- Data Deletion page
- Google Play Data safety answers
- Google Play developer website URL
- AdMob app-ads.txt status
- in-app Privacy Policy / Privacy Choices links

Last site content update: September 13, 2026.
