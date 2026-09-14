# MAG NUMB creator link site

A mobile-first static creator landing page for **MAG NUMB / @magxnumb**.

## Fastest setup

1. Open `index.html` in a browser to preview it.
2. Replace each `href="#"` in `index.html` with the real destination URL.
3. Change `hello@example.com` to the real booking/contact email.
4. Upload the files to GitHub Pages, Cloudflare Pages, Netlify, or any normal web host.

## Where to edit links

Search `index.html` for:

- `data-edit-link="featured"`
- `data-edit-link="content"`
- `data-edit-link="instagram"`
- `data-edit-link="tiktok"`
- `hello@example.com`

Example:

```html
<a class="link-card" href="https://instagram.com/YOURNAME" data-edit-link="instagram">
```

## Branding

Main colors are at the top of `style.css`:

```css
--accent: #b7ff3c;
--accent-2: #8c59ff;
```

Change those two values to recolor the whole page.

## GitHub Pages

Create a public repository, upload the contents of this folder to the repository root, then:

Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.

Your URL will normally be:

`https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

## Custom domain

You can connect a domain such as:

- `magxnumb.com`
- `links.magxnumb.com`
- `server.magxnumb.com`

through the DNS settings at your domain registrar or Cloudflare.
