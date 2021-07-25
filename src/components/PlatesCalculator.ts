export default function PlatesCalculator(targetWeight: number): (Array<number>) {
	/**
		* Calculates How many plates to put on a parbell to have a certain weight
		*	Barbell Weight = 45 pounds  
		*/
	const BAR = 45;
	const plates = [2.5, 5, 10, 25, 35, 45]

	const finalPlates: Array<number> = [];

	targetWeight = targetWeight - BAR;

	if (targetWeight <= 0) {
		return finalPlates;
	}
	let remainingWeight = targetWeight / 2;
	for (let i = plates.length - 1; i >= 0; i--) {
		let currPlateWeight = plates[i];
		let remainder = Math.floor(remainingWeight / currPlateWeight);
		if (remainder >= 1) {
			let amount = remainder;
			while (amount > 0) {
				finalPlates.push(currPlateWeight);
				amount--;
			}
			remainingWeight -= remainder * currPlateWeight;
		}
		if (remainingWeight === 0) break;
	}
	return finalPlates;
}
