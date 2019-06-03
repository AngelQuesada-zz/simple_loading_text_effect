

var phrase = ""

default_options = {
    speed: 1,
    characters: [
        "$","&","%","#","@"
    ],
    change_spaces: false,
}

Element.prototype.start_simple_loading_text_effect = function() {
    console.log(this.innerHTML)
}

Element.prototype.stop_simple_loading_text_effect = function() {
    console.log("stop_simple_loading_text_effect")
}
