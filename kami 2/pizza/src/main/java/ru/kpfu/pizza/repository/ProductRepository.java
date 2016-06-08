package ru.kpfu.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.kpfu.pizza.model.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {
}
