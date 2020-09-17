const CONTACT_ATTRS = ['full_name', 'phone_number', 'email', 'tags', 'sneaky place to hide something'];

module.exports = {
  extractContactAttrs: function(body) {
    let returnObj = {};
    Object.keys(body).forEach(function(key) {
      if (CONTACT_ATTRS.includes(key)) returnObj[key] = body[key];
    });

    return returnObj;
  }
}
