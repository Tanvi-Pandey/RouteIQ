package com.routeiq.backend.controller;

import com.routeiq.backend.repository.CustomerRepository;
import com.routeiq.backend.repository.OrderRepository;
import com.routeiq.backend.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    public DashboardController(CustomerRepository customerRepository,
                               ProductRepository productRepository,
                               OrderRepository orderRepository) {

        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    @GetMapping
    public Map<String, Long> getDashboardStats() {

        Map<String, Long> stats = new HashMap<>();

        stats.put("customers", customerRepository.count());
        stats.put("products", productRepository.count());

        long pending = orderRepository.findAll()
                .stream()
                .filter(o -> "Pending".equals(o.getStatus()))
                .count();

        long processed = orderRepository.findAll()
                .stream()
                .filter(o -> "Processed".equals(o.getStatus()))
                .count();

        stats.put("pending", pending);
        stats.put("processed", processed);

        return stats;
    }
}