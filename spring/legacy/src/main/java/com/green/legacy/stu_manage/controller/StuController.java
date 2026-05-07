package com.green.legacy.stu_manage.controller;

import com.green.legacy.stu_manage.dto.StuDTO;
import com.green.legacy.stu_manage.service.StuService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/stu")
@RequiredArgsConstructor
public class StuController {

  private final StuService stuService;

  @RequestMapping("/main")
  public String main(@RequestParam(name = "classNum", defaultValue = "0")int classNum, Model model){
    model.addAttribute("classList", stuService.selectClassList());
    model.addAttribute("stuList", stuService.selectStuList(classNum));
    model.addAttribute("selectedClassNum", classNum);
    return "stu/stu_manage";
  }

  @ResponseBody
  @RequestMapping("/list")
  public List<StuDTO> getStuList(@RequestParam(name = "classNum")int classNum){
    return stuService.selectStuList(classNum);

  }

}
