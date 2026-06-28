# Button

Primary action element. Use **primary** (red) for the single most important
action on a screen — "Get a quote", "Send request". Use **navy** for dark
section bands where red on red would clash. Use **secondary** (navy outline)
for paired secondary actions, **ghost** for tertiary in toolbars.

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
  Get a quote
</Button>
```

**Variants:** `primary` (default), `navy`, `secondary`, `ghost`, `danger`.
**Sizes:** `sm`, `md` (default), `lg`. Hit area is at least 36px in `sm`.
**Behaviour:** background darkens one step on hover, translateY(1px) on press.
No scale transforms, no spring easing — see `--ease-out`.
