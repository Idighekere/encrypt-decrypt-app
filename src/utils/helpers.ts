export const encrypt = (text: string, key: string) => {
  let encrypted = []
  //OR
  for (let i = 0; i < text.length; i++) {
    encrypted[i] = text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
  }

  //Generate a random padding Length between 10 and 20, this is to make the encrypted length longer and the pattern not easily detected
  const padLength = Math.floor(Math.random() * 11) + 10

  for (let j = 0; j < padLength; j++) {
    encrypted.push(Math.floor(Math.random() * 256)) //pushing random bytes to the encrypted array based on the number of padding
  }

  encrypted.unshift(padLength) //add the paddingLength to the beginning of the array (for decoding)
  return toBase64(encrypted) //covert to base64
}

export const decrypt = (encryptedText: string, key: string) => {
  const encrypted = fromBase64(encryptedText) //convert from base64 to text

  const padLength = encrypted.shift()! //to extract the padlength that was added to the first index of the array
  return encrypted
    .slice(0, encrypted.length - padLength) //removing the padding bytes
    .map((charCode: number, i: number) =>
      String.fromCharCode(charCode ^ key.charCodeAt(i % key.length))
    )
    .join('')
}

//SECTION - Conversion between base64 to string
const toBase64 = (data: number[]) => {
  return btoa(String.fromCharCode(...data)) //to encode a string into base644
}
const fromBase64 = (encoded: string): number[] => {
  return atob(encoded)
    .split('')
    .map(char => char.charCodeAt(0)) //decoding a base64 string bck to it's original form
}
