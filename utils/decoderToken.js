function getClaimsToken(token) {
    var tokenParts = token.split('.');
    var claims = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString());
    return claims;
}

module.exports = { getClaimsToken };