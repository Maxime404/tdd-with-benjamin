Creation d'une class `Person`
S'initialise avec 4 parametres
- `first_name` (string)
- `last_name` (string)
- `age` (integer)
- `cash` (float, decimal)
Doit implementer les methodes suivante
- `helloFullName()` => `Hello first_name last_name`
- `canDrink()` => boolean, true si la personne est majeure
- `canBuy(amount)` => boolean, true si on peut acheter avec le cash qu'on a
- `buy(amount)` => ne retourne rien, et decremente le cash -- Throw exception si on a pas assez de cash
- 'cashRemaining()' => retourne le cash

La façon dont je vais probablement corriger, c'est que je vais prendre l'une ou plusieurs de vos implementations, et ils devront passer avec mes tests vu que les entrés / sorties doivent matcher pour tout le monde, C'est aussi comme ça que je corrigerai l'exam.
J'avais mis que ca s'initialisait avec un objet à la base, mais 4 params feront l'affaire.
L'ordre des params doit être celui de la liste.
pour first_name et last_name - je m'attend a ce que leur valeur par defaut soit nullsi pas renseigné.
- `buy(amount)` => retourne le cash restant, et decremente le cash -- Throw exception si on a pas assez de cash : "You can't buy this! You are 1€ short!".
Le montant dynamique pour l'exception c'est la difference. Par exemple si on veut acheter avec 30, mais qu'on a 25, le message sera "You can't buy this! You are 5€ short!".
