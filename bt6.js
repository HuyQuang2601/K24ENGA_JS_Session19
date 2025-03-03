let a = +prompt ("Nhập giá trị của a");
let b = +prompt ("Nhập giá trị của b");
let c = +prompt ("Nhập giá trị của c");

    let delta = b**2 - 4 * a * c;
    if (delta < 0) {
        alert("Phương trình không có nghiệm");
    } else if (delta === 0) {
        let x1 = x2 = -b/(2*a);
        alert(`Phương trình có nghiệm kép x1 = x2 = ${x1}`)
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    }