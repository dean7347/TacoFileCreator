(function propertiesbuilder(attr) {
    var props = {};
    var DBUSER= "ana_omp"
    var DBPASSWORD = "TDSF32M"
    var USERNAME= "omp_user"
    var USERPASSWORD = "shinhan@1"
 if((attr[connectionHelper.attributeUsername]== USERNAME) &&  (attr[connectionHelper.attributePassword]==USERPASSWORD))
    {
        props["user"] = DBUSER
        props["password"] = DBPASSWORD
    }else
    {
        props["user"] = "";
        props["password"] = "";
    }
    if (attr[connectionHelper.attributeSSLMode] == "require") {
        props["ssl"] = "true";
        props["sslmode"] = "require";
    }

    return props;
})

