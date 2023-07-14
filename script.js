(function (d) {
    var tourner = 0;
    var gagne = 0;
    var compteur = 0;
    var cpc = 1;
    const texte = d.querySelector('.score');
    const bouton = d.querySelector('.cookie');
    const plus_25 = d.querySelector('.plus-25');

    function ajouter(){
        if (!gagne){
            compteur += cpc;
            texte.innerHTML = "Score : " + compteur + "<br> Cookies par clic : " + cpc;
            if (compteur >= 10){
                alert("Tu as gagné !!!");
                bouton.style.color = "grey";
                plus_25.style.color = "grey";
                texte.style.color = "grey";
                gagne = 1;
            };
        } else {
            alert("Tu as deja gagné !");
        }
        
    };

    function acheter(nbr, cout){
        if (!gagne){
            if (compteur >= cout){
                compteur -= cout;
            cpc += nbr;
                texte.innerHTML = "Score : " + compteur + "<br> Cookies par clic : " + cpc;
            };
        } else {
            alert("Tu as deja gagné !");
        }
        
    };

    bouton.addEventListener('click', function(){
        ajouter();
    });

    plus_25.addEventListener('click', function(){acheter(1,25);});
    
})(document);
