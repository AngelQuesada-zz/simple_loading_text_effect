
const background = document.getElementsByClassName('page-background')[0]
const loading_text = document.getElementsByClassName('loading-text')[0]

let initial_text

Element.prototype.start_simple_loading_text_effect = function(options=null) {

    let default_options = {
        speed: 1,
        characters: [
            "$","&","%","#","@"
        ],
        change_spaces: false,
    }
    const element = this
    let speed = 0
    let characters = []
    if (options.speed) {
        speed = options.speed
    } else{
        speed = default_options.speed
    }
    if (options.characters) {
        characters = options.characters
    } else{
        characters = default_options.characters
    }
    if (options.change_spaces) {
        const change_spaces = options.change_spaces
    } else{
        const change_spaces = default_options.change_spaces
    }

    initial_text = this.textContent
    
    let text = process_string(this.textContent)
    
    text_array = text.split('')

    const initial_text_size = text_array.length
    const characters_size = characters.length
    let random_text_position
    let last_original_text_character
    
    window.interval = setInterval(function(){

        if(random_text_position == 0 || random_text_position && last_original_text_character){
            text_array[random_text_position] = last_original_text_character
            element.textContent = text_array.join("")
        }

        const random_character_position = Math.floor((Math.random() * characters_size) + 0)

        do{
            random_text_position = Math.floor((Math.random() * initial_text_size) + 0)
        }while(text_array[random_text_position] == " ")

        last_original_text_character = text_array[random_text_position]

        text_array[random_text_position] = characters[random_character_position]

        element.textContent = text_array.join("")

        console.log(text_array)

    }, speed*120)
}

Element.prototype.stop_simple_loading_text_effect = function() {
    console.log("Efecto terminado")
    clearInterval(window.interval)
    this.textContent = initial_text
}

function process_string(text){
    text = text.trim()
    return text
}

