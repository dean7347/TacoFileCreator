(function dsbuilder(attr) {
    // var urlBuilder = "jdbc:postgresql://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase] + "?";
    var urlBuilder = "jdbc:vertica://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase] + "?";
 
    return [urlBuilder];
})
