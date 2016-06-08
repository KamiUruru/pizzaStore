package ru.kpfu.pizza.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;


@Embeddable
public class OrderUserInfo {

    @Column(name = "phone")
    private String phone;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    public OrderUserInfo(String phone, String name, String address) {
        this.phone = phone;
        this.name = name;
        this.address = address;
    }

    public OrderUserInfo() {
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
