-- 1
SELECT title, first_name, last_name
FROM authorship a 
JOIN authors a2
ON a.author_id = a2.author_id -- links authorship with author for author_id
JOIN books b 
ON a.book_id = b.book_id -- links books with author for book_id

-- 2
SELECT first_name AS "First",
last_name AS "Last",
CONCAT(SUBSTR(first_name, 1, 1),'.', SUBSTR(last_name, 1, 1), '.')
AS "Initials", -- SUBTR to take one letter, starting with first letter of column
title AS "Title"
FROM withdrawals w 
JOIN books b -- links books with withdrawal for book_id
ON w.book_id = b.book_id 
JOIN members m 
ON m.member_id = w.member_id
WHERE first_name LIKE "B%" -- checks for all first_name starting with B
AND last_name LIKE "W%" -- checks for all last_name starting with W

-- 3
SELECT COUNT(book_id) AS "Written Books", -- counts amount of books
first_name, last_name
FROM authorship a 
JOIN authors a2 
ON a.author_id = a2.author_id -- gets author names
WHERE country LIKE "USA" OR country LIKE "U.S." -- filters out USA/U.S.
GROUP BY first_name, last_name -- groups amount of books by the first & last name of authors

-- 4
SELECT first_name AS "Member First Name",
last_name AS "Member Last Name",
withdrawal_date AS "Date of Withdrawal",
title AS "Title of Book"
FROM withdrawals w
JOIN members m 
ON m.member_id = w.member_id
JOIN books b 
ON w.book_id = b.book_id
WHERE MONTH(withdrawal_date) LIKE 10 -- MONTH() gets the numerical month from the entier date

-- 5
SELECT COUNT(withdrawal_id) AS "Late Withdrawals", first_name, last_name
FROM withdrawals w 
JOIN members m 
ON m.member_id = w.member_id
WHERE return_date > due_date -- shows only data where books returned after due date
GROUP BY first_name, last_name

-- 6
SELECT CONCAT(first_name, ' ', last_name) AS "Authors",
title AS "Book Titles"
FROM authorship a
RIGHT JOIN authors a2  -- gets the all authors even NULL
ON a.author_id = a2.author_id 
LEFT JOIN books b  -- gets the book_id from books even NULL
ON a.book_id = b.book_id

-- 7
SELECT CONCAT(first_name, ' ', last_name) AS "Members", withdrawal_id
FROM withdrawals w 
RIGHT JOIN members m 
ON w.member_id = m.member_id
WHERE withdrawal_id IS NULL -- returns all withdrawal dates that are NULL 

-- 8
SELECT CONCAT(first_name, ' ', last_name) AS "Members", withdrawal_id
FROM members m
LEFT JOIN withdrawals w
ON w.member_id = m.member_id
WHERE withdrawal_id IS NULL

-- 9
SELECT title,
first_name,
last_name
FROM books b , authors a -- Cross JOIN two tables

-- 10
SELECT first_name AS "First Name", COUNT(first_name) AS "# of Members with Same First Name"
FROM members m
GROUP BY first_name
HAVING COUNT(first_name) > 1
