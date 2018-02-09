var mapGrid = [
  ["Church", "Priests House", "Old Well", "Forest", "Mount Savage"],
  ["Tree House", "Old Shack", "Forest", "The Clock Tower", "Forest"],
  ["Ms. Waterson's House", "Mr. Peterson's House", "House", "General Store", "Forest"],
  ["Mill", "The Shirne", "Pond", "Forest", "Forest"],
  ["Farm", "Barn", "Tavern", "The Old Mine", "Mount Doom"]
];
var availableCommands = ["west/w", "north/n", "east/e", "south/e", "inventory/i/backpack/bp", "pick up/pickup(object)", "use(object)", "inspect(object)"];
var swearWords = ["asshole","dick","fuck", "pussy", "cunt", "twat", "ass", "bitch", "shit", "chode", "cock", "fag", "nigger", "nigga"];
var items = ["map"];
var itemsN = [];
var consumedItems = [];
var sentences = 0;
function pConsole(text){
  console.log(text);
  if(document.getElementById("console") != null){
    var textBox = document.getElementById('console');
  } 
  else{
    console.log("Couldn't assign console");
  }

  if(text == "<br>"){
    textBox.innerHTML += "<br>";
  }
  else{
    textBox.innerHTML += text+" <br>";
  }
  sentences++;
  if(sentences>20){
    var consoleText = textBox.innerHTML;
    consoleText = consoleText.slice(consoleText.indexOf("<br>")+4,consoleText.length);
    console.log(consoleText);
    textBox.innerHTML = consoleText;
    sentences--;
  }
}
function clearBox(){
    sentences = 0;
    document.getElementById('console').innerHTML = "";
}
var object = "";
  //The list of all the item descriptions
function inspect(object){
  switch(object) {
    case "shovel":
        pConsole("It's old and rusty but it will do.");
        break;
    case "map":
        pConsole('This map was given to me by Mr. Peterson oddly enough.');
        break;
    case "apple":
        pConsole("Apples aren't really for me, but I'll still probably use it at some point.");
        break;
    case "frog":
        pConsole("This is disgusting. I really don't know why I picked up this frog.");
        break;
    case "gun":
        pConsole("Hopefully, I never use this.");
        break;
    case "bottle":
        pConsole("It isn't particularly large, but holds a decent amount of liquid.");
        break;
    case "towel":
        pConsole("A frood that knows where his towel is, is a forced to be reckoned with.");
        break;
    case "wallet":
        pConsole("The wallet is full of a lot of money that will not be returned.");
        break;
    case "paper clip":
        pConsole("This paper clip is extremely strong. It seems equally as useful.");
        break;
    case "bag":
        pConsole("");
        break;
    default:
        pConsole("You don't have a " + object);
  }                     
}
var Savepoint = 0;
function progression(){
  Savepoint += 1;
}
var x = 2;
var y = 2;
var inputGF = "placeholder";
var inputG = inputGF.split(' ');
var cannotPass = "A mountain blocks your path";
var gameIsGoing = true;

