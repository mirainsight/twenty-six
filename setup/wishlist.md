# Wishlist gifting

This is live. Guests can claim things, claims sync between everyone, and the
list stays hidden from Mira unless she chooses to unlock it.

## How it is set up

| | |
|---|---|
| Store | Google Apps Script web app, writing to a Sheet |
| Endpoint | `claimsEndpoint` in `private/details.js` |
| Friends' passphrase | `wishlist`, in `passphrase` |
| Mira's passphrase | `mira`, in `viewPassphrase` |
| Check value | `claimsCheck` |

All three live in `private/details.js`.

**Two keys to the same list.** `wishlist` opens it *with* who is getting what;
it is printed on the gate, because there is no group chat to put it in. `mira`
opens it *without* the claims and is printed nowhere — it is the safe way in to
your own wishlist. Both are matched case-insensitively.

Set `passphrase` to an empty string and the gate stops naming it. Set
`viewPassphrase` to an empty string and the look-only door closes.

## What a guest sees

Opening the Wishlist tab raises a centred card over a blurred page. It spells
out the passphrase, takes it back, and asks which guest you are, picked from
the guest list so nobody has to type a name. Backing out — Escape, the close
cross, or a click on the blur — returns to the Invitation rather than leaving a
blurred page with nothing behind it.

Past the gate, tapping a line opens its detail, and every line can be claimed.
Claims show a heart on the row, a count when more than one person is in, and
each claimant by name with their note. Rows are keyed `item::person`, so two
people claiming at once cannot overwrite each other, and anyone can undo their
own.

Someone who came in with `mira` gets a *Friends, unlock gifting* link at the
foot of the list, which raises the same gate again to step up to the full view.

## What Mira sees

Typing `mira` gives her the wishlist and nothing else: no hearts, no names, and
**no request to the sheet at all**. That mode never derives a key, so the
claims are not merely hidden from the page — they are never fetched.

Neither passphrase is ever prefilled into the field, so getting in stays a
deliberate act rather than something she can trip over.

## What is actually hidden

Claims are sealed with AES-GCM under a key stretched from the passphrase with
600,000 rounds of PBKDF2-SHA256. The sheet holds rows like
`gin::exuan | NIAegzvWcP+F1TFD...` and nothing more. Opening the sheet, the
network tab or the page source reveals only *how many* claims exist.

Two honest limits:

- **The friends' passphrase is printed on the gate.** So the seal keeps claims
  out of the page and off the wire until someone deliberately types it — it
  does not keep them from anyone who reads the gate, Mira included. `mira`
  gives her a door that cannot spoil anything; choosing that door instead of
  the one in front of her is the whole protection. That is the trade for
  having no group chat: a guest can never be locked out.
- Anyone with the invitation link could POST junk to the endpoint. Junk fails
  to decrypt and is skipped, so the worst case is clutter in a sheet nobody
  reads.

## Changing the passphrase

Pick the new phrase, then regenerate the check value — without it, a guest who
mistypes gets a silent empty list instead of "that passphrase is not right".

Open the invitation, open the browser console, and paste:

```js
(async () => {
  const pass = prompt('Friends passphrase');
  const enc = new TextEncoder();
  const base = await crypto.subtle.importKey(
    'raw', enc.encode(pass), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: enc.encode('mira-twenty-six-wishlist'),
      iterations: 600000, hash: 'SHA-256' },
    base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify({ ok: true })));
  const out = new Uint8Array(12 + ct.byteLength);
  out.set(iv, 0);
  out.set(new Uint8Array(ct), 12);
  console.log(btoa(String.fromCharCode.apply(null, out)));
})();
```

Put the string it prints into `claimsCheck`, and the new phrase into
`passphrase`. Claims sealed under the old passphrase stop decrypting, so clear
the sheet's rows when you change it.

`viewPassphrase` needs none of this — it guards nothing, so changing it is just
editing the string.

## Redeploying the script

Editing [`claims-sheet.gs`](claims-sheet.gs) is not enough on its own:
**Deploy → Manage deployments → edit → Version: New version**, or the old code
keeps serving.

## Turning it off

Empty `claimsEndpoint` and claims fall back to each guest's own browser, with
the page saying so. Empty `claimsCheck` and any passphrase is accepted.
