const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;

//Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey =
	"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";

var apiInstance = new SibApiV3Sdk.SMTPApi();

const sendinblue = (sendSmtpEmail) => {
	apiInstance.sendTransacEmail(sendSmtpEmail).then(
		function (data) {
			return true;
		},
		function (error) {
			console.error(error);
			return false;
		}
	);
};

module.exports = sendinblue;
