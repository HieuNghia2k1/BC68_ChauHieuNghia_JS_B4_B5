document.getElementById("btnTong").onclick = function () {
  let diemToan = document.getElementById("diemToan").value * 1;
  let diemVan = document.getElementById("diemVan").value * 1;
  let diemAnh = document.getElementById("diemAnh").value * 1;
  // let khuVuc = document.getElementById("khuVuc").value;
  // let doiTuong = document.getElementById("doiTuong").value * 1;

  // Viết hàm xử lý khi người dùng chọn khu vực
  let khuVuc = "A";
  switch (khuVuc) {
    case "A": {
      return khuVuc == 1;
      break;
    }
    case "B": {
      return khuVuc == 2;
      break;
    }
    case "C": {
      return khuVuc == 3;
      break;
    }
    case "X":
      {
        return "Sinh viên không thuộc khu vực ưu tiên";
      }
      console.log(khuVuc);
  }

  // Viết hàm xử lý khi user chọn đối tượng

  let doiTuong = "1";
  switch (doiTuong) {
    case "1": {
      return doiTuong == 2.5;
      break;
    }
    case "2": {
      return doiTuong == 1.5;
      break;
    }
    case "3":
      {
        return doiTuong == 1;
      }
      console.log(doiTuong);
  }

  // Viết hàm xử lý khi nhập vào điểm bằng 0 thì sẽ trả về thông báo bạn đã thi trượt
  if (diemAnh || diemToan || diemVan == 0) {
    return "Bạn đã không vượt qua kì thi này";
  }

  let tongDiem3Mon = diemToan + diemAnh + diemVan;
  console.log(tongDiem3Mon);
  document.getElementById("btnTong").innerHTML =
    "Chúc mừng bạn đã vượt qua kì thi với số điểm: " + tongDiem3Mon;
};

// Bài tập Tính tiền điện

document.getElementById("btnDien").onclick = function () {
  let soDien = document.getElementById("soDien").value * 1;

  // Khai báo biến n là số điện nhập vào
  let n = soDien;

  if (n <= 50) {
    // let a = 50 - n;
    let a1 = n * 500;
    // return a1;
    console.log(a1);
  } else if (n > 50 && n <= 100) {
    // n > 50 && n < 100
    let b = n - 50;
    // let b1 = n - b;

    let b1 = b * 650 + (n - b) * 500;
    // return b1;
    console.log(b1);
  } else if (n > 100 && n <= 200) {
    // n > 100 && n < 200
    let c1 = n - 100;
    let c3 = n - c1 - 50;

    let c = c1 * 850 + c3 * 500 + c3 * 650;
    // return c1;
    console.log(c);
  } else if (n > 200 && n <= 350) {
    // n > 200 && n < 350
    let d = n - 200;
    console.log(d);
    let d1 = n - d - 100;

    let d2 = d1 - 50;
    let d3 = d * 1100 + d1 * 850 + d2 * 500 + d2 * 650;
    // return d1;
    console.log(d3);
  } else {
    // n > 350
    let e = n - 350;
    let e1 = n - e - 200;
    let e2 = e1 - 50;
    let e3 = e2 - 50;
    let e4 = e * 1300 + e1 * 1100 + e2 * 850 + e3 * 650 + e3 * 500;
    // return e1;
    console.log(e4);
  }
};

