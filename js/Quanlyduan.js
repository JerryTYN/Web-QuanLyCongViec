var ch='<tr><td id="nn"><b>Công việc</b></td><td id="cv"><b>Tên công việc</b></td><td id="mota"><b>Mô tả</b></td><td id="manv"><b>Mã nhân viên</b></td><td id="ngaynhan"><b>Ngày nhận cv</b></td><td id="ngayhethan"><b>Ngày hết hạn cv</b></td><td id="nutxoa"><b>Xóa</b></td></tr>';
var i=0;
function myFunction() {
    // var table = document.getElementById("myTable");
    // var row = table.insertRow(1);
    // var ten = row.insertCell(0);
    // var ten1 = row.insertCell(1);
    // var cot3 = row.insertCell(2);
    // cot3.innerHTML="X";
    
    ch=document.getElementById("myTable").innerHTML;
    var ndten = document.getElementById("pccv").value;
    // ten.innerHTML= ndten;
    var ndten1 = document.getElementById("nguoinhan1").value;
    // ten1.innerHTML=ndten1;
    var mota = document.getElementById("mtcv").value;
    var manv = document.getElementById("nguoinhan").value;
    var ngaynhan = document.getElementById("tu").value;
    var ngayhethan = document.getElementById("den").value;
    i++;
    var aa = (new congviec(ndten,ndten1,mota,manv,ngaynhan,ngayhethan));
    dscv.push(aa);
    ch = ch + "<tr onclick='chontr(this)' class='bentrai' id='hang"+i+"'><td onclick='dodulieu("+i+");' class='benphai'>"+ndten+"</td>"+"<td onclick='dodulieu("+i+");' >"+ndten1+"</td>"+"<td onclick='dodulieu("+i+");' >"+mota+"</td>"+"<td onclick='dodulieu("+i+");' >"+manv+"</td>"+"<td onclick='dodulieu("+i+");' >"+ngaynhan+"</td>"+"<td onclick='dodulieu("+i+");' >"+ngayhethan+"</td>"+"<td class='nutxoa' onclick='Xoatd("+i+");'>"+"<label >Xóa</label>"+"</td>"+"</tr>";
    document.getElementById("myTable").innerHTML=ch;

     var kth=parseInt(document.getElementById('morong').style.height.substring(0,3));
     if(kth>=480)
     {
         document.getElementById('morong').style="overflow-y: scroll;background-color: yellow; height: 480px;"
        
     }
    load();
}
var luuxoa = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function Xoatd(ai) {
    document.getElementById("capnhat2").style.display = "none";
    document.getElementById("hang"+ai).style="display: none;";
    luuxoa[ai] = 1;
    // dscv.splice(ai-1, 1);
    dangchon = -1;
    // dscv[0] = -1;
    // load();
}
function xuong() {
    document.getElementById('gv').style.border='3px solid black';
}
function len() {
    document.getElementById('gv').style='text-align: center;border-radius: 10px;box-shadow: 1px 1px 1px;float: left;display: block;width: 100px; box-sizing: border-box;';
}
function xuong1() {
    document.getElementById('capnhat2').style.border='3px solid black';
}
function len1() {
    document.getElementById('capnhat2').style='text-align: center;border-radius: 10px;box-shadow: 1px 1px 1px;float: left;display: block;width: 100px; box-sizing: border-box;margin-left: 20px;';
}
// funciton btnCapNhat(){
//     var i="";
//     var pc = document.getElementById("pccv");
//     if(pc.value == "")
//     {
//         i+="Bạn chưa nhập phân công.<br/>";
//     }
// }
$(document).ready(function(){
    $("#pccv").blur(function(){
        checkrong();
    })
})
$(document).ready(function(){
    $("#pccv").blur(function(){
        $("#nguoinhan1").blur(function(){
            checkrong1();
        })
    })
})
$(document).ready(function(){
    $("#mtcv").blur(function(){
        checkrong2();
    })
})
$(document).ready(function(){
    $("#nguoinhan").blur(function(){
        checkrong3();
    })
})
$(document).ready(function(){
    $("#tu").blur(function(){
        checkrong4();
    })
})
$(document).ready(function(){
    $("#tu").blur(function(){
        $("#den").blur(function(){
            checkrong5();
        })
    })
})
$(document).ready(function(){
    $("#tu").blur(function(){
        $("#den").blur(function(){
            checkngay();
        })
    })
})
function checkrong(){
    var cv = $("#pccv").val();
        if(cv != ""){
            $("#erpccv").html("(*)");
            return true;
        }else{
            $("#erpccv").html("Không được bỏ trống !!!");
            return false;
        }
}
function checkrong1(){
    var nn = $("#nguoinhan1").val();
            if(nn != ""){
                $("#ernn1").html("(*)");
                return true;
            }else{
                $("#ernn1").html("Không được bỏ trống !!!");
                return false;
            }
}
function checkrong2(){
    var mt = $("#mtcv").val();
        if(mt != ""){
            $("#ermt").html("(*)");
            return true;
        }else{
            $("#ermt").html("Không được bỏ trống !!!");
            return false;
        }
}
function checkrong3(){
    var nhan = $("#nguoinhan").val();
        var ma = /^[0-9-]{8}$/;
        if(ma.test(nhan)){
            $("#ernn").html("(*)");
            return true;
        }else{
            $("#ernn").html("Nhập mã người nhận gồm 8 số !!!");
            return false;
        }
}
function checkrong4(){
    var tu = new Date($("#tu").val());
        var hn = new Date();
        if(tu >= hn){
            $("#ertu").html("(*)");
            return true;
        }else{
            $("#ertu").html("Vui lòng nhập đúng !!!");
            return false;
        }
}
function checkrong5(){
            var den = new Date($("#den").val());
            var tu = new Date($("#tu").val());
            if(den > tu){
                $("#erden").html("(*)");
                return true;
            }else{
                $("#erden").html("Vui lòng nhập đúng !!!");
                return false;
            }
}
function checkngay() {
            var den = new Date($("#den").val());
            var tu = new Date($("#tu").val());
            var days = (den.getTime()-tu.getTime())/(1000*60*60*24);
            if(days <= 30 && days > 0 ){
                $("#ersongay").html(days+" ngày");
            }else if(days >30){
                var thang = parseInt(days/30);
                $("#ersongay").html(thang + " tháng" +" "+ (days-(thang*30)) + " ngày");
            }else{
                $("#ersongay").html("chưa nhập ngày hoặc ngày sai !!!");
                return false;
            }
        }
