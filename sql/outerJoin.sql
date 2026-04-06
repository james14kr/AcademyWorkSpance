SELECT * FROM enrollment;
SELECT * FROM student;
SELECT * FROM course;

#1. 수강신청을 완료한 학생의 학생명, 과목명, 점수를 조회
SELECT s.student_name, c.course_name, e.score
FROM enrollment e JOIN student s 
ON e.student_id = s.student_id
JOIN course c
ON e.course_id = c.course_id;

#2. 수강신청 여부에 상관없이 모든 학생들의 학생명, 과목명, 점수 조회
SELECT s.student_name, c.course_name, e.score
FROM enrollment e RIGHT JOIN student s 
ON e.student_id = s.student_id
LEFT JOIN course c
ON e.course_id = c.course_id;

#3. 수강신청 하지 않은 학생의 학생명, 학년, 연락처 조회
SELECT STUDENT_NAME, GRADE, PHONE, E.STUDENT_ID
FROM STUDENT S LEFT JOIN ENROLLMENT E
ON S.STUDENT_ID = E.STUDENT_ID
WHERE E.STUDENT_ID IS NULL;