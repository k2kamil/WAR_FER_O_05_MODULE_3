# Zadanie 

## Część 1
### Kolorowy nagłówek
    
Na stronie znajduje się 8 spanów z literami. 
Naszym celem będzie nadanie im ładnego wyglądu.

1) Stwórzmy 2 zmienne z kolorami: red i blue
2) Korzystając z odpowiedniej funkcji sass i odpowiednich selektorów css każdej kolejnej literze nadajmy inny kolor tła. Kolor tła pierwszej litery powinien być mieszanką obydwu kolorów o wartości 10% pierwszego koloru, kolor drugiej litery mieszanką o wartości 20% pierwszego koloru itp.
3) Każda litera powinna mieć cień o parametrach:
    x: 0, y: 2px, rozmycie: 10px, kolor: taki jak tło litery, ale w połowie przezroczysty. Wykorzystajmy tutaj dwie funkcje sass.


## Część 2
Klient przygotował dla nas kod informacji, która pojawia się na stronie. 

Niestety do końca nie jest pewien koloru jaki powinien użyć, dlatego prosi nas byśmy napisali tak kod, by w przyszłości łatwo mógł zmienić kolor na inny.

- stwórzcie zmienną $col o kolorze #F6B352
- tło alertu powinno być gradientem o kolorach: $col do przyciemniony $col o 10%
- alert powinien mieć cień o parametrach: x: 0, y: 2px, rozmycie: 10px, przezroczystość: 0.8, kolor: przyciemniony $col o 40%. Wykorzystajmy tutaj połączenie 2 funkcji sass.
- tytuł alertu powinien być rozjaśnionym $col o 40%
- tekst alerty powinien być rozjaśnionym $col o 20%
- przycisk zamknięcia chcemy by był wklęsły, dlatego dajmy mu $col przyciemniony o 20%, oraz cień tekstu o parametrach: x: 1px, y: 1px, rozmycie: 0, kolor: rozjaśniony $col o 10%
- za pomocą zagnieżdżania i selektora rodzica dodajmy do przycisku :hover, w którym kolor teksty damy na przyciemniony $col o 20%

Po uzyskaniu zadowalającego efektu, zmieńmy kolor zmiennej na inny dowolny.