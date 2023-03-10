<!-- Example-JsonArgSending@mf.dev.utils 

Example implementation for sending arguments to a macro that implements ParseNargs.

-->


[H: jsonArgs = json.set("{}", "req_key_1", "test1", "req_key_2", "test2", "opt_key_3", "Special!")]
[H, MACRO("examples/Example-JsonArgParsing@Lib:mf.dev.utils"): jsonArgs]

[r: valReturned = macro.return]
