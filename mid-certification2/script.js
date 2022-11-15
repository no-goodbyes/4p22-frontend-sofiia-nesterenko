'use strict';

const person = {};

const getGender = () => {
    const man = document.getElementById('man');
    const woman = document.getElementById('woman');
    if (man.checked) {
        person.sex = 'MAN';
    } else if (woman.checked) {
        person.sex = 'WOMAN';
    }
};

const getComment = () => {
    const comment = document.getElementById('comment');
    person.comment = comment.value;
};

const getCheckbox = () => {
    const check = document.getElementById('checkbox');
    if (check.checked) {
        person.checkbox = true;
    } else {
        person.checkbox = false;
    }
};

const getData = () => {
    getGender();
    getComment();
    getCheckbox();
};

const form = document.querySelector('.reg-form__form');
const button = form.querySelector('.reg-form__button');
const email = form.querySelector('.email');
const password = form.querySelector('.password');
const confirmation = form.querySelector('.confirmation');

function makeTextRed (node) {
    node.style.color = 'red';
}
function makeBorderRed (node) {
    node.style.borderColor = 'red';
}

function validateEmail(email) {    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    return re.test(String(email).toLowerCase());}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if(email.value.length === 0) {
        makeBorderRed(email);
        const label = form.querySelector('.email-label');
        makeTextRed(label);
        label.innerHTML = 'Поле обязательно для заполнения';
    }
    
    if(!validateEmail(email.value) && email.value.length >= 1) {
        makeBorderRed(email);
        const label = form.querySelector('.email-label');
        makeTextRed(label);
        label.innerHTML = 'Email введён некорректно';

    }


    if(!password.value) {
        makeBorderRed(password);
        const label = form.querySelector('.password-label');
        makeTextRed(label);
        label.innerHTML = 'Поле обязательно для заполнения';
    }

    if(password.value.length < 8 && password.value) {
        makeBorderRed(password);
        const label = form.querySelector('.password-label');
        makeTextRed(label);
        label.innerHTML = 'Пароль должен содержать не менее 8 символов';
    }
    if(!confirmation.value || confirmation.value !== password.value) {
        makeBorderRed(confirmation);
        const label = form.querySelector('.confirmation-label');
        makeTextRed(label);
        label.innerHTML = 'Пароли не совпадают';
    }

    if(validateEmail(email.value) && password.value.length >= 8 && password.value === confirmation.value) {
        person.email = email.value;
        person.password = password.value;
        person.confirmation = confirmation.value;
        getData();
        console.log(person);
    }

})