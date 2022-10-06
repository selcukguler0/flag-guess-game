import React from 'react'
import { useSelector } from "react-redux";


export default function Results() {
	const score = useSelector((state) => state.question.score);

	return (
		<div>{score}</div>
	)
}
