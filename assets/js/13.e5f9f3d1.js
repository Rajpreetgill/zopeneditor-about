(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{172:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"exploring-the-sample-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-sample-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Exploring the sample files")]),e._v(" "),a("h2",{attrs:{id:"get-the-sample-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-sample-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Get the sample files")]),e._v(" "),a("p",[e._v("For this tutorial we provide a set of sample files that you can use to explore the editor features. These samples are provided on Github. Assuming that you have Git installed as described in the Prerequisites, create a work directory somewhere on your machine and clone the sample repository:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/IBM/wazi-tutorial.git\n")])])]),a("p",[e._v("Then open the directory "),a("code",[e._v("wazi-tutorial")]),e._v(" using the "),a("code",[e._v("File > Open...")]),e._v(" menu. The sample files in this directory will be referred to throughout the rest of the documentation.")]),e._v(" "),a("h2",{attrs:{id:"examine-the-sample-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examine-the-sample-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Examine the sample files")]),e._v(" "),a("p",[e._v("The sample application consists of the following files:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("COBOL programs: "),a("code",[e._v("SAM1")]),e._v(" and "),a("code",[e._v("SAM2")])]),e._v(" "),a("p",[a("code",[e._v("SAM1")]),e._v(" reads in both the "),a("code",[e._v("CUSTFILE")]),e._v(" and "),a("code",[e._v("TRANFILE")]),e._v(" data files, then performs different actions on the "),a("code",[e._v("CUSTFILE")]),e._v(" based on transactions from "),a("code",[e._v("TRANFILE")]),e._v(". Valid transactions are "),a("code",[e._v("ADD")]),e._v(", "),a("code",[e._v("UPDATE")]),e._v(", and "),a("code",[e._v("DELETE")]),e._v(". When an "),a("code",[e._v("UPDATE")]),e._v(" transaction is processed, "),a("code",[e._v("SAM1")]),e._v(" calls "),a("code",[e._v("SAM2")]),e._v(" to perform the requested update.")]),e._v(" "),a("p",[a("code",[e._v("SAM2")]),e._v(" includes some base code in place for "),a("code",[e._v("CRUNCH")]),e._v(" transactions, which can be enhanced later in the following exercise. At the end of processing the "),a("code",[e._v("TRANFILE")]),e._v(", "),a("code",[e._v("SAM1")]),e._v(" generates a report on the transactions processed and produces an updated "),a("code",[e._v("CUSTFILE")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("COPYBOOKS: "),a("code",[e._v("CUSTCOPY")]),e._v(" and "),a("code",[e._v("TRANREC")])])]),e._v(" "),a("li",[a("p",[e._v("PL/I programs: "),a("code",[e._v("PSAM1")]),e._v(" and "),a("code",[e._v("PSAM2")])]),e._v(" "),a("p",[a("code",[e._v("PSAM1")]),e._v(" reads in both the "),a("code",[e._v("PLI.CUSTFILE")]),e._v(" and "),a("code",[e._v("PLI.TRANFILE")]),e._v(" data files, then produces a report with customer information and a Totals summary section. Valid transactions are "),a("code",[e._v("PRINT")]),e._v(" and "),a("code",[e._v("TOTALS")]),e._v(". A "),a("code",[e._v("PRINT")]),e._v(" transaction prints the Customer records to the Customer section of the report. When "),a("code",[e._v("PSAM1")]),e._v(" reads in a "),a("code",[e._v("TOTALS")]),e._v(" transaction, it generates the Totals Report section. The instructions provided later in this document guide you through making the necessary code changes to allow "),a("code",[e._v("PSAM1")]),e._v(" to process a new type of Customer record called a Product record and generate a new line for Service Calls in the Totals Report section.")])]),e._v(" "),a("li",[a("p",[e._v("INCLUDES: "),a("code",[e._v("BALSTATS")]),e._v(" and "),a("code",[e._v("CUSTPLI")])])]),e._v(" "),a("li",[a("p",[e._v("JCL members that set up and run the application: "),a("code",[e._v("ALLOCATE")]),e._v(", "),a("code",[e._v("RUN")]),e._v(", "),a("code",[e._v("PLIALLOC")]),e._v(", and "),a("code",[e._v("RUNPSAM1")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Data source files: "),a("code",[e._v("CUSTFILE")]),e._v(", "),a("code",[e._v("TRANFILE")]),e._v(", "),a("code",[e._v("PLI.TRANFILE")]),e._v(", and "),a("code",[e._v("PLI.CUSTFILE")])])])])])}],!1,null,null,null);t.default=s.exports}}]);