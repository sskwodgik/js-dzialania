function dzialania(int1, int2){
    let suma = int1 + int2;
    let iloczyn = int1 * int2;
    let roznica = int1 - int2;
    if(roznica < 0){
        console.log("Suma liczb "+int1+" oraz "+int2+" wynosi "+suma);
        console.log("Iloczyn liczb "+int1+" oraz "+int2+" wynosi "+iloczyn);
        console.log("Różnica liczb "+int1+" oraz "+int2+" jest mmniejsza od 0. Wynik jest nieprawidłowy");;
    }   else    {
        console.log("Suma liczb "+int1+" oraz "+int2+" wynosi "+suma);
        console.log("Iloczyn liczb "+int1+" oraz "+int2+" wynosi "+iloczyn);
        console.log("Różnica liczb "+int1+" oraz "+int2+" wynosi "+roznica);
    }
}
dzialania(15, 2);
dzialania(2, 33);