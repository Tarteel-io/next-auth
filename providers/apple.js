"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateClientSecret = generateClientSecret;
exports.default = Apple;

var _jose = require("jose");

async function generateClientSecret(components, expires_in = 86400 * 180) {
  const {
    keyId,
    teamId,
    privateKey,
    clientId
  } = components;
  return _jose.JWS.sign({
    iss: teamId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + expires_in,
    aud: "https://appleid.apple.com",
    sub: clientId
  }, privateKey.replace(/\\n/g, "\n"), {
    algorithm: "ES256",
    kid: keyId
  });
}

function Apple(options) {
  return {
    id: "apple",
    name: "Apple",
    type: "oauth",
    wellKnown: "https://appleid.apple.com/.well-known/openid-configuration",
    authorization: {
      params: {
        scope: "name email",
        response_mode: "form_post"
      }
    },
    idToken: true,

    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: null
      };
    },

    checks: ["pkce"],
    options
  };
}