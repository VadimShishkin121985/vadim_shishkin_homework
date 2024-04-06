// ----------------  BigBoss ----------------------

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',

              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };

  function ValueByKey(companyName, company) {
    if (company.name === companyName) {
        return company;
    }
    
    if (company.clients && company.clients.length > 0) {
        for (let i = 0; i < company.clients.length; i++) {
            const client = company.clients[i];
            const result = ValueByKey(companyName, client);
            if (result !== null) {
                return result;
            }
        }
    }
    
    if (company.partners && company.partners.length > 0) {
        for (let i = 0; i < company.partners.length; i++) {
            const partner = company.partners[i];
            const result = ValueByKey(companyName, partner);
            if (result !== null) {
                return result;
            }
        }
    }
    return null;
}


const companyName = 'Клієнт 1.2.3';
const foundCompany = ValueByKey(companyName, company);
console.log(foundCompany);


//----------  Тусувати масив ------------------------------


function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
myBlend(arr);
console.log(arr);