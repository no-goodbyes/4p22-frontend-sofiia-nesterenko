"use strict";

fetch("https://reqres.in/api/users?per_page=12")
  .then((response) => response.json())
  .then((data) => {
    const usersData = data.data;
    // console.log(usersData);

    console.log("----Задание 2----");

    for (let key in usersData) {
      console.log(usersData[key].last_name);
    }

    console.log("----Задание 3----");
    
    for (let key in usersData) {
      if (usersData[key].last_name[0] === 'F') {
        for(let prop in usersData[key]) {
            console.log(`${prop}: ${usersData[key][prop]}`);
        }
      }
    }

    console.log("----Задание 3----");

    let ourUsers =[];
    ourUsers = usersData.reduce((sum, item, index, array) => {
        let resString = `${item.first_name} ${item.last_name}`;
        if(index !== array.length - 1) {
            resString = resString + ', ';
        } else { 
            resString = resString + '.';
        }
        sum += resString;
        return sum;
    },'');

    console.log(`Наша база содержит данные следующих пользователей: ${ourUsers}`);

    
    console.log("----Задание 4----");

    // Первый вариант
    // for(let prop in usersData[0]) {
    //     console.log(prop);
    // }
    
    // Второй вариант
    console.log(Object.keys(usersData[0]));
        
});
