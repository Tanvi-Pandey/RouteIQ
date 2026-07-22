package com.routeiq.backend.service;

import com.routeiq.backend.dto.OrderRequest;
import com.routeiq.backend.entity.Customer;
import com.routeiq.backend.entity.Order;
import com.routeiq.backend.entity.Product;
import com.routeiq.backend.repository.CustomerRepository;
import com.routeiq.backend.repository.OrderRepository;
import com.routeiq.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;

    private final Queue<Order> orderQueue = new LinkedList<>();

    public OrderService(OrderRepository orderRepository,
                        CustomerRepository customerRepository,
                        ProductRepository productRepository) {

        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
    }

    public Order addOrder(OrderRequest request) {

        Customer customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Product product = productRepository.findById(request.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Order order = new Order();
        order.setCustomer(customer);
        order.setProduct(product);
        order.setQuantity(request.getQuantity());
        order.setPriority(request.getPriority());
        order.setStatus("Pending");

        Order savedOrder = orderRepository.save(order);
        orderQueue.offer(savedOrder);

        return savedOrder;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order processNextOrder() {

        Order nextOrder = orderQueue.poll();

        if (nextOrder == null) {
            return null;
        }

        nextOrder.setStatus("Processed");
        return orderRepository.save(nextOrder);
    }
}