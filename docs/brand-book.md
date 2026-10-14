# Solganeo 2026 · Brand book

Solganeo est un cabinet de conseil en transformation digitale, spécialiste Salesforce : CRM (Sales Cloud, Service Cloud), Data et IA (Einstein, Data Cloud), marketing digital (Marketing Cloud Engagement) et UX/UI Salesforce (Experience Cloud, LWC). Ce système en est la version 2026 : plus éditoriale, plus sobre, plus premium. Il garde les logos et la palette navy, bleu ciel et orange de la marque, et passe tout le texte en Bricolage Grotesque.

L'idée : un cabinet sûr de lui, qui laisse de la place. Grands titres serrés, beaucoup d'air, des filets fins plutôt que des ombres, un navy profond pour les moments forts et une seule touche orange par écran.

## Ton et contenu

- Écris en français, au « vous ». Garde les noms Salesforce en anglais (Sales Cloud, Data Cloud, Experience Cloud).
- Phrases courtes et affirmées. Un titre dit ce que le client gagne : « Accélérez votre transformation digitale », pas « Bienvenue chez Solganeo ».
- Lede : deux phrases au plus, 640px de large au plus.
- CTA concrets : « Prendre rendez-vous », « Demander un audit », « Nos expertises ». Un seul CTA primaire par section.
- Overlines courts, 1 à 3 mots : « EXPERTISES », « CABINET », « CARRIÈRE ».
- Pas de chiffres inventés, pas de lorem ipsum, pas d'emoji.

## Couleurs

Chaque couleur a une valeur claire et une valeur sombre. Utilise les tokens sémantiques ; la gamme héritée (`blue-*`, `orange-*`, `neutral-*`) sert de réserve.

- Fonds : `paper` pour la page, `paper-raised` pour les cartes, champs et barre de navigation, `paper-sunken` pour une bande de section alternée.
- Texte : `ink` pour les titres et le corps, `ink-muted` pour les ledes et paragraphes secondaires, `ink-subtle` pour les métadonnées et aides. Les trois passent 4.5:1 sur les trois fonds, dans les deux thèmes.
- Marque : `brand` (le navy `#122E5C` en clair, un bleu très clair en sombre) pour le bouton primaire, avec `on-brand` dessus.
- Bleu ciel : `accent` pour du texte (overlines, numéros, liens) ; `sky` (`#5FA7C9`) pour le graphisme seulement, jamais en texte sur fond clair.
- Orange : `signal` une seule fois par écran (un tag, un soulignement actif, un point). Texte dessus : `on-signal` (navy), jamais du blanc. `signal-text` pour un mot en orange, rarement.
- Sections immersives (hero, contact, footer) : fond `deep`, textes `on-deep`, `on-deep-muted`, `deep-accent`, filets `deep-line`, bordures de contrôle `deep-line-strong`.
- Filets : `line` pour séparer, `line-strong` pour les bordures de champs et de boutons outline (3:1 minimum).
- Erreurs : `danger`, toujours avec un message texte. Il est plus rouge que `signal` pour qu'on ne confonde pas une erreur avec un accent.
- Focus : anneau 2px en `focus`, décalé de 2px ; sur `deep`, en `on-deep`.
- Pas de dégradé dans l'interface. Les dégradés restent dans le logo.
- Le cyan du symbole (`#3AB8E8` à `#0F4C60`) n'existe que dans les fichiers du logo.

## Typographie

Une seule famille, Bricolage Grotesque (fichier variable : graisse 200 à 800, axe optique 12 à 96, largeur 75 à 100). Pour le code, la pile système `mono`.

- Titres : `display-xl` (104px, hero), `display` (72px), `h1` (52px), `h2` (38px), `h3` (28px), `h4` (21px). Graisse 600 à 700, interlettrage négatif, axe optique haut. Resserre la largeur sur les grands titres : `font-stretch: 88%` pour `display-xl` et `display`, 92% pour `h2` et `h3`.
- Numéros éditoriaux : `numeral` (64px, graisse 300) en `accent`, pour numéroter les sections et les expertises (01, 02…).
- Texte : `lead` (21px) sous les titres, `body` (17px), `body-sm` (15px) dans les cartes, `caption` (13px).
- Interface : `overline` (12px, majuscules, +0.14em) en `accent`, `label` (14px), `button` (15px).
- Règle l'axe optique sur la taille (`font-variation-settings: 'opsz' 12` pour le petit texte, 96 pour l'affichage) : les petites tailles restent lisibles, les grandes gardent leur caractère.

### Le rythme d'une section

```
01          numeral · accent
EXPERTISES  overline · accent
Titre       h2 · ink · font-stretch 92%
Lede        lead · ink-muted · 640px max
```

Un filet `line` au-dessus de l'en-tête. Écarts : overline vers titre `space-3`, titre vers lede `space-4`, lede vers contenu `space-7`.

## Espacement, rayons, ombres

