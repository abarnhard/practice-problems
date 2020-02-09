# Problem statement
Create a function that takes in:
* an integer that represents a number of years,
* a 2 dimensional matrix filled with 0s and 1s that describes a garden. 1s represent hedges, and 0s represent empty spaces.
The function should simulate the growth of hedges over the given number of years, according to the following rules:
* An empty square which is adjacent to a hedge (including diagonally) will be filled in the next year.
* A square which is filled with a hedge will be empty the following year if it is surrounded on all eight sides by other hedges, which prevents it from getting enough sun. Note that hedges on the edge squares will always get enough sun.
* Any other squares will be left intact.

