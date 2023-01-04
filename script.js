function Soru(soru,cevaplar,dogru_cevap){
    this.soru = soru;
    this.cevaplar = cevaplar;
    this.dogru_cevap = dogru_cevap;
}

Soru.prototype.cevap_kontrol = function(cevap){
    return this.dogru_cevap === cevap;
}



let sorular = [
    new Soru("Which one is a JS library of Framework?" , {"a":"npm","b":"css","c":"django","d":"flask"},"a"),
    new Soru("Which one is a Python library of Framework?" , {"a":"npm","b":"css","c":"django","d":"docker"},"c"),
    new Soru("Which one is a Mark-up language, library of Framework?" , {"a":"npm","b":"html","c":"django","d":"flask"},"b"),
    new Soru("Which one is a  library of Framework?" , {"a":"npm","b":"css","c":"django","d":"flask"},"a"),

]


function Quiz(sorular){
    this.sorular = sorular;
    this.index = 0 ;
}

Quiz.prototype.get_question = function () {
    return this.sorular[this.index];
}

let newQuiz = new Quiz(sorular);

let questionPlace = document.getElementById("questionPlace");
document.querySelector(".btn-start").addEventListener("click",function () {
    let soru = newQuiz.get_question();
    questionPlace.value =soru.soru; 
    newQuiz.index++;
    if(newQuiz.index >= sorular.length){
        print("You have finished the quiz succesfully!");
    }

})