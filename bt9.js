let result = "javascript" + 5;
//Kết quả là chuỗi javascript đã được nối với 5 qua "+"
let result1 = 'javascript' - 1;
//Kết quả ra NaN bởi javascript không phải số
let result2 = `3` + 2;
//Kết quả ra 32 bởi chuỗi 3 đã được nối với chuỗi 2
let result3 = '5'-4;
//Kết quả ra 1 bởi 5-4=1
let result4 =  isNaN( `123`);
//Kết quả ra false bởi 123 là số
let result5 = isNaN(`hello`);
//Kết quả ra trua bởi hello không phải số
let result6= Number.isNaN("123");
//Kết quả ra false bởi 123 là số
let result7 = Number.isNaN(NaN);
//Kết quả ra true bởi NaN không phải số