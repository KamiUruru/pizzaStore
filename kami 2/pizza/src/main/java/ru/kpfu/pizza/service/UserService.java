package ru.kpfu.pizza.service;

import ru.kpfu.pizza.controller.form.CheckoutForm;


public interface UserService {
    void checkout(CheckoutForm checkoutForm);
}
