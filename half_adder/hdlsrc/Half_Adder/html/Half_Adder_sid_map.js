function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["Half_Adder:10"] = "Half_Adder:9";
    this.sidParentMap["Half_Adder:11"] = "Half_Adder:9";
    this.sidParentMap["Half_Adder:1"] = "Half_Adder:9";
    this.sidParentMap["Half_Adder:5"] = "Half_Adder:9";
    this.sidParentMap["Half_Adder:12"] = "Half_Adder:9";
    this.sidParentMap["Half_Adder:13"] = "Half_Adder:9";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
