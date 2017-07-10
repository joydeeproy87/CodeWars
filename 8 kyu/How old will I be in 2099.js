function  calculateAge(born, current) {
  var age = current - born;

  if(age === 0){
    return 'You were born this very year!';
  }
  else if(age >= 1){
    if(age > 1) return 'You are '+ age +' years old.';
    else return 'You are 1 year old.';
  }
  else if(age < 1){
    if(age === -1 ) return 'You will be born in 1 year.';
    else return 'You will be born in '+ (-age) +' years.';
  }
}
