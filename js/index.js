$(document).ready(function(e){
    var i=1;
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
    function KiemTraName(){
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if($("#txtName").val() == ""){
            $("tbName").html("Khong duoc bo trong");
            return false;
        }
        if(!re.test($("#txtName").val())){
            $("#tbName").html("Ky tu dau viet hoa");
            return false;
        }
    }
    $("#tbName").blur(KiemTraName);

    function KiemTraNgay(){
        if($("txtDe").val() == ""){
            $("tbDe").html("Khong duoc bo trong");
            return false;
        }
        var day = new Date($("txtDe").val());
        var today = new Date();
        today.setDate(today.getDate() + 3);
        if(day < today){
            $("tbDe").html("phai sau ngay hien tai 3 ngay");
            return false;
        }
        $("#tbDe").html("*");
        return true;
    }
    $("#txtDe").blur(KiemTraNgay);

    function KiemTraMail(){
        var re = /^[a-zA-Z0-9.\_\-]+@([a-zA-Z0-9])+.\w{3}$/;
        if($("#txtMail").val() == ""){
            $("#tbMail").html("Khong duoc bo trong");
            return false;
        }
        if(!re.test($("txtMail").val())){
            $("#tbMail").html("Nhap dung dinh dang mail abc@gmail.com");
            return false;
        }
        $("#tbMail").html("*");
        return true;
    }
    $("#txtMail").blur(KiemTraMail);

    function KiemTraAdd(){
        if($("#txtAdd").val() == ""){
            $("#tbAdd").html("Dia chi khong duoc bo trong");
            return false;
        }
        $("#tbAdd").html("*");
        return true;
    }
    $("#txtAdd").blur(KiemTraAdd);

    function KiemTraPhone() {
        var re = /^090-\d{4}-\d{3}$/;
        if($("#txtPhone").val()==""){
            $("#tbPhone").html("khong duoc bo trong");
            return false;
        }
        if(!re.test($("txtPhone").val())){
            $("#tbPhone").html("Nhap theo dung dang 090-0000-000");
            return false;
        }
        $("#tbPhone").html("*");
        return true;
    }
    $("#txtPhone").blur(KiemTraPhone);
    $("#btnSave").click(function () {
        if(KiemTraAdd() == true && KiemTraMail() == true && KiemTraName() == true && KiemTraNgay() == true && KiemTraPhone() == true){
            row = "<tr>";
            row += "<td>" + (i++) + "<td>";
            row += "<td>" + $("txtName").val() + "</td>";
            row += "<td>" + $("txtAdd").val() + "</td>";
            row += "<td>" + $("txtDe").val() + "</td>";
            row += "<td>" + $("txtMail").val() + "</td>";
            row += "<td>" + $("txtPhone").val() + "</td>";
            row += "</tr>"
            $("#table").append(row);
            $("#myModal").modal("hide");
            return false;
        }
        return false;
    });
});