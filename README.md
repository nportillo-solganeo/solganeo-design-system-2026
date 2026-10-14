# Solganeo · Design system 2026

Le design system de [Solganeo](https://solganeo.com), cabinet de conseil en transformation digitale spécialiste Salesforce. Version 2026 : éditoriale et premium, en thème clair et sombre, sur une seule famille, Bricolage Grotesque.

Il reprend les logos d'origine sans retouche et la palette historique (navy `#122E5C`, bleu ciel `#5FA7C9`, orange `#F26B1F`), adaptée pour que tous les textes passent le contraste WCAG AA dans les deux thèmes.

Règles d'usage complètes : [docs/brand-book.md](docs/brand-book.md).

## Contenu

```
tokens/
  tokens.json        source des tokens : couleurs (clair + sombre), typo, espacements, rayons, ombres, layout
  tokens.css         variables CSS générées depuis tokens.json (+ @font-face et classes de texte)
fonts/
  BricolageGrotesque-VariableFont.ttf   graisse 200 à 800, axe optique 12 à 96, largeur 75 à 100
logos/
  svg/  png/  png-hd/                   5 versions du logo (voir logos/README.md)
icons/
  svg/                                  70 icônes Material Symbols Rounded 300 (Apache 2.0)
components/
  src/components.jsx                    source des composants React
  bundle.js                             script unique, expose window.Solganeo
  bundle.css                            styles des composants
  index.d.ts                            types des props (documentation)
docs/
  brand-book.md                         règles de marque : ton, couleurs, typo, espacements, icônes
  components/                           une fiche par composant
demo/
  index.html                            page de démo (clair / sombre)
scripts/
  build-tokens.mjs  build-bundle.mjs
```

## Utilisation rapide

Dans une page HTML :

```html
<html lang="fr" data-theme="light">
<head>
  <link rel="stylesheet" href="tokens/tokens.css">
  <link rel="stylesheet" href="components/bundle.css">
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
  <script src="components/bundle.js"></script>
  <script>
    const { Button, Icon } = window.Solganeo;
    const h = React.createElement;
    ReactDOM.createRoot(document.getElementById('root'))
      .render(h(Button, { arrow: true }, 'Prendre rendez-vous'));
  </script>
</body>
</html>
```

Sans React, les tokens suffisent : `var(--brand)`, `var(--ink)`, `var(--space-6)`, `class="h2"`…

Thème : `data-theme="light"` ou `data-theme="dark"` sur `<html>`. Sans attribut, le thème suit la préférence du système.

Icône animée sans React (WordPress, page statique) : `Solganeo.iconMarkup('refresh', { animate: 'spin' })` renvoie un SVG autonome animé en SMIL, à coller tel quel.

## Composants

| Composant | Rôle |
| --- | --- |
| [Button](docs/components/Button.md) | `primary`, `secondary`, `ghost`, `on-deep`, `ghost-deep` ; options `icon` et `arrow` |
| [Tag](docs/components/Tag.md) | Étiquette neutre, `brand` ou `signal` |
| [Input](docs/components/Input.md) | Champ ou textarea, avec label, aide et erreur |
| [SectionHeader](docs/components/SectionHeader.md) | Numéro, surtitre, titre, lede |
| [ServiceCard](docs/components/ServiceCard.md) | Carte d'expertise numérotée |
| [NavBar](docs/components/NavBar.md) | Barre de navigation, logo selon le thème |
| [Hero](docs/components/Hero.md) | Ouverture de page sur fond navy |
| [Footer](docs/components/Footer.md) | Pied de page |
| [Icon](docs/components/Icon.md) | Icône Material Symbols, 7 animations ([détail](docs/components/IconAnimation.md)) |

## Modifier le système

```bash
npm install
npm run build        # régénère tokens/tokens.css et components/bundle.js
```

- Une couleur, une taille ou un espacement : modifie `tokens/tokens.json`, puis `npm run build:tokens`.
- Un composant : modifie `components/src/components.jsx` (et `components/bundle.css`), puis `npm run build:bundle`.
- Ouvre `demo/index.html` pour vérifier le rendu dans les deux thèmes.

## Licences

- Bricolage Grotesque : SIL Open Font License 1.1, par Mathieu Triay ([source](https://github.com/ateliertriay/bricolage)).
- Material Symbols : Apache 2.0, Google (`icons/LICENSE-material-symbols.txt`).
- Logos Solganeo : propriété de Solganeo, usage réservé.
