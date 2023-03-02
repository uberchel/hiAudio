"user strict";

(function () {

    /**
     *  Elements Object
     */
    var elems = {};

    /**
     * Events Object
     */
    var events = {};

    /**
     * Default options
     */
    var options = {};

    /**
     * Default player style
     */
    var style = '';


    /**
     * Player ui tools
     */
    var uitool = '';


    /**
     * Global Object player
     */
    var player = {

    };

    if (!window['hiAudio']) {
        window.hiAudio = function () {
            return player;
        };
    }

}());