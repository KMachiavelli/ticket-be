const statusMessages = new Map([
  [400, "Oops! Something went wrong!"],
  [401, "Wrong credentials! Please try again."],
  [402, "Payment required! Check your payment details."],
  [403, "Not allowed, probably expired session."],
  [404, "Resource not found! Check the URL and try again."],
  [405, "Method not allowed! Check your request method."],
  [406, "Not acceptable! Requested format is not available."],
  [407, "Proxy authentication required! Check your proxy settings."],
  [408, "Request timeout! Please try again later."],
  [409, "Conflict! The request could not be completed due to a conflict."],
]);
