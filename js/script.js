let pokemonList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

// Answers

// Question 1
document.getElementById("host-name").innerHTML = "Sumeet";
document.getElementById("collaborator-name").innerHTML = "Zack";
document.getElementById("collaborator-2-name").innerHTML = "Null";


// Question 2
// You can also create their own CSS classes in style.css file and use that. 
//There is a floating button in the top right corner. Turn it into a toggle button. On click, it should hide/remove all the instructions (yellow boxes, class="question"). Update the button text accordingly.Challenge: Add a keyboard shortcut 'i' to do the same.
document.getElementById("instruction_button").addEventListener("click", function () {
    let instructions = document.getElementsByClassName("question");
    for (let i = 0; i < instructions.length; i++) {
        instructions[i].style.display = "none";
    }
    if (document.getElementById("instruction_button").innerHTML == "Hide Instructions") {
        document.getElementById("instruction_button").innerHTML = "Show Instructions";
    } else {
        document.getElementById("instruction_button").innerHTML = "Hide Instructions";
    }
});




// Question 3
// Try change event first
// As the user types, if the user enters first name as 'John', autopopulate the last name to 'Doe'
document.getElementById("first_name").addEventListener("input", function () {
    if (document.getElementById("first_name").value == "John") {
        document.getElementById("last_name").value = "Doe";
    }
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.




//Question 6





//Question 7





//Question 8
//Change the background color of the page, when the user chooses a color. Utilize the simple color picker from the HTML file.
// document.getElementById("color_picker").addEventListener("change", function(){
//     document.body.style.backgroundColor = document.getElementById("color_picker").value;
// });  //This is the correct way to do it. But the color picker is not working. So, I have used the below code to change the background color of the page.
//     document.getElementById("color_picker").addEventListener("input", function () {
//         document.body.style.backgroundColor = document.getElementById("color_picker").value;
// });

let color = document.getElementById("color_picker").value;
    document.body.style.backgroundColor = color;
    document.getElementById("color_picker").addEventListener("input", function () {
        color = document.getElementById("color_picker").value;
        document.body.style.backgroundColor = color;
});






//Question 9
