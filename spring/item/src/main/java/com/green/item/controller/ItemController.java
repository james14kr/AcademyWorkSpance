package com.green.item.controller;

import com.green.item.dto.ItemDTO;
import com.green.item.service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/item")
public class ItemController {

  private ItemService itemService;

  public ItemController(ItemService itemService){
    this.itemService = itemService;
  }

  @PostMapping("")
  public void regItem(@RequestBody ItemDTO itemDTO){
    itemService.regItem(itemDTO);
  }

  @PostMapping("")
  public List<ItemDTO> getItemList(){
    List<ItemDTO> list = itemService.getItemList();
    return list;
  }
}
