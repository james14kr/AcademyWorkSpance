package com.green.jpa_study.repository;

import com.green.jpa_study.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

//Mybatis의 Mapper Interface 역할
//디비 조작 기능을 위해서는 JpaRepository 인터페이스를 상속 받는다
//JpaRepository<Entity명, pk자료형>
//JpaRepository 인터페이스만 상속받으면, 어떠한 코드를 작성하지 않으면 이미 CRUD는 완성
public interface MemberRepository extends JpaRepository<Member, Long> {
}
