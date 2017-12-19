
IE - Running Scripts From your Hard Drive Warning!


If you have SP2 installed, by default, IE will show a warning message and attempt to block QuickMenu from
running until you allow active content from your hard drive.  This warning and block does not occur online,
it is a local IE security precaution only.

Despite the warning, OpenCube software will not access your system, this is simply an IE precaution.

Firefox, Safari, and Netscape by default, trust local content, and QuickMenu will run from your hard drive in these browsers.


To allow active content in IE you can....


     A: Temporarily enable the software by clicking the yellow security warning bar, and selecting 
        "Allow Blocked Content".


     B: Permanently enable active content locally...

           1: Select 'Tools' --> 'Internet Options' from the IE menu.
           2: Click the 'Advanced' tab.
           3: Check the 2nd option under 'Security' in the tree (Allow active content to run in files on my computer.)






---Menus and Flash Objects---



Overview-


	Flash objects are programmed to take up all of the available real estate in a page at
	the point where they are inserted. This means that dynamic content, such as all drop
	down menus will have their sub menus covered when they attempt to load over a Flash
	object. Unfortunately, due to the way that Flash renders in the individual browsers
	there is nothing that can be done with the menu code to resolve this problem. However,
	Flash does have parameters and embed codes that can be added to the Flash object to
	allow for dynamic content, such as menus to display on top of the Flash object.




The wmode Parameter-

	
	In order for your dynamic content to display over your Flash objects you will need to
	add the wmode parameter to your Flash object:

			<param name="wmode" value="transparent">

	You Flash object will likely have other parameters in use, and  you can simply add this
	one to the existing list. The last step is to add the wmode to your Flash object's embed
	tag. The embed tag is typically the last tag used for calling your Flash object. An example
	tag is located below:

	
			<embed src="movies/ten_1.swf" quality="high" etc... etc... etc...>

	
	You will want to add the wmode tag as shown below:


			<embed src="movies/ten_1.swf" wmode="transparent" quality="high" etc...>


	With the wmode added as both a parameter and part of the embed tag, your menus will function
	over the Flash objects as intended.



Caveats-


	Recently, a lot of Flash files have been programmed to be called in via JavaScript rather
	than through traditional object tags. This has been done to address the 'Click to Activate'
	patch which has been enabled in Internet Explorer due to the lost lawsuit with Eolas and
	the delivery of active content. With this patch, all Flash and Java objects must first be
	clicked prior to running inside of the browser. To circumvent this, a number of Flash
	applications are now calling the objects through JavaScript. These scripts vary greatly
	in the methods used to delivery the Flash content. To correct issues with Flash objects that
	that have been inserted into your page via JavaScript, you will need to contact the author
	of the object to determine the best way to add additional parameters to the inserted object.

	When JavaScript is used to call the Flash object a copy of the Flash code will be inserted
	inside of the page nested in <noscript> tags. These are in place in case a user has JavaScript
	disabled. Please be advised that adding the param tags to anything within the noscript tags will
	have no bearing when a browser has JavaScript enabled. As stated previously, the wmode will need
	to be added to the JavaScript in order for the menus to cascade over the object.



Known Bugs-


	The wmode setting will produce unpredictable results when used in the Safari browser. Unfortunately,
	due to a number of problems with Flash in this particular browser there are no workarounds available
	to fully resolve the issue. This problem is present on the Adobe homepage (www.adobe.com) who are
	currently the owners of Flash. They use a JavaScript detect to replace the Flash object with a static
	image when Safari 1 is detected. In Safari 2, the menus will cascade over the Flash content, however
	typically only the current selected menu item will be visible, and the rest of the menu content will 
	flicker when the mouse is moved. At present, replacing the Flash object with an image using a 
	JavaScript detect for the Safari browser is currently the only way to work around this issue.


Links-


http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=tn_14201