function foldTo(distance) {
  let folds = 0;

  if(distance <= 0) {
    return null;
  }
  for(let paper = 0.0001; paper < distance; paper) {
    paper += paper;
    folds++;
  }
  return folds;
}
