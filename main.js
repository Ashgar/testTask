$(document).ready(function(){
  $('#genBtn').click(function(){
    var noun = $('#noun').val();
    var location = $('#location').val();
    var adjective = $('#adjective').val();
    var name = $('#name').val();
    var genre = $('#genre').val();

    var templates = {
      "mystory": ["The Secret Of The @location", "The Sign Of The @adjective @noun", "The Missing @name", "The Mystery Of The @adjective @location", "The Clue Of The @adjective @noun"],
      "child": ["Prince From The @location", "Magic @name", "Family From The @location", "@name And Magic Ring", "The Witch From The @adjective @location"],
    };

    var nounList = ["Bishop", "Talisman", "Tiger", "Manager", "Treasure", "Basilisk", "Painting", "Key", "Boat", "Prisoner", "Monk"];
    var adjectiveList = ["Old", "Break", "Red", "Invisible", "Malignant", "Helpless"];
    var locationList = ["Tavern", "Boathouse", "Archipelago", "Rock", "Courtyard"];
    var nameList = ["Jack", "Bob", "Alica", "Marry", "Clary", "Phoebe"];

    var template = templates[genre];
    var nouns = [];
    if (noun != "") nouns.push(noun);
    else nouns = nounList;

    var names = [];
    if (name != "") names.push(name); 
    else names = nameList;
    var locations = [];
    if (location != "") locations.push(location); 
    else locations = locationList;
    var adjectives = [];
    if (adjective != "") adjectives.push(adjective); 
    else adjectives = adjectiveList;
    var t = 0;
    var res = "";
    for(var i = 0; i<8; i++) {
      var s = template[Math.floor(Math.random() * template.length)];
      s = s.replace('@name', names[ Math.floor(Math.random()*names.length)]);
      s = s.replace('@location', locations[ Math.floor(Math.random()*locations.length)]);
      s = s.replace('@noun', nouns[ Math.floor(Math.random()*nouns.length)]);
      s = s.replace('@adjective', adjectives[ Math.floor(Math.random()*adjectives.length)]);
      res += s + "<br/>";
    }
    $('#results').html(res);


  })
})