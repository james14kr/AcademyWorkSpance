package com.green.item.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.green.item.dto.ItemDTO;
import com.green.item.mapper.ItemMapper;

import java.util.List;

@Service
public class ItemService {

  private ItemMapper itemMapper;

  @Autowired
  public ItemService(ItemMapper itemMapper){
    this.itemMapper = itemMapper;
  }

  public void regItem(ItemDTO itemDTO) {
    System.out.println("상품 등록 기능을 시작합니다");
    System.out.println("아래는 상품 등록 시 전달되는 데이터 입니다.");
    System.out.println(itemDTO);

    itemMapper.insertItem(itemDTO);
    System.out.println("상품등록 쿼리 실행이 완료되었습니다.");
  }

  public List<ItemDTO> getItemList(){
    List<ItemDTO> list = itemMapper.selectItemList();
    return list;
  }

  public void updateItem(ItemDTO itemDTO){
    itemMapper.updateItem(itemDTO);
  }

}
