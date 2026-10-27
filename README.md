# audiently.fr

Site vitrine statique d'Audiently : https://www.audiently.fr

## Hébergement
- Hébergement mutualisé OVH (Apache), envoi des fichiers par FTP dans le dossier `www`.
- `.htaccess` : redirections http → https et audiently.fr → www, compression, cache, page 404.

## Déployer
1. Modifier les fichiers ici, vérifier en local (`python3 -m http.server`), committer.
2. Envoyer les fichiers modifiés par FTP dans `www` (ex. `lftp` avec `mirror -R`), en excluant `.git`, `README.md` et `.gitignore`.
3. Si `site.css` ou `site.js` changent, augmenter le paramètre `?v=` dans `index.html` et `404.html`.

Les identifiants FTP ne sont jamais stockés dans ce dépôt.
