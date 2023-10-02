$(function () {
    $("#username").blur(usernameCheck);
    $("#password").blur(passwordCheck);
    $("#repassword").blur(repasswordCheck);
    $("#passregister").click(passregister);
    $("#nameregister").click(nameregister);
})

function usernameCheck() {
    var username = $("#username").val();
    var usernameMsg = $("#usernameMsg");

    if (username == null || username == "") {
        usernameMsg.html("名前は必須項目です。");
        return false;
    } else {
        usernameMsg.html("");
        return true;
    }
}

function passwordCheck() {
    var password = $("#password").val();
    var passwordMsg = $("#passwordMsg");

    if (password.length < 6) {
        passwordMsg.html("パスワードは必ず6文字以上です。");
        return false;
    } else {
        passwordMsg.html("");
        return true;
    }
}

function repasswordCheck() {
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    var repasswordMsg = $("#repasswordMsg");

    if (password != repassword) {
        repasswordMsg.html("パスワードは一致しません。");
        return false;
    } else {
        repasswordMsg.html("");
        return true;
    }
}

function nameregister() {
    if (usernameCheck()) {
        alert("登録成功しました。")
    }
}

function passregister() {
    if (passwordCheck()) {
        alert("登録成功しました。")
    }
}