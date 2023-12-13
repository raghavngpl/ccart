$(document).ready(() => {

    const stocks = [
        {
            "id": 1,
            "flavor": "Vanilla",
            "description": "Classic vanilla flavor with a rich and creamy taste. Perfect for those who love the timeless simplicity of vanilla.",
            "quantity": 100,
            "price": 2.50,
            "allergenInfo": ["milk"],
            "featured": true
          },
          {
            "id": 2,
            "flavor": "Chocolate",
            "description": "Indulge in the richness of our chocolate ice cream. Made with premium cocoa for a delightful chocolate experience.",
            "quantity": 80,
            "price": 3.00,
            "allergenInfo": ["milk", "soy"],
            "featured": false
          },
          {
            "id": 3,
            "flavor": "Strawberry",
            "description": "Experience the freshness of ripe strawberries in every scoop. A fruity and delightful treat for strawberry lovers.",
            "quantity": 120,
            "price": 3.50,
            "allergenInfo": ["milk"],
            "featured": true
          },
          {
            "id": 4,
            "flavor": "Mint Chocolate Chip",
            "description": "Cool and refreshing mint ice cream combined with decadent chocolate chips. A perfect blend of flavors.",
            "quantity": 60,
            "price": 4.00,
            "allergenInfo": ["milk"],
            "featured": false
          },
          {
            "id": 5,
            "flavor": "Cookies and Cream",
            "description": "Irresistible combination of vanilla ice cream with chunks of chocolate cookies. A classic favorite for cookie enthusiasts.",
            "quantity": 90,
            "price": 4.50,
            "allergenInfo": ["milk", "wheat"],
            "featured": true
          },
          {
            "id": 6,
            "flavor": "Rocky Road",
            "description": "A delightful mix of chocolate ice cream, marshmallows, and nuts. Indulge in the rocky road experience!",
            "quantity": 70,
            "price": 4.25,
            "allergenInfo": ["milk", "nuts"],
            "featured": false
          },
          {
            "id": 7,
            "flavor": "Butter Pecan",
            "description": "Rich buttery ice cream with crunchy pecans. A perfect blend of sweet and nutty flavors.",
            "quantity": 50,
            "price": 4.75,
            "allergenInfo": ["milk", "nuts"],
            "featured": true
          },
          {
            "id": 8,
            "flavor": "Pistachio",
            "description": "Smooth pistachio-flavored ice cream with real pistachio pieces. A delightful treat for pistachio lovers.",
            "quantity": 65,
            "price": 5.00,
            "allergenInfo": ["milk", "nuts"],
            "featured": false
          }
    ]

    $("#stockGrid").jsGrid({
        height: "600px",
        width: "100%",

        inserting: true,
        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        data: stocks,

        fields: [
            { name: "flavor", align: "center", title: "Item Name", type: "text", width: 60, validate: "required", sorting: false },
            { name: "description", align: "center", title: "Description", type: "text", width: 100, validate: "required", sorting: false },
            { name: "quantity", align: "center", title: "Quantity", type: "text", width: 40, validate: "required", sorting: true },
            { name: "price", align: "center", title: "Price", type: "text", width: 90, sorting: false },
            { name: "allergenInfo", align: "center", title: "Allergen Info", type: "array", width: 90, sorting: false },
            { type: "control" }
        ]
    });

})