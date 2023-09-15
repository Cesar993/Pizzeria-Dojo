
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas, carne, verduras) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    pizza.carne = carne;
    pizza.verduras = verduras;
    return pizza
}

pizzaUno = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"] ,[], ["pepperoni", "salchicha"],[]);
pizzaDos = pizzaOven( "lanzada a mano" , "marinara" , ["mozzarella", "feta"] ,[],[], ["champiñones", "aceitunas", "cebollas"]);
pizzaTres = pizzaOven( "libre" , "tradicional" , ["mozzarella", "feta", "queso azul"] ,["salsa verde"],["churrasco"], ["champiñones", "pinia"]);
pizzaCuatro = pizzaOven( "Americana" , "tradicional" , ["mozzarella"] ,["salsa blanca"],["carne de soya"], ["tomate", "aceitunas"]);
console.log(pizzaUno, pizzaDos, pizzaTres,pizzaCuatro);