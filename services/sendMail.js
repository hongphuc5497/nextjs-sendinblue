import axios from "axios";

export const sendMail = async (link) => {
	try {
		let request = await axios
			.post("/api/email", {
				name: "Malith",
				email: "malith@sendinblue.com",
				subject: "Someone sent you a link",
				mgs: link,
			})
			.then((res) => {
				return res;
			});

		return request.status === 200 ? true : false;
	} catch (err) {
		console.log(err);
	}
};