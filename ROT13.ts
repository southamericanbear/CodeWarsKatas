export function rot13(str: string): string {
  const regex = /^[a-zA-Z]+$/;

  return str
    .split("")
    .map((char: string) => {
      if (!regex.test(char)) {
        return char;
      } else {
        return String.fromCharCode(
          char.charCodeAt(0) + (char.toLowerCase() < "n" ? 13 : -13)
        );
      }
    })
    .join("");
}
