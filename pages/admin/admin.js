$(document).ready(() => {

    const data = {
        "stores": [
            {
                "storeId": "ST987001",
                "name": "Elegant Emporium",
                "address": "789 Chic Avenue, Glam City, GC",
                "contactEmail": "elegant.emporium@storemail.com",
                "type": "Luxury Boutique",
                "ownerName": "Victoria Elegance"
            },
            {
                "storeId": "ST987002",
                "name": "Tech Haven",
                "address": "123 Gadget Street, Techno Town, TT",
                "contactEmail": "tech.haven@storemail.com",
                "type": "Electronics Store",
                "ownerName": "Max Tech"
            },
            {
                "storeId": "ST987003",
                "name": "Nature's Bounty Market",
                "address": "456 Fresh Street, Green Valley, GV",
                "contactEmail": "natures.bounty@storemail.com",
                "type": "Organic Grocery",
                "ownerName": "Harper Green"
            },
            {
                "storeId": "ST987004",
                "name": "Cosmic Trends Apparel",
                "address": "789 Galaxy Lane, Star City, SC",
                "contactEmail": "cosmic.trends@storemail.com",
                "type": "Fashion Outlet",
                "ownerName": "Stella Star"
            },
            {
                "storeId": "ST987005",
                "name": "Bookworm's Paradise",
                "address": "123 Reader's Lane, Litburg, LB",
                "contactEmail": "bookworm.paradise@storemail.com",
                "type": "Bookstore",
                "ownerName": "Oliver Bookish"
            },
            {
                "storeId": "ST987006",
                "name": "Gourmet Delights",
                "address": "456 Culinary Street, Flavorville, FV",
                "contactEmail": "gourmet.delights@storemail.com",
                "type": "Gourmet Foods",
                "ownerName": "Gina Gourmet"
            },
            {
                "storeId": "ST987007",
                "name": "Adventure Outfitters",
                "address": "789 Explorer's Road, Trek Town, TT",
                "contactEmail": "adventure.outfitters@storemail.com",
                "type": "Outdoor Gear",
                "ownerName": "Alex Explorer"
            },
            {
                "storeId": "ST987008",
                "name": "Serene Spa Essentials",
                "address": "123 Tranquil Street, Zen City, ZC",
                "contactEmail": "serene.spa@storemail.com",
                "type": "Spa Supplies",
                "ownerName": "Serena Tranquil"
            },
            {
                "storeId": "ST987009",
                "name": "Fitness Fusion Gear",
                "address": "456 Health Avenue, Fitville, FV",
                "contactEmail": "fitness.fusion@storemail.com",
                "type": "Fitness Equipment",
                "ownerName": "Frank Fitness"
            },
            {
                "storeId": "ST987010",
                "name": "Retro Rewind Electronics",
                "address": "789 Nostalgia Lane, Vintage City, VC",
                "contactEmail": "retro.rewind@storemail.com",
                "type": "Vintage Electronics",
                "ownerName": "Ruby Retro"
            },
            {
                "storeId": "ST987010",
                "name": "Retro Rewind Electronics",
                "address": "789 Nostalgia Lane, Vintage City, VC",
                "contactEmail": "retro.rewind@storemail.com",
                "type": "Vintage Electronics",
                "ownerName": "Ruby Retro"
            },
            {
                "storeId": "ST987010",
                "name": "Retro Rewind Electronics",
                "address": "789 Nostalgia Lane, Vintage City, VC",
                "contactEmail": "retro.rewind@storemail.com",
                "type": "Vintage Electronics",
                "ownerName": "Ruby Retro"
            }
        ],
        "owners": [
            {
                "storeId": "ST987001",
                "storeName": "Elegant Emporium",
                "ownerName": "Victoria Elegance",
                "contactEmail": "tech.haven@storemail.com",
                "password": "qwerty"
            }
        ]
    }

    localStorage.setItem('adminData', JSON.stringify(data));
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    $("#storeGrid").jsGrid({
        height: "600px",
        width: "100%",

        inserting: true,
        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        data: adminData.stores,

        fields: [
            { name: "name", align: "center", title: "Store Name", type: "text", width: 60, validate: "required", sorting: false },
            { name: "storeId", align: "center", title: "Store ID", type: "text", width: 40, validate: "required", sorting: true },
            { name: "address", align: "center", title: "Address", type: "text", width: 90, sorting: false },
            { name: "type", align: "center", title: "Store Type", type: "text", width: 70, sorting: false },
            { name: "ownerName", align: "center", title: "Owner", type: "text", width: 60, sorting: false },
            { name: "contactEmail", align: "center", title: "Email", type: "email", width: 100, title: "Store Email", sorting: false },
            { type: "control" }
        ]
    });

    $("#ownerGrid").jsGrid({
        height: "600px",
        width: "100%",

        inserting: true,
        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        data: adminData.owners,

        fields: [
            { name: "storeName", align: "center", title: "Store Name", type: "text", width: 60, validate: "required", sorting: false },
            { name: "storeId", align: "center", title: "Store ID", type: "text", width: 40, validate: "required", sorting: true },
            { name: "ownerName", align: "center", title: "Owner", type: "text", width: 60, sorting: false },
            { name: "password", align: "center", title: "Password", type: "text", width: 90, sorting: false },
            { name: "contactEmail", align: "center", title: "Email", type: "email", width: 100, title: "Store Email", sorting: false },
            { type: "control" }
        ]
    });
});


const openSection = (evt, section) => {
    let i;
    let tabContent;
    let tabLinks;
    tabContent = $(".tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = $(".tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    $(`#${section}`).css('display', 'block')
    $("#storeGrid").jsGrid("refresh");
    $("#ownerGrid").jsGrid("refresh");
    evt.currentTarget.className += " active";
}