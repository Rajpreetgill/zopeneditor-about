(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{273:function(e,t,a){"use strict";a.r(t);var o=a(28),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"running-ibm-z®-open-editor-in-the-browser-with-eclipse-theia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-ibm-z®-open-editor-in-the-browser-with-eclipse-theia"}},[e._v("#")]),e._v(" Running IBM Z® Open Editor in the browser with Eclipse Theia")]),e._v(" "),a("blockquote",[a("p",[e._v("by Peter Haumer."),a("br"),e._v("\nLast updated: 4 December 2019")])]),e._v(" "),a("p",[e._v("VS Code has become so popular that there are other editors out there now that provide a compatibility API to also consume VS Code extensions. One of the most popular ones is the web-based "),a("a",{attrs:{href:"https://theia-ide.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse Theia"),a("OutboundLink")],1),e._v(". Theia is also the default editor for the container-based "),a("a",{attrs:{href:"https://www.eclipse.org/che/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse Che"),a("OutboundLink")],1),e._v(" platform as well. Hence, we develop IBM Z Open Editor not only for VS Code, but also Theia, which opens our editor up for an even larger community than VS Code already provides. In fact, Z Open Editor has actually evolved out of a Theia extension that we introduced in 2018.\nFor more details, see the "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=0XbfLBIoL0E",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overview"),a("OutboundLink")],1),e._v(" or a "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=pOulh-9OzT8",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo showing both user experiences"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"api-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-compatibility"}},[e._v("#")]),e._v(" API compatibility")]),e._v(" "),a("p",[e._v("Theia strives for full compatibility of the VS Code APIs. As Theia and VS Code evolve, the Theia team is keeping track of the status of the VS Code API implementation in Theia "),a("a",{attrs:{href:"https://che-incubator.github.io/vscode-theia-comparator/status.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". If new issues are found, the team accepts issue reports "),a("a",{attrs:{href:"https://github.com/eclipse-theia/theia/labels/vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" using the tag vscode.")]),e._v(" "),a("h2",{attrs:{id:"building-theia-and-running-ibm-z-open-editor-in-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-theia-and-running-ibm-z-open-editor-in-it"}},[e._v("#")]),e._v(" Building Theia and running IBM Z Open Editor in it")]),e._v(" "),a("p",[e._v("In this article, we will show you three different ways of building Theia and running it with IBM Z Open Editor and optionally Zowe Explorer that gives you access to z/OS® resources:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#alternative-1-load-it-from-npmjs-org"}},[e._v("Load it from npmjs.org")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#alternative-2-load-a-docker-container"}},[e._v("Load a Docker container")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#alternative-3-build-theia-from-source"}},[e._v("Build Theia from source")])])]),e._v(" "),a("p",[e._v("To run IBM Z Open Editor and optionally Zowe Explorer with Theia, you must first download the vsix file(s) of "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Z Open Editor VS Code extension"),a("OutboundLink")],1),e._v(" and optionally "),a("a",{attrs:{href:"(https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe)"}},[e._v("Zowe Explorer VS Code extension")]),e._v(' from the VS Code Marketplace using the "Download Extension" link on the right.')]),e._v(" "),a("h3",{attrs:{id:"alternative-1-load-it-from-npmjs-org"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-1-load-it-from-npmjs-org"}},[e._v("#")]),e._v(" Alternative 1: Load it from npmjs.org")]),e._v(" "),a("p",[e._v("If you want to try out the user experience for editing COBOL or PL/I code in a browser, you can build a Theia editor instance with our extension on your development machine easily and then run the Theia web server from the command line window. The main prerequisite is to have "),a("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js V10"),a("OutboundLink")],1),e._v(" (not newer) and "),a("a",{attrs:{href:"https://yarnpkg.com/lang/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn"),a("OutboundLink")],1),e._v(" installed on your development machine. It can run on Linux, Windows, or macOS.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Follow the "),a("a",{attrs:{href:"https://theia-ide.org/docs/composing_applications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions here"),a("OutboundLink")],1),e._v(" to build a Theia instance using Node and Yarn with the two modifications described below.")])]),e._v(" "),a("li",[a("p",[e._v("After pasting the contents for the "),a("code",[e._v("package.json")]),e._v(" file, add the following additional entries into the "),a("code",[e._v("dependencies")]),e._v(" object:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@theia/plugin-dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"next"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"@theia/plugin-ext-vscode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"next"')]),e._v("\n")])])]),a("p",[e._v("As the name indicates, these commands will add VS Code Extension compatibility.")])]),e._v(" "),a("li",[a("p",[e._v("Then, use the plain "),a("code",[e._v("yarn")]),e._v(" command to build everything.")])]),e._v(" "),a("li",[a("p",[e._v("Create a folder called "),a("code",[e._v("plugins")]),e._v(" in the directory where you built Theia, and drop the downloaded vsix file(s) into that folder.")])]),e._v(" "),a("li",[a("p",[e._v("Start Theia with this augmented command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" theia start --plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("local-dir:./plugins\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Now open a web browser and navigate to "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("p",[e._v("Theia will now load and you can create a workspace directory on your local drive with COBOL or PL/I files with Z Open Editor language support. If you also downloaded the Zowe Explorer VS Code extension, you can see the stylized "),a("code",[e._v("Z")]),e._v(" icon on the left that you can click to see the Data Set, USS, and JES viewers.")]),e._v(" "),a("p",[e._v("Done. It is that easy.")]),e._v(" "),a("p",[e._v("If you are looking for code samples to try, clone our sample repository with the following command and open that folder by clicking "),a("code",[e._v("File > Open...")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/IBM/zopeneditor-sample.git\n")])])]),a("h3",{attrs:{id:"alternative-2-load-a-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-2-load-a-docker-container"}},[e._v("#")]),e._v(" Alternative 2: Load a Docker container")]),e._v(" "),a("p",[e._v("If you are a fan of Docker, you can get started even faster than the alternative above by using the Theia Docker images that are continuously published. "),a("a",{attrs:{href:"https://github.com/theia-ide/theia-apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("This page"),a("OutboundLink")],1),e._v(" provides a great overview to the available Docker images maintained by the Theia team.")]),e._v(" "),a("p",[e._v("As the default Theia Docker image does not include the VS Code extension, we recommend loading the "),a("code",[e._v("theia-full")]),e._v(" image.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Make sure you are not running any other Theia app anymore or change the mapped port in the command below. Assuming that you have Docker installed and running, execute this command to download the image and start a container:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -it --init -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3000")]),e._v(":3000 theiaide/theia-full:next --plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("local-dir:/home/theia/plugins\n")])])]),a("p",[a("strong",[e._v("Note")]),e._v(": When you start the container as above, the default workspace in which to store program files will be inside the Docker container. If you want to try Theia with your own local files, you can mount a local directory as the workspace instead. CD into the directory that contains your sample programs first, and then use these modified commands instead that will map the current directory as the "),a("code",[e._v("/home/project")]),e._v(" directory in the container.")]),e._v(" "),a("p",[a("strong",[e._v("Linux or macOS")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -it --init -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3000")]),e._v(":3000 -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(':/home/project:cached"')]),e._v(" theiaide/theia-full:next --plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("local-dir:/home/theia/plugins\n")])])]),a("p",[a("strong",[e._v("Windows")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -it --init -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3000")]),e._v(":3000 -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%:/home/project:cached"')]),e._v(" theiaide/theia-full:next --plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("local-dir:/home/theia/plugins\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Open a web browser and navigate to "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("The extensions of Z Open Editor and Zowe Explorer are currently not included yet. You need to update the Docker container by copying these extensions into the container. To install Z Open Editor, run the following command. Ensure to replace "),a("code",[e._v("${container-id}")]),e._v(" with the actual container ID and adjust for your OS. You might also need to change the name of the vsix file in the command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ~/Downloads/IBM.zopeneditor-0.4.1.vsix "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${container-id}")]),e._v(":/home/theia\n")])])]),a("p",[e._v("If you also want to install the Zowe Explorer vsix file, run the command above by replacing the vsix file name, for example, "),a("code",[e._v("Zowe.vscode-extension-for-zowe-0.29.0.vsix")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Then, log on to your container as root and move it in the right location:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -u "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -it "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${container-id}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# mkdir plugins")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# mv *.vsix plugins")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Restart the container and reload your browser.")])])]),e._v(" "),a("p",[e._v("You are now able to create COBOL and PL/I files and see the Zowe Explorer views. To install more extensions into the container, go back to the container root shell. For example, you can install Zowe CLI into the container now as well.")]),e._v(" "),a("h3",{attrs:{id:"alternative-3-build-theia-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-3-build-theia-from-source"}},[e._v("#")]),e._v(" Alternative 3: Build Theia from source")]),e._v(" "),a("p",[e._v("If you are interested in the Eclipse Theia project and want to try building it from source to explore it further, you can certainly do that and load Z Open Editor with it.")]),e._v(" "),a("p",[e._v("The Theia development team provides a very detailed document on how to set up your workspace. In particular, it lists all the dependencies required on your development machine, which differs quite a bit depending on the OS you are working on.")]),e._v(" "),a("p",[e._v("For more details, see the main Theia Developer Guide: "),a("a",{attrs:{href:"https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The main prerequisites are still Node V10 and Yarn. However, on a Windows PC, you need more dependencies such as the Windows Build Tools. The "),a("a",{attrs:{href:"https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#building-on-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("developer guide"),a("OutboundLink")],1),e._v(" proposes to install the Windows package manager Choco and then use it for the installation of most dependencies including Node and Yarn.")]),e._v(" "),a("p",[e._v("After the prerequisites are set up, the steps for building Theia are basically to clone the repository and run "),a("code",[e._v("yarn")]),e._v(" to build everything. If the build process aborts with errors, check for fixes in the  "),a("a",{attrs:{href:"https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#troubleshooting",target:"_blank",rel:"noopener noreferrer"}},[e._v("Troubleshoot sections of the Theia development guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Once everything is built, running Theia with Z Open Editor and Zowe Explorer requires these additional steps:")]),e._v(" "),a("ol",[a("li",[e._v("Create a folder called "),a("code",[e._v("plugins")]),e._v(" in the top-level Theia folder you cloned.")]),e._v(" "),a("li",[e._v("Copy the Z Open Editor and Zowe Explorer vsix files into that "),a("code",[e._v("plugins")]),e._v(" folder.")]),e._v(" "),a("li",[e._v("Run the command "),a("code",[e._v("cd examples/browser")]),e._v(".")]),e._v(" "),a("li",[e._v("Run the command "),a("code",[e._v("yarn start")]),e._v(".")]),e._v(" "),a("li",[e._v("Open a web browser and navigate to "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000"),a("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);