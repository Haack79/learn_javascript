class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear; 
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; 
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        return density; 
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

function calc(arr) {
    const sum = arr.reduce((prev, cur, indx) => prev + cur, 0);  // [3,5, 6]  0 + 3= 3; 3 + 5 = 8; 8+6 = 14
    return [sum, sum / arr.length]; 
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1980, 2.9, 3541), new Park('Oak Park', 1990, 0.4, 940)];
const allStreets = [new Street('Ocean ave', 1990, 1.1, 4), new Street('evergree terrace', 1980, 1.3, 4), new Street('lovers leap', 1905, 3.3, 19)];

function reportParks(p) {
    console.log('----------Parks Report --------');
    // Density
    p.forEach(el => el.treeDensity());
    //Avg Age
    const ages = p.map(el => new Date.getFullYear() - buildYear); 
    const [totalAge, avgAge] = calc(ages); 
    console.log(`our ${p.length} parks have avg of ${avgAge} years.`);
    // which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000); 
    console.log(`${p[i].name} more than 1000 trees`);
}
function reportStreets(s) {
    console.log('STreets reports --------------------')
    // total avg lenght of towns streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} with avg of ${avgLength}`)
    // classify sizes
    s.forEach(el => el.classifyStreet()); 
}

reportParks(allParks);
reportStreets(allStreets); 