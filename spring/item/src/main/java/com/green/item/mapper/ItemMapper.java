package com.green.item.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.green.item.dto.ItemDTO;

import java.util.List;

@Mapper
public interface ItemMapper {

  int insertItem(ItemDTO itemDTO);

  List<ItemDTO> selectItemList();
}
