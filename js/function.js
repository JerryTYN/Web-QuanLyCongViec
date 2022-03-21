$(document).ready(function(){
    function kta(){
        var anh = $("#txta").val();
        var reganh = anh.split('.').pop().toLowerCase();
        if ($.inArray(reganh, ['png', 'gif', 'jpg']) == -1){
            $("#era").html("Hình ảnh phải thuộc 1 trong các dạng: jpg, gif, png!!!");
            return false;
        }
        else{
            $("#era").html("");
            return true;
        }
    }
    $("#txta").blur(kta);

    function ktp(){
        var pass = $("#txtp").val();
        var regpass = /^([A-Za-z]*)*([0-9]*)*$/;
        if ($("#txtp").val()==""){
            $("#erp").html("Bắt buộc nhập");
            return false;
        }
        if(regpass.test(pass)){
            $("#erp").html("");
            return true;
        }
    }
    $("#txtp").blur(ktp);

    function ktn(){
        var name = $("#txtn").val();
        var regname = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*){1}$/;
        if (regname.test(name)){
            $("#ern").html("");
            return true;
        }   
        else{
            $("#ern").html("Nhập không đúng định dạng tên!!!");
            return false;
        } 
    }
    $("#txtn").blur(ktn);

    function ktphone(){
        var phone = $("#txts").val();
        var regphone = /^[0-9]{10,11}$/;
        if (regphone.test(phone)){
            $("#ers").html("");
            return true;
        }   
        else{
            $("#ers").html("Nhập không đúng định dạng số điện thoại!!!");
            return false;
        } 
    }
    $("#txts").blur(ktphone);

    function kte(){
        var email = $("#txte").val();
        var rege = /^[a-zA-Z0-9\.\_]+\@{1}[a-zA-Z0-9]+\.\w{2,4}$/;
        if (rege.test(email)){
            $("#ere").html("");
            return true;
        }   
        else{
            $("#ere").html("Nhập không đúng định dạng email!!!");
            return false;
        } 
    }
    $("#txte").blur(kte);

    $("#Open").click(function(){
        $("#myModal1").modal();
    });

    $("#save").click(function(){
        if(kta() == true){
            var index = ($("#txta").val()).lastIndexOf('\\');
                row = "<span>" + ($("#txta").val()).slice(index +1) + "</span>";
            $("#txtanh").remove();
            $("#editanh").append(row);
            $("#myModal1").modal("hide");
            return true;
        }
        return false;
    })
/**/ 
    $("#Open1").click(function(){
        $("#myModal2").modal();
    });

    $("#save1").click(function(){
        if(ktp() == true){
                row = "<span>" + $("#txtp").val() + "</span>";
            $("#txtpass").remove();
            $("#editpass").append(row);
            $("#myModal2").modal("hide");
            return true;
        }
        return false;
    })
/**/
    $("#Open2").click(function(){
        $("#myModal3").modal();
    });

    $("#save2").click(function(){
        if(ktn() == true){
                row = "<span>" + $("#txtn").val() + "</span>";
            $("#txtname").remove();
            $("#editname").append(row);
            $("#myModal3").modal("hide");
            return true;
        }
        return false;
    })  
/**/
    $("#Open3").click(function(){
        $("#myModal4").modal();
    });

    $("#save3").click(function(){
        if(ktphone() == true){
                row = "<span>" + $("#txts").val() + "</span>";
            $("#txtnum").remove();
            $("#editnum").append(row);
            $("#myModal4").modal("hide");
            return true;
        }
        return false;
    })
/**/
    $("#Open4").click(function(){
        $("#myModal5").modal();
    });

    $("#save4").click(function(){
        if(kte() == true){
                row = "<span>" + $("#txte").val() + "</span>";
            $("#txtem").remove();
            $("#edite").append(row);
            $("#myModal5").modal("hide");
            return true;
        }
        return false;
    })


})