# Your Personal AI Dashboard — Setup Prompt
### How to use this: Two steps, one conversation

---

## What you're doing

You're going to have one conversation with Claude that ends with a fully working, personalized dashboard HTML file. The file is already built and tested — Claude just needs to configure it for you based on 5 questions.

**You'll need two things open:**
1. This prompt (what you're reading now)
2. The file `my-dashboard.html` — open it in any text editor (Notepad on Windows, TextEdit on Mac), select all, copy everything

---

## Step 1 — Start the conversation

Open [claude.ai](https://claude.ai) and start a new conversation.

Paste this message exactly:

> I want to set up my personal AI dashboard. I have the base template ready to paste in. Please ask me your setup questions first — one at a time — and once I've answered all of them, I'll paste the template and you'll customize it for me.

---

## Step 2 — Answer Claude's 5 questions

Claude will ask these one at a time. Just answer naturally.

**Q1 — Your name**
Claude will use it for the greeting: "Good morning, [name]"

**Q2 — Your city**
Claude will look up the exact coordinates and hardcode live weather for your location.

**Q3 — Which modules you want**
Pick any combination:
- 🌡️ Weather — live conditions every open
- 📅 Calendar — today's events (demo to start, connectable to Google Calendar)
- 💰 Finance Analyzer — drag in a bank CSV monthly, Claude analyzes your spending
- 📋 Daily Briefing — Claude writes you a fresh morning summary each open
- 📰 AI News — Claude searches the web and curates today's top stories
- 🏛️ The Council — your personal AI advisory panel

**Q4 — Your news topics**
What do you want to stay current on? Examples: technology, AI, business, finance, world news, sports, healthcare, real estate — or anything specific to your work or interests.

**Q5 — Who you admire**
This is the one that makes your dashboard yours.

Claude will ask: "Think about people you genuinely admire outside of your family, close friends, and work colleagues — a business leader, athlete, author, philosopher, historical figure, investor — anyone well-known whose thinking, values, or approach to life you respect. Give me 3 to 5 names and I'll build you a personal advisory council on your dashboard."

Give 3–5 names. Any well-known person, living or historical, any field.

If you're not sure who to name, Claude will ask follow-up questions:
- Who would you call if you had a big decision to make tomorrow?
- Whose book or interview changed how you think?
- Who handled pressure the way you wish you did?
- Who built something you deeply respect?

Minimum 3 names. If you truly cannot get to 3, Claude will suggest defaults and you can change them later from inside the dashboard.

---

## Step 3 — Paste the template

Once you've answered all 5 questions, Claude will confirm it's ready. At that point paste this message, then immediately paste the full contents of `my-dashboard.html` after it:

---

> Here is my base template. Please make ONLY the following targeted changes to the CONFIG block — do not rewrite or restructure anything else in the file.
>
> Find this block near the top of the script section:
> ```
> const CONFIG = {
>   name:         "Friend",
>   city:         "New York, NY",
>   lat:          40.7128,
>   lon:          -74.0060,
>   timezone:     "America/New_York",
>   newsTopics:   "technology, AI, business, world news",
>   council:      [],
>   modules: { ... }
> };
> ```
>
> Replace the values as follows based on my answers:
> - `name:` → my first name in quotes
> - `city:` → my city in quotes
> - `lat:` → precise latitude for my city, 4 decimal places
> - `lon:` → precise longitude for my city, 4 decimal places
> - `timezone:` → correct IANA timezone string for my city (e.g. "America/Chicago")
> - `newsTopics:` → my topics from Q4 as a comma-separated string in quotes
> - `council:` → array of the names I gave in Q5, e.g. `["Name One", "Name Two", "Name Three"]`
>
> For any module I said I did NOT want, set it to `false` in the modules block.
>
> That's all. Do not change any other code. Output the complete HTML file from DOCTYPE to closing html tag so I can copy and save it.
>
> [PASTE FULL CONTENTS OF my-dashboard.html HERE — replace this line with the actual file contents]

---

## Step 4 — Save your file

Claude outputs the complete modified HTML.

1. Copy everything from `<!DOCTYPE html>` to `</html>`
2. Open Notepad (Windows) or TextEdit (Mac)
3. Paste it
4. Save as `my-dashboard.html` on your Desktop
5. Double-click — it opens in your browser

---

## Step 5 — First open: enter your API key

A setup screen appears asking for your Anthropic API key.

**Get your free key in 2 minutes:**
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create a free account
3. Click **API Keys** → **Create Key**
4. Copy the key — starts with `sk-ant-`
5. Paste it into the dashboard setup screen → Save
6. Never asked again on this browser

> 💡 **Cost:** Weather uses a free public API — no key needed ever. The Anthropic key powers news, finance analysis, daily briefing, and The Council. Typical daily use costs $0.02–0.05 per open. You'll get a notification from Anthropic well before you need to add credits.

---

## Step 6 — Every morning

Double-click the file → loads fresh automatically:
- 🌡️ Weather fetches current conditions
- 📋 Daily briefing generates new for today
- 📰 News searches and curates 5 stories
- 📅 Calendar shows today's events
- 💰 Finance waits until you drag in a CSV
- 🏛️ Council ready when you have a question

**Monthly finance ritual:** Bank website → Statements → Download CSV → drag into Finance card → ask Claude anything about your spending.

**The Council:** Type any question — decision, challenge, perspective needed — and your advisors respond in their own voices, closing with one clear action to take.

---

## Changing anything later

Your dashboard is a text file. Copy it into Claude, describe the change, copy the updated version back.

Examples:
- *"Change weather to Celsius"*
- *"Add Kobe Bryant to my council"*
- *"Change news topics to include healthcare"*
- *"Update my city to Austin"*
- *"Add a stock watchlist module"*

---

## What this replaces

| Tool | Monthly cost | Your dashboard instead |
|------|-------------|----------------------|
| YNAB / Mint | $10–15/mo | CSV + AI analysis |
| News apps / Morning Brew | $5–15/mo | AI-curated, no ads |
| Weather apps | Free but ad-cluttered | Clean, no upsell |
| Business advisor | $200–500/hr | The Council, always on |
| **Total** | **$15–30/mo+** | **~$0.50–1.00/mo** |

---

*Created by [Your Name] · Built with Claude · Share freely*
