//get drops, convert from htmlcollection to array
var drops = [].slice.call(document.getElementsByClassName('drop'));
var drop;

//animate drops, one by one.
setInterval(dropTheDrop, 250);

function dropTheDrop() {
  //get random, single item from array
  drop = drops[Math.floor(Math.random() * drops.length)];
  //add animation class
  if (drop.classList) {
    console.log(drop);
    drop.classList.add('move');
    //remove animated item from array
    var index = drops.indexOf(drop);
    if (index > -1) {
      drops.splice(index, 1);
      console.log(drops);
    }
  }
}
