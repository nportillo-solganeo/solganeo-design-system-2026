# Button

Bouton d'action, en forme de pilule, avec flèche optionnelle.

- `primary` : fond `brand`, texte `on-brand`. Un seul par section (« Prendre rendez-vous »).
- `secondary` : contour `line-strong`, texte `ink`. Action secondaire (« Demander un audit »).
- `ghost` : lien souligné, pour une action tertiaire dans un texte ou une carte.
- `on-deep` et `ghost-deep` : les deux équivalents sur un fond `deep`.
- `size="lg"` dans un hero ; `arrow` pour une action qui emmène ailleurs (flèche Material `arrow_forward`, qui glisse au survol) ; `icon` (nom d'une icône) pour une icône avant le libellé, ex. `calendar_month` sur « Prendre rendez-vous ».

Le consommateur fournit le libellé, `onClick` ou `href` (rend alors un lien). Focus : anneau `focus` 2px.