- Base 4px, de `space-1` (4px) à `space-12` (200px). Les pas s'élargissent vite : sois généreux.
- Padding vertical de section : `space-10` (128px) en desktop, `space-9` en tablette, `space-8` en mobile.
- Cartes : padding `space-6` (32px), gouttière `space-5` (24px).
- Conteneur : `container` (1280px), marge `gutter` (24px, 40px dès 1024px). Colonne de lecture : `container-text`.
- Rayons : `radius-pill` pour boutons et tags, `radius-md` pour champs et images, `radius-lg` pour cartes et panneaux.
- Ombres : rares. `shadow-sm` au repos si besoin, `shadow-md` au survol d'une carte, `shadow-lg` pour une modale. La hiérarchie vient d'abord des fonds et des filets.

## Mouvement

- 140 à 200ms, `ease`. Survol de carte : `translateY(-2px)` et `shadow-md`. Flèche de CTA : glisse de 3px. Animations d'icônes : voir Logos et iconographie.
- Énumère les propriétés animées, jamais `transition: all`.
- Respecte `prefers-reduced-motion`.

## Logos et iconographie

- Dossier `logos/`, en SVG et PNG, fichiers d'origine non modifiés. Sur `paper` : `Logo_Solganeo-Light` (horizontal) ou `Logo_Solganeo_vertical-Light`. Sur `deep` ou en thème sombre : les versions `-Dark`. `Logo_Solganeo` est le symbole seul.
- SVG par défaut ; PNG pour les emails et les outils qui n'acceptent pas le SVG.
- Ne recolore pas, ne déforme pas, ne redessine pas le logo.
- Icônes : Material Symbols de Google, style Rounded, graisse 300 (licence Apache 2.0). 70 icônes choisies dans le dossier `icons/`, en 6 familles : Navigation, Actions, Contact, Statut, Métier, Tech. N'importe pas d'autre style ni d'autre graisse dans une même page.
- Dans l'interface, utilise le composant `Icon` : le SVG est en ligne et prend la couleur du texte (`currentColor`). Tailles : 18px dans un bouton ou un lien, 20 à 24px dans le texte, 28 à 40px pour illustrer une carte ou une liste. Couleur : `ink` ou `ink-muted` par défaut, `accent` pour illustrer, `danger` pour une erreur ; sur `deep`, `on-deep` ou `deep-accent`.
- Hors React (WordPress, page statique), prends le fichier SVG du dossier `icons/svg/`, ou génère un SVG autonome animé avec `Solganeo.iconMarkup(nom, { animate })`.
- Une icône accompagne un libellé, elle ne le remplace pas, sauf pour les actions universelles (fermer, menu, recherche) qui reçoivent alors un `title`. Pas d'icône devant chaque titre, pas d'emoji.

### Animer une icône

Sept animations, en SVG (CSS dans le composant, SMIL dans `iconMarkup`) :

| Animation | Usage | Exemple |
| --- | --- | --- |
| `spin` | Chargement, actualisation | `progress_activity`, `refresh` |
| `pulse` | Attirer l'attention, avec retenue | `notifications`, `lightbulb` |
| `bounce` | Inviter à défiler, télécharger | `keyboard_arrow_down`, `download` |
| `nudge` | Pousser vers une action | `arrow_forward`, `chevron_right` |
| `shake` | Signaler une erreur (une fois) | `error`, `warning` |
| `pop` | Confirmer une réussite (une fois) | `check_circle`, `check` |
| `draw` | Faire apparaître une icône en la traçant (une fois) | icônes de la famille Métier |

- `trigger="hover"` : l'animation part au survol de l'icône, ou du lien, du bouton ou de l'élément `.sg-icon-host` qui la contient. C'est le réglage à privilégier.
- `trigger="always"` : en continu pour `spin`, `pulse`, `bounce`, `nudge` ; une seule fois pour `shake`, `pop`, `draw`. Garde le mouvement continu pour un vrai chargement ; une seule icône animée en continu par écran.
- Durées : 0.6s au survol, 1 à 1.6s en continu. `prefers-reduced-motion` coupe toutes les animations.

## Composants

- Button : `primary`, `secondary`, `ghost` (lien souligné), `on-deep` et `ghost-deep` pour les fonds `deep`. Options `icon` (avant le libellé) et `arrow`.
- Tag : neutre, `brand`, `signal` (une fois par écran).
- Input : champ ou textarea, avec label, aide et erreur.
- SectionHeader : numéro, overline, titre, lede.
- ServiceCard : carte d'expertise numérotée avec tags et lien.
- NavBar, Hero, Footer : la structure du site.
- Icon : une icône Material Symbols en SVG, animable.

## À éviter

- Fonds beige, crème ou rose ; dégradés violets ; dégradés dans l'interface.
- Cartes avec bordure gauche colorée.
- Plus d'un orange par écran ; orange en fond de section.
- Texte blanc sur orange.
- Ombres lourdes à la place des filets.
