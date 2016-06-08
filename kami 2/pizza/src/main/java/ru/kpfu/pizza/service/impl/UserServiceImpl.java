package ru.kpfu.pizza.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kpfu.pizza.controller.form.CheckoutForm;
import ru.kpfu.pizza.controller.form.ProductCheckoutForm;
import ru.kpfu.pizza.controller.form.UserInfo;
import ru.kpfu.pizza.model.Order;
import ru.kpfu.pizza.model.OrderDetail;
import ru.kpfu.pizza.model.OrderUserInfo;
import ru.kpfu.pizza.model.Product;
import ru.kpfu.pizza.repository.OrderRepository;
import ru.kpfu.pizza.repository.ProductRepository;
import ru.kpfu.pizza.service.UserService;

import java.util.ArrayList;
import java.util.List;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Override
    @Transactional
    public void checkout(CheckoutForm checkoutForm) {
        Order order = new Order();
        UserInfo userInfo = checkoutForm.getUser();
        List<OrderDetail> orderDetails = new ArrayList<>();
        order.setOrderUserInfo(new OrderUserInfo(userInfo.getPhone(), userInfo.getName(), userInfo.getAddress()));
        for (ProductCheckoutForm productCheckoutForm : checkoutForm.getProducts()) {
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setNumber(productCheckoutForm.getNumber());
            orderDetail.setProduct(productRepository.findOne(productCheckoutForm.getProductId()));
            orderDetail.setOrder(order);
            orderDetails.add(orderDetail);
        }
        order.setOrderDetails(orderDetails);
        orderRepository.save(order);
    }
}
