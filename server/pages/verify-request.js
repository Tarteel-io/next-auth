"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VerifyRequest;

var _preact = require("preact");

function VerifyRequest({
  baseUrl,
  theme
}) {
  return (0, _preact.h)("div", {
    className: "verify-request"
  }, (0, _preact.h)("style", {
    dangerouslySetInnerHTML: {
      __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
    }
  }), theme.logo && (0, _preact.h)("img", {
    src: theme.logo,
    alt: "Logo",
    className: "logo"
  }), (0, _preact.h)("div", {
    className: "card"
  }, (0, _preact.h)("h1", null, "Check your email"), (0, _preact.h)("p", null, "A sign in link has been sent to your email address."), (0, _preact.h)("p", null, (0, _preact.h)("a", {
    className: "site",
    href: baseUrl
  }, baseUrl.replace(/^https?:\/\//, "")))));
}