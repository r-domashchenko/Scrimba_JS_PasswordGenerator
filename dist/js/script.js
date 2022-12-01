const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

let charactersNumber = 15,
    randomIndex = '',
    password1 = document.querySelector('#pas-1'),
    password2 = document.querySelector('#pas-2');

console.log('стандартна довжина пароля: ' + charactersNumber + ' символів');

function charactersRandomizer() {
    randomIndex = Math.floor(Math.random() * characters.length);
    return randomIndex;
};

function createPasswords() {
    lengthChange(); // оновлюємо довжину пароля для підстраховки ввода
    let pass1 = '',
        pass2 = '';
    console.log('запущена генерація паролів!');
    console.log('довжина згенерованого пароля: ' + charactersNumber + ' символів');
    for (let i = 0; i < charactersNumber; i++) {
        charactersRandomizer();
        pass1 += characters[randomIndex];
        password1.textContent = pass1;
        charactersRandomizer();
        pass2 += characters[randomIndex];
        password2.textContent = pass2;
    };
    console.log('паролі згенеровано');
};

function lengthChange() {
    console.log('запущена функція зміни довжини!');
    window.addEventListener('keydown', function (e) {
        if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
            if (e.target.nodeName == 'INPUT' && e.target.type == 'number') {
                e.preventDefault();
                return false;
            }
        }
    }, true);
    charactersNumber = document.querySelector('#inputLength').value;
    console.log('введена довжина пароля: ' + charactersNumber + ' символів');
};

generatePassBtn.addEventListener("click", createPasswords);

inputLength.addEventListener("click", lengthChange, false);
inputLength.addEventListener("keydown", lengthChange, false);


