let currentIndex = 0;

function showOrderedMessage() {
    const messages = [
        "Appko pta hai? Ki kitni precious ho aap, aur aapko jab lage you need someone I'll always there for you 🤗",
        "Niana Didi, Pta hai kya? You are the bestest person i have ever met.",
        "Aap sad mat hua karo please kyuki mujhe accha nhi lgta aur waise bhi kya fayda sad hoke bandar jesi lagogi phir 😂😂😂",
        "Aap jab mujhe boli thi ki ek sorry wala program bnana aur mujhe bhejna ab woto nhi bnaya but aaj mujhe zaroorat lagi ki yaar Naina didi ab kuch din baat nhi karne wali to chlo ek web page bnate hai taki naina didi ko agar need lagi aur baat nhi krne ka mann kisi se to yehi pe aake msg dekhle and I hope you'ii feel much better after reading these messages🙃",
        "Waise ek baat bolu, aap naa best part rahi iss saal meri life ka and I know aap next year usse next usse bhi next, till life Naina Didi aap best part raogi meri life main☺️",
        "Waise mai shellfish to nahi hona chahta but yaar sacchi bolu ek week kese niklega bina aapse baat kiye baki I know you need some time and I totally respet that🤗",
        "Baki Naina Didi aap itna mat socha karo bs let me know, arre fir chahe raat hori ho kisi bhi time just call me😂",
        "Naina didi, you know what? Everyone loves you, You are a good sister, daughter, friend and the most important you are a good person Naina didi.",
        "Everyone has their diamonds some can shine, some can be bright but mine is the most precious one😎",
        "Remember this, no matter what I'll always be there for you...😊"
    ];

    const messageFrame = document.getElementById("message-frame");
    
    // Display the current message
    messageFrame.innerText = messages[currentIndex];
    
    // Move to the next message (circular order)
    currentIndex = (currentIndex + 1) % messages.length;
}
