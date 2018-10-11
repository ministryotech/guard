# Introduction
This project provides simple guard methods for throwing appropriate type errors when arguments are incorrect.

Variants supported...

- throwIf() - Throws if the parameter is null or undefined.
- throwIfNotIn() - Throws if the required parameter is not in the range of expected values.
- throwIfNull() - Throws if the required parameter is null.
- throwIfUndefined() - Throws if the parameter is undefined.
- throwIfNaN() - Throws if the specified parameter is not a number.

Sample usage

    const guard = require("arg-guard");

    const myFunc = function(requiredArg, otherArg) {
        guard.throwIf(requiredArg, "requiredArg");
    }

# The Ministry of Technology Open Source Products
Welcome to The Ministry of Technology open source products. All open source Ministry of Technology products are distributed under the MIT License for maximum re-usability. Details on more of our products and services can be found on our website at http://www.ministryotech.co.uk

Our other open source repositories can be found here...

* [https://bitbucket.org/ministryotech](https://bitbucket.org/ministryotech)
* [https://github.com/ministryotech](https://github.com/ministryotech)
* [https://github.com/tiefling](https://github.com/tiefling)

Newer content prefers Github. Bitbucket is no longer actively used.

### Where can I get it?
You can download the package for this project from any of the following package managers...

- **NPM** - [https://www.npmjs.com/arg-guard](https://www.npmjs.com/arg-guard)

### Contribution guidelines
If you would like to contribute to the project, please contact me.

### Who do I talk to?
* Keith Jackson - keith@minotech.co.uk
