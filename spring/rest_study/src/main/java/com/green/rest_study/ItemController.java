package com.green.rest_study;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {

  private List<ItemDTO> itemDTOS;

  public ItemController(){
    itemDTOS = new ArrayList<>();

    itemDTOS.add(new ItemDTO(1, "product1", 1000, "Korea"));
    itemDTOS.add(new ItemDTO(2, "product2", 2000, "China"));
    itemDTOS.add(new ItemDTO(3, "product3", 3000, "Us"));
    itemDTOS.add(new ItemDTO(4, "product4", 4000, "Uk"));
    itemDTOS.add(new ItemDTO(5, "product5", 5000, "korea"));
  }

  @GetMapping()
  public List<ItemDTO> getItemList(){
    return itemDTOS;
  }

  @GetMapping("/{itemNum}")
  public ItemDTO getItemListDetail(@PathVariable("itemNum") int num){
    ItemDTO list = null;
    for(ItemDTO e : itemDTOS){
      if(e.getProductNum() == num){
        list = e;
      }
    }
    return list;
  }

  @DeleteMapping("/{itemNum}")
  public List<ItemDTO> deleteItem(@PathVariable("itemNum") int num){
    for(int i = 0; i < itemDTOS.size(); i++){
      if(itemDTOS.get(i).getProductNum() == num){
        itemDTOS.remove(i);
      }
    }
    return itemDTOS;
  }

}
