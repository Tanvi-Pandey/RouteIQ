package com.routeiq.backend.controller;

import com.routeiq.backend.dto.OrderRequest;
import com.routeiq.backend.entity.Order;
import com.routeiq.backend.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public Order addOrder(@RequestBody OrderRequest request) {
        return orderService.addOrder(request);
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @DeleteMapping("/process")
    public Order processNextOrder() {
        return orderService.processNextOrder();
    }
}