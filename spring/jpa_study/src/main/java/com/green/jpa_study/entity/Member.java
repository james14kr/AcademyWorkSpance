package com.green.jpa_study.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "JPA_MEMBER")
@Getter
@Setter
@NoArgsConstructor
public class Member {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long memNum;

  @Column(name = "MEM_EMAIL", nullable = false, length = 50)
  private String memEmail;

  @Column(length = 50, nullable = false)
  private String memName;
  private Integer memAge;

  private LocalDateTime createAt;

}
