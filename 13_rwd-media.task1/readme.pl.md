Zadania RWD jednostki
=====================

Mamy plik z przygotowanym html.  
Naszym celem będzie odpowiednio go stylować.  
Spróbujmy w tych zadaniach używać jednostek relatywnych.

Zadanie 1.
----------
Zacznijmy od ostylowania elementu banera, który jest oznaczony klasą **.first-section**.
- Nadajmy mu pełną wysokość ekranu.
- Za pomocą flexboxa doodajmy wycentrujmy mu zawartość
- Dodajmy mu podwójne tło. Pierwsze to gradient z kolorami **rgba(#6C49B8, 0.7)** i **rgba(#011627, 0.7)**. Drugie tło to grafika **bg.jpeg** znajdująca się w katalogu images.  
  Tło to powinno być wycentrowane i stanowić całą powierzchnię baneru.
- Pamiętajmy, że wiele teł podajemy po przecinku - tak samo jak w przypadku box-shadow czy text-shadow.
- Główny tytuł w banerze zróbmy w kolorze białym i rozmiarze 3x większym niż normalny tekst na stronie.

Na małych rozdzielczościach (do 768px) baner powinien już być znacznie niższy. Dajmy mu maksymalną wysokość 500px

Zadanie 2.
----------
Pod banerem znajduje się sekcja **.main** z trzema artykułami.
- ustawmy je w poziomie, tak by każde z nich zajmowało 1/3 szerokości rodzica
- wewnętrzny odstęp w takim artykule powinien wynosić 30px
- minimalna wysokość każdego artykułu 300px
- tytuł artykułu powinien wynosić 30px
- wielkość liter tekstu powinna wynosić wynosić 14px

Za pomocą media dla małych rozdzielczości (do 768px) ustawmy artykuły jeden pod drugim i wyłączmy im minimalną wysokość.

Zadanie 3
---------
Na górze strony znajduje się nawigacja (element .header w ktorym jest element .menu).  
Na ekranach poniżej 768px nawigacja nie powinna być już przyklejona do ekranu, jej elementy powinny być ustawione jeden pod drugim, oraz powinna mieć tło czarne nieprzezroczyste.  
Dodatkowo każdy jej link powinien mieć tylko obramowanie z dołu (na dużych mają z prawej strony, więc trzeba je też wyzerować).

Zadanie 4
---------
Jeżeli użytkownik naszej strony będzie chciał ją wydrukować, dostanie średni widok.
 
Sprawdźmy to naciskając klawisze **Ctrl + P** w przeglądarce.  
Dla druku:
- schowajmy nawigację
- główny banner nie powinien mieć tła i minimalnej wysokości
- tytuł banera nie powinien być wycentrowany (align-content:flex-start)
- teksty na drukowanej stronie powinny być czarne.

Dodajmy mini poprawki, jak wyrównanie tekstów na drukowanej karcie. 

Każdorazowo trzeba włączać podgląd wydruku za pomocą klawiszy **Ctrl + P**