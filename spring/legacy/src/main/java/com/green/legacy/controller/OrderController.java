package com.green.legacy.controller;

import com.green.legacy.dto.DeliveryDTO;
import com.green.legacy.dto.OrderDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OrderController {

  @RequestMapping("/order")
  public String getOrder(){
    return "order";
  }

  @RequestMapping("/delivery")
  public String delivery(@ModelAttribute OrderDTO orderDTO, Model model){
    System.out.println(orderDTO);

    model.addAttribute("order", orderDTO);

    return "delivery";
  }

  @RequestMapping("/show")
  public String show(@ModelAttribute DeliveryDTO deliveryDTO, Model model, @ModelAttribute OrderDTO orderDTO){
    System.out.println(deliveryDTO);

    model.addAttribute("delivery", deliveryDTO);
    model.addAttribute("order", orderDTO);

    return "order_info";
  }

}
