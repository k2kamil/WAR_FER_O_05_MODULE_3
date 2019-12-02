Zadania jednostki
=================

Zadanie 1
---------
W pliku index.html znajdziemy element o klasie **.post**.
 
Jego elementy opisane są za pomocą PX.  
Chcielibyśmy, by jego wszystkie elementy były zależne od głównego elementu, co pozwoli nam w razie konieczności lekko cały taki element przeskalować.   
Zamieńmy jego wszystkie wielkości na jednostkę **rem** odpowiednio je przeliczając. 

Do takiego przeliczania można wykorzystać np. stronę http://pxtoem.com

Zadanie 2
---------
W pliku **_layout.scss** dla elementu **html** dodajmy font-size o wartości **calc(16px + 0.25vw)**. 

Spróbujmy zmniejszyć i zwiększyć przestrzeń strony.   
Można dla przykładu ustawić debugera z prawej strony ekranu i rozszerzając go zmniejszać przestrzeń strony.   
Można też po prostu skorzystać z narzędzi RWD debugera. 

Zauważmy jak subtelnie zmienia się wielkośc elementów wpisu.   
Jeżeli chcemy by te zmiany były bardziej "drastyczne", trzeba wtedy zastosować inny wzór, np. https://css-tricks.com/css-locks/.

Jest to technika stosowana na typowo blogowych stronach.

Zadanie 3
---------
Poniżej postu znajduje się przykładowy element z wczytywaniem o klasie **.loading**. 

Element ten opisany jest w pliku **_loading.scss**.  
Wczytywanie takie to komponent, który moglibyśmy używać w wielu momentach - np. wyświetlając go na buttonie, wczytując stronę itp.   
Problem z tym, że element taki powinien być łatwo skalowalny.   
W tym momencie opisany jest za pomocą PX, co powoduje, że każdorazowo będziemy musieli przeliczać wszystkie miary.

Dodajmy dla elementu **.loading** font-family ustawione na 10px.   
Dzięki temu łatwiej nam będzie liczyć wielkości em dla jego dzieci, ponieważ wtedy 14px = 1.4em.   

Zmieńmy dla tego elementu wszystkie wartości opisane w px na em.
Po takiej zmianie spróbujmy zmienić font-size elementu **.loading** na nieco większy.  

Zadanie 4
---------
Na dole strony znajduje się element **.bottom** z elementem **.box**.

Element **.bottom** powinien być na całą wysokość ekranu i mieć tło **#222**  
Element **.box** powinien być wycentrowanym kwadratem o złotym tle i wymiarach połowy mniejszego boku okna przeglądarki (pamiętajmy, że użytkownik może obrócić swoje urządzenie).