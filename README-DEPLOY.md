# Publish Estantra Realty on GitHub Pages

This folder is a complete static website. It includes the custom-domain file, SEO files, a mobile layout, WhatsApp enquiry flows and the supplied Estantra visual assets.

## Before publishing

- Confirm that `estantrarealty.in` is registered and that you can edit its DNS records.
- Add the correct office address, opening hours, fees and team/partner details before advertising them.
- Do not put client documents, passwords, payment information, API keys or private customer data in this folder or in the GitHub repository.

## 1. Create the GitHub repository

1. Sign in to GitHub and select **New repository**.
2. Name it `estantra-realty-website` and keep the repository private while reviewing the site. GitHub Pages publishes the website publicly, even when a plan allows publishing from a private repository.
3. Upload every file in this folder to the repository root. `index.html` must remain at the root, not inside another folder.
4. Commit the files to the `main` branch.

If using Git from a computer, run these commands in the folder that contains `index.html` after creating the empty repository:

```powershell
git init
git add .
git commit -m "Launch Estantra Realty website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/estantra-realty-website.git
git push -u origin main
```

## 2. Turn on GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`, then select **Save**.
5. Wait for the GitHub Pages link to appear. Open it and test the desktop and phone layouts before connecting the real domain.

## 3. Connect estantrarealty.in

1. In GitHub **Settings > Pages**, enter `estantrarealty.in` in **Custom domain** and save it. Do this before editing DNS.
2. At the domain registrar or DNS provider, create these four A records for the root domain (`@`):

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

3. Create one CNAME record for `www` pointing directly to `YOUR-GITHUB-USERNAME.github.io` (replace the placeholder with the GitHub account or organisation that owns the repository).
4. Keep the included `CNAME` file in the repository. It tells GitHub Pages that the primary domain is `estantrarealty.in`.
5. DNS changes can take several hours and sometimes up to 24 hours. When GitHub shows the domain as configured, select **Enforce HTTPS** in the Pages settings.
6. Test both `https://estantrarealty.in` and `https://www.estantrarealty.in`. One should redirect to the primary domain securely.

## 4. Launch checks

- Call the displayed phone number from a mobile device.
- Test the floating WhatsApp button, checklist form and callback form.
- Test the newsletter email request and the privacy/terms links.
- Confirm that the browser shows a padlock and that there is no mixed-content warning.
- Submit `https://estantrarealty.in/sitemap.xml` in Google Search Console after the site is live.
- Create one accurate Google Business Profile only for a real staffed office or genuine service area.

## What needs a separate secure system later

The current site is intentionally a public marketing site. WhatsApp and mailto forms do not store data on the website. Before adding document uploads, online payment, a full newsletter list or a CRM, choose a secure provider and update the privacy notice to name it.
