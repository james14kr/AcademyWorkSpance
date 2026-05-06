package com.green.legacy.stu_manage.service;

import com.green.legacy.stu_manage.dto.ClassDTO;
import com.green.legacy.stu_manage.dto.StuDTO;
import com.green.legacy.stu_manage.mapper.StuMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StuService {

  private final StuMapper stuMapper;

  public List<ClassDTO> selectClassList(){
    return stuMapper.selectClassList();
  }

  public List<StuDTO> selectStuList(int classNum){
    return stuMapper.selectStuList(classNum);
  }

}
