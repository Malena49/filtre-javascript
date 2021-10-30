const app = {
  App: document.getElementById("app"),
  init: function () {
    // A toi de jouer
    //trouver nombre de langages base
    const langages = [];
    const specialite =[];
    for (let i = 0; i < app.pros.length; i++) {
      langages[i] = app.pros[i].base;
specialite[i] =app.pros[i].speciality;
    }
    const langages_select = [...new Set(langages)];
    const specialite_select = [...new Set(specialite)];
    //ajouter options de langages base

    let select_zone = document.createElement("select");
    select_zone.setAttribute("id", "base");
    let select_zone2 = document.createElement("select");
    select_zone2.setAttribute("id", "spe");
    app.App.appendChild(select_zone);
    app.App.appendChild(select_zone2);

    for (let i = 0; i < langages_select.length; i++) {
      let option_zone = document.createElement("option");

      option_zone.innerHTML = langages_select[i];
      document.getElementById("base").appendChild(option_zone)

    };
    for (let i = 0; i < specialite_select.length; i++) {
      let option_zone2 = document.createElement("option");
      option_zone2.innerHTML = specialite_select[i];
      document.getElementById("spe").appendChild(option_zone2)

    };
    // afficher le résulat
    app.affichage();

    document.getElementById("spe").addEventListener("change", function () {

      document.getElementById("changing").remove();
      app.affichage();

    });
    document.getElementById("base").addEventListener("change", function () {

      document.getElementById("changing").remove();
      app.affichage();

    });
  },
  affichage: () => {
    let filter_base = document.getElementById("base");
    let base_value = filter_base.value;
    let filter_spe = document.getElementById("spe");
    let spe_value = filter_spe.value;
    let compteur = 0;
    let resulat = document.createElement("div");
    resulat.setAttribute("id", "changing");
    app.App.appendChild(resulat);
    let creat_ul = document.createElement("ul");
    resulat.appendChild(creat_ul);
    let counter = document.createElement("h1");
    for (let i = 0; i < app.pros.length; i++) {
      if (app.pros[i].base == base_value && app.pros[i].speciality == spe_value) {
        compteur += 1;
        let liste_base = document.createElement("li");
        let liste_span = document.createElement("span");
        let liste_span2 = document.createElement("span");
        liste_span.innerHTML=app.pros[i].base;
        liste_span2.innerHTML=app.pros[i].speciality;
        liste_base.innerHTML = app.pros[i].name;
        creat_ul.appendChild(liste_base);
        liste_base.appendChild(liste_span);
        liste_base.appendChild(liste_span2);
      }
      counter.innerHTML = compteur + " profs trouvés";
      resulat.appendChild(counter);
      resulat.insertBefore(counter, resulat.childNodes[0]);
    }
  },
  pros: [
    {
      name: 'Loris',
      base: 'PHP',
      speciality: 'WordPress',
    },
    {
      name: 'Jean',
      base: 'JavaScript',
      speciality: 'Data',
    },
    {
      name: 'Jean-Christophe',
      base: 'PHP',
      speciality: 'Symfony',
    },
    {
      name: 'Jean-Philippe',
      base: 'PHP',
      speciality: 'Symfony',
    },
    {
      name: 'Julien',
      base: 'PHP',
      speciality: 'React',
    },
    {
      name: 'Vincent',
      base: 'JavaScript',
      speciality: 'React',
    },
    {
      name: 'Tony',
      base: 'JavaScript',
      speciality: 'React',
    },

  ]
};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