// function xulyngay(str) {
//     var a = " "+str;
//     var st = ["","","",""];
//     st = a.split(" ");
//     var xulyngay1 = st[0]+" "+st[1]+" "+st[2]+" "+st[3]; 
//     return xulyngay1;
// }
var dangchon = 0;
function dodulieu(dl) {
    document.getElementById("pccv").value = dscv[dl].pccv;
    document.getElementById("nguoinhan1").value = dscv[dl].tcv;
    document.getElementById("mtcv").value = dscv[dl].mt;
    document.getElementById("nguoinhan").value = dscv[dl].nn;
    document.getElementById("tu").value = dscv[dl].tungay;
    document.getElementById("den").value = dscv[dl].denngay;
    checkngay();
    dangchon = dl;
    document.getElementById("capnhat2").style.display = "block";
    load();
    chontr2(dl);
}
function chontr2(aaa) {
    // if(aaa=dangchon)
    // {
    //     document.getElementById("hang"+aaa).style.backgroundColor="red";
    // }
    // else 
        document.getElementById("hang"+aaa).style.backgroundColor="rgb(0, 255, 255)";
}
function themvaobang(){
    if(checkrong()==true && checkrong1()==true && checkrong2()==true && checkrong3()==true){
        myFunction();
        return true;
    }
    return false;
    
}
function congviec(pccv,tcv,mt,nn,tungay,denngay) {
    this.pccv = pccv;
    this.tcv = tcv;
    this.mt = mt;
    this.nn = nn;
    this.tungay = tungay;
    this.denngay = denngay;
}
var dscv = [
    new congviec("Viết content cho phòng ý tưởng","viết content","Viết content cho phòng ý tưởng","19431051",'2021-08-18','2021-09-14'),
    //new congviec(),
    //  new congviec(),
    //  new congviec(),
]
function load() {
    ch='<tr ><td id="nn"><b>Công việc</b></td><td id="cv"><b>Tên công việc</b></td><td id="mota"><b>Mô tả</b></td><td id="manv"><b>Mã nhân viên</b></td><td id="ngaynhan"><b>Ngày nhận cv</b></td><td id="ngayhethan"><b>Ngày hết hạn cv</b></td><td id="nutxoa"><b>Xóa</b></td></tr>';
    for (let index = 0; index < i; index++) {
        if(luuxoa[index] != 1){
            ch = ch + "<tr onclick='chontr(this)' class='bentrai' id='hang"+index+"'><td onclick='dodulieu("+index+");' class='benphai'>"+dscv[index].pccv+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].tcv+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].mt+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].nn+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].tungay+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].denngay+"</td>"+"<td class='nutxoa' onclick='Xoatd("+index+");'>"+"<label >Xóa</label>"+"</td>"+"</tr>";
        }
    }
    document.getElementById("myTable").innerHTML=ch;

}
window.onload = function() {
    i=1;
    lamxoa();
    // setInterval(function () {
    //     if(dangchon != -1){
    //         document.getElementById("capnhat").style.display = "block";
    //     }else{
    //         document.getElementById("capnhat").style.display = "none";
    //     }
    // },500)
}
function lamxoa() {
    var index = 0;
    ch='<tr><td id="nn"><b>Công việc</b></td><td id="cv"><b>Tên công việc</b></td><td id="mota"><b>Mô tả</b></td><td id="manv"><b>Mã nhân viên</b></td><td id="ngaynhan"><b>Ngày nhận cv</b></td><td id="ngayhethan"><b>Ngày hết hạn cv</b></td><td id="nutxoa"><b>Xóa</b></td></tr>';
    ch = ch + "<tr onclick='chontr(this)' class='bentrai' id='hang"+index+"'><td onclick='dodulieu("+index+");' class='benphai'>"+dscv[index].pccv+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].tcv+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].mt+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].nn+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].tungay+"</td>"+"<td onclick='dodulieu("+index+");' >"+dscv[index].denngay+"</td>"+"<td class='nutxoa' onclick='Xoatd("+index+");'>"+"<label >Xóa</label>"+"</td>"+"</tr>";
    document.getElementById("myTable").innerHTML=ch;
}
function capnhat() {
    if(checkrong()==true && checkrong1()==true && checkrong2()==true && checkrong3()==true){
        document.getElementById("capnhat2").style.display = "none";
        capnhat1(dangchon);
        load();
    }
}
function capnhat1(abc) {
    var ndten = document.getElementById("pccv").value;
    var ndten1 = document.getElementById("nguoinhan1").value;
    var mota = document.getElementById("mtcv").value;
    var manv = document.getElementById("nguoinhan").value;
    var ngaynhan = document.getElementById("tu").value;
    var ngayhethan = document.getElementById("den").value;
    dscv[abc] = (new congviec(ndten,ndten1,mota,manv,ngaynhan,ngayhethan));
}
function chontr(abcd) {
    abcd.style.backgroundColor="rgb(0, 255, 255)";
}