export function generateBase64(length: number) {
    const uint8Array = new Uint8Array(length);
    window.crypto.getRandomValues(uint8Array);
    const numberArray = Array.from(uint8Array);
    return btoa(String.fromCharCode.apply(null, numberArray));
}
