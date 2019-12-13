cordova.define("cordova-plugin-video-upload.VideoUpload", function(require, exports, module) {
    var exec = require('cordova/exec');
    
    exports.coolMethod = function (arg0, success, error) {
        exec(success, error, 'VideoUpload', 'coolMethod', [arg0]);
    };  
    
    function parseStoreArgs(args) {
        var a = [];
        a.push(args.path || null);
        return a;
    } 
        
    var VideoUpload = {
        /**
         * Initialize Picker
         */
        init:function() {
            exec(function() {}, function() {}, 'VideoUpload', 'init', []);
        },
        startUpload:function(storeOption, successCB, errorCB) {
            exec(successCB, errorCB, 'VideoUpload', 'startUpload', parseStoreArgs(storeOption));
        }
    };
    
    module.exports = VideoUpload;
    });
    