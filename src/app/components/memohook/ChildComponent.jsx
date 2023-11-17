import React from "react";

function ChildComponent({ handleMeter, meter }) {
	console.log("Child Called :", meter);

	return (
		<div>
			ChildComponent
			<div>
				<button onClick={() => handleMeter(meter + 5)}>Change Meter</button>
			</div>
		</div>
	);
}

export default React.memo(ChildComponent);
