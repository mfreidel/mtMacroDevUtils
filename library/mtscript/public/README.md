# Public Macro Documentation

The following documentation provides further details about the public macros included in the library.


###  ParseNargs

> **NOTE:** This will probably change a lot while the library adds other fundamental features.

Allows you to parse named arguments supplied to a macro via a JSON object.
You must assign both required and optional values. They may be blank, but
must still be specified. Assigning both required and optional values is allowed,
which will still verify that supplied arguments are a JSON object. An 
implementation example is provided in the [examples](../examples/) directory.

**Some implementation notes:**

The macro calling this parser should be receiving its own JSON arguments with
the following structure:

```
{
	"arg_key_1"	:	"Supplied String"
	"arg_key_2"	:	["Supplied","Array"]
	"arg_key_3"	:	{"Supplied": "Object"}
}
```

The macro calling this parser *must* pass a *single* argument as a
JSON Object with the following structure:

```
{
	"nargs"	    :	{"arg_key_1":"Supplied Value"}
	"required"	:	["JSON","array","of","required","arg_keys"]
	"optional"	:	{"optional_key_name":"Default Value"}
}
```
