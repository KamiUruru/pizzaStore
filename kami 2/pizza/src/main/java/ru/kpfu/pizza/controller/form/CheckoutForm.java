package ru.kpfu.pizza.controller.form;

import java.util.List;


public class CheckoutForm {

    private UserInfo user;

    private List<ProductCheckoutForm> products;

    public UserInfo getUser() {
        return user;
    }

    public void setUser(UserInfo user) {
        this.user = user;
    }

    public List<ProductCheckoutForm> getProducts() {
        return products;
    }

    public void setProducts(List<ProductCheckoutForm> products) {
        this.products = products;
    }
}
