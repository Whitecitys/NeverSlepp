// 1  6  7 16 17 18 19 36    1*5+1 1*5+2  1*5+11 1*5+12 

// 2  8  9 20 21 22 23       1*5+3 1*5+4       

// 3 10 11 24 25 26 27       1*5+5 1*5+6

// 4 12 13 28 29 30 31       1*5+7 1*5+8

// 5 14 15 32 33 34 35       1*5+9  1*5+10
function selectfruit(num) {
    mango = 'mango'
    coconut = 'coconut'
    lime = 'lime'
    tamarind = 'tamarind'
    starfuirt = 'starfuirt'
    count = 1;
    fruit = [];
    for (i = 0; i <= 10; i++) {

        for (j = 0; j < count; j++) {
            fruit.push(mango)
        }
        for (j = 0; j < count; j++) {
            fruit.push(coconut)
        }
        for (j = 0; j < count; j++) {
            fruit.push(lime)
        }
        for (j = 0; j < count; j++) {
            fruit.push(tamarind)
        }
        for (j = 0; j < count; j++) {
            fruit.push(starfuirt)
        }
        count = count * 2
    }
    console.log(fruit[num])
}

selectfruit(10);