//Location stories
function locationDesc(location){
  //The church
  if (location == mapGrid[0][0]){
    pConsole("This is the church. It has a grand hall and many doors that are never used. Friar Lawrence spends most of his time here.");
  }
  //Friar house    
  else if (location == mapGrid[0][1]){
    pConsole("Friar lawrence's house. Its a small mobile home directly to the east of the church.");
  }
  //The Well
  else if (location == mapGrid[0][2]){
    pConsole("This old well was put here when the town was built. I cant see a single coin at the bottom though");
  }
  //Grey River
  else if (location == mapGrid[0][3]){
    pConsole("The Grey river is running downstream. No one knows why this river is spewing grey mud, but no one cares either.");
  }
  //Mount Savage
  else if (location == mapGrid[0][4]){
    pConsole("Mount Savage is the most savage mountain you will find. Someone made it to the summit and got roasted so hard, he jumped off the side of the mountain");
  }
  //treehouse
  else if (location == mapGrid[1][0]){
    pConsole("Forest, There is a treehouse in   the trees. It looks abandoned.");
  }
  //Peterson
  else if (location == mapGrid[1][1]){
    pConsole("Mr. Peterson's old shack. Not much to say, but sometimes I hear noises coming from here. I probably shouldn't be here.");
  }
  //Dead Forest
  else if (location == mapGrid[1][2]){
    pConsole("The forest is littered with grey. ");
  }
  //Clock Tower
  else if (location == mapGrid[1][3]){
    pConsole("The clock tower is old, and loud too. It strikes at 12.");
  }
  //Forest without plans
  else if (location == mapGrid[1][4]){
    pConsole("The forest is dying. Not many animals here right now.");
  }
  //Waterson
  else if (location == mapGrid[2][0]){
    pConsole("Ms.Waterson's House, it is newly built. Her grass is dead");
  }
  //Peterson Dungeon
  else if (location == mapGrid[2][1]){
    pConsole("Mr. Peterson, typical Annoying Neighbor, a person of many names.");
  }
  //Home
  else if (location == mapGrid[2][2]){
    itemsN.push("shovel");
    pConsole("You're at your new house. It's an old house, and you haven't made any renovations yet, but it still feels like home.");
    if (Savepoint === 0){
      pConsole("You hear a knock at the " + "south" + " door. It leads to the " + "Pond.");

    }
  }
    //Shop
  else if (location == mapGrid[2][3]){
    pConsole("The general store. Convenient way to but nothing I will ever need.");
  }
  //Forest Trail
  else if (location == mapGrid[2][4]){
    pConsole("Forest, people hike between here and the mountains all the time.");
  }
  //Water Mill
  else if (location == mapGrid[3][0]){
    pConsole("The mill is quiet at nights, but it starts back up early.");
  }
  //Shrine
  else if (location == mapGrid[3][1]){
    pConsole("The Shrine is almost never in use.");
  }
  //The Pond, where the player first meets Mark, the supporting Best friend
  else if (location == mapGrid[3][2]){
    if (Savepoint === 0){
      pConsole("Its Mark, my childhood friend. He wasn't supposed to visit until next week.");
      pConsole(" ");
      pConsole("Mark");
      pConsole(" ");
      pConsole("Hey, I know you're probably thinking " + "I wasn't supposed to show up until next week, but my... My mom kicked me out of her house.");
      Savepoint += 1;
    }
    else {
      pConsole("Its the old Pond");
    }
  }
  //Forest with plans o be determined. More of a placeholder ATM.
  else if (location == mapGrid[3][3]){
    pConsole("This forest is a bit burned down from a small fire last month.");
  }
  //The City Park
  else if (location == mapGrid[3][4]){
    pConsole("The city park is old and run down. The only thing that is maintained is the statue of the mayor.");
  }
  //The Farm
  else if (location == mapGrid[4][0]){
    pConsole("Ol' bens farm. I've never met the guy, but he is about the richest man in town.");
  }
  //Bens barnhouse
  else if (location == mapGrid[4][1]){
    pConsole("The barn. Its locked");
  }
  //The Tavern
  else if (location == mapGrid[4][2]){
    itemsN.push('wallet');
    pConsole("The tavern is a great place to get information or lose it.");
  }
  //The Mines
  else if (location == mapGrid[4][3]){
    pConsole("This is the place I work. We mine gold for the rich.");
  }
  //Mount Doom
  else if (location == mapGrid[4][4]){
    pConsole("No one has ever made it to the top.");
  }
  else {
    pConsole("Are you sure this is a place on the map");
  }
}

