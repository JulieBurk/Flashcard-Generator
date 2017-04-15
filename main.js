// 4_11_2017


// BasicCard Constructor
function BasicCard(front, back) {
		this.front = front;
		this.back = back;
}
	BasicCard.prototype.printInfo = function() {
		console.log(this.printInfo);
	};
	var trees = new BasicCard ("How old is the oldest living tree?", "5000 years old");
		// "How old is the oldest living tree?"
		console.log(trees.front);
		// "5000 years old"
		console.log(trees.back);




function ClozeCard(fullText, cloze, partial) {
		this.fullText = fullText;
		this.cloze = cloze;
		this.partial = partial;
}

	ClozeCard.prototype.clozeDeletion = function () {
		// console.log(this.clozeDeletion)
	};

	var treesCloze = new ClozeCard ("How old is the oldest living tree is 5000 years old", "How old is the oldest living tree is ... years old", "5000");
		//"How old is the oldest living tree is 5000 years old" 
		console.log(treesCloze.fullText);
		// "How old is the oldest living tree is ... years old"
		console.log(treesCloze.cloze);
		// "5000"
		console.log(treesCloze.partial);

// error when wrong word is entered
// does this need to be a new contructor?
	var brokenCloze = new ClozeCard ("This does not work oops", "This does not work...", "oops")	
		console.log(brokenCloze.fullText);
		console.log(brokenCloze.cloze);
		console.log(brokenCloze.partial);
	
	






