/* Private party details. Deliberately untracked: see .gitignore.
   Ships with the published artifact, never with the public repo. */
window.PARTY_DETAILS = {
  address: {
    lines: ["G1-208, Lily & Rose Apartment", "Jalan SS 26/10, Taman Mayang Jaya"],
    note: "Park outside, then get Shaun Quek to tap you in."
  },

  overcooked: "only with the best players: Cayman, Je Jyne...",

  guests: [
    { name: "Exuan",          status: "yes"    },
    { name: "Adrienna",       status: "pending"},
    { name: "Wan Qi",         status: "pending"},
    { name: "Joyce",          status: "pending"},
    { name: "Zoe Pang",       status: "pending"},
    { name: "Ellysa",         status: "pending"},
    { name: "Yen Joo",        status: "pending"},
    { name: "Dini",           status: "no"     },
    { name: "Emily Liew",     status: "yes"    },
    { name: "Mabel",          status: "yes"    },
    { name: "Melanie",        status: "pending"},
    { name: "Ruijie",         status: "pending"},
    { name: "Cayman",         status: "yes"    },
    { name: "Je Jyne",        status: "pending"},
    { name: "Jo Wong",        status: "yes"    },
    { name: "Nat Wong",       status: "yes"    },
    { name: "Shania Perkins", status: "yes"    },
    { name: "Stacy",          status: "pending"},
    { name: "Avryl",          status: "yes"    },
    { name: "Adanni",         status: "yes"    },
    { name: "Herman",         status: "yes"    },
    { name: "Nic Tan",        status: "no"     },
    { name: "Caitlin",        status: "yes"    },
    { name: "Nat Heng",       status: "pending"},
    { name: "Hayley",         status: "pending"},
    { name: "Kim Liew",       status: "yes"    },
    { name: "Bev",            status: "no"     },
    { name: "Ryan Gui",       status: "pending"},
    { name: "Fabian",         status: "yes"    },
    { name: "Kelly",          status: "no"     },
    { name: "Jia Xin",        status: "no"     },
    { name: "Josh Wong",      status: "yes"    },
    { name: "Ashley Cheah",   status: "pending"},
    { name: "Oswell",         status: "pending"},
    { name: "Shaun",          status: "heart"  }
  ],

  guestNote: "Bev, Kelly and Jia Xin are overseas this year. Wanted them here all the same.",

  /* Wishlist. The handmade group comes first, priced "priceless". The bought
     things follow in Mira's own order of wanting -- not by price, so do not
     re-sort them. `note` is the expand-on-tap detail, kept out of the way
     until someone asks for it. `voucher: true` marks the ones she needs to
     try on or pick herself, where a gift card does the job just as well. */
  wishlist: [
    { id: "card",       group: "made", name: "A nice card, or anything handmade",
      note: "Genuinely the top of the list. Made beats bought." },
    { id: "playlist",   group: "made", name: "A Spotify playlist I can play",
      note: "Three I would actually use: the drive to work, getting ready in the morning, and one for when I am stressed or low." },
    { id: "books",      group: "made", name: "Books you think I should read",
      note: "Just the recommendations — no need to buy them, I can get them online." },
    { id: "scrapbook",  group: "made", name: "A scrapbook or collage of photos" },
    { id: "drawing",    group: "made", name: "A drawing",
      note: "Of the cats, ideally. Or of anything." },

    { id: "coffee",     group: "buy",  name: "Nice coffee beans",
      note: "For filter coffee. Berry, fruity or tea notes." },
    { id: "curler",     group: "buy",  name: "A good eyelash curler",
      note: "I hear Shiseido is the one." },
    { id: "clothes",    group: "buy",  name: "Clothes", voucher: true,
      note: "Love, Bonito and Uniqlo are the safe bets." },
    { id: "flosser",    group: "buy",  name: "A water flosser" },
    { id: "handbag",    group: "buy",  name: "A handbag", voucher: true,
      note: "I have one nice pink Kate Spade that does every wedding and every dress occasion. It would be lovely to have a second." },
    { id: "stationery", group: "buy",  name: "Stationery",
      note: "Pens, note cards, stickers — things I can use to write to other people." },
    { id: "fan",        group: "buy",  name: "A portable fan" },
    { id: "dododots",   group: "buy",  name: "Dododots micro needle patches" },
    { id: "hair",       group: "buy",  name: "Hair products, or a hair mask",
      note: "For frizzy hair. :’)))" },

    { id: "johir",      group: "buy",  name: "Johir the contractor, to fix the house",
      note: "Listed in hope rather than expectation. 😭" },
    { id: "watch",      group: "buy",  name: "Apple Watch" },
    { id: "glasses",    group: "buy",  name: "New glasses", voucher: true },
    { id: "catbird",    group: "buy",  name: "Catbird jewelry", voucher: true,
      note: "Anything of theirs. :}" },
    { id: "bedsheet",   group: "buy",  name: "Sonnos bedsheets",
      note: "Queen size." },
    { id: "shoes",      group: "buy",  name: "Sport shoes", voucher: true },
    { id: "sportsbra",  group: "buy",  name: "Sports bra", voucher: true,
      note: "Lululemon." },
    { id: "gin",        group: "buy",  name: "Nice gin",
      note: "Chase grapefruit gin will make me cry. Any other grapefruit or fruity gin is very appreciated." },
    { id: "makeup",     group: "buy",  name: "Makeup", voucher: true },
    { id: "protein",    group: "buy",  name: "Optimum Nutrition protein powder",
      note: "Vanilla ice cream or double chocolate." },
    { id: "steamer",    group: "buy",  name: "A portable steamer" },
    { id: "film",       group: "buy",  name: "Polaroid film",
      note: "For my Instax Mini 12." },
    { id: "cake",       group: "buy",  name: "A good alcoholic tiramisu, or a cheesy cheesecake" },
    { id: "cattreat",   group: "buy",  name: "Cat treats" }
  ],

  wishlistNote: "No nuts, please — I am allergic.",

  /* Paste the deployed Apps Script /exec URL here to turn on shared gifting.
     Empty means claims stay in each friend's own browser and sync nowhere. */
  claimsEndpoint: "https://script.google.com/macros/s/AKfycbx4iyJX-sFrDxGbh0A9beKJD52WRi0WwfRLxxoEfeYzj10-36w-R4l87E_fgVho2qztxg/exec",

  /* Ciphertext of a known word under the friends' passphrase, used only to
     tell a correct passphrase from a typo. Empty accepts any passphrase. */
  claimsCheck: "tMXmwf10b7EaI8pyQT4suAmBijBQ/l28l541OYB84xUBgSgB6TfG",

  /* Two keys to the same list.

     `passphrase` is the friends' one, printed on the gate because there is no
     group chat to put it in: it opens the wishlist WITH who is getting what.
     Leave it empty to keep it off the page instead.

     `viewPassphrase` is Mira's, never printed anywhere: it opens the wishlist
     WITHOUT the claims, so she can read her own list without spoiling it.
     Nothing is fetched from the sheet in that mode. */
  passphrase: "wishlist",
  viewPassphrase: "mira"
};
