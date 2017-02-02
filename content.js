//Chrome injects content scripts after the DOM is complete

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log("Worked");
console.log("First link: " + firstHref);
