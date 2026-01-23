package com.green.item.controller;

import com.green.item.dto.ItemDTO;
import com.green.item.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {

  @Autowired
  private ItemService itemService;

  @PostMapping("")
  public void insertItem(@RequestBody ItemDTO itemDTO) {
    itemService.insertItem(itemDTO);
  }

  @GetMapping("")
  public List<ItemDTO> getItemList() {
    return itemService.getItemList();
  }
}



