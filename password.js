class VGpassword {
    constructor() {
    }
    getState() {
        var vgpasswordRef = db.ref('vgpassword');
        vgpasswordRef.on("value", function (data) {
            vgpassword = data.val();
        })
    }
    update(vgpassword) {
        db.ref('/').update({
            vgpassword: vgpassword
        });
    }
}
