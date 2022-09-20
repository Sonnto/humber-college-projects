--Question 1
SELECT * FROM invoice
    WHERE invoiceID >= 400
    AND billingState IS NOT NULL
    ORDER BY invoiceID DESC

--Question 2
SELECT * FROM employee
ORDER BY BirthDate
LIMIT 6 OFFSET 2

--Question 3
SELECT DISTINCT city,
    LOWER(city)
    AS 'City Names In Lower Case'
FROM customer

--Question 4
SELECT firstname, lastname, SUBSTR(lastname, 3, 1)
AS "Third Letter in Last Name"
FROM customer
WHERE FirstName LIKE "%t%"
OR LastName LIKE "%t%"

--Question 5
SELECT name, REPLACE(name, "ö", ":)")
AS "Smiley-fied Names"
FROM artist
WHERE name LIKE "%ö%"

--Question 6
SELECT COALESCE(state, "") AS "State", COALESCE(fax, "") AS "Fax", *
FROM customer

--Question 7
SELECT title, LENGTH(title) AS "Characters in Title", LOWER(SUBSTR(title, 1, 20)) AS "First 20 Characters"
FROM album
WHERE LENGTH(title) >= 20
ORDER BY LENGTH(title) DESC

--Question 8
SELECT BillingCity AS "Billing City", total, invoicedate AS "Invoice Date"
FROM invoice
WHERE total > 5
AND BillingCity IN ("Toronto", "Berlin")
ORDER BY invoicedate DESC