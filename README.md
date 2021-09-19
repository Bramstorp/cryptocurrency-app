## indholdsfortegnelse

- [Opsæting](#opsæting)
- [Dokumentation](#dokumentation)
- [Mappe Struktur](#mappe-struktur)

## Opsæting

### Opsætningskrav

1.  [Git](https://git-scm.com/downloads).
1.  [Node](https://nodejs.org/en/download/) _(version 12 or greater)_.
1.  [Yarn](https://yarnpkg.com/lang/en/docs/install/) _(version 1.5 or greater)_.
1.  [Expo](https://docs.expo.dev/get-started/installation/)
1.  [Expo app ios](https://apps.apple.com/us/app/expo-go/id982107779)
1.  [Expo app android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=da&gl=US)

### Installtion og opsætning af packages

1.  `cd cryptocurrency-app` til at komme ind i root af projektet.
1.  `yarn` til at installer pakker / dependencies.

### Kører projektet lokalt 

1.  `cd cryptocurrency-app` til at komme ind i root af projektet.
1.  `yarn start` eller `expo start` til at opsætte appen af expo live server 
1.  `open http://localhost:19002/` til at åben expo siden lokalt, efter det går under tunnel også scan den med QR koden på din telefon for at åbne appen.


## Dokumentation

React Native hjemmeside docs [website][docs].

React Native dokumentationen diskuterer omkring komponenter, API og emner der er specifikke for React Native. For yderligere information så kande blive funder her i reacts Dokumentation [React documentation][r-docs].

hvis man vil se dokumentation omkring react native kan det bliver fundet her [**@facebook/react-native-website**][repo-website].

[docs]: https://reactnative.dev/docs/getting-started
[r-docs]: https://reactjs.org/docs/getting-started.html
[repo-website]: https://github.com/facebook/react-native-website

## Mappe Struktur

under her kan man se et high-level over filer og mapper i appen selv.

```
cryptocurrency-app/
├── assets/
│   ├── adaptive-icon.png
│   └── ...
└── src/
    ├── components/
    │   ├── animations/
    │   │   └── fade.animation.js
    │   ├── spacer/
    │   │   └── spacer.component.js
    │   ├── typography/
    │   │   └── text.component.js
    │   └── utility/
    │       └── safe-area.component.js
    ├── features/
    │   ├── market
    │   │   ├── components
    │   │   │   ├── crypto-value.component.js
    │   │   │   ├── crypto-value.styles.js
    │   │   │   ├── list-header.component.js
    │   │   │   ├── list-header.style.js
    │   │   │   ├── list-item.component.js
    │   │   │   ├── list-item.style.js
    │   │   │   └── market.style.js
    │   │   └── creens
    │   │       ├── market-detail.screen.js
    │   │       └── market.screen.js
    │   └── transactions
    │       ├── components
    │       │   └── transactions.style.js
    │       └── creens
    │           └──transactions.screen.js
    ├── infrastructure/
    │   ├── navigation
    │   │   ├── app.navigator.js
    │   │   ├── index.js
    │   │   ├── market.navigator.js
    │   │   └── transactions.navigator.js
    │   └── theme
    │       ├── colors.js
    │       ├── fonts.js
    │       ├── index.js
    │       ├── sizes.js
    │       └── spacing.js
    └── services/
        └── coin/
            ├── coin.context.js
            └── coin.js

```

## App funktion
- Market skærm med crypto værdiere ud fra api
- Crypto detalje skærm med graf



