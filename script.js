// Zutatenlisten für jede Bowl-Kategorie.
const ingredients = {
  basis: ["Reis", "Couscous", "Quinoa", "Glasnudeln"],
  protein: ["Tofu", "vegetarisches Hack", "Halloumi", "Kichererbsen"],
  gemuese: ["Tomaten", "Gurke", "Brokkoli", "Karotten"],
  sauce: ["Teriyaki", "Joghurt-Limette", "Erdnuss", "Tomate"],
  topping: ["Sesam", "Frühlingszwiebeln", "Feta", "Chili-Crunch"],
};

const output = document.getElementById("bowl-output");
const button = document.getElementById("generate-btn");

// Hilfsfunktion: gibt ein zufälliges Element aus einem Array zurück.
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Rendert eine neue Zufalls-Bowl in die Ergebnisliste.
function generateBowl() {
  const bowl = {
    basis: pickRandom(ingredients.basis),
    protein: pickRandom(ingredients.protein),
    gemuese: pickRandom(ingredients.gemuese),
    sauce: pickRandom(ingredients.sauce),
    topping: pickRandom(ingredients.topping),
  };

  output.innerHTML = `
    <li><strong>Basis:</strong> ${bowl.basis}</li>
    <li><strong>Protein:</strong> ${bowl.protein}</li>
    <li><strong>Gemüse:</strong> ${bowl.gemuese}</li>
    <li><strong>Sauce:</strong> ${bowl.sauce}</li>
    <li><strong>Topping:</strong> ${bowl.topping}</li>
  `;
}

button.addEventListener("click", generateBowl);
