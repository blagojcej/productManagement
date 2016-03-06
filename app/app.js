/**
 * Created by Blagojce on 04.3.2016.
 */

(function () {
    "use strict";
    var app = angular.module("productManagement", ["common.services", "ui.router", "productResourceMock"])

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                //Home
                .state("home", {
                    url: "/",
                    templateUrl:"app/welcomeView.html"
                })
                //Products
                .state("productList", {
                    url: "/products",
                    templateUrl: "app/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                //Edit Product
                .state("productEdit",{
                    url:"products/edit/:productId",
                    templateUrl: "app/products/productEditView.html",
                    controller: "ProductEditCtrl as vm"
                })
        }]
    );
}());