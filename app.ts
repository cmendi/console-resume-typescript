function displayPosition(job: string, company: string, desc: string) {
	console.log("* " + job + " at " + company + " - " + desc);
}

function displaySkill(skill: string, cool: boolean) {
	if (cool) {
		console.log("* BAM: " + skill);
	} else {
		console.log("* " + skill);
	}
}

console.log("Name: Chris Mendenhall".toUpperCase());
console.log("Career: Product Developer");
console.log("Description: Love the outdoors");
console.log("My Interests:");
console.log("* Coding");
console.log("* Camping");
console.log("* Snowboarding");
console.log("* Surfing");
console.log("* My Previous Experience:");
displayPosition("Product Developer", "Baja Designs", "Develop lights for off-road vehicles");
displayPosition("Fabricator/Welder", "Western CNC", "Weld/fabricated metal");
displayPosition("Mechanic", "Ashcraft Racing", "Mechanic for a off-reoad race team");
console.log("My Skills:");
displaySkill("Javascript", true);
displaySkill("sleeping", false);
displaySkill("Snowboarding", true);
displaySkill("Surfing", true);
displaySkill("Couch Potato", false);
