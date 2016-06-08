package ru.kpfu.pizza.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import ru.kpfu.pizza.model.User;
import ru.kpfu.pizza.model.enums.UserRole;
import ru.kpfu.pizza.repository.UserRepository;
import ru.kpfu.pizza.service.UserService;


@Controller
public class IndexController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String getIndexPage() {
        return "index";
    }

    @RequestMapping(value = "/createAdmin", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void registrateAdmin() {
        if (userRepository.findOneByLogin("admin") == null) {
            User user = new User();
            user.setLogin("admin");
            user.setPassword(bCryptPasswordEncoder.encode("1234"));
            user.setRole(UserRole.ROLE_ADMIN);
            userRepository.save(user);
        }
    }

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String getAdminPage() {
        return "admin";
    }
}
