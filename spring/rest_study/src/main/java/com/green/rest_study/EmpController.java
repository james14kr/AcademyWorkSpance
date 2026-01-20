package com.green.rest_study;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/emp")
public class EmpController {

  private List<EmpDTO> empDTOS;

  public EmpController() {
    empDTOS = new ArrayList<>();
    empDTOS.add(new EmpDTO(1, "김자바", "개발부", 10000, "인턴"));
    empDTOS.add(new EmpDTO(2, "이자바", "개발부", 10000, "인턴"));
    empDTOS.add(new EmpDTO(3, "김자바", "개발부", 10000, "인턴"));
    empDTOS.add(new EmpDTO(4, "김자바", "개발부", 10000, "인턴"));
    empDTOS.add(new EmpDTO(5, "김자바", "개발부", 10000, "인턴"));
  }

  //사원 목록 조회
  @GetMapping("")
  public List<EmpDTO> getEmpList(){
    return empDTOS;
  }

  //사번을 통해 특정 사원 한 명의 정보를 조회
  @GetMapping("/{empNum}")
  public EmpDTO getEmpListDetail(@PathVariable("empNum")int empNum){

    EmpDTO result = null;
    for(EmpDTO e : empDTOS){
      if(e.getEmpNum() == empNum){
        result = e;
      }
    }

    return result;
  }

  //사원 등록
  @PostMapping("")
  public void regEmp(@RequestBody EmpDTO empDTO){
    empDTOS.add(empDTO);
  }

  //사원 삭제
  @DeleteMapping("/{empNum}")
  public List<EmpDTO> deleteEmp(@PathVariable("empNum") int empNum){
    for(int i = 0; i < empDTOS.size(); i++){
      if(empDTOS.get(i).getEmpNum() == empNum){
        empDTOS.remove(i);
      }
    }
    return empDTOS;
  }

  //사원 정보 수정
  @PutMapping("/{empNum}")
  public void updateEmp(@PathVariable("empNum") int empNum, @RequestBody EmpDTO empDTO){
    for (EmpDTO dto : empDTOS) {
      if (dto.getEmpNum() == empNum) {
        dto.setSalary(empDTO.getSalary());
        dto.setRank(empDTO.getRank());
      }
    }
  }

}
