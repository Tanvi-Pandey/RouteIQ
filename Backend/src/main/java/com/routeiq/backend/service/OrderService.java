package com.routeiq.backend.service;

import com.routeiq.backend.entity.Order;
import com.routeiq.backend.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    // FIFO Queue
    private final Queue<Order> orderQueue = new LinkedList<>();

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // Add an order
    public Order addOrder(Order order) {
        order.setStatus("Pending");
        Order savedOrder = orderRepository.save(order);
        orderQueue.offer(savedOrder);
        return savedOrder;
    }

    // View all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Process the next order
    public Order processNextOrder() {
        Order nextOrder = orderQueue.poll();

        if (nextOrder == null) {
            return null;
        }

        nextOrder.setStatus("Processed");
        orderRepository.save(nextOrder);

        return nextOrder;
    }
}