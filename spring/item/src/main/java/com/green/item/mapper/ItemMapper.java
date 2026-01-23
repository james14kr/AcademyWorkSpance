package com.green.item.mapper;

import com.green.item.dto.ItemDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemMapper {

  void insertItem(ItemDTO itemDTO);

  List<ItemDTO> getItemList( );

}
