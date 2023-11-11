"use client";
import React from "react";
import CompB from "./CompB";

export const ProfileNameContext = React.createContext();
export const EmailContext = React.createContext();

const stdInfo = {
	stdname: "test student",
	sem: 3,
	branch: "CSE",
};
function CompA() {
	return (
		<div>
			CompA
			<ProfileNameContext.Provider value={"Next JS Profile"}>
				<EmailContext.Provider value={"next@gmail.com"}>
					<CompB />
				</EmailContext.Provider>
			</ProfileNameContext.Provider>
		</div>
	);
}

export default CompA;

// React -Flux, Redux , Redux-toolkit
// useReducer hook
// useState
