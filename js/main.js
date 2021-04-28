const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//FOR
console.log("FOR");
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

//FOREACH
console.log("FOREACH");
companies.forEach(function(company) {
    console.log(company);
});

console.log("FOREACH2");
companies.forEach(element => {
    console.log(element);
});

//FILTER
console.log("FILTER");
const canDrive = ages.filter(function(age){
if(age>=18)
    return true;
});
console.log(canDrive);

console.log("FILTER2");
const canDrive2 = ages.filter(age => age >= 18);
console.log(canDrive2);

console.log("FILTER2");
const retail = companies.filter(c => c.category === 'Retail');
console.log(retail);

//MAP
//creo un nuovo array con solo i nomi delle compagnie
console.log("MAP1");
const companyName = companies.map(function(c) {
   return c.name;
})
console.log(companyName);

console.log("MAP2");
const companyName2 = companies.map(c => c.name);
console.log(companyName2);

console.log("MAP3");
const companyName3 = companies.map(c => `${c.name} - ${c.start}`);
console.log(companyName3);

//SORT
console.log("SORT");
const sortedCompany = companies.sort(function(c1,c2){
    if(c1.start > c2.start)
        return 1;
    else
        return -1; 
});
console.log(sortedCompany);

console.log("SORT2");
const sortedCompany2 = companies.sort((c1,c2) => {
    c1.start > c2.start ? 1 : -1;
});
console.log(sortedCompany2);

console.log("SORT3");
const sortedAge = ages.sort((a, b) => a - b);
console.log(sortedAge);

//REDUCE
// prende come parametro una funziona callback(a sua volta ha 2 par) e uno 0 finale
console.log("REDUCE");
const ageSum = ages.reduce(function(total,age){
    return total + age;    
},0);
console.log(ageSum);

console.log("REDUCE2");
const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);

console.log("REDUCE3");
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

//combined methods
console.log("combined");
const combined = ages
    .map(age => age*2)
    .filter(age => age > 36)
    .sort((a,b) => b-a); 

console.log(combined);