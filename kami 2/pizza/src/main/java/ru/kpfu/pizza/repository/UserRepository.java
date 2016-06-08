package ru.kpfu.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.kpfu.pizza.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findOneByLogin(String login);
}