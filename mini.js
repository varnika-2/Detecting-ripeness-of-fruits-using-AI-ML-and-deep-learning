const socialIconButtons = document.getElementsByClassName("social-icon");

function postToSocialMedia(classList) {
    const content = `Check out my cool generative AI Project 😎 \n${window.location.href.toString()}`;
    if (classList.contains("twitter")) {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      content
    )}`;
        window.open(url);
    } else if (classList.contains("linkedin")) {
        const url = `https://www.linkedin.com/share?text=${encodeURIComponent(
      content
    )}`;
        window.open(url);
    } else if (classList.contains("whatsapp")) {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`);
    }
}

const addEventListenersToSocialIconButton = () => {
    for (let i = 0; i < socialIconButtons.length; i++) {
        socialIconButtons[i].addEventListener("click", () =>
            postToSocialMedia(socialIconButtons[i].classList)
        );
    }
};

addEventListenersToSocialIconButton();

const skillIcon = document.getElementsByClassName("tooltip");


const addEventListenersToSkillIcon = () => {
    for (let i = 0; i < skillIcon.length; i++) {
        skillIcon[i].addEventListener("click", (e) => {
            console.log(e.target)
            updateDescription(e.target.id);
        });
    }
};

addEventListenersToSkillIcon();

const descriptionDiv = document.getElementsByClassName("about-section");
const updateDescription = (id) => {
    let description = "";

    switch (id) {
        case "googleColab":
            description = "We proposed the utilization of machine learning techniques like (YOLO algorithm) to accurately classify fruits based on their color, thereby determining their ripeness. We employed a dataset comprising images of fruits at various stages of ripeness, captured under controlled conditions. The dataset will include commonly consumed fruits such as apples, bananas, tomatoes and guavas.  This project is enhanced version. Before the detection of ripeness is only applicable for bananas, now we implemented this project for various fruits.";
            break;

        case "openAi":
            description = "OpenAI: An AI-based chat service powered by Open AI's language model. OpenAI APIs offer access to advanced language models and AI capabilities. Integrate NLP, text generation, and more into your apps to revolutionize communication and problem-solving. ";
            break;
        default:
            description = "Description of the selected icon will appear here.";
    }
    for (let i = 0; i < descriptionDiv.length; i++) {
        descriptionDiv[i].textContent = description;
    }
};

updateDescription("googleColab");