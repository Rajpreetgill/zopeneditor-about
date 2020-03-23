(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{263:function(e,t,o){"use strict";o.r(t);var i=o(28),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"known-issues-and-limitations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#known-issues-and-limitations"}},[e._v("#")]),e._v(" Known issues and limitations")]),e._v(" "),o("p",[e._v("The IBM Z® Open Editor extension has some known issues and limitations. This page provides the status of the current release. Also review the list of open issues and enhancement requests in our "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github repository"),o("OutboundLink")],1),e._v(". It might list issues that are not yet documented here.")]),e._v(" "),o("h2",{attrs:{id:"java™-sdk-required"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#java™-sdk-required"}},[e._v("#")]),e._v(" Java™ SDK required")]),e._v(" "),o("p",[e._v("The language servers provided with this extension require a valid Java SDK to start correctly. They will currently not work with a Java Client Runtime Environment. They require either a Server Runtime Environment or better a full SDK to function correctly.")]),e._v(" "),o("p",[e._v("If the right version of Java cannot be found in the current user's path or no "),o("code",[e._v("JAVA_HOME")]),e._v(" environment variable was defined, you might see error messages in the Output view of VS Code. Such errors could also be caused by other reasons such as not enough free memory for Java on your system.")]),e._v(" "),o("p",[e._v("Go through all the steps described in the "),o("a",{attrs:{href:"./getting_started"}},[e._v("Getting Started")]),e._v(" page for configuring Java to try out different options.")]),e._v(" "),o("h2",{attrs:{id:"no-conversions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-conversions"}},[e._v("#")]),e._v(" No Conversions")]),e._v(" "),o("p",[e._v("Currently the editor relies on third party tools such as "),o("RouterLink",{attrs:{to:"/Docs/zowe_interactwithzos.html#zowe-cli"}},[e._v("Zowe CLI")]),e._v(" for conversions of program files encoded in EBCDIC on z/OS to the format for editing. Only Codepages supported by VS Code natively can be used. The recommended format for all local files is "),o("code",[e._v("UTF-8")]),e._v(".")],1),e._v(" "),o("p",[e._v("If you are using git to manage your sources on your local client as well as z/OS USS we recommend managing a "),o("a",{attrs:{href:"https://git-scm.com/docs/gitattributes",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v(".gitattributes")]),e._v(" file"),o("OutboundLink")],1),e._v(" that will drive the conversion through Git. See "),o("a",{attrs:{href:"https://forum.rocketsoftware.com/t/important-notice-for-users-of-the-rocket-port-of-git-for-z-os/1102",target:"_blank",rel:"noopener noreferrer"}},[e._v("this post"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://aws1.discourse-cdn.com/standard17/uploads/rocketsoftware/original/1X/5e3e4f18f9cbaa3a13d9cdcafdcdc9b276900d1f.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("this document"),o("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),o("h2",{attrs:{id:"limitations-for-visual-studio-code-multi-root-workspaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-for-visual-studio-code-multi-root-workspaces"}},[e._v("#")]),e._v(" Limitations for Visual Studio Code Multi-Root Workspaces")]),e._v(" "),o("p",[e._v("IBM Z® Open Editor supports "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code multi-root workspaces"),o("OutboundLink")],1),e._v(", however you need to be aware that Property Groups defining path names for COBOL and PL/I resource dependencies are managed as so-called Window-level VS Code settings. This means that these Property Groups need to be defined for multi-root workspaces for the entire workspace. Project-level settings will be ignored. If you intent to use a project as part of a workspace as well as independent of the workspace then you need to have two copies of your Property Groups in each location. When you work in the workspace, the editor will look for Property Groups in the "),o("code",[e._v(".code-workspace")]),e._v(" file. When you work just in a project directory outside of a workspace it will look for Property Groups in the workspace "),o("code",[e._v(".vscode/settings.json")]),e._v(" file.")]),e._v(" "),o("p",[e._v("See more details about this limitation in "),o("RouterLink",{attrs:{to:"/Docs/setting_propertygroup.html#quick-tips-for-setting-ibm-z-open-editor-property-groups-local-files-only"}},[e._v("this section")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"language-specific-features-and-limitations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#language-specific-features-and-limitations"}},[e._v("#")]),e._v(" Language-specific features and limitations")]),e._v(" "),o("h3",{attrs:{id:"jcl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jcl"}},[e._v("#")]),e._v(" JCL")]),e._v(" "),o("p",[e._v("There is currently no language server for JCL. When you open JCL files, syntax highlighting is enabled, but no additional language server capabilities are available for these files. The observable limitations include:")]),e._v(" "),o("ul",[o("li",[e._v("No contents are shown in the Outline view.")]),e._v(" "),o("li",[o("code",[e._v("Ctrl+Space")]),e._v(" shows code templates, but no syntactical completions.")]),e._v(" "),o("li",[e._v("Many menu options are unavailable.")])]),e._v(" "),o("h3",{attrs:{id:"cobol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cobol"}},[e._v("#")]),e._v(" COBOL")]),e._v(" "),o("p",[e._v("The following lists show the implementation status of the COBOL language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.")]),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-cobol-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-cobol-program-files"}},[e._v("#")]),e._v(" Enabled features of COBOL program files")]),e._v(" "),o("ul",[o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Syntax errors")]),e._v(" "),o("li",[e._v("Document highlighting")]),e._v(" "),o("li",[e._v("Hover")]),e._v(" "),o("li",[e._v("Go to declaration")]),e._v(" "),o("li",[e._v("Find all references in file and across the multiple files")]),e._v(" "),o("li",[e._v("Peek references in file and across the multiple files")]),e._v(" "),o("li",[e._v("Rename symbol in file and across the multiple files")]),e._v(" "),o("li",[e._v("Outline view")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Snippets")]),e._v(" "),o("li",[e._v("Copybook resolving and copybook hover support")]),e._v(" "),o("li",[e._v("Document link support to open copybook using "),o("code",[e._v("ctrlcmd+click")])]),e._v(" "),o("li",[e._v("Embedded languages support such as SQL, CICS®, and DLI")])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-cobol-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-cobol-program-files"}},[e._v("#")]),e._v(" Limitations of COBOL program files")]),e._v(" "),o("p",[e._v("False unreachable code warnings: In some cases, the editor will report that code is unreachable incorrectly such as Embedded SQL. One such case is reported in "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/18",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),o("OutboundLink")],1),e._v(". The Embedded SQL statements here are not correctly processed and the "),o("code",[e._v("GO TO")]),e._v(" function inside "),o("code",[e._v("EXEC SQL WHENEVER")]),e._v(" is ignored, which  leads to the code targeted by the "),o("code",[e._v("GO TO")]),e._v(" function to be reported as unreachable if that was the only way for the code to be called.")]),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-cobol-copybook-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-cobol-copybook-files"}},[e._v("#")]),e._v(" Enabled features of COBOL copybook files")]),e._v(" "),o("ul",[o("li",[e._v("Find all references in file")]),e._v(" "),o("li",[e._v("Peek references in file")]),e._v(" "),o("li",[e._v("Rename symbol in file")]),e._v(" "),o("li",[e._v("Outline view")]),e._v(" "),o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Snippets")]),e._v(" "),o("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-cobol-copybook-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-cobol-copybook-files"}},[e._v("#")]),e._v(" Limitations of COBOL copybook files")]),e._v(" "),o("ul",[o("li",[e._v("No support for syntax errors")]),e._v(" "),o("li",[e._v("No support for Hover")]),e._v(" "),o("li",[e._v("No support for Go to declaration")]),e._v(" "),o("li",[e._v("No support for Find all references across the multiple files")]),e._v(" "),o("li",[e._v("No support for Peek references across the multiple files")]),e._v(" "),o("li",[e._v("No support for Rename symbol across the multiple files")])]),e._v(" "),o("h3",{attrs:{id:"pl-i"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pl-i"}},[e._v("#")]),e._v(" PL/I")]),e._v(" "),o("p",[e._v("The following lists show the implementation status of the PL/I language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.")]),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-pl-i-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-pl-i-program-files"}},[e._v("#")]),e._v(" Enabled features of PL/I program files")]),e._v(" "),o("ul",[o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Syntax errors")]),e._v(" "),o("li",[e._v("Document highlighting")]),e._v(" "),o("li",[e._v("Hover")]),e._v(" "),o("li",[e._v("Go to declaration")]),e._v(" "),o("li",[e._v("Find all references in file and across the multiple files")]),e._v(" "),o("li",[e._v("Peek references in file and across the multiple files")]),e._v(" "),o("li",[e._v("Rename symbol in file and across the multiple files")]),e._v(" "),o("li",[e._v("Outline view")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Include file resolving and include file hover support")]),e._v(" "),o("li",[e._v("Document link support to open include file using "),o("code",[e._v("ctrlcmd+click")])]),e._v(" "),o("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-pl-i-program-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-pl-i-program-files"}},[e._v("#")]),e._v(" Limitations of PL/I program files")]),e._v(" "),o("ul",[o("li",[e._v("No support for macros")])]),e._v(" "),o("h4",{attrs:{id:"enabled-features-of-pl-i-include-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-pl-i-include-files"}},[e._v("#")]),e._v(" Enabled features of PL/I include files")]),e._v(" "),o("ul",[o("li",[e._v("Syntax errors (lexing and parsing)")]),e._v(" "),o("li",[e._v("Find all references in file")]),e._v(" "),o("li",[e._v("Peek references in file")]),e._v(" "),o("li",[e._v("Rename symbol in file")]),e._v(" "),o("li",[e._v("Outline view")]),e._v(" "),o("li",[e._v("Syntax highlighting")]),e._v(" "),o("li",[e._v("Code completion")]),e._v(" "),o("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")])]),e._v(" "),o("h4",{attrs:{id:"limitations-of-pl-i-include-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-pl-i-include-files"}},[e._v("#")]),e._v(" Limitations of PL/I include files")]),e._v(" "),o("ul",[o("li",[e._v("No support for showing syntax errors for resolving variables")]),e._v(" "),o("li",[e._v("No support for Hover")]),e._v(" "),o("li",[e._v("No support for Go to declaration")]),e._v(" "),o("li",[e._v("No support for Find all references across the multiple files")]),e._v(" "),o("li",[e._v("No support for Peek references across the multiple files")]),e._v(" "),o("li",[e._v("No support for Rename symbol across the multiple files")])]),e._v(" "),o("h2",{attrs:{id:"reporting-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reporting-issues"}},[e._v("#")]),e._v(" Reporting issues")]),e._v(" "),o("p",[e._v("If you want to provide feedback or report an issue, open an issue in the "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repository"),o("OutboundLink")],1),e._v(". Any report and feedback is appreciated.")])])}),[],!1,null,null,null);t.default=r.exports}}]);