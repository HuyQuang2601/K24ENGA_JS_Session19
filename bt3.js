let a = +prompt ("1.VND-->USD 2.USD-->VND");
switch (a) {
    case 1:
        let vnd = prompt ("Nhập số tiền VND muốn đổi");
        vnd = vnd / 23000;
        alert (`${vnd} USD`);
        break;
    case 2:
        let usd = prompt ("Nhập số tiền USD muốn đổi");
        usd = usd * 23000 ;
        alert (`${usd} VND`);
        break;

    default:
        break;
}