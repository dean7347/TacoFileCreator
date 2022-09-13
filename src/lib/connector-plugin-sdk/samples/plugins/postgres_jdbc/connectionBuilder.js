(function dsbuilder(attr) {
 var urlBuilder = "jdbc:vertica://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + "Vmart" + "?";
return [urlBuilder];
})
