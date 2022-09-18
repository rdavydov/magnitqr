# magnitqr
![](https://img.shields.io/github/license/rdavydov/magnitqr?style=for-the-badge&logo=github&color=purple&logoColor=green)
![](https://img.shields.io/github/stars/rdavydov/magnitqr?style=for-the-badge&logo=github&color=blue&logoColor=green)
![](https://img.shields.io/github/forks/rdavydov/magnitqr?style=for-the-badge&logo=github&color=blue&logoColor=green)
![](https://img.shields.io/github/watchers/rdavydov/magnitqr?style=for-the-badge&logo=github&color=blue&logoColor=green)
![](https://img.shields.io/website?url=https%3A%2F%2Frdavydov.github.io%2Fmagnitqr%2F?logo=github&logoColor=green&style=for-the-badge)

***[OUTDATED] [PoC]** Magnit bonus card numbers &amp; QR code generator and saver*

https://rdavydov.github.io/magnitqr/

SPA that was used "in the field" to check the bonus card balances.

Card numbers are bruteforced and checked on their validity using the Luhn algorithm.

QR codes are generated using "E" string + valid card number. Yes, it was that simple in 2020.

User has the ability to save an image with the QR code by entering the bonus card balance. Filename has the following pattern: "balance"_"card number".

By clicking on the string above the QR code, user toggles a list of hardcoded card numbers.

By clicking on the QR code, user toggles the checker/saver controls. Along with the list, this allows the user to quickly switch from the "checker/saver mode" to the "legit app imitation mode".

<img src="https://github.com/rdavydov/magnitqr/blob/main/screenshot.jpeg?raw=true" alt="screenshot" width="200"/>
