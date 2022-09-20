-- Question 1 --
SELECT Primary_Offence, NeighbourhoodName
FROM bikeTheft
WHERE NeighbourhoodName
LIKE '%humber%'

-- Question 2 --
SELECT Primary_Offence, NeighbourhoodName, Occurrence_Year 
FROM bikeTheft 
WHERE NeighbourhoodName 
LIKE '%humber%'
AND MOD (Occurrence_Year, 2) <>0;

-- Question 3 --
SELECT CONCAT ('$', ROUND(AVG(Cost_of_Bike), 2))
AS 'Average Cost of Stolen Bikes'
FROM bikeTheft

-- Question 4 --
SELECT COUNT(DISTINCT Bike_Colour, Bike_Speed)
FROM bikeTheft

-- Question 5 --
SELECT Location_Type, COUNT(*) AS 'Num of Thefts'
FROM bikeTheft
GROUP BY Location_Type 
HAVING COUNT(*) > 500
ORDER BY COUNT(*) DESC

-- Question 6 --
SELECT MIN(Occurrence_Date) AS 'First Bike Theft in Table'
FROM bikeTheft

-- Question 7 --
SELECT NeighbourhoodName AS 'Neighourhood', COUNT(*) AS 'Reported Thefts'
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
