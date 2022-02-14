const close = document.getElementById("try");
const hamburger = document.getElementById("ham");
const bckd = document.getElementById("bckd");
const per = document.getElementById("per");
const comment = document.getElementById("comment");

const addClass = () => {
  bckd.classList.add("closebackdrop");
};

const removeClass = () => {
  bckd.classList.remove("closebackdrop");
};

hamburger.addEventListener("click", addClass);
close.addEventListener("click", addClass);

// functon

let button = document.getElementById("btn");

button.addEventListener("click", function (event) {
  event.preventDefault();

  removeClass();

  const loveTable = [
    [35, 35, 75, 90, 65, 55, 65, 50, 65],
    [55, 55, 75, 65, 90, 75, 55, 75, 90],
    [75, 65, 65, 50, 75, 75, 65, 50, 75],
    [55, 75, 50, 55, 50, 75, 90, 75, 50],
    [55, 50, 75, 50, 35, 50, 65, 50, 65],
    [50, 75, 35, 75, 50, 35, 55, 50, 75],
    [65, 55, 65, 35, 65, 55, 90, 50, 55],
    [50, 65, 55, 75, 55, 50, 35, 55, 50],
    [65, 55, 75, 50, 90, 75, 55, 50, 55],
  ];

  let Score = 0;
  let name1 = document.getElementById("_yourname").value;
  name1 = name1.toUpperCase();
  let name2 = document.getElementById("_yourcrushname").value;
  name2 = name2.toUpperCase();

  let ScoreFunction = function (name) {
    let NameArray = name.split("");
    for (i = 0; i < NameArray.length; i++) {
      if (NameArray[i].includes("A")) {
        Score += 1;
      } else if (NameArray[i].includes("E")) {
        Score += 5;
      } else if (NameArray[i].includes("I")) {
        Score += 9;
      } else if (NameArray[i].includes("O")) {
        Score += 6;
      } else if (NameArray[i].includes("U")) {
        Score += 3;
      }                      
    }
    return Score;
  };

  let Name1Score = ScoreFunction(name1);
  let Name2Score = ScoreFunction(name2);

  let SingleDigitSoulUrgeNumber = function (num) {
    let sum = 0;
    while (num > 0) {
      sum += parseInt(num % 10);
      num = parseInt(num / 10);
    }
    if (sum > 9) {
      sum = SingleDigitSoulUrgeNumber(sum);
    }
    return sum;
  };

  let Name1SoulUrgeNumber = SingleDigitSoulUrgeNumber(Name1Score);
  let Name2SoulUrgeNumber = SingleDigitSoulUrgeNumber(Name2Score);

  if ((Name1SoulUrgeNumber > 0) & (Name2SoulUrgeNumber > 0)) {
    let index1 = Name1SoulUrgeNumber - 1;
    let index2 = Name2SoulUrgeNumber - 1;

    let lovePercent = loveTable[index1][index2];
    per.innerHTML = `Your love is <span style="color: #ef233c"> ${lovePercent}% </span>`;
    if (lovePercent >= 90) {
      // console.log();
      const arrOf90 = ["നിങ്ങൾ True lub ആണോ.... 😁","നീ ഒരു കില്ലാടി തന്നെ.......😱😱","നിനക്കിതൊക്കെ എങ്ങനെ സാധിക്കുന്നടാ  ഉവ്വേ ....."]
      var comments = arrOf90[Math.floor(Math.random() * arrOf90.length)];
      comment.innerHTML = `${comments}`;
    } else if (lovePercent >= 75) {
      const arrOf75 = ["വരുന്നെടാ RUMANTIC വരുന്നെടാ...🥰","നീ ഒരു വീരൻ തന്നെ ......","ഇതൊക്കെ എന്ത് .......😉😉😉","മുതലാളി ജങ്ക ജക ജക ....... 🤩",]
      var comments = arrOf75[Math.floor(Math.random() * arrOf75.length)];
      comment.innerHTML = `${comments}`;
      
      // comment.innerHTML = `Your love needs a little more love.`
    }
    
    else if (lovePercent >= 60) {
      const arrOf60 = ["നാട്ടുകാരെ, ഓടി വരണേ എനിക്ക് ലൈൻ സെറ്റായേ......💕","അടിച്ചു മോനേ.......🤩","ഭയപ്പെടവേണ്ട ചെമ്പകം പക്കത്തില് വാ...😴😴"]
      var comments = arrOf60[Math.floor(Math.random() * arrOf60.length)];
      comment.innerHTML = `${comments}`;
      
      // comment.innerHTML = `Your love needs a little more love.`
    } else if (lovePercent >= 50) {
      // console
      const arrOf50 = ["ഞാൻ ഇപ്പോഴും പറയുന്നു സജിയെട്ടാ... ഇത് safe അല്ല...🔪","ദാസാ ഓരോന്നിനും അതിന്റേതായ സമയമുണ്ട് മോനെ!!!!🤩","പൊളി ശരത്തെ ട്രാക്ക് മാറ്റ് "]
      var comments = arrOf50[Math.floor(Math.random() * arrOf50.length)];
      comment.innerHTML = `${comments}`;
    }
    else if(lovePercent >= 35){
      const arrOf30 = ["യോഗല്ല്യമ്മിണ്യേ പായ അങ്ങട് മടക്ക്യാള....🤭","കഷ്ടം തന്നെ മൊതലാളി കഷ്ടം തന്നെ....","നിന്റെ കണ്ണീരിന്റെ ഉപ്പ്  ഈ മജ്‌ലിസിന്  വേണ്ട മേരി.....","ഇൻസൾട്ട് ആണ് മുരളി Life le ഏറ്റവും വലിയ investment....","Don't Worry Kido 7 bilion pepole in this world","ഇപ്പോ എങ്ങനിരിക്കണ്......😐"]
      var comments = arrOf30[Math.floor(Math.random() * arrOf30.length)];
      comment.innerHTML = `${comments}`;
    }

  } else {
    per.innerHTML = "വെളച്ചിലെടുക്കരുത് കേട്ടാ....🤨";
    comment.innerHTML = `Please, enter valid names!!!`;
  }
});

console.log(
  "%cDeveloped by Mohamed Shibin, Mohamed Nizam, Nandan NNP",
  "color:red; font-size: 1.2rem; font-weight: 600"
);



