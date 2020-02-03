// parks and streets have name and build year
// method trees/ parks area
// avg age of parks = sum of all park ages / # of parks
// name of park that has over 1000 trees
// total and avg length of parks streets
// classification of streets tiny, small, normal, big, huge, if size unknown then normal is default
// print to console
class TownItem {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear
    }
};

class Park extends TownItem {
    constructor(name, buildYear, parkArea, numberOfTrees) {
        super(name, buildYear, parkArea, numberOfTrees);
        this.parkArea = parkArea;
        this.numberOfTrees = numberOfTrees;

    }
    parkAvgs(curYear, totalParks) {
        let parkAgeSum; 
        let parkAges = ages.map(curAge =>  curYear - curAge);
        parkAgeSum = parkAges.map(curAge => parkAgeSum += curAge);
        let parkAgeAvg = parkageSum / totalParks; 
        return parkAgeAvg; 
    };   
    oldestPark(ages) {
        let oldest = ages[0]; 
        for ( let i = 1; i < ages.length; i++) {
            if ( ages[i] < oldest) {
                oldest = ages[i]; 
            }
        return oldest; 
        }
        console.log(oldest); 
    }
}

class Street extends TownItem {
    constructor(name, buildYear, lengths, classification) {
        super(name, buildYear, streetLength, classification);
        this.lengths = streetLength;
        this.classification = classification;
    }
   
}