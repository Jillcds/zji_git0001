sap.ui.define([
    //加入一個新的MessageBox
    'sap/m/MessageBox',    
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    //調整Function參數?
    function(MessageBox, Controller) {
        "use strict";

        var LinkGroupController = Controller.extend("sap.m.sample.Link.LinkGroup", {
            //跳出訊息說已經按了
            handleLinkPress: function (evt) {
                MessageBox.alert("網路連結已被點選");
            }        
        });
        return LinkGroupController;
        /* 碼掉原來的Fucntion處理                 
        return Controller.extend("project001.controller.View1", {
            onInit: function () {

            }
            
        });
        */
    });
