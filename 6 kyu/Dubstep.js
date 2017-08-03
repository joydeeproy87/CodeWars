function songDecoder(song) {
  let original = '';
  const parts = song.split('WUB');

  for(let i = 0; i < parts.length; i++) {
    if(parts[i] !== '') {
      original = `${original} ${parts[i]}`;
    }
  }
  return original.trim();
}
