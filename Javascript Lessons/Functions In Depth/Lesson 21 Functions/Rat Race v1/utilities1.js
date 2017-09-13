function getRandomInteger(lower, upper)
{
	if (lower > upper)
	{
		return null;
	}

	var multiplier = upper - lower + 1;
		
	var rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}

function getRandomIntegerSuffix(number)
{
	if (number == 11 || number == 12 || number == 13)
	{
		return number + "th";
	}
	
	if (number % 10 == 3)
	{
		return number + "rd";
	}
	
	if (number % 10 == 1)
	{
		return number + "st";
	}
	
	if (number % 10 == 2)
	{
		return number + "nd";
	}
	
	if (number % 10 == 0 || number % 10 == 4 || number % 10 == 5 || number % 10 == 6 || number % 10 == 7 || number % 10 == 8 || number % 10 == 9)
	{
		return number + "th";
	}
}
