
const working = true

const background = document.getElementsByClassName('page-background')[0];
const loading_text = document.getElementsByClassName('loading-text')[0];

if (working) background.classList.add('d-none')
if (working) loading_text.classList.remove('text-white')

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
