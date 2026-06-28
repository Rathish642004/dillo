# Input

Single-line text input with optional label, hint and error. Used heavily on
the Contact / quote-request form.

```jsx
<Input label="Phone" hint="We'll send a WhatsApp quote." iconLeft={<Phone size={16}/>} placeholder="+91 …" />
```

Error state turns the border red and replaces the hint with the error string.
Focus shows a soft navy ring (`--focus-ring`).
