Creer une classe `Order` qui représente une commande (pensez à un site e-commerce, par exemple)
Cette classe reçoit des produits en paramètre à sa creation.
Les produits sont ici représentés par des objets JS simple
Un produit étant constitué de
- Un prix en centimes `price`
- Un nombre de quantité `quantity`
Le but de cette classe est de fournir 4 méthodes
- `totalQuantity` -> retourne la somme de toutes les quantités
- `productsCount` -> retourne le nombre de produits de la commande
- `priceInCents`  -> retourne la sommes des prix en centimes
- `priceInEuros`  -> retourne le prix en euro, "decoré" (i.e: avec le signe et 2 chiffres après la virgule)

## Exemple d'utilisation
let order = new Order([{ quantity: 2, price: 500 }, { quantity: 1, price: 200 }])
order.totalQuantity() 	# => 3
order.productsCount() 	# => 2
order.priceInCents()	# => 1200
order.priceInEuros() 	# => 12,00€ (2 chiffre après la virgule à chaque fois)

## Rendu
- Vous avez jusqu'à 13H pour rendre
- Sous forme de gist SECRET (gist.github.com)
- Le gist doit contenir 2 fichiers (pas 2 gist differents!), je dois recevoir qu'une URL par personne
- Mettez votre nom et prenom en description du gist
- premier fichier order.js // deuxieme fichier order.spec.js
- objectif 100% coverage
- Envoyez moi en message privé votre URL de gist SECRET sur Slack

Précision que je me dois de faire, c'est un exam chez vous, avec impossibilité de control, alors jouez le jeu.
PS: Je sais cramer un copier coller à 1000 km, ne prenez pas de risque