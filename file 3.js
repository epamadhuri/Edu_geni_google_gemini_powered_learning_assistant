function answerQuestion() {

    let subject = document.getElementById("subject").value;
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer");

    if(question.trim() === ""){
        answer.innerHTML = "⚠ Please enter a question.";
        return;
    }

    let response = "";

    if(subject === "Python"){
        response = "Python is a high-level programming language used for web development, AI, data science, and automation.";
    }

    else if(subject === "Java"){
        response = "Java is an object-oriented programming language widely used for enterprise applications and Android development.";
    }

    else if(subject === "Machine Learning"){
        response = "Machine Learning enables computers to learn from data without being explicitly programmed.";
    }

    else if(subject === "Artificial Intelligence"){
        response = "Artificial Intelligence (AI) is the simulation of human intelligence by machines to perform tasks like reasoning and decision-making.";
    }

    else if(subject === "Data Science"){
        response = "Data Science combines statistics, programming, and machine learning to extract useful insights from data.";
    }

    answer.innerHTML =
    "<b>Subject:</b> " + subject +
    "<br><br><b>Question:</b> " + question +
    "<br><br><b>Answer:</b> " + response;
}