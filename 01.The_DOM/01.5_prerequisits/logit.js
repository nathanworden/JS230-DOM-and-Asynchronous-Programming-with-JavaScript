let prefix = ">> ";

function logIt(string) {
    console.log(`${prefix}${string}`);
}

function setPrefix(newPrefix) {
    prefix = newPrefix;
}

module.exports = {
    logIt,
    setPrefix,
}

// console.log(module.exports)

// module.exports = logIt;