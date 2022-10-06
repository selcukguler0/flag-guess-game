import { createSlice } from '@reduxjs/toolkit'
import { countries } from "./countries";

var allCountries = Object.keys(countries);
var selectedQuestions = [];
for (let i = 1; i <= 4; i++) {
	var choices = [];
	var randomCountry =
		allCountries[Math.floor(Math.random() * allCountries.length)];
	choices.push(randomCountry);
	//do not include the same country twice
	allCountries = allCountries.filter((c) => c !== randomCountry);

	for (let i = 0; i < 3; i++) {
		var randomCountry =
			allCountries[Math.floor(Math.random() * allCountries.length)];
		choices.push(randomCountry);
		//do not include the same country twice
		allCountries = allCountries.filter((c) => c !== randomCountry);
	}
	//shuffle choices
	for (let i = choices.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[choices[i], choices[j]] = [choices[j], choices[i]];
	}
	
	selectedQuestions.push({
		id: i,
		answer: randomCountry,
		choices: choices,
	});
	allCountries = allCountries.filter((c) => c !== randomCountry);
}

const initialState = {
	selectedQuestions: selectedQuestions,
	score: 0
}

export const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		scoreIncrement: (state) => {
			state.score += 1
		},
	},
})
export const { scoreIncrement } = questionSlice.actions

export default questionSlice.reducer