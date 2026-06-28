# NavBar

Sticky top bar for the marketing site. Left: red DILLO lockup + serif
tagline. Right: links + a red "Get a quote" CTA. Active link gets a red
underline. The bar gains a 1px navy bottom border once the page scrolls.

```jsx
<NavBar active="home" onNavigate={(k) => setPage(k)} onCta={() => setPage("contact")} />
```
