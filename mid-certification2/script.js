'use strict';

const form = document.querySelector('.reg-form__form');
const button = form.querySelector('.reg-form__button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('clicked on validate');
    const person = {};
    const email = form.querySelector('.email');
    const password = form.querySelector('.password');
    const confirmation = form.querySelector('.confirmation');

    if(email.value.length === 0) {
        email.style.borderColor = 'red';
        const label = form.querySelector('.email-label');
        label.style.color = 'red';
        label.innerHTML = 'Поле обязательно для заполнения';
    }

    function validateEmail(email) {    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    return re.test(String(email).toLowerCase());}
    
    if(!validateEmail(email.value) && email.value.length >= 1) {
        email.style.borderColor = 'red';
        const label = form.querySelector('.email-label');
        label.style.color = 'red';
        label.innerHTML = 'Email введён некорректно';

    }


    if(!password.value) {
        password.style.borderColor = 'red';
        const label = form.querySelector('.password-label');
        label.style.color = 'red';
        label.innerHTML = 'Поле обязательно для заполнения';
    }

    if(password.value.length < 8 && password.value) {
        password.style.borderColor = 'red';
        const label = form.querySelector('.password-label');
        label.style.color = 'red';
        label.innerHTML = 'Пароль должен содержать не менее 8 символов';
    }
    if(!confirmation.value || confirmation.value !== password.value) {
        confirmation.style.borderColor = 'red';
        const label = form.querySelector('.confirmation-label');
        label.style.color = 'red';
        label.innerHTML = 'Пароли не совпадают';
    }
    console.log('email: ', email.value);
    console.log('password: ', password.value);
    console.log('confirmation: ', confirmation.value);

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
    
    if(validateEmail(email.value) && password.value.length >= 8 && password.value === confirmation.value) {
        getData();
        console.log(person);
    }

})