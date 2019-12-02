# Zadanie

## Część 1
Na stronie znajduje się 6 nagłówków. 

Zapiszcie za pomocą zmiennych:
 - $lineHeight wysokość linii
 - $fontSize - podstawowy rozmiar tekstu 
 
a następnie zastosujcie te style dla całego dokumentu.

Ostylujcie nagłówki w taki sposób, aby na podstawie zdefiniowanego rozmiaru tekstu zmieniała się ich wielkość. 

Wykorzystajcie pętle i interpolację. 

Obliczcie odpowiednio rozmiar każdego nagłówka - pamiętajcie o ich hierarchii (h1 powinien być największy).

Ustawcie nagłówkom różne kolory.

Skorzystajcie z funkcji opisanych na stronie http://sass-lang.com/documentation/Sass/Script/Functions.html


## Część 2
Na stronie znajduje się 10 divów o klasie **.elem_x**.
Za pomocą pętli ostylujcie je tak, by miały naprzemienne tło, to jest:
- nieparzyste powinny mieć tło koloru: #FDD692
- parzyste powinny mieć tło koloru: #DE6449


## Część 3
W pliku **scss/_data.scss** znajduje sie lista **$colorsList**, która zawiera różne numery kolorów, które znajdują się w mapie **$colorsMap**.

Naszym zadaniem będzie zrobienie pętli po tej liście, i dla każdego numeru pobranie odpowiedniego koloru. 

Przykładowo dla numeru jeden powinniśmy pobrać kolor "color_1", dla numeru 4 kolor "color_4" z mapy. 

Po pobraniu koloru z mapy wstawmy go jako tło n-tego diva w elemencie **.canvas**. 

Użyjmy tutaj odpowiedniego selektora np. nth-child(n) wraz z interpolacją.


## Część 4
Mamy tablicę z dniami:

$days: (
    monday      : #f15c5c,
    tuesday     : #b84a39,
    wednesday   : #6f3826,
    thursday    : #f9c00c,
    friday      : #00b9f1,
    saturday    : #7200da,
    sunday      : #f9320c
);

Wygenerujmy klasy o nazwach **day-monday**, **day-tuesday** itp., które będą miały ustawione tło koloru pobranego z mapy o danym kluczu (np. klasa day-monday powinna mieć tło #f15c5c). 

Sprawdźmy w pliku css czy udało się je wygenerować.

## Część 5
Wygenerujmy 100 klas o nazwach margin-top-10, margin-top-20, margin-top-30 itd., które posłużą nam do odsuwania od siebie elementów i będą nadawały odpowiedni margines.

## Część 6
Napiszmy mixin **arrow($size, $color, $direction)**, który będzie dodawał do elementy strzałkę. 

Do mixina powinno móc się podać rozmiar, kolor i kierunek, w którym ta strzałka będzie skierowana, ale parametry te nie powinny być wymagane.

