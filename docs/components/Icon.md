# Icon

Icône Material Symbols Rounded 300 en SVG en ligne, colorée par `currentColor` et animable.

Le consommateur fournit `name` (une des 70 icônes, liste dans `Solganeo.icons` et dans `icons/svg/`) et, en option :

- `size` : en px, défaut 24. 18 dans un bouton, 20 à 24 dans le texte, 28 à 40 en illustration.
- `animate` : `spin`, `pulse`, `bounce`, `nudge`, `shake`, `pop` ou `draw`.
- `trigger` : `hover` (au survol de l'icône ou de son lien, bouton ou `.sg-icon-host`) ou `always` (défaut).
- `title` : rend l'icône lisible par les lecteurs d'écran. Sans `title`, elle est décorative (`aria-hidden`).

La couleur vient du parent : pose `color: var(--accent)` sur le conteneur. Pour une page sans React, `Solganeo.iconMarkup(name, { animate, size, color, loop, duration })` renvoie un SVG autonome animé en SMIL, à coller tel quel.
