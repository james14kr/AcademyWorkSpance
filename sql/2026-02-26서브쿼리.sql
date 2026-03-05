#서브쿼리 - 쿼리 안에 또 다른 쿼리

#예시 - '김사랑' 사원과 같은 부서에 소속된 직원들의 사번, 사원명, 부서번호를 조회

SELECT * FROM EMP;

#1. 김사랑 사원의 부서번호를 조회
SELECT DEPTNO FROM EMP WHERE ENAME = '김사랑';

#2. 부서번호가 20번인 사원들의 사번, 사원명, 부서번호를 조회
SELECT EMPNO, ENAME, DEPTNO
FROM EMP 
WHERE DEPTNO = 20;

#3. 위 두 쿼리를 하나로 작성
SELECT EMPNO, ENAME, DEPTNO
FROM EMP 
WHERE DEPTNO = (SELECT DEPTNO 
				FROM EMP 
				WHERE ENAME = '김사랑');

#강혜정 사원보다 급여를 더 많이 받는 사원들의 사번, 사원명, 급여를 조회
SELECT EMPNO, ENAME, SAL
FROM EMP
WHERE SAL > (SELECT SAL FROM EMP WHERE ENAME = '강혜정');

SELECT * FROM DEPT;

#김사랑 사원의 사번, 사원명, 직급, 부서번호, 부서명을 조회
SELECT EMPNO
	,ENAME
	,JOB
	,DEPTNO
	,(SELECT DNAME FROM DEPT WHERE DEPTNO = EMP.DEPTNO) DNAME
FROM EMP
WHERE ENAME = '김사랑';

#인사부에 소속된 직원들의 급여 평균보다 더 높은 급여를 받는 사원들의 사번, 사원명, 급여, 부서명을 조회
SELECT EMPNO
	,ENAME
	,SAL
	,(SELECT DNAME FROM DEPT WHERE DEPTNO = EMP.DEPTNO) DNAME
FROM EMP
WHERE SAL > (SELECT AVG(SAL) 
				FROM EMP 
				WHERE DEPTNO = (SELECT DEPTNO 
								FROM DEPT
								WHERE DNAME = '인사부' ));

SELECT * FROM SHOP_CART;
SELECT * FROM SHOP_BOOK;

#장바구니 테이블의 데이터를 기준으로 장바구니번호, 상품번호, 장바구니에 담긴 상품명, 장바구니에 담긴 상품 가격을 조회
SELECT CART_NUM
	,BOOK_NUM
	,(SELECT BOOK_TITLE FROM SHOP_BOOK WHERE BOOK_NUM = SHOP_CART.BOOK_NUM) AS TITLE
	,(SELECT BOOK_PRICE FROM SHOP_BOOK WHERE BOOK_NUM = SHOP_CART.BOOK_NUM) AS PRICE
FROM SHOP_CART;

#SHOP_BOOK 테이블을 기준으로 도서번호, 도서명, 가격, 메인이미지의 원본 파일명을 조회
SELECT BOOK_NUM
	,BOOK_TITLE
	,BOOK_PRICE
	,(SELECT ORIGIN_FILE_NAME FROM BOOK_IMG WHERE BOOK_NUM = SHOP_BOOK.BOOK_NUM AND IS_MAIN = 'Y') 원본파일명
FROM SHOP_BOOK;

#SHOP_CART 테이블 기준, 장바구니에서 3개 이상의 상품 종류를 담은 회원의 이메일 조회
SELECT MEM_EMAIL
FROM SHOP_CART;

