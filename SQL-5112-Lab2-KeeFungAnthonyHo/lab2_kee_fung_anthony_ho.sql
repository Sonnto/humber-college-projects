-- Question 1 --
SELECT Primary_Offence, NeighbourhoodName --grabs the two columns
FROM bikeTheft --from this table
WHERE NeighbourhoodName --checks within the specific column
LIKE '%humber%' -- whether the word "Humber" appears within any strings

-- Question 2 --
SELECT Primary_Offence, NeighbourhoodName, Occurrence_Year -- grabs the three columns
FROM bikeTheft  -- from this table
WHERE NeighbourhoodName -- checks within this column
LIKE '%humber%' -- whether word 'Humber' appears within any strings
AND MOD (Occurrence_Year, 2) <>0; -- and has an odd number

-- Question 3 --
SELECT CONCAT ('$', ROUND(AVG(Cost_of_Bike), 2)) -- concatonates the $ with [get the rounded average of bike costs by 2 decimals]
AS 'Average Cost of Stolen Bikes'
FROM bikeTheft

-- Question 4 --
SELECT COUNT(DISTINCT Bike_Colour, Bike_Speed)
FROM bikeTheft

-- Question 5 --
SELECT Location_Type, COUNT(*) AS 'Num of Thefts' -- gets the data from column and count all rows
FROM bikeTheft
GROUP BY Location_Type -- groups the data gathered with the Location_Type column
HAVING COUNT(*) > 500 -- checks the total counted data for each row within the Location_Type column, and shows anything greater than 500
ORDER BY COUNT(*) DESC -- displays rows in descending (greatest on top) order

-- Question 6 --
SELECT MIN(Occurrence_Date) AS 'First Bike Theft in Table'
FROM bikeTheft

-- Question 7 --
SELECT NeighbourhoodName AS 'Neighourhood',
COUNT(*) AS 'Reported Thefts'
FROM bikeTheft
GROUP BY NeighbourhoodName 
ORDER BY COUNT(*) DESC 
LIMIT 10 OFFSET 0

-- Question 8 --
SELECT SUM(Cost_of_Bike)/COUNT(*) AS 'Column 1',
AVG(Cost_of_Bike) AS 'Column 2'
FROM bikeTheft 
	

-- Question 9 --
-- The columns are not equal to each other --
-- Nest COALESCE Cost_of_Bike inside AVG() --
-- AVG(COALESCE(Cost_of_Bike, 0)) --

-- Question 10 --
SELECT NeighbourhoodName AS 'Neighbourhoods',
COUNT(*) AS 'Incidents Above Average Thefts'
FROM bikeTheft
GROUP BY NeighbourhoodName
ORDER BY COUNT(*) DESC
LIMIT 5 OFFSET 0
-- not sure :(