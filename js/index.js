const a = Number(prompt('Введіть число'));
fibuunachi(a);

function fibuunachi(a) {
    let x1 = 1;
    let x2 = 1;
    document.write(x1, ", ");
    document.write(x2, ", ");
    let x3 = x1 + x2;
    while (x3 <= a) {
        document.write(x3);
        x1 = x2;
        x2 = x3;
        x3 = x1 + x2;
        if  (x3 <= a) {
            document.write(", ");
        }
    }
}

document.write("<br>","<br>","<br>","list :", fibuunachiList(a));

function fibuunachiList(a) {
    let fl = [1, 1];
    while (fl[(fl.length) - 1] <= a) {
        fl.push(fl[(fl.length) - 1] + fl[(fl.length) - 2]);
    }
    if (fl[(fl.length) - 1] > a) {
        fl.pop(fl[(fl.length) - 1]);
    }
    return fl
}
