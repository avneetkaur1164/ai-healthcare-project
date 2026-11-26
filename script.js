/* =================================
   AI HEALTHCARE PROJECT
   JAVASCRIPT FUNCTIONS
================================= */

// DRUG DISCOVERY SIMULATOR

function analyzeCompound() {

    let compound = document.getElementById("compound").value;

    let result = document.getElementById("result");

    if (compound === "") {

        result.innerHTML = "Please select a compound first.";

    } else if (compound === "A") {

        result.innerHTML =
            "Compound A: The sample AI model identifies promising research patterns. More laboratory testing is required.";

    } else if (compound === "B") {

        result.innerHTML =
            "Compound B: The sample AI model identifies moderate research potential. Further scientific investigation is needed.";

    } else if (compound === "C") {

        result.innerHTML =
            "Compound C: The sample AI model identifies limited research potential in this simulation.";

    }

}


// PERSONALIZED MEDICINE SIMULATOR

function analyzePatient() {

    let age = document.getElementById("patientAge").value;

    let condition = document.getElementById("condition").value;

    let result = document.getElementById("patientResult");

    if (age === "" || condition === "") {

        result.innerHTML = "Please enter your age and select a condition.";

    } else if (age < 1 || age > 120) {

        result.innerHTML = "Please enter a valid age.";

    } else {

        result.innerHTML =
            "Educational result: AI could help researchers study health information for people in this age group and explore " +
            condition +
            ". This is not a diagnosis or treatment recommendation.";

    }

}


// WELCOME MESSAGE

function showWelcome() {

    alert("Welcome to our AI Healthcare Interactive Lab!");

}
// AI HEALTHCARE RESEARCH TOPICS
// ARRAY AND FOR LOOP

function displayResearchTopics() {

    let topics = [
        "AI in Drug Discovery",
        "Personalized Medicine",
        "Disease Prediction",
        "Medical Research",
        "Healthcare Technology"
    ];

    let output = "";

    for (let i = 0; i < topics.length; i++) {

        output += "<li>" + topics[i] + "</li>";

    }

    document.getElementById("researchTopics").innerHTML = output;

}