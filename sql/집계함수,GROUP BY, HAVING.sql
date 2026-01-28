#집계함수, GROUP BY, HAVING

#단일행함수 - 각 행마다 하나의 결과를 가지는 함수
#집계함수 - 함수 실행결과 무조건 하나의 행 결과를 가지는 함수
#집계함수의 종류 - SUM(), MIN(), MAX(), COUNT(), AVG()
#단일행함수 및 일반 컬럼조회는 집계함수와 함께 사용 시 주의 필요

#단일행 함수 ex> 테이블에 데이터가 10개 존재 -> 함수 실행 결과 조회 데이터도 10개
SELECT COMM, IFNULL(COMM, 10) FROM EMP;

#집계함수
SELECT SUM(SAL), MIN(SAL), MAX(SAL), COUNT(SAL), AVG(SAL) FROM EMP;

#예제1. 직급이 과장인 사원들의 급여의 평균을 조회
SELECT AVG(SAL) FROM EMP WHERE JOB = '과장';

#COUNT(), AVG() 집계함수 사용시 NULL 데이터 주의!
# -> 데이터의 갯수 및 평균을 구할 때는 NULL데이터는 제외하여 계산함!
# COUNT() 함수는 컬럼에 존재하는 데이터의 수를 파악하는 목적이 아님
# -> 테이블에 저장된 데이터의 갯수를 파악하는 용도
#결론 : COUNT() 함수 안의 컬럼은 NULL데이터가 포함된 컬럼은 사용하면 안됨
#	  편하게 사용할려면 기본키(PRIMARY KEY) 컬럼을 사용한다
SELECT COUNT(EMPNO), COUNT(ENAME), COUNT(COMM) FROM EMP;

#커미션의 평균을 조회하되, 모든 사원 수를 기준으로 평균을 조회하라
SELECT ROUND(AVG(IFNULL(COMM, 0)), 2) FROM EMP;

#단일행함수 및 일반 컬럼조회는 집계함수와 함께 사용 시 주의 필요
# 주의  : 조회하는 모든 컬럼은 반드시 조회되는 데이터의 행 갯수가 동일해야 조회 가능
# -> 집계함수는 단일행 함수 및 일반 컬럼이랑 함계 조회할 수 없음

#예시1.
SELECT EMPNO, ENAME, SAL, COMM FROM EMP;


#########################################################################################

#GROUP BY - 특정 기준에 다라 그룹을 묶어 집계 데이터를 조회할 때 사용
#직급별 사원의 급여 평균 조회
#GRIUP BY 절을 사용하면 SELECT절에 그룹핑 기준이 되는 컬럼은 사용 가능
SELECT JOB, AVG(SAL)
FROM EMP
GROUP BY JOB;

#부서별 최고 급여 및 최저 급여를 조회
SELECT DEPTNO, MAX(SAL), MIN(SAL)
FROM EMP
GROUP BY DEPTNO;

#########################################################################################

#HAVING - GROUP BY 결과 그룹핑되는 데이터를 기준으로 조건을 부여할 때 사용
#예시1. 부서번호가 30번이 아닌 부서에 소속된 사원들의 직급별 최고 급여와 최저 급여의 차이를 조회
SELECT JOB,                      MAX(SAL) - MIN(SAL)
FROM EMP
WHERE DEPTNO != 30
GROUP BY JOB;

#SELECT 쿼리문의 해석 순서(컴퓨터가 해석 순서)
FROM -> WHERE