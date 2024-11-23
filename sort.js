const responses = [
	"yes, I use Notion to keep track of the assignments I have, note down deadlines, make notes and have a daily planner",
	"Yes. I use schedules",
	"Yes. Copilot",
	"Learning platforms like Brightspace",
	"Yes, YouTube",
	"Yes, I take time out of my day specifically for online learning and if I don't feel like doing anything that day, I do something fun before getting myself to do work",
	"Yes I js learn",
	"Yes. Plan my time",
	"Yes. I use AI and google for research and benefit my understanding",
	"Yes, I used tools like notion to create persona wikis and tools like google calendar to plan mu stuff.",
	"Yes, flashcards, YouTube videos, politemall materials",
	"Yes, I have a calendar app that helps me keep track of due date for online assignments.",
	"Yes, ai",
	"yes.i use app called bunny",
	"No",
	"yes, I use youtube, splms, skillshare and more"
];

const acceptedWords = new Set(["notion", "copilot", "brightspace", "splms", "youtube", "google", "google calendar", "politemall", "bunny", "skillshare"]);

const cleaningRegex = /[.,']|\s+/g;

const uniqueWords = responses.reduce((wordSet, response) => {
	const words = response
		.toLowerCase()
		.replace(cleaningRegex, ' ')
		.trim()
		.split(' ')
		.filter(word => word && !acceptedWords.has(word));

	words.forEach(word => wordSet.add(word));
	return wordSet;
}, new Set());

console.log(Array.from(uniqueWords).join(' '));