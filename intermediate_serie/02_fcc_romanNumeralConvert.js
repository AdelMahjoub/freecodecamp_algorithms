//Roman Numeral Converter
function thousandRoman(x){
    return "M".repeat(x);
}
function hundredRoman(x){
    if( x == 9) return "CM";
    if( x >= 5 && x < 9) return "D"+"C".repeat(x-5);
    if( x == 4) return "CD";
    if( x < 4 ) return "C".repeat(x);
}
function decadeRoman(x){
    if( x == 9) return "XC";
    if( x >= 5 && x < 9) return "L"+"X".repeat(x-5);
    if( x == 4) return "XL";
    if( x < 4 ) return "X".repeat(x);
}
function unitRoman(x){
    if( x == 9) return "IX";
    if( x >= 5 && x < 9) return "V"+"I".repeat(x-5);
    if( x == 4) return "IV";
    if( x < 4 ) return "I".repeat(x);
}
function convertToRoman(num){
 var thousand = Math.floor(num/1000);
 var hundred = Math.floor(num%1000/100);
 var decade = Math.floor(num%100/10);
 var unit = Math.floor(num%10);
 var romanNumber = thousandRoman(thousand) + hundredRoman(hundred) + decadeRoman(decade) + unitRoman(unit);
 return romanNumber;
}
