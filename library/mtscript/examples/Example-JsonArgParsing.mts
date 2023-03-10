<!-- Example-JsonArgParsing@mf.dev.utils 

Example implementation for the ParseNargs macro. Note how readable this can make your argument handling.

-->

[H: RequiredArguments = json.append("", "req_key_1", "req_key_2")]
[H: OptionalArguments = json.set("{}", "opt_key_1", "Default Value")]
[H: NargParse = json.set("{}", "nargs", macro.args, "required", RequiredArguments, "optional", OptionalArguments)]
[H, MACRO("ParseNargs@Lib:mf.dev.utils"): NargParse]
[H: jsonParsedArgs = macro.return]

<!-- This will *not* cause errors when unspecified in the original macro.args above -->
[R: strOptValue = json.get(jsonParsedArgs, "opt_key_1")]

[H: return(0, strOptValue)]
