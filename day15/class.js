var Product = /** @class */ (function () {
    function Product(id, proname, proprice, quantity) {
        this.id = id;
        this.proname = proname;
        this.proprice = proprice;
        this.qty = quantity;
    }
    Product.prototype.Display = function () {
        return "".concat(this.id, " ").concat(this.proname, " ").concat(this.proprice);
    };
    return Product;
}());
var produ = new Product(123, 'Laptop', 80000, 12);
console.log(produ.Display());
//produ.qty=10;//compile error - Readonly property cannot be reinitialized
