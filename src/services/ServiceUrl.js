const testBaseUrl =  '' /* + 'http://localhost:4000' */

const baseUrl = testBaseUrl || 'http://8.8.8.8'

module.exports = {
	SCAN_RESULTS: {
		url:baseUrl+'/scanresults',				//GET
		name: "scanresults"
	},             					
	WIFI_STATUS: {
		url:baseUrl+'/wifistatus',				//GET
		name: "wifistatus"
	},               					
	GET_TRIGGERS: {
		url:baseUrl+'/triggers',				//GET
		name: "triggers"
	},               						
	GET_COINS: {
		url:baseUrl+'/coins',					//GET
		name: "coins"
	},               							
	
	ADD_TRIGGERS: {
		url:baseUrl+'/addtriggers',				//POST
		name: "addtriggers"
	},             					
	ADD_COINS: {
		url:baseUrl+'/addcoins',				//POST
		name: "addcoins"
	},             							
	CONNECT_WIFI: {
		url:baseUrl+'/wificreds',				//POST
		name: "wificreds"
	},          							
	SEND_VIBRATE: {
		url:baseUrl+'/vibration',				//POST
		name: "vibration"
	},          							
}
