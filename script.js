
function analyseMood() {

    let text = document.getElementById("userText").value.toLowerCase();

    let positiveWords = ["happy", "love", "great", "excited", "good", "wonderful", "joy"];
    let negativeWords = ["sad", "angry", "bad", "lonely", "stress", "upset", "terrible"];

    let positiveScore = 0;
    let negativeScore = 0;

    let words = text.match(/\b[a-z']+\b/g) || [];


words.forEach(function(word, index) {

    let previousWord = words[index - 1] || "";

    let isNegated = ["not", "never", "no"].includes(previousWord);

    if (positiveWords.includes(word)) {
        if (isNegated) {
            negativeScore++;
        } else {
            positiveScore++;
        }
    }

    if (negativeWords.some(function(negativeWord) {
        return word.includes(negativeWord);
    })) {
        if (isNegated) {
            positiveScore++;
        } else {
            negativeScore++;
        }
    }

});


    let result = document.getElementById("result");

    if (text.trim() === "") {
        result.innerHTML = "Please enter how you feel!";
    }

    else if (positiveScore > negativeScore) {
        result.innerHTML = "😊 Positive Mood!";
    }

    else if (negativeScore > positiveScore) {
        result.innerHTML = "😔 Negative Mood!";
    }

    else {
        result.innerHTML = "😐 Neutral Mood!";
    }
}
