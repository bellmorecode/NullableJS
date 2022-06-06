var Nullable = function(value) {
    // default values
	this.IsNull = true;
	this.HasValue = false;
    // set value
	this.Value = value;

	// check value
	if (typeof(this.Value) === "string" || typeof(this.Value) === "number") {
		this.IsNull = false;
		this.HasValue = true;
	}

    if (typeof (this.Value) == "object") {
	    	this.IsNull = false;
	    	this.HasValue = true;
            
    }
    
	return this;
};

Nullable.Expand = function (n) {
    debugger;
    if (!n) {
        return "undefined";
    }
    var text = "";
    if (n.IsNull === true) {
        text += typeof(n.Value) + ", " + n.Value;
    } else {
        text += "Is Null: " + n.IsNull + ", " + n.Value;
    };

    if (n.HasValue === true) {
        text += ", Has Value";
    } else {
        text += ", No Value";
    };
    return text;
}
Nullable.UltraExpand = function (n) {
    try {
        n.TypeName = typeof (n.Value);
        var el = Nullable.Expand(n);
        el += (" (underlying typename: " + n.TypeName + ")");
        return el;
    }
    catch (err) {
        n.TypeName = "FAILURE";
        var el = Nullable.Expand(n);
        el += (" (underlying typename: " + n.TypeName + ")");
        return el;
    }
}

// empty instance
Nullable.Empty = function () {
    return { IsNull: false, Value: {}, HasValue: false }
};

Nullable.ToString = function (o, reportNulls) {
	if (o.IsNull) {
		if (reportNulls === true) { return "<null>"; }
		return "";
	} else {
	    return o.Value + "";
	}
};


