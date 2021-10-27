"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openidClient = openidClient;

var _openidClient = require("openid-client");

async function openidClient(options) {
  const provider = options.provider;
  let issuer;

  if (provider.wellKnown) {
    issuer = await _openidClient.Issuer.discover(provider.wellKnown);
  } else {
    issuer = new _openidClient.Issuer({
      issuer: provider.issuer,
      authorization_endpoint: provider.authorization.url,
      token_endpoint: provider.token.url,
      userinfo_endpoint: provider.userinfo.url
    });
  }

  const client = new issuer.Client({
    client_id: provider.clientId,
    client_secret: provider.clientSecret,
    redirect_uris: [provider.callbackUrl],
    ...provider.client
  }, provider.jwks);
  return client;
}