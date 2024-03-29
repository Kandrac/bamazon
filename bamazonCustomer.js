var mysql = require("mysql");
var inquirer = require("inquirer");



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "*****",
    database: "bamazon_DB"
});


connection.connect(function (err) {
    if (err) throw err;

   
    products();
});

function products() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        console.log('');
        console.log('-------------Inventory---------------');
        console.log('');


        for (var i = 0; i < res.length; i++) {
            console.log('Item ID: ' + res[i].id);
            console.log('Product: ' + res[i].product);
            console.log('Department: ' + res[i].department);
            console.log('Price: ' + res[i].price );
            console.log('Quanity Left: ' + res[i].quanity);
            console.log(' ');
            console.log(' ');

        }
    
        start();
    });
}


function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw console.log("connection error:" + err);
    inquirer
        .prompt([
                {
                    name: 'selectId',
                    type: 'input',
                    message: 'Enter the id number of the Item you want to purchase:',


        },

                {
                    name: 'itemQuantity',
                    type: 'input',
                    message: 'Quantity of item?',
                }
            ]).then (function (answers) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, {
                id: answers.selectId
            }, function (err, res) {


              

                var inStock = res[0].quanity;
                var itemBought = answers.itemQuantity;

                if (inStock >= itemBought) {
                    var leftInStock = inStock - itemBought;
                    
                    var totalPrice = res[0].price * itemBought;
                    var itemPurchased = res[0].product;
                    
                    console.log(totalPrice + "  total purchase price ");
                    
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [
                            {
                                quanity: leftInStock
                                
                        },
                            {
                                id: answers.selectId
                        }

                    ],
                        function (error) {

                            if (error) throw err;
                            console.log("==============================================");
                            console.log("\n\r");
                            console.log("Order details:");
                            console.log("Item bought " + itemPurchased);
                            console.log("Quanity bought " + itemBought + " for $" + res[0].price);
                            console.log("Total Cost: $" + totalPrice);
                            console.log("\n\r");
                            console.log("Thank you come again.");
                            console.log("==============================================");
                            products();

                        }
                    );
                } else {
                    console.log("==============================================");
                    console.log("\n\r");
                    console.log("Insufficient quantity!");
                    console.log("\n\r");
                    console.log("==============================================");
                   products();

                }

            });
        
        });
        });
    }