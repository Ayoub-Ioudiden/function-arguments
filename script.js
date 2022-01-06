const paintWall = function (item) {
    console.log("The wall has been painted " + item);

};

paintWall("green");

const paintWall1 = function (item) {
    console.log(item);

};

const northwall = "the north wall has been painted orange ";
const southEastWall = "the south-east wall has been painted grey";


paintWall1(northwall + southEastWall);
