package ru.kpfu.pizza.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ru.kpfu.pizza.controller.form.CheckoutForm;
import ru.kpfu.pizza.model.Product;
import ru.kpfu.pizza.repository.OrderRepository;
import ru.kpfu.pizza.repository.ProductRepository;
import ru.kpfu.pizza.service.UserService;

import java.util.List;


@RestController
public class ApiController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserService userService;

    @RequestMapping(value = "/api/products", method = RequestMethod.GET)
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @RequestMapping(value = "/api/products/{id}", method = RequestMethod.GET)
    public Product getProductDetail(@PathVariable("id") Long id) {
        return productRepository.findOne(id);
    }

    @RequestMapping(value = "/api/checkout", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void checkout(@RequestBody CheckoutForm checkoutForm) {
        userService.checkout(checkoutForm);
    }
}
