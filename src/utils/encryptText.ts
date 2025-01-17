const loops = 1;
export function encryptText(text: string) {
  for (let i = 0; i < loops; i++) {
    text = btoa(text);
  }

  return text;
}

export function decryptText(text: string) {
  for (let i = 0; i < loops; i++) {
    text = atob(text);
  }

  return text;
}

export function encrypt(text, key) {
  return [...text]
    .map((x, i) =>
      (x.codePointAt() ^ key.charCodeAt(i % key.length) % 255)
        .toString(16)
        .padStart(2, '0'),
    )
    .join('');
}
export function decrypt(text, key) {
  return String.fromCharCode(
    ...text
      .match(/.{1,2}/g)
      .map((e, i) => parseInt(e, 16) ^ key.charCodeAt(i % key.length) % 255),
  );
}
