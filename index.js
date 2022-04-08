function encryptpassword(password){
    var encrypted = "";
    for(var i=0;i<password.length;i++){
        encrypted += String.fromCharCode(password.charCodeAt(i) + 1);
    }
    return encrypted;
}

function decryptpassword(password){
    var decrypted = "";
    for(var i=0;i<password.length;i++){
        decrypted += String.fromCharCode(password.charCodeAt(i) - 1);
    }
    return decrypted;
}

function makePassword(){
    var password = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0;i<8;i++){
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return password;
}
