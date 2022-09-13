(function dsbuilder(attr) {
    // var urlBuilder = "jdbc:postgresql://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase] + "?";
    // var urlBuilder = "jdbc:vertica://" + "172.19.190.93" + ":" + "4037" + "/" + "TANADB" + "?";
    var urlBuilder = "jdbc:vertica://" + "127.0.0.1" + ":" + "5433" + "/" + "Vmart" + "?";
    return [urlBuilder];
})
