function bloodAlcoholContent(drinks, weight, sex, time){
  var drinks = drinks.ounces * drinks.abv;
  var sex = (sex === 'male') ? 0.73 : 0.66;
  return +((drinks * 5.14 / weight * sex) - .015 * time).toFixed(4);
}
