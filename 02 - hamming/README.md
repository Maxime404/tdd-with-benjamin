# Etape 1
Implementer une fonction qui retourne la "distance de hamming", avec tests.
Le Hamming, c'est le nombre de difference entre les 2 chaines, a la meme position.
Exemple:
ABCD, et ABXY
Position 0 => A et A, pas de difference, on incremente pas la distance
Position 1 => B et B, pas de difference, on incremente pas la distance
Position 2 => C et X, difference! on incremente la distance de 1
Position 3 => C et X, difference! on incremente la distance de 1
Resultat => 2

# Etape 2
La distance de hamming de hamming etant censé comparé que des genomes (string composé uniquement des caracteres "A", "T", "C", "G"), si l'une des strings contient tout autre lettre, la fonction doit retourner -1

# Etape 3
Si les chaines sont de tailles differentes, la fonction doit levé une exception avec le message "String length don't match!"
Si les chaines sont de taille > 10 chars, la fonction doit levé une exception avec le message "Strings too long!"
Il y a une façon particulière de tester les exception avec JEST. Je vous laisse regarder dans la doc!