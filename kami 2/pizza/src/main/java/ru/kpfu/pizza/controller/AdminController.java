package ru.kpfu.pizza.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ru.kpfu.pizza.controller.form.ProductForm;
import ru.kpfu.pizza.model.Order;
import ru.kpfu.pizza.model.Product;
import ru.kpfu.pizza.model.enums.Category;
import ru.kpfu.pizza.repository.OrderRepository;
import ru.kpfu.pizza.repository.ProductRepository;

import java.util.List;


@RestController
public class AdminController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    OrderRepository orderRepository;

    @RequestMapping(value = "/admin/products/new", method = RequestMethod.POST, consumes = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public void addProduct(@RequestBody ProductForm productForm) {
        Product product = new Product();
        product.setCategory(productForm.getCategory().equals("PIZZA") ? Category.PIZZA : Category.COCKTAIL);
        product.setName(productForm.getName());
        product.setCost(productForm.getCost());
        product.setDescription(productForm.getDescription());
        product.setImage(productForm.getImage());
        productRepository.save(product);
    }

    @RequestMapping(value = "/admin/orders", method = RequestMethod.GET)
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
