# ritacyber.com

Rita Sabri's academic website, served by GitHub Pages at [ritacyber.com](https://ritacyber.com).

Plain HTML and CSS with no build step: edit a file, commit, and GitHub Pages republishes in about a minute.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Research | `research/index.html` |
| Talks and events | `talks/index.html` |
| Teaching | `teaching/index.html` |
| Labs | `labs/index.html` |
| CV | `cv/index.html` |
| CyberScholars tutoring | `tutoring/index.html` |

Old addresses keep working: `/speaking/` forwards to `/talks/`, and `/writing/` forwards to `/research/`.

## Common updates

**Add a talk.** In `talks/index.html`, copy one `<li class="entry"> … </li>` block in the Upcoming list and change the date, title, and venue. Add the same talk to the Talks section of `cv/index.html`, and a one-line version to the News list in `index.html` if it's notable. After the event, move its block from Upcoming to Past (and change "accepted" wording to the final format).

**Add your photo.** Save a square headshot as `assets/headshot.jpg` (about 400 × 400 px). It appears next to your name on the home page automatically. Until the file exists, that spot stays hidden.

**Change colors or fonts.** Everything is in `assets/site.css`. The palette is the list of variables at the top (`--cobalt`, `--paper`, `--hl`, and so on), with a matching dark-mode list right below it.

## What's in `assets/`

- `site.css` – all styles, including dark mode and print styles (the CV page prints cleanly to PDF).
- `site.js` – the "press 1" agent prompt on the home page, the CV print button, and the footer year. Every page still works if this file fails to load.
- `fonts/` – Newsreader and Atkinson Hyperlegible, self-hosted under the SIL Open Font License (license files included).
- `favicon.svg` – the browser-tab icon.
- `og-image.png` – the preview image that appears when the link is shared on LinkedIn, Slack, or email.

`404.html` is shown for any address that doesn't exist. `CNAME` connects the custom domain; don't delete it.
