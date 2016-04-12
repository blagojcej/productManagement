/**
 * Created by Blagojce on 07.3.2016.
 */

(function(){
    "use strict";

    angular.module("productManagement").controller("ProductDetailCtrl", ["product", "productService", ProductDetailCtrl]);

    function ProductDetailCtrl(product, productService) {
        var vm=this;

        vm.product=product;
        /*{
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2010",
            "description": "15 gallon capacity rolling garden cart.",
            "cost": 20.00,
            "price": 32.99,
            "category": "garden",
            "tags": ["barrow", "cart", "wheelbarrow"],
            "imageUrl": "https://openclipart.org/image/800px/svg_to_png/58471/garden-cart.png"
        };*/
        vm.title="Product Detail: "+vm.product.productName;

        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);

        if(vm.product.tags){
            vm.product.tagList= vm.product.tags.toString();
        }
    }
}());