//Game loop Starts Here
pConsole("Welcome to the game, type " + "help" + " for help, or anything to begin the game.");
function newInput(){
document.getElementById("input").focus();
//while (gameIsGoing){
  var inputG = document.getElementById("input").value.toLowerCase();
  //Help command
  if (inputG === "help" || inputG === "h"){
    pConsole("Some commands you can do:");
    for (i = 0; i < availableCommands.length; i++) { 
    pConsole(availableCommands[i]);
    }
  }
  //Movement commands
  else if (inputG === "w" || inputG === "west" || inputG.endsWith("west")){
    if (x != 0){
      itemsN = [];
      x--;
      pConsole("<br>");
      pConsole("You travelled west to the " + mapGrid[y][x]);
      locationDesc(mapGrid[y][x]);
    }
    else {
      pConsole(cannotPass)
    }
  }
  else if (inputG == "e" || inputG == "east" || inputG.endsWith("east")){
    if (x != 4){
      itemsN = []
      x++;
      pConsole("<br>");
      pConsole("You travelled east to the " + mapGrid[y][x])
      locationDesc(mapGrid[y][x]);
    }
    else {
      pConsole(cannotPass)
    }
  }
  else if (inputG == "n" || inputG == "north" || inputG.endsWith("north")){
    if (y != 0){
      itemsN = []
        y--;
        pConsole("<br>");
        pConsole("You travelled north to the " + mapGrid[y][x])
        locationDesc(mapGrid[y][x]);
    }
    else {  
      pConsole(cannotPass)
    }
  }
  else if (inputG == "s" || inputG == "south" || inputG.endsWith("south")){
    if (y != 4){
      itemsN = []
      y++;
      pConsole("<br>");
      pConsole("You travelled south to the " + mapGrid[y][x])
      locationDesc(mapGrid[y][x]);
    }
    else {
      pConsole(cannotPass)
    }
  }
  //inventory access
  else if (inputG.endsWith("inventory") || inputG.endsWith("inv") || inputG === "i" || inputG === "bp" && items.includes("bag") || inputG.endsWith("backpack") && items.includes("bag")|| inputG.endsWith("bag") && items.includes("bag")){
    pConsole("In your backpack you have:")
    for (i = 0; i < items.length; i++) { 
      var item = items[i];
      if (item.startsWith("a") || item.startsWith("e") || item.startsWith("i") || item.startsWith("o") || item.startsWith("u")){
        pConsole("An " + item)
      }
      else {
        pConsole("A " + item)
      }
    }
  }
  //Accessing the map
  else if (inputG.startsWith("use") && inputG.endsWith("map")){
    pConsole("")
  }
//Picking Up Objects
  else if (inputG.startsWith("pickup") || inputG.startsWith("pick up")){
    var object = inputG.substr(inputG.lastIndexOf(" ")+1);
      if (itemsN.includes(object) && items.lastIndexOf(object) < 1 && consumedItems.indexOf(object)< 1){
        pConsole("You pick up the " + object + " and inspect it.")
        inspect(object)
        items.push(object)
      }

      else {
        pConsole("You don't see a " + object + " anywhere.")
      }
  }
//Inspecting
  else if (inputG.startsWith("inspect") || inputG.startsWith("i")){
  object = inputG.substr(inputG.lastIndexOf(" ")+1);
    if (items.includes(object)){
    inspect(object)
    }
    else {
    pConsole("You don't have a " + object)
    }
  }
  else if(inputG == "credits"){
    pConsole("The game was made by Conor O'Malley and Aldiery Gonzalez. Programming was done by both. Most layout and styling was done by Aldiery. Most crucial game design and programming done by Conor")
  }
//Emoting or the equivilent to responses
  else if (inputG.startsWith('emote')){
   cEmote = inputG.substr(inputG.indexOf(" ")+1);
    pConsole(cEmote)
  }
//Recall
  else if (inputG.startsWith('recall')){
    pConsole(mapGrid[y][x]);
    locationDesc(mapGrid[y][x]);
  }
  //Censorship/Easter eggs
  else if (inputG == "fuck you" || inputG == "fuck u" || inputG == "fuk u" || inputG === "fuck off" || inputG == "fuck me"){
    pConsole("Fuck you too")
  }
  else if (swearWords.includes(inputG)){
    pConsole("Watch your language!")
  }
  else if (inputG == "hello"||inputG == "hi"||inputG == "hey"||inputG == "sup"||inputG == "yo"){
    pConsole("Hey there, I am a program so I can't respond to most of your responses, but I can say Hi!")
  }
  else if(inputG == "clr" || inputG == "clear" || inputG == "reset" || inputG == "erase"){
    clearBox();
    setTimeout(pConsole("Console Cleared"),200);
    setTimeout(clearBox, 1000);
  }
  else if(inputG == ""|| inputG == null){
  }
  else {
    pConsole("What is a " + inputG)
  }
  document.getElementById("input").value = ""
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 13: // enter
        newInput();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
