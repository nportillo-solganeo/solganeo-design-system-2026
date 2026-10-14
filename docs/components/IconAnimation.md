# IconAnimation

Démonstration des sept animations d'icônes, en continu, au survol et en SVG autonome SMIL.

Ce n'est pas un composant à part : chaque animation se règle sur `Icon` avec `animate` et `trigger`, ou dans `iconMarkup`. Règles : `trigger="hover"` par défaut ; mouvement continu réservé à un vrai chargement (`spin`) ; `shake` pour une erreur, `pop` pour une réussite, `draw` pour une entrée en scène ; une seule icône animée en continu par écran.
