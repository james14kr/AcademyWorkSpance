package com.green.item.service;

import com.green.item.dto.ItemDTO;
import com.green.item.mapper.ItemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

  @Autowired
  private ItemMapper itemMapper;

  public void insertItem(ItemDTO itemDTO) {
    System.out.println(itemDTO);
    itemMapper.insertItem(itemDTO);
  }

  public List<ItemDTO> getItemList() {
    return itemMapper.getItemList();
  }
}

