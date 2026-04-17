function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Logical
Operator */
	this.urlHashMap["Half_Adder:1"] = "Half_Adder_HDL.v:47";
	/* <S1>/Logical
Operator1 */
	this.urlHashMap["Half_Adder:5"] = "Half_Adder_HDL.v:44";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Half_Adder"};
	this.sidHashMap["Half_Adder"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/A"] = {sid: "Half_Adder:10"};
	this.sidHashMap["Half_Adder:10"] = {rtwname: "<S1>/A"};
	this.rtwnameHashMap["<S1>/B"] = {sid: "Half_Adder:11"};
	this.sidHashMap["Half_Adder:11"] = {rtwname: "<S1>/B"};
	this.rtwnameHashMap["<S1>/Logical Operator"] = {sid: "Half_Adder:1"};
	this.sidHashMap["Half_Adder:1"] = {rtwname: "<S1>/Logical Operator"};
	this.rtwnameHashMap["<S1>/Logical Operator1"] = {sid: "Half_Adder:5"};
	this.sidHashMap["Half_Adder:5"] = {rtwname: "<S1>/Logical Operator1"};
	this.rtwnameHashMap["<S1>/Cout"] = {sid: "Half_Adder:12"};
	this.sidHashMap["Half_Adder:12"] = {rtwname: "<S1>/Cout"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "Half_Adder:13"};
	this.sidHashMap["Half_Adder:13"] = {rtwname: "<S1>/Sum"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
