# Your AI Dashboard — Quick Start Guide
### From zero to your personal dashboard in 30 minutes

---

## What you're building

A single HTML file that lives on your desktop. Open it every morning and it automatically shows:
- 🌡️ **Live weather** for your city
- 📅 **Today's calendar** (demo to start, connectable to Google Calendar)
- 💰 **Finance analyzer** — drag in your bank CSV once a month, Claude tells you where your money went
- 📋 **Personal morning briefing** — Claude writes you a fresh one each morning
- 📰 **AI-curated news** — 5 stories, searched and summarized by Claude, tailored to your interests

Everything updates automatically when you open the file. No app to install. No subscription. Just a file.

---

## Step 1 — Get your free Anthropic API key (5 minutes)

The AI features — news, finance analysis, daily briefing — run through Claude's API. You need a free key.

1. Go to **[console.anthropic.com](https://console.anthropic.com)**
2. Create a free account (email + password)
3. Click **"API Keys"** in the left sidebar
4. Click **"Create Key"** — give it any name like "my dashboard"
5. Copy the key — it starts with `sk-ant-`
6. **Save it somewhere safe** (a note on your phone) — you only see it once

> 💡 **Cost:** The free tier includes enough credits to use your dashboard daily for months. News + briefing = roughly $0.01–0.02 per open. You'll get a notification well before you need to add credits.

---

## Step 2 — Build your personal dashboard (20 minutes)

1. Open **[claude.ai](https://claude.ai)** — free account works
2. Start a new conversation
3. Open the file **`SETUP-PROMPT.md`** and copy everything between `---START---` and `---END---`
4. Paste it into Claude and hit send
5. Claude will ask you 4 questions — answer them one by one:
   - Your first name
   - Your city
   - Which modules you want
   - Your news topics of interest
6. Claude will generate your complete, personalized HTML file
7. Copy the entire HTML code Claude gives you

---

## Step 3 — Save and open your dashboard (2 minutes)

1. Open any text editor (Notepad on Windows, TextEdit on Mac)
2. Paste the HTML code
3. Save the file as **`my-dashboard.html`** — save it to your Desktop
4. Double-click the file — it opens in your browser
5. On first open: paste your Anthropic API key into the setup screen
6. Click **"Save & Open My Dashboard"**

That's it. Your dashboard is live.

---

## Step 4 — Using the finance feature

Once a month, when you want to review your spending:

**Download your bank CSV:**
- **Chase:** Sign in → Statements → Download → CSV
- **Bank of America:** Sign in → Activity → Export → CSV
- **Wells Fargo:** Sign in → Activity → Download Transaction History → CSV
- **Any bank:** Look for "Export", "Download", or "Statements" — CSV is almost always an option

**Use it in your dashboard:**
1. Open your dashboard
2. In the Finance card, drag and drop your CSV file
3. Hit "Analyze with Claude"
4. Read the insights — then ask follow-up questions in the chat

> 🔒 **Privacy note:** Your transaction data goes directly from your browser to Claude for analysis. Nothing is stored anywhere. Close the tab and it's gone.

---

## Opening it every day

**Bookmark it:** After the first open, bookmark it in your browser for one-click access.

**Make it your homepage:** In Chrome: Settings → On startup → Open a specific page → paste the file path (it looks like `file:///Users/yourname/Desktop/my-dashboard.html`)

**On your phone:** This works on mobile too — you'd need to save it to a cloud folder (iCloud, Google Drive) and open it there, though the desktop experience is better.

---

## Updating and customizing

Your dashboard is just a text file. You can ask Claude to change anything:

- *"Update my dashboard to show weather for Miami instead of New York"*
- *"Add a habit tracker module to my dashboard"*
- *"Change the news topics to include healthcare and real estate"*
- *"Make the dashboard show my name as [name]"*

Copy your current HTML file into Claude, describe the change, and copy the updated version back.

---

## If something stops working

**AI features not loading:** Your API key may have expired or run out of credits. Click the ⚙️ gear icon in the header to update it. Check your balance at [console.anthropic.com](https://console.anthropic.com).

**Weather not loading:** Check your internet connection. Weather uses a free public API — no key needed.

**Finance analysis failing:** Make sure your CSV has at least these columns: Date, Description, Amount. Most bank exports do.

---

## What this replaces

| Service | Monthly cost | What your dashboard does instead |
|---------|-------------|----------------------------------|
| Mint / YNAB | $10–15/mo | CSV upload + Claude analysis |
| Morning Brew / news apps | $5–15/mo | AI news curated to your interests |
| Weather apps (with ads) | Free but cluttered | Clean live weather, no ads |
| **Total** | **$15–30/mo** | **~$0.30–0.50/mo in API costs** |

---

## Want to go further?

Once you have your dashboard working, natural next steps:

**Connect Google Calendar** — Ask Claude: *"How do I connect my Google Calendar to my HTML dashboard using OAuth?"* It'll walk you through a 15-minute setup.

**Deploy it as a real website** — If you want a URL you can share, ask Claude about deploying to GitHub Pages or Vercel. Claude Code can do this end-to-end.

**Add modules** — The dashboard is modular. Stock watchlist, habit tracker, fitness log, Jira tasks — anything with a public API can become a module. Ask Claude to build it.

---

*Created by [Your Name] · Built with Claude · Share freely*
