// BÀI TẬP NỘP: TÍNH THUẾ THU NHẬP CÁ NHÂN
/**
 * INPUT: tên, tổng thu nhập, số người phụ thuộc
 * PROCESS:
 *  1.  Lấy input : tên, tổng thu nhập, số người phụ thuộc
 *  2. Tính: thu nhập chịu thuế (TNCT)
 *  3. Tính thuế thu nhập cá nhân: 
 *      thuế TNCN = TNCT * Phần trăm (tương ứng mức TNCT)
 *  4. In kết quả: tên, số thuế thu nhập cá nhân
 * OUTPUT: tên, thuế thu nhập cá nhân
 */
function calculateTax() {
    //input
    var name = document.getElementById("name").value;
    var totalIncome = document.getElementById("totalIncome").value * 1;
    var dependentNumber = document.getElementById("dependentNumber").value * 1;
    var taxIncome;
    var tax;
    var content = "";
    // Xu ly
    var taxIncome = totalIncome - 4e+6 -(dependentNumber * 1600000);
    // if (taxIncome > 960e+6) {
    //     tax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + (336e+6 * 0.3) + ((taxIncome - 960e+6) * 0.35);

    // } else if (taxIncome > 624e+6) {
    //     tax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + ((taxIncome - 624e+6) * 0.3);

    // } else if (taxIncome > 384e+6) {
    //     tax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + ((taxIncome - 384e+6) * 0.25);  
    // } else if (taxIncome > 210e+6) {
    //     tax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + ((taxIncome - 210e+6) * 0.2);  

    // } else if (taxIncome > 120e+6) {
    //     tax = (60e+6 * 0.05) + (60e+6 * 0.1) + ((taxIncome - 120e+6) * 0.15);  

    // } else if (taxIncome > 60e+6) {
    //     tax = (60000000 * 0.05) + ((taxIncome - 60000000) * 0.1);  

    // } else {
    //     tax = (taxIncome * 0.05); 
    // }


    if (taxIncome <= 60e+6) {
        tax = (taxIncome * 0.05); 

    } else if ( taxIncome <= 120e+6) {
        tax = (60000000 * 0.05) + ((taxIncome - 60000000) * 0.1);  
    } else if ( taxIncome <= 210e+6) {
        tax = (60e+6 * 0.05) + (60e+6 * 0.1) + ((taxIncome - 120e+6) * 0.15);  
    } else if (taxIncome <= 384e+6) {
        tax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + ((taxIncome - 210e+6) * 0.2);  
    } else if (taxIncome <= 624e+6) {
        tax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + ((taxIncome - 384e+6) * 0.25);  
    } else if (taxIncome <= 960e+6) {
        tax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + ((taxIncome - 624e+6) * 0.3);
    } else {
        tax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + (336e+6 * 0.3) + ((taxIncome - 960e+6) * 0.35);

    }

    content = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + tax;
    document.getElementById("show").innerHTML = content;
    document.getElementById("show").classList.add("info");
      
}

// TÍNH TIỀN CÁP


function capBill(){
    var cusId = document.getElementById("cusId").value;
    var chanelNum= document.getElementById("chanelNum").value*1;
    var companyType=document.getElementById("companyType").value;

}