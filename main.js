// Link for Teachable: https://teachablemachine.withgoogle.com/models/4RfD3FZHm/model.json

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true  });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4RfD3FZHm/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}