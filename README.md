# website-with-google-ads

A complete professional website with multiple pages, built as a static responsive front-end for a digital marketing agency or business portfolio. The project includes a landing page, service page, about page, blog page, contact page, and ad slots prepared for Google AdSense integration.

## Features
- Responsive multi-page layout
- Arabic RTL design
- Professional business branding
- Google AdSense ad placeholders
- Mobile-friendly navigation
- Clean CSS and JavaScript structure

## Project pages
- `index.html`
- `about.html`
- `services.html`
- `blog.html`
- `contact.html`

## Files
- `style.css` — main styling
- `script.js` — mobile menu and footer year

## Google AdSense setup
Replace the placeholder publisher ID and ad slot values:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"></script>
```

and

```html
<ins
  class="adsbygoogle"
  style="display:block;"
  data-ad-client="ca-pub-XXXXXXXXXXXX"
  data-ad-slot="1234567890"
  data-ad-format="auto"
  data-full-width-responsive="true"
></ins>
```

with your real Google AdSense values after approval.

## Run locally
Open `index.html` in a browser, or serve the folder with a local web server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes
This project is a starter template and can be expanded into a full business website with:
- product catalog
- booking form
- admin dashboard
- CMS integration
- WhatsApp contact button
- real backend for contact submissions

## License
This project is released for educational and personal use.
