function getRandomInteger(lower,upper)
	{
		if(lower >= upper)
		{
			return null;
		}
				
		var multiplier = upper - lower + 1;
		var rnd = parseInt(Math.random() * multiplier) + lower;
			
		return rnd;
	}