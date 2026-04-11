# 🏠✨ ROOMIFY AI ✨🏠

### *Your room called. It's bored. It wants a glow-up.*

```
 ██████╗  ██████╗  ██████╗ ███╗   ███╗██╗███████╗██╗   ██╗
 ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║██║██╔════╝╚██╗ ██╔╝
 ██████╔╝██║   ██║██║   ██║██╔████╔██║██║█████╗   ╚████╔╝
 ██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║██║██╔══╝    ╚██╔╝
 ██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║██║██║        ██║
 ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝        ╚═╝
              p o w e r e d   b y   A I
```

> Point your phone at a room. Pick a vibe. Watch the pixels tremble. Watch your landlord weep (metaphorically).

---

## 🧠 What the heck is this?

**Roomify AI** is a Next.js app that takes a boring, sad photo of your room and *rebirths* it in a style of your choosing — Modern, Industrial, Traditional, Minimalistic, Rustic, or Bohemian. You drop a pic, pick a vibe, and a gang of very polite neural networks go absolutely feral on it until it looks like a Pinterest board threw up in the best way possible.

No hammers. No IKEA allen keys. No crying on the floor at 2AM surrounded by "extra" screws.

**Just vibes. Generated vibes.**

---

## 🎭 The Cast of Characters

| Role | Who's playing it | What they actually do |
|---|---|---|
| 🖼️ **The Brain** | [Replicate](https://replicate.com/) + `adirik/interior-design` | The AI that actually redesigns your room |
| ⚛️ **The Face** | Next.js 15 + React 19 | Makes buttons click and pixels glow |
| 🔐 **The Bouncer** | [Clerk](https://clerk.com/) | Checks your ID at the door |
| 🗄️ **The Memory** | Neon Postgres + Drizzle ORM | Remembers every room you've ever redesigned (ominous) |
| 🪣 **The Attic** | Firebase Storage | Where the pretty PNGs go to sleep |
| 💳 **The Piggy Bank** | Stripe + PayPal | Takes your money, lovingly |
| 🎨 **The Stylist** | Tailwind + shadcn/ui + Radix | Makes everything look obnoxiously clean |
| ✨ **The Vibes** | lucide-react icons | Tiny drawings that make you trust the product |

---

## 🚀 Getting it running (a.k.a. "the summoning ritual")

### 1. Clone the repo like a responsible citizen

```bash
git clone https://github.com/Aizal15Chopra/custom-room-redesign.git
cd custom-room-redesign
```

### 2. Install the dependencies and pray to npm

```bash
npm install
# or yarn, pnpm, bun — pick your fighter
```

### 3. Cook up a `.env.local` file

You'll need to whisper these secrets into the void:

```env
# Clerk (auth)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_you_wish
CLERK_SECRET_KEY=sk_live_also_you_wish

# Neon DB (for Drizzle)
NEXT_PUBLIC_DRIZZLE_DB_URL=postgresql://...

# Firebase (for image storage)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# The model that does the magic
NEXT_PUBLIC_REPLICATE_API_TOKEN=r8_...

# Stripe (for the money part)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# PayPal (for the other money part)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
```

### 4. Wake up the database

```bash
npx drizzle-kit push
```

### 5. Launch

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and behold your creation. 🫡

---

## 🎨 The Flow (a.k.a. "What actually happens when you click the button")

```
  ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
  │  1. Upload    │ --> │  2. Pick room │ --> │  3. Pick vibe │
  │   sad room    │     │  type + style │     │ (Modern/etc.) │
  └───────────────┘     └───────────────┘     └───────────────┘
                                                       │
                                                       ▼
  ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
  │  6. Flex on   │ <-- │  5. Store in  │ <-- │  4. Replicate │
  │    your ex    │     │  Firebase+DB  │     │  goes BRRRRR  │
  └───────────────┘     └───────────────┘     └───────────────┘
```

Every redesign nibbles 1 credit from your balance. New users get **3 free credits** — go wild, but not *too* wild. When you run out, the [buy-credit](app/dashboard/buy-credit) page will happily sell you more via Stripe or PayPal.

---

## 🧱 Where things live

```
custom-room-redesign/
├── app/
│   ├── (auth)/                # Clerk sign-in / sign-up doors
│   ├── api/
│   │   ├── redesign-room/     # 🔥 The money endpoint. Talks to Replicate.
│   │   ├── create-payment-intent/  # Stripe handshake
│   │   └── verify-user/       # "are you real" check
│   ├── dashboard/
│   │   ├── _components/       # Header, Listing, RoomDesignCard, etc.
│   │   ├── create-new/        # The "make me beautiful" wizard
│   │   ├── buy-credit/        # Where your wallet goes to die
│   │   └── page.jsx
│   ├── _context/              # React context (user credits, etc.)
│   └── page.jsx               # Landing page
├── components/ui/             # shadcn primitives
├── config/
│   ├── db.js                  # Drizzle + Neon wiring
│   ├── schema.js              # Users + AiGeneratedImage tables
│   └── firebaseConfig.jsx     # Storage bucket setup
├── drizzle/                   # Migrations, generated
├── hooks/                     # Tiny reusable React hooks
├── lib/                       # Utility soup
└── middleware.js              # Clerk route protection
```

---

## 🗃️ Database schema (the whole thing, it's tiny)

```js
Users {
  id, name, email, imageUrl,
  credits: int (default 3)   // the currency of dreams
}

AiGeneratedImage {
  id, roomType, designType,
  orgImage,   // before (the tragedy)
  aiImage,    // after  (the redemption arc)
  userEmail
}
```

That's it. That's the empire.

---

## 🧪 Available Styles

Pick your fighter:

- 🪑 **Modern** — clean lines, white walls, vague feeling of being in an Apple store
- 🔩 **Industrial** — exposed brick, exposed pipes, exposed everything
- 🏛️ **Traditional** — your grandma would approve
- ⚪ **Minimalistic** — one chair. one plant. one existential crisis.
- 🪵 **Rustic** — cabin core. chunky wood. smell of firewood (imaginary)
- 🌸 **Bohemian** — every plant. every rug. every color. yes.

And room types: Living Room, Bedroom, Kitchen, Office, Bathroom, Dining Room.

---

## 💸 Scripts

```bash
npm run dev     # development (the fun one)
npm run build   # production build (the scary one)
npm run start   # serve the build (the serious one)
npm run lint    # make ESLint happy (the nagging one)
```

---

## 🛠️ Deploy

The easiest path is [Vercel](https://vercel.com/new) — plug in your env vars, smash deploy, go outside. Anywhere that runs Next.js 15 works; just remember to bring all those env vars with you or the whole thing pouts in silence.

---

## 🐛 Known quirks & charming imperfections

- If Replicate is having A Day, redesigns can take 20–40 seconds. Be patient. Stare at the loading spinner. Bond with it.
- The Replicate model prompts are literal string concatenation, so typos in your "additional requirements" go directly to the AI. Treat it like texting a very literal friend.
- Credits are deducted after a successful generation. If the model explodes, you don't pay. Fair is fair.

---

## 🤝 Contributing

Found a bug? Got an idea? Want to add a "Cyberpunk Goblin Core" design style? PRs welcome. Fork it, branch it, commit it, push it — the usual sacred dance.

---

## 📜 License

Currently: vibes-based licensing. Ask nicely.

---

## 🙏 Credits (the human kind)

- Built with 🧠 by [@Aizal15Chopra](https://github.com/Aizal15Chopra)
- Interior AI magic by [`adirik/interior-design`](https://replicate.com/adirik/interior-design) on Replicate
- Auth feelings provided by Clerk
- Pixels stored lovingly by Firebase
- Every designer on Dribbble that I silently studied — you know what you did

---

<div align="center">

### *"I came for a redesigned living room. I left with a redesigned life."*
— probably a user, maybe

**⭐ Star this repo if it made your room less sad. ⭐**

</div>
