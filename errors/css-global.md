# Global CSS Must Be in Your Custom \<App\>

#### Why This Error Occurred

An attempt to import Global CSS from a file other than [`pages/_app.js`](https://nextjs.org/docs/advanced-features/custom-app) was made.

Global CSS cannot be used in files other than your [Custom `<App>`](https://nextjs.org/docs/advanced-features/custom-app) due to its side-effects and ordering problems.

#### Possible Ways to Fix It

To avoid conflicts, relocate all first-party Global CSS imports to your [`pages/_app.js` file](https://nextjs.org/docs/advanced-features/custom-app).

Or, [update your component to use local CSS (Component-Level CSS) via CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css). This is the preferred approach.

#### Example

Consider the stylesheet named [`styles.css`](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)

```css
/* styles.css */
body {
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}
```

Create a [`pages/_app.js` file](https://nextjs.org/docs/advanced-features/custom-app) if not already present. Then [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) the [`styles.css` file](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet).

```jsx
// pages/_app.js
import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```
