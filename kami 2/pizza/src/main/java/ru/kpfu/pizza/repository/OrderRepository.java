package ru.kpfu.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.kpfu.pizza.model.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {
}
