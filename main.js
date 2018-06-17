function isPangram(s) {
    let mask = 0;
    for (let i = 0; i < s.length; i++) {
        const code = s[i].toUpperCase().charCodeAt() - 65;
        if (code >= 0 && code <= 26) {
            mask |= (1 << code);
        }
    }
    return mask == 0b11111111111111111111111111; // 26 bits
}