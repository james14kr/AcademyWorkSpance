#댓글 테이블 생성 및 외래키
#외래키 (FOREIGN KEY /FK) 
#외래키 제약조건 - 한 테이블이 다른 테이블의 데이터를 참조할 때 사용하는 제약조건
# - FK 제약조건이 있어도 NULL데이터는 들어올 수 있음

#FK제약조건은 테이블 생성 시 추가문법
# 컬럼명 자료형 REFERENCES 참조테이블명 (참조컬럼명) -> 부모테이블의 데이터를 삭제하려면 자식 테이블의 데이터를 먼저 삭제
# 컬럼명 자료형 REFERENCES 참조테이블명 (참조컬럼명) ON DELETE CASCADE -> 부모테이블의 데이터를 삭제하면 자동으로 자식 테이블의 데이터가 삭제

#특이사항 - 자식테이블에서 부모클래스의 컬럼값을 참조하고 있으면 부모 테이블의 데이터 삭제가 불가

-- DROP TABLE BOARD_REPLY;
#댓글 정보 테이블
CREATE TABLE BOARD_REPLY(
	REPLY_NUM INT PRIMARY KEY AUTO_INCREMENT
	, CONTENT VARCHAR(100) NOT NULL
	, WRITER VARCHAR(50) NOT NULL
	, REG_DATE DATETIME DEFAULT SYSDATE()
	, BOARD_NUM INT NOT NULL REFERENCES BASIC_BOARD(BOARD_NUM) ON DELETE CASCADE 
);

SELECT * FROM BASIC_BOARD ;

SELECT * FROM BOARD_REPLY;

#2번 게시글에 댓글 추가
INSERT INTO BOARD_REPLY VALUES (3, 'AA', 'BB', SYSDATE(), 2);

#2번 게시글 삭제쿼리 -> 오류 발생
#2번 게시글에 대한 댓글이 존재하기 때문에 삭제 불가
#만약 2번 게시글을 삭제하려면 1)2번 게시글에 달린 댓글을 삭제하고 2)2번 게시글 삭제
DELETE FROM BASIC_BOARD WHERE BOARD_NUM = 1;

INSERT INTO BOARD_REPLY VALUES (1, 'AWAWD', '황민서', SYSDATE(), 15);


