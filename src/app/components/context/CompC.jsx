import { useContext } from "react";
import { ProfileNameContext, EmailContext } from "./CompA";
function CompC() {
	const profileName = useContext(ProfileNameContext);
	const emailid = useContext(EmailContext);
	return (
		<div>
			CompC : {profileName} -- {emailid}
		</div>
	);
}

export default CompC;
