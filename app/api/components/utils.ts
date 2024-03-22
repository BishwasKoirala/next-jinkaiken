export function randomStringId(length : number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = ''

  const charLength = characters.length;
  for (let i = 0 ; i < length  ; i ++) {
    result += characters.charAt(Math.floor(Math.random() * charLength))
  }

  return result
}
