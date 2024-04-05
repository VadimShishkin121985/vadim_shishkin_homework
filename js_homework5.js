// ------------------- Сума вартості послуг----------------

var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100,
    "Розбити скло": 200
  };
  
  var salon = {
    services: services,
    
    price: function() {
      var total = 0;
      for (var service in this.services) {
        total += this.services[service];
      }
      return total;
    },
    
    minPrice: function() {
      var min = Number.MAX_VALUE;
      for (var service in this.services) {
        if (this.services[service] < min) {
          min = this.services[service];
        }
      }
      return min;
    },
    
    maxPrice: function() {
      var max = 0;
      for (var service in this.services) {
        if (this.services[service] > max) {
          max = this.services[service];
        }
      }
      return max;
    }
  };
  
  console.log("Загальна вартість послуг: " + salon.price() + " грн");
  console.log("Мінімальна вартість послуг: " + salon.minPrice() + " грн");
  console.log("Максимальна вартість послуг: " + salon.maxPrice() + " грн");

  //---------------Робота з обьектом --------

  var notebook = {
    brand: 'HP',
    model: 'Pavilion',
    cpu: '2.2Ghz',
    
    
    getInfo: function() {
        var keys = Object.keys(this);
      
        for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (typeof this[key] !== 'function') {
          console.log(key + ': ' + this[key]);
        }
      }
    }
  };
  
  notebook.getInfo();  // выводим инфу про обект
  
  notebook.ram = '10Gb'; // добавляем новое свойство
  
  console.log('//////////////////////////////////////')
  
  notebook.getInfo(); // проверка добавленого свойства 
