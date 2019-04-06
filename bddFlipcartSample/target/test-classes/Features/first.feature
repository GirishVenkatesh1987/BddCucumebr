Feature: FlipCart Sample 

@First 
Scenario Outline: Search, filter and get first product
	Given flip cart url is loaded 
	When verify the flipcart title 
	Then search criteria is "<search>"	
	Then filter brand search "<brandfilterkey>" and "<brandfiltervalue>"
	Then filter ram value "<ramfiltervalue>"
	 
	 
Examples:
|search|brandfilterkey|brandfiltervalue|ramfiltervalue|
|mobile|Gi|Gionee|2 GB|