// Bài tập: Tính thuế thu nhập cá nhân
document.getElementById("thuNhapChiuThue").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let thuNhap = document.getElementById("thuNhap").value * 1;
  let phuThuoc = document.getElementById("phuThuoc").value * 1;
  let soNguoiPhuThuoc = phuThuoc * 1600000;
  let tongThuNhapChiuThue = thuNhap - 4000000 - soNguoiPhuThuoc;
  console.log(tongThuNhapChiuThue);

  if (tongThuNhapChiuThue <= 60000000) {
    let a = tongThuNhapChiuThue * 0.05;
    console.log(a);
    document.getElementById("thue").innerHTML =
      "Thu nhập chịu thuế của anh/ chị " +
      hoTen +
      " " +
      a.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  } else if (
    tongThuNhapChiuThue > 60000000 &&
    tongThuNhapChiuThue <= 120000000
  ) {
    let b = tongThuNhapChiuThue - 60000000;
    let c = tongThuNhapChiuThue - b;
    let d = b * 0.1 + c * 0.05;
    console.log(d);
    document.getElementById("thue").innerHTML =
      "Thu nhập chịu thuế của anh/ chị " +
      hoTen +
      ": " +
      d.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  } else if (
    tongThuNhapChiuThue > 120000000 &&
    tongThuNhapChiuThue <= 210000000
  ) {
    let e = tongThuNhapChiuThue - 120000000;
    let f = tongThuNhapChiuThue - e - 60000000;
    let g = e * 0.15 + f * 0.1 + f * 0.05;
    document.getElementById("thue").innerHTML =
      "Thu nhập chịu thuế của anh/ chị " +
      hoTen +
      ": " +
      g.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  } else if (
    tongThuNhapChiuThue > 210000000 &&
    tongThuNhapChiuThue <= 384000000
  ) {
    let h = tongThuNhapChiuThue - 210000000;
    let k = tongThuNhapChiuThue - h - 120000000;
    let l = tongThuNhapChiuThue - h - k - 60000000;
    let m = h * 0.2 + k * 0.15 + l * 0.1 + l * 0.05;
    document.getElementById("thue").innerHTML =
      "Thu nhập chịu thuế của anh/ chị " +
      hoTen +
      ": " +
      m.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  } else if (
    tongThuNhapChiuThue > 384000000 &&
    tongThuNhapChiuThue <= 624000000
  ) {
    // let n = tongThuNhapChiuThue - 384000000;
    let a1 = tongThuNhapChiuThue - 384000000; // 25%
    let a2 = tongThuNhapChiuThue - a1 - 210000000; // 20%
    let a3 = tongThuNhapChiuThue - a1 - a2 - 120000000; // 15%
    let a4 = tongThuNhapChiuThue - a1 - a2 - a3 - 60000000; // 5% && 10%
    let a5 = a1 * 0.25 + a2 * 0.2 + a3 * 0.15 + a4 * 0.1 + a4 * 0.05;
    document.getElementById("thue").innerHTML =
      "Thu nhập chịu thuế của anh/ chị " +
      hoTen +
      ": " +
      a5.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  } else if (
    tongThuNhapChiuThue > 624000000 &&
    tongThuNhapChiuThue <= 960000000
  ) {
    let b1 = tongThuNhapChiuThue - 624000000; // 30
    let b2 = tongThuNhapChiuThue - b1 - 384000000; // 25
    let b3 = tongThuNhapChiuThue - b2 - b1 - 210000000; // 20
    let b4 = tongThuNhapChiuThue - b3 - b2 - b1 - 120000000; // 15
    let b5 = tongThuNhapChiuThue - b4 - b3 - b2 - b1 - 60000000; // 5 && 10
    let b6 = b1 * 0.3 + b2 * 0.25 + b3 * 0.2 + b4 * 0.15 + b5 * 0.05 + b5 * 0.1;
    document.getElementById("thue").innerHTML =
      "Thu nhập chịu thuế của anh/ chị " +
      hoTen +
      ": " +
      b6.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  } else if (tongThuNhapChiuThue > 960000000) {
    let c1 = tongThuNhapChiuThue - 960000000; // 35
    let c2 = tongThuNhapChiuThue - c1 - 624000000; // 30
    let c3 = tongThuNhapChiuThue - c1 - c2 - 384000000; // 25
    let c4 = tongThuNhapChiuThue - c3 - c2 - c1 - 210000000; // 20
    let c5 = tongThuNhapChiuThue - c4 - c3 - c2 - c1 - 120000000; // 15
    let c6 = tongThuNhapChiuThue - c5 - c4 - c3 - c2 - c1 - 60000000; // 10 & 5
    let c7 =
      c1 * 0.35 +
      c2 * 0.3 +
      c3 * 0.25 +
      c4 * 0.2 +
      c5 * 0.15 +
      c6 * 0.1 +
      c6 * 0.05;
    document.getElementById("thue").innerHTML =
      "Thu nhập chịu thuế của anh/ chị " +
      hoTen +
      ": " +
      c7.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  }
};

// Bài tập: Tính tiền cáp
const NhaDan = "Nhà dân";
const DoanhNghiep = "Doanh nghiệp";

document.getElementById("btnCap").onclick = function () {
  // let maKH = document.getElementById("maKH").value;
  let soKenhCC = document.getElementById("soKenhCC").value * 1;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let loaiKH = "Nhà dân";
  let loaiKH2 = "Doanh nghiệp";

  if (loaiKH == "Nhà dân") {
    let maKH = document.getElementById("maKH").value;
    let n = soKenhCC;
    let tienCap = 4.5 + 20.5 + n * 7.5;
    console.log(tienCap);
    document.getElementById("tinhTienCap").innerHTML =
      "Số tiền cáp phải thanh toán: " +
      maKH +
      ": " +
      tienCap.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  }
};
