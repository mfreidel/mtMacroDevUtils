<!-- ParseNargs@Lib:mf.dev.utils
DESCRIPTION: Parses named arguments passed via JSON Objects for required and optional key names. 

NOTES: This is meant to be called by a script that receives arguments via JSON Objects. (See README.md in this directory.)

INPUT: JSON Object containing named arguments and parser options. Object must contain keys: "nargs", "required", "optional"

OUTPUT: JSON Object containing arguments supplied in the "nargs" key, plus any unspecified optional arguments set to the defined default values.
-->


<!-- Verify the parser input first. -->
[H: assert(json.type(macro.args) == "OBJECT", "PARSER ARGS ERROR: Arguments must be a JSON object!")]

[H: assert(json.contains(macro.args, "nargs"), "PARSER ARGS ERROR: 'nargs' key is not specified!")]
[H: jsonNargs = json.get(macro.args, "nargs")]

<!-- Nargs not being an object is probably(?) not a parser args error. -->
[H: assert(json.type(jsonNargs) == "OBJECT", "BAD ARGUMENT: Argument must be JSON object!")]

[H: assert(json.contains(macro.args, "required"), "PARSER ARGS ERROR: 'required' key is not specified!")]
[H: arrReq = json.get(macro.args, "required")]
[H: assert(json.type(arrReq) == "ARRAY", "PARSER ARGS ERROR: 'required' key's value must be a JSON array!")]

[H: assert(json.contains(macro.args, "optional"), "PARSER ARGS ERROR: 'optional' key is not specified!")]
[H: jsonOpt = json.get(macro.args, "optional")]
[H: assert(json.type(jsonOpt) == "OBJECT", "PARSER ARGS ERROR: 'nargs' key's value must be a JSON object!")]

<!-- Assert all 'required' elements as key names -->
[H, FOREACH(strReqKey, arrReq), CODE: {
	[H: assert(json.contains(jsonNargs, strReqKey), "BAD ARGUMENT: You must specify a '"+strReqKey+"' key in your JSON arugments")]
}]

<!-- Add 'optional' arg keys and default values to nargs if they weren't originally specified.  -->
[H, FOREACH(keyname, json.fields(jsonOpt)), CODE: {
	[H, IF(! json.contains(jsonNargs, keyname)): jsonNargs = json.set(jsonNargs, keyname, json.get(jsonOpt, keyname))]
}]

[H: return(0, jsonNargs)]