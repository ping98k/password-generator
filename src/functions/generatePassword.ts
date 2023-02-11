export function generatePassword(length: number) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    const randomArray = new Uint8Array(length);
    crypto.getRandomValues(randomArray);
    for (let i = 0; i < length; i++) {
        const randomCharIndex = randomArray[i] % charset.length;
        password += charset.charAt(randomCharIndex);
    }
    return password;
}
