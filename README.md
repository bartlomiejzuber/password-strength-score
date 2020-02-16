## password-strength-score

[![npm](https://img.shields.io/npm/l/hooked-react-stopwatch.svg)](https://www.npmjs.com/package/password-strength-score)
[![npm](https://img.shields.io/bundlephobia/min/use-open-window)](https://www.npmjs.com/package/password-strength-score)
[![Coverage Status](https://coveralls.io/repos/github/bartlomiejzuber/password-strength-score/badge.svg)](https://coveralls.io/github/bartlomiejzuber/password-strength-score)
[![Build Status](https://travis-ci.org/bartlomiejzuber/password-strength-score.svg?branch=master)](https://travis-ci.org/bartlomiejzuber/password-strength-score)
[![License](https://img.shields.io/npm/v/password-strength-score.svg)](https://github.com/bartlomiejzuber/password-strength-score/blob/master/LICENSE)

<p align="center">
  <img src="https://raw.githubusercontent.com/bartlomiejzuber/password-strength-score/master/assets/icon2.png" alt="hook icon"/>
</p>

Smallish password strength utility.

## Installation

```sh
npm i password-strength-score --save
```

Alternatively you may use `yarn`:

```sh
yarn add password-strength-score
```

Link to npm:
[https://www.npmjs.com/package/password-strength-score](https://www.npmjs.com/package/password-strength-score)

## Usage

Basic
```javascript
import { passwordStrength } from 'password-strength-score';

passwordStrength('pass'); // returns 1 because password has only lowercase chars
passwordStrength('pass1'); // returns 2 because password has lowercase chars and a number
```

Strength meter component utility
```javascript
import { passwordStrength, PasswordStrength } from 'password-strength-score';
import chroma from 'chroma-js';

const getPasswordScoreGradientColor = (password) => {
  const score = passwordStrength(password);
  chroma
    .scale(['#FF4047','#00FF6E'])
    .mode('rgb')
    .colors(PasswordStrength.MaxScore); // generate colors array between #FF4047 - #00FF6E
  
  return colors[score]; // Returns one color between #FF4047 - #00FF6E
};
```

### Score calculation (default settings)

| Flag         | Test                 | Points |
| ------------ | -------------------- | ------ |
| isLong       | password.length > 6  | 1      |
| isVeryLong   | password.length > 12 | 1      |
| hasUppercase | /[a-z]/              | 1      |
| hasLowercase | /[A-Z]/              | 1      |
| hasNumbers   | /\d/                 | 1      |
| hasNonalphas | /\W/                 | 1      |

#### Options

| Option                  | Description                                            | Default |
| ----------------------- | ------------------------------------------------------ | ------- |
| isLong                  | Length for password to be consider as long             | 6       |
| isVeryLong              | Length for password to be consider as very long        | 12      |
| withoutUppercase        | Turn off score point for uppercase char occurrence     | false   |
| withoutLowercase        | Turn off score point for lowercase char occurrence     | false   |
| withoutNumbers          | Turn off score point for numbers occurrence            | false   |
| withoutNonalphanumerics | Turn off score point for alphanumerics char occurrence | false   |

## Reliability

This package is fully tested with total coverage set to [![Coverage Status](https://coveralls.io/repos/github/bartlomiejzuber/password-strength-score/badge.svg)](https://coveralls.io/github/bartlomiejzuber/use-open-window). If you found any issue please report it [here](https://github.com/bartlomiejzuber/password-strength-score/issues/new).

## License

Made with :sparkling_heart: by [Bartlomiej Zuber (bartlomiej.zuber@outlook.com)](mailto:bartlomiej.zuber@outlook.com) while traveling around the world, and licensed under the [MIT License](LICENSE)
