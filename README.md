# Center 77 — car care website demo (Arabic + English)

A one-page demo website with **WhatsApp booking**, built as a sales demo for a car care center in Tripoli.
Plain HTML, CSS and JavaScript. No libraries and no build step.

> **Important:** this is a *design concept*. The services, prices, opening hours and phone number are **samples**.
> It is not the official website of Center 77. Keep this repository **private** because it uses the real business name.

## Open it
1. Open this folder in **VS Code** (`File > Open Folder`).
2. Install the **Live Server** extension, then right-click `index.html` > **Open with Live Server**.
   (You can also just double-click `index.html`.)

## Change the business (everything is in one file)
Edit `js/config.js`:
- `whatsapp` — the real WhatsApp number in international format, digits only (Libya = `218...`).
- `name`, `subtitle`, `city`, `hours` — Arabic and English.
- `services` — names, descriptions and **prices** (Libyan dinar).
- `slots` — the time slots customers can choose.

Texts and buttons are in `js/app.js` (the `T` object). Colors are the variables at the top of `css/style.css`.

## How the booking works (Starter level)
The customer picks a service, a day and a time, then taps **Send booking on WhatsApp**.
WhatsApp opens with the message already written to the business number. The owner replies to confirm.
There is no server and no database. The next level (time slots that fill up, an owner dashboard, reminders)
needs a small backend, for example a form that saves to a Google Sheet.

## Put it on GitHub (private)
```bash
git remote add origin https://github.com/YOUR-USERNAME/center77-demo.git
git branch -M main
git push -u origin main
```
Create the empty repository first on github.com (choose **Private**).

## Put it online for free
Drag this folder onto https://app.netlify.com/drop to get a link you can open on any phone.

## Credits
Photos from Unsplash (free to use under the Unsplash License):
- Studio car photo by Hyundai Motor Group
- Wet black car photo by Jack Lucas Smith

Design and code: ABDULRHMAN.DEV
