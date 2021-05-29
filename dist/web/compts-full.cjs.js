(function(window){



/**
 * Check if HTML is rendered completed
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * control(function(){})
 * // => null
 */
function control (func) {

    return documentReady(func);

}

window.control=control;




/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object|String} element The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function dom (element) {

    return domCoreAssign.doc(element);

}

window.dom=dom;




function element () {

}

window.element=element;

/**
 * Check if document is ready
 * @since 1.0.1
 * @category Seq
 * @param {Object} func The first number in an addition.
 * @example  documentReady(function(){})
 * @returns {Array|Object} Returns the total.
 * null
 */
function documentReady (func) {
var root = window;
var dom_rdy_ctt=0;

    if (dom_rdy_ctt===0) {

        if (root.attachEvent) {

            // DOMContentLoaded
            root.attachEvent("onload", dom_load_ready);
            root.attachEvent("onreadystatechange", dom_load_ready);

        } else if (root.addEventListener) {

            root.addEventListener("load", dom_load_ready, false);

        }

    }
var fails=false;
var dom_load_ready =function () {

        if (document.readyState==="complete" && fails === false) {

            func();
            dom_rdy_ctt+=1;
            fails=true;

        }

    }
var set_intr=null;

    set_intr=setInterval(function () {

        if (document.readyState==="complete" && fails === false) {

            dom_rdy_ctt+=1;
            fails=true;
            clearInterval(set_intr);
            func();

        }

    }, 100);

    return null;
}
var domCoreAssign=(function () {
var doc_set=function (idss) {
var domm=[];
var ps_ext=new PsExtender();

        try {

            if (_stk.getTypeof(idss)==="object") {

                domm.push(idss);

            } else if (_stk.getTypeof(idss)==="array") {

                _stk.each(idss, function (key, val) {

                    if (_stk.getTypeof(val)==="object") {

                        domm.push(val);

                    } else if (_stk.getTypeof(val)==="string") {

                        ps_ext.dom.init(val, domm);

                    }

                });

            } else {
var doc_loop=idss.toString().split(",");

                for (
var tKey in doc_loop) {

                    if (_stk.has(doc_loop[tKey])) {

                        ps_ext.dom.init(doc_loop[tKey], domm);

                    }


                }

            }

        } catch (error) {

            console.log(error, ":error");

        }

        return ps_ext.extend.obj_extnd(domm);


    };
var doc_set_docall=function (idss) {
var domm=[];
var ps_ext=new PsExtender();

        try {

            if (_stk.getTypeof(idss)==="object") {

                domm.push(idss);

            } else if (_stk.getTypeof(idss)==="array") {

                _stk.each(idss, function (key, val) {

                    if (_stk.getTypeof(val)==="object") {

                        domm.push(val);

                    } else if (_stk.getTypeof(val)==="string") {

                        ps_ext.dom.init(val, domm);

                    }

                });

            } else {
var doc_loop=idss.toString().split(",");

                if (doc_loop.length===0) {

                    domm.push(document.body.querySelectorAll(idss));

                } else {

                    for (
var itnd in doc_loop) {

                        if (_stk.has(doc_loop[itnd])) {

                            domm.push(document.body.querySelectorAll(doc_loop[itnd]));

                        }


                    }

                }

            }

        } catch (error) {

            console.log(error, ":e1");

        }

        return ps_ext.extend.obj_extnd(_stk.first(domm));


    };


    return {

        "doc" (id) {

            return doc_set(id);

        },
        "docall" (id) {

            return doc_set_docall(id);

        }


    };

}());








function PsExtender () { }
PsExtender.prototype.extend={
    "class_extnd" : function(clas, id) {

        for (
var key in clas) {

            id[key] = clas[key];

        }

        return id;

    },

    "obj_extnd" : function(id) {
var ps_ob=new ElementTrigger(id);

        return ps_ob;

    }

};

PsExtender.prototype.dom={

    "html": {
        "hasClass" : function(s, klass) {
var r = new RegExp("(?:^| )(" + klass + ")(?: |$)"),
                m = (""+s).match(r);


            return m ? m[1] : null;

        },
        "tag_value" : function(tar, ar) {
var tar_sub=tar.split("=>");

            _stk.each(tar_sub, function (eck, ecv) {

                findElement(ecv, ar, eck>0);

            });


        }


    },

    "init" : function(s, ar) {
var ar_s=[];
var chd_dom=s.toString().match(/^[#.\w]{0,1}/g);

        if (chd_dom===null) {

            return document;

        }

        this.html.tag_value(s, ar_s);

        return assignElementDistinction(ar_s, s, ar);

    }
};







/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} bools The first number in an addition.
* @param {string} glb The first number in an addition.
 * @param {Object} assn The second number in an addition.
 * @param {Object} key The second number in an addition.
 * @param {number} valu The second number in an addition.
 * @returns null
 * @example
 *
 * assignElementDistinction("first",element,1)
 * // => {'as':2}
 */
function glgFuncAssign (bools, glb, key, valu) {
 
    if (_stk.getTypeof(bools)=="array") {

        glb.push(valu[key]);

    } else {

        glb[key]=valu;

    }

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} dom The first number in an addition.
 * @param {Object} assn The second number in an addition.
 * @param {number} bools The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * assignElementDistinction("first",element,1)
 * // => {'as':2}
 */
function assignElementDistinction (dom, assn, bools) {
var assn_splt=_stk.ifUndefined(assn, "").split("::");
var glb=bools;
 
     if (assn_splt.length==1) {
 
         for (
var td in dom) {
 
            glgFuncAssign(bools, glb, td, dom);
 
         }
 
         return bools;
 
     } else if (assn_splt.length==2) {
var spl2=assn_splt[1];
var fltr=[
             "first",
             "haschild",
             "hasChildNodes",
             "last",
             "even",
             "odd"
         ];
var cnt=0;
 
         for (
var td1 in dom) {
 
             if (dom.length>cnt) {
 
                 if (_stk.indexOf(fltr, spl2)>=0) {
 
                     if (parentchild(spl2, dom, td1)) {
 
                        glgFuncAssign(bools, glb, td1, dom);
 
                     }
 
                 }
 
             }
             var type_pos="";
             var index_pos="";
 
             if ((/([\w\-\_]{1,})(\(\d\))/g).test(spl2)) {
var replc=spl2.replace(/([\w\-\_]{1,})\((\d)\)/g, function (g, g1, g2) {
 
                     type_pos=g1;
                     index_pos=g2;
 
                 });
 
 
                 if (type_pos=="eq") {
 
                     glb[index_pos]=dom;
                     glgFuncAssign(bools, glb, index_pos, dom);
 
                 }
                 if (type_pos=="noteq") {
 
                     if (td1!=index_pos) {
 
                        glgFuncAssign(bools, glb, td1, dom);
 
                     }
 
                 }
 
             }
 
             cnt++;
 
         }
 
         return glb;
 
     }
 
 
     return {};
 
 }



 


/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} tar_m_sub The first number in an addition.
 * @param {Object} ar The second number in an addition.
 * @param {Object} bool The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function findElement (tar_m_sub, ar, bool) {
var tar_m_split=tar_m_sub.split("=>");
var tar_m=(tar_m_split.length==0?tar_m_sub:tar_m_split[0]).trim();

    if (bool) {

        var node=_stk.clone(ar);


	   ar.splice(0, ar.length);

    } else {

        var node=[];

        node.push(document);

    }
var tar=tar_m.split(",");

    for (
var ni in node) {

	   for (
var ti in tar_m) {

       if ((/\[/g).test(tar[ti])) {

                var fl_m="";
                var fl_type="where";
                var fl_va=[];
                var fl_va_cntnt={};
                var fl_va_cntnt_all=[];
                var fl_va_attr_all=[];
var replc_str=tar[ti].replace(/([a-zA-Z\-\_]{0,}|\*)\[([\w\s\d\=\_\-\[\]\'\"\;\:]{1,})\]/gm, function (m, m1, m2, m3) {
var m2_split_count=m2.split(";");

               _stk.each(m2_split_count, function (sck, scv) {
var m2_split_cnt=scv.split("=");

                        if (_stk.count(m2_split_cnt)==1) {

                       fl_va_attr_all.push(m2_split_cnt[0].trim());

                   }
                        if (_stk.count(m2_split_cnt)>=2) {

                       fl_va.push(m2_split_cnt[0].trim());
                       if (_stk.has(m2_split_cnt[1].trim())) {

                                fl_va_cntnt[m2_split_cnt[0].trim()]=m2_split_cnt[1].trim().replace(/[\'\"]{0,}/g, "");

                            } else {

                                fl_va_cntnt_all.push(m2_split_cnt[1].trim());

                            }

                   }

                    });
               fl_type="where";

               fl_m=m1;

               return "asd";

           });
var fl_m_tot=fl_m;


                if (_stk.has(node[ni].getElementsByTagName(fl_m_tot))) {
var node_elem=node[ni].getElementsByTagName(fl_m_tot);

               for (var i=0, j=node_elem.length; i<j; i++) {

                        if (fl_type=="where") {

                       if (_stk.count(fl_va_cntnt)>0 || _stk.count(fl_va_cntnt_all)>0 || _stk.count(fl_va_attr_all)>0) {

                                var get_attr=getDomAttr(node_elem[i], fl_va);

                                if (_stk.count(fl_va_cntnt_all)>0) {
var get_attr_key=_stk.getKey(get_attr);

                               if (_stk.count(get_attr_key)==_stk.count(fl_va_cntnt_all) && _stk.count(_stk.where(get_attr, fl_va_cntnt))>0) {

                                        ar.push(node_elem[i]);

                                    }

                           } else {

                               if (_stk.count(_stk.where(get_attr, fl_va_cntnt))>0) {

                                        ar.push(node_elem[i]);

                                    }

                           }
                                if (_stk.count(fl_va_attr_all)>0) {

                               for (
var kl in fl_va_attr_all) {

                                        var get_attr=getDomAttr(node_elem[i], fl_va_attr_all[kl]);

                                        if (_stk.has(get_attr, fl_va_attr_all[kl])) {

                                       ar.push(node_elem[i]);

                                   }

                                    }

                           }

                            }


                   }
                        if (fl_type=="all") {

                       ar.push(node_elem[i]);

                   }

                    }

           }

            } else if ((/#/g).test(tar[ti])) {
var replce_dom=tar[ti].toString().replace(/^[#]/g, "");
var idd_m=document.getElementById(replce_dom);

           if (_stk.has(idd_m)) {

                    ar.push(idd_m);

                }

       } else if ((/([a-zA-Z\-\_]{0,}\.[a-zA-Z0-9_\-]{1,})/g).test(tar[ti])) {
var s_node =document;
var match_dom=tar[ti].toString().match(/([a-zA-Z\-\_]{0,}\.[a-zA-Z0-9_\-]{1,})/g, "");


                if (match_dom.length==0) {

               return false;

           }
var main_class = match_dom[0].split(".");


                if ((/\w/g).test(main_class[0])) {

               cls_name=main_class[1];
               cls_tag=main_class[0];

           } else {

               cls_name=main_class[1];
               cls_tag="*";

           }

                if (s_node.getElementsByTagName(cls_tag)!=null && s_node.getElementsByTagName(cls_tag)!=undefined) {

               var els = s_node.getElementsByTagName(cls_tag);

               for (var i=0, j=els.length; i<j; i++) {
var class_name_string = els[i].className;

                        if (_stk.getTypeof(class_name_string) == "object") {

                            // SVG classs interpreter
                       if (_stk.has(class_name_string, "animVal")) {

                                class_name_string = class_name_string.animVal;

                            }

                   }
var r = new RegExp("(?:^| )(" + cls_name + ")(?: |$)"),
			 m = (""+class_name_string).match(r);
var var_return = !!m;

			  if (var_return) {

      ar.push(els[i]);

  }

                    }

           }

            } else {

                if (_stk.has(node[ni].getElementsByTagName(tar[ti]))) {

               var els = node[ni].getElementsByTagName(tar[ti]);

               for (
var i1=0, j1=els.length; i1<j1; i1++) {

                        ar.push(els[i1]);

                    }

           }

            }

   }

    }

    _stk.each(tar_m_split, function (cek, cev) {

        if (cek>0) {

            findElement(cev, ar, bool);

        }

    });

}
var elementConfig = {};

elementConfig.appendhtml=[
    [
        "after",
        "afterend"
    ],
    [
        "before",
        "beforebegin"
    ],
    [
        "prepend",
        "afterbegin"
    ],
    [
        "append",
        "beforeend"
    ]
];
elementConfig.styletype= [
    'width',
    'display',
    'height',
    'visible'
];
elementConfig.domview=[
    'val',
    'html',
    'text',
    'outerhtml'
];

elementConfig.child= [
    [
        "firstChild",
        "first"
    ],
    [
        "haschild",
        "haschild"
    ],
    [
        "hasChildNodes",
        "hasChildNodes"
    ],
    [
        "childNodes",
        "hasChildNodes"
    ],
    [
        "lastChild",
        "last"
    ],
    [
        "even",
        "even"
    ],
    [
        "odd",
        "odd"
    ]
];

elementConfig.styletype=[
    'width',
    'display',
    'height',
    'visible'
];

/**
 * Class for dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function ElementTrigger (value) {

    this.element=value;

    this.parent_child=null;

}

ElementTrigger.prototype.attr = attr;
ElementTrigger.prototype.css = css;
ElementTrigger.prototype.each = each;
ElementTrigger.prototype.show = show;
ElementTrigger.prototype.hide = hide;
ElementTrigger.prototype.getIndexAttr = getIndexAttr;
ElementTrigger.prototype.getDom = getDom;
ElementTrigger.prototype.getLength = getLength;
ElementTrigger.prototype.removeAttr = removeAttr;
ElementTrigger.prototype.tagName = tagName;
ElementTrigger.prototype.findElem = findElem;
ElementTrigger.prototype.getSelected = getSelected;
ElementTrigger.prototype.index = index;
ElementTrigger.prototype.getSelectedText = getSelectedCount;
ElementTrigger.prototype.getSelectedText = getSelectedText;
ElementTrigger.prototype.setSelected = setSelected;
ElementTrigger.prototype.toggleDisplay = toggleDisplay;
ElementTrigger.prototype.getParent = getParent;
ElementTrigger.prototype.getFormAttr = getFormAttr;
ElementTrigger.prototype.insertHtml = insertHtml;
ElementTrigger.prototype.isDomNull = isDomNull;
ElementTrigger.prototype.getChildPosition = getChildPosition;
ElementTrigger.prototype.domView = domView;

for (
var f2 in elementConfig.child) {

    if (_stk.has(elementConfig.child[f2])) {

        (function(m1, m2) {

            ElementTrigger.prototype[m1]=function(){
            this.parent_child="node::"+m2;
            return this;

        }

    })(elementConfig.child[f2][0],elementConfig.child[f2][1]);

    }

}

for (
var f3 in elementConfig.appendhtml) {

    if (_stk.has(elementConfig.appendhtml[f3])) {

        (function(m1,m2){

            ElementTrigger.prototype[m1]=function(html){

            this.insertHtml(m2,html);
            return this;
            }
        })(elementConfig.appendhtml[f3][0],elementConfig.appendhtml[f3][1]);

    }

}


for (
var f4 in elementConfig.styletype) {

    if (_stk.has(elementConfig.styletype[f4])) {

        (function(m){
        
            ElementTrigger.prototype["get"+m]=function(cnt){
            
            return this.css(m,cnt);
            }
            
        })(elementConfig.styletype[f4]);

    }

}

for (
var f5 in elementConfig.domview) {

    if (_stk.has(elementConfig.domview[f5])) {

        (function(m){
        
            ElementTrigger.prototype[m]=function(value){
            
            return this.domView(m,value);
            }
            
        })(elementConfig.domview[f5]);

    }

}



/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} child_prnt The first number in an addition.
 * @param {Object} de The second number in an addition.
 * @param {number} cnt The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * parentchild("first",element,1)
 * // => {'as':2}
 */
function parentchild (child_prnt, de, cnt) {

    if (child_prnt===null) {

        return true;

    } else if (child_prnt==="first") {

        if (parseInt(cnt)===0) {

            return true;

        }


    } else if (child_prnt==="last") {

        if (de.length-1===parseInt(cnt)) {

            return true;

        }

        return false;

    } else if (child_prnt==="haschild") {

        if (de[cnt].children.length>0) {

            return true;

        }


    } else if (child_prnt==="hasChildNodes") {

        if (de[cnt].hasChildNodes()) {

            return true;

        }


    } else if (child_prnt==="odd" || child_prnt==="even") {
var sel={
            "even": 0,
            "odd": 1
        };

        if (cnt%2===sel[child_prnt]) {

            return true;

        }


    } else if (child_prnt==="childNodes") {

        if (de.childNodes.length > 0) {

            return true;

        }

    }

    return false;

}





/**
 * Check if object or value
 *
 * @since 2.0.1
 * @category Seq
 * @param {string} meth The first number in an addition.
 * @param {Object} domValue The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * getDomAttr("first",element,1)
 * // => {'as':2}
 */
function getDomAttr (meth, domValue) {
var attr_type=_stk.getTypeof(domValue)==="array"
        ?domValue
        :[domValue];
var globl={};

    if (_stk.has(meth)) {

        if (_stk.has(meth.getAttributeNode)) {

            _stk.each(attr_type, function (ky, vl) {

                if (meth.getAttributeNode(vl)) {

                    globl[vl]=meth.getAttributeNode(vl).value;

                }

            });

        } else {

            _stk.each(attr_type, function (ky, vl) {

                if (meth.getAttribute) {

                    globl[vl]=meth.getAttribute(vl);

                }

            });

        }

    }

    return globl;

}








function attr (d,bol){
var core = new CoreElementInit(this);

    var cnt=0;
	var globl={},globl_all=[];
	var var_bol=bol||false;

	var is_where_attr = _stk.has(d);
	
	var	attr_type=((_stk.getTypeof(d)=="array")?d:[d]);

	var typeofs = _stk.getTypeof(d) == "json"?false:true;
	
	core.each(function(meth,td){

			if(is_where_attr){

				if(typeofs){
					var get_attr=getDomAttr(meth,attr_type);
					if( var_bol==true){
					
					if(_stk.count(get_attr)>0 ){
						globl[cnt]={};
						globl[cnt]=get_attr;		
								cnt++;
					}
						}else{
						globl[cnt]={};
						globl[cnt]=get_attr;		
								cnt++;

						}
				}else{
					for(var v in d){
						var crte_elem=document.createAttribute(v);	
							crte_elem.value = d[v];

					if(meth.setAttribute)
						meth.setAttribute(v,d[v]);	
					else
						meth.setAttributeNode(crte_elem);
					}
				}		
			}else{
				globl_all.push(getElementExistAttr(meth));
			}
		});	
			if( is_where_attr==true){
				return typeofs==false ? this : ((cnt==1 || cnt==0)?((attr_type.length==1)?((typeof(globl[0])==="undefined")?"undefined":globl[0][d]):globl[0]):globl);
			}
			else{
				return _stk.count(globl_all)==0?-1:(_stk.count(globl_all)==1)?globl_all[0]:globl_all;
			}	

}








function css (d,c){
var core = new CoreElementInit(this);

    var typeofs = _stk.getTypeof(d) == "json"?true:false;

	var cntt=((!_stk.has(c))?0:c-1);
	var val_g={};

	core.each(function(meth,td){
		if (typeofs){
            domCSS(meth,d);
        } else {

		    if(parseInt(td)<=cntt){

		        val_g[td]=domGetCSS(meth,d);

			}
		}
	});

	return typeofs ? this : ((cntt===0)?val_g[0]:val_g);

}





/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function each (func) {
var core = new CoreElementInit(this);

    core.each(func);

}





function getLength (func){
var core = new CoreElementInit(this);
var cnt_i=0;
	
	core.each(function(td,elemm){

	    cnt_i++;

	});

	return cnt_i;

}





/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getDom () {
var core = new CoreElementInit(this);
var id_dm=[];

    core.each(function (meth) {

        id_dm.push(meth);

    });

    return id_dm;

}







/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} attr The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getIndexAttr (attr) {
var core = new CoreElementInit(this);
var cnt=0;
var globl=[];

    if (_stk.getTypeof(attr)!=="json") {

        return -1;

    }
var getkey=_stk.getKey(attr);

    core.each(function (meth) {
var get_attr=getDomAttr(meth,getkey);
var where_count=_stk.where(get_attr,attr);

        if (_stk.count(where_count)>0) {

            globl.push(cnt);

        }

        cnt+=1;

    });

    return _stk.count(globl)===0
	    ?-1:
	    _stk.count(globl)===1
            ?globl[0]
            :globl;

}






/**
 * Show Element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").show()
 * // => null
 */
function show () {
var core = new CoreElementInit(this);

    core.each(function (meth) {

        domCSS(meth, {
            "display": ""
        });

    });

    return this;

}






/**
 * Hide Element in dom
 *
 * @since 2.0.1
 * @category DOM
 * @param {function} func The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").hide()
 * // => null
 */
function hide () {
var core = new CoreElementInit(this);

    core.each(function (meth) {

        domCSS(meth, {
            "display": "none"

        });

    });

    return this;

}






/**
 * Remove Dom attribute
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} value The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function removeAttr (value) {
var core = new CoreElementInit(this);
var attr_type = _stk.getTypeof(value) === "array"
        ?value
        :new Array(value);

    core.each(function (td, meth) {

        if (meth.removeAttribute) {

            _stk.each(attr_type, function (ky, vl) {

                meth.removeAttribute(vl);

            });

        }

    });

}






/**
 * Get tag name of element
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").tagName()
 * // => BODY
 */
function tagName () {
var core = new CoreElementInit(this);
var arry_pl=[];

    core.each(function (meth) {

        arry_pl.push(meth.tagName);

    });

    return _stk.count(arry_pl)=== 1 ?
        arry_pl[0]
        :arry_pl;

}






/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {String|ElementDom} elem The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").findElem("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function findElem (elem) {
var core = new CoreElementInit(this);

    findElement(elem, core.element, true);

    return this;

}






/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getSelected (bol) {
var core = new CoreElementInit(this);

    return domSelectOption(core, bol, "value");

}






/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getFormAttr("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getFormAttr () {
var core = new CoreElementInit(this);

    return formGetValues(core);

}






/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getSelectedCount (bol) {
var core = new CoreElementInit(this);

    return domSelectOption(core, bol, "count");

}






/**
 * Get not Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @param {boolean} bol The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getSelectedText (bol) {
var core = new CoreElementInit(this);

    return domSelectOption(core, bol, "text");

}





function setSelected (d,c){
var core = new CoreElementInit(this);
var opt;

	core.each(function(meth,td){
		opt=meth.options;
		
			for(var i=0;i<opt.length;i++){

					opt[i].selected=(opt[i].value==val);			
				
			}
        
	});

	return this;

}







/**
 * Toggle display show and hide
 *
 * @since 2.0.1
 * @category DOM
 * @param {String} display The second number in an addition.
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").toggleDisplay()
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function toggleDisplay (display) {
var d_var=display||"";
var core = new CoreElementInit(this);

    core.each(function (meth) {
var elem=meth.style.display||domGetCSS(meth, "display");

        domCSS(meth, {
            "display": elem==="none"
                ?d_var
                :"none"

        });

    });

    return this;

}






/**
 * Search Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getParent("div")
 * // => ElementTrigger{element: Array(1), parent_child: null}element: Array(1)0: div#idlength: 1__proto__: Array(0)parent_child: null__proto__: Object
 */
function getParent () {
var core = new CoreElementInit(this);
var arry_pl=[];

    core.each(function (meth) {

        arry_pl.push(meth.parentElement);

    });

    return _stk.count(arry_pl)===1
        ?arry_pl[0]
        :arry_pl;

}






/**
 * Append element using insertAdjacentHTML
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} com The second number in an addition.
 * @param {Object} htm The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").insertHtml()
 * // => 1
 */
function insertHtml (com, htm) {
var lst_adj={
        "after": "afterend",
        "afterbegin": "afterbegin",
        "afterend": "afterend",
        "append": "beforeend",
        "before": "beforebegin",
        "beforebegin": "beforebegin",
        "beforeend": "beforeend",
        "prepend": "afterbegin"
    };
var core = new CoreElementInit(this);

    core.each(function (meth) {

        try {

            if (_stk.has(lst_adj, com) && _stk.has(meth)) {

                meth.insertAdjacentHTML(lst_adj[com], htm);

            }

        } catch (exception) {

            console.log(exception);

        }

    });

    return this;

}






/**
 * Get the index of Element
 *
 * @since 2.0.1
 * @category DOM
 * @param {Object} doms The second number in an addition.
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").index()
 * // => 1
 */
function index (doms) {
var core = new CoreElementInit(this);
var arry_dm = [];

    core.each(function (elemm) {

        arry_dm.push(elemm);

    });


    return _stk.indexOf(arry_dm, doms);

}



 

/**
 * Is Dom null
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Object} Returns the total.
 * @example
 *
 * dom("div").isDomNull()
 * // => 1
 */
function isDomNull () {
var core = new CoreElementInit(this);
var bool=false;

    core.each(function (elemm) {

        if (elemm===null) {

            bool=true;

        }

    });

    return bool;

}



 


/**
 * Get Sub element
 *
 * @since 2.0.1
 * @category DOM
 * @returns {Class} Returns the total.
 * @example
 *
 * dom("body").getChildPosition()
 * // => 1
 */
function getChildPosition () {
var core = new CoreElementInit(this);
var incrementi = 1;
var node=_stk.has(core.element[0])===false
        ?core.element
        :core.element[0];

    while (node.previousSibling) {

        node = node.previousSibling;
        if (node.nodeType === 1) {

            incrementi+=1;

        }

    }

    return incrementi-1;

}







function domView (dom,htm){
var core = new CoreElementInit(this);

    
		var domee=this.getLength();
		var str=((domee)>1?[]:"");
		core.each(function(meth,td){
		var dom_type=_stk.indexOf(["checkbox","radio"],_stk.ifUndefined(meth.type,"-"))>-1?meth.checked:true;
			if(dom_type){
			if(domee>1){	
				str.push(domIOtype(dom,meth,htm));
			}else{
				str=domIOtype(dom,meth,htm)+"";
			}
			
			domIOtype(dom,meth,htm);
			}
			});
		if(_stk.has(htm)){	
			return this;
			}else{
				if(_stk.getTypeof(str)=="array")
				return _stk.count(str)==1?str[0]:str;	
				else
				return str;
			}

}





function CoreElementInit(dom){

    this.element = dom.element;
    this.parent_child= dom.parent_child;

}


CoreElementInit.prototype.each = function (func){
var cnt=0;
var ele_cnt=this.element;
var prnt_chld=this.parent_child;
var ass_elem=assignElementDistinction(this.element,prnt_chld,{});
	for (var td in ass_elem) {
	(function(func,d,m){
		if(ele_cnt.length>cnt){	
					
			func(m[d],d);
			
			}
		cnt++;
        })(func,td,this.element);

	}
}





function getDomAttr(meth,d){
	var	attr_type=((_stk.getTypeof(d)=="array")?d:[d]);
	var globl={};
    if(_stk.has(meth)){
        if(_stk.has(meth.getAttributeNode)){
        
            _stk.each(attr_type,function(ky,vl){
                
                if(meth.getAttributeNode(vl))
                globl[vl]=meth.getAttributeNode(vl).value;		
            });
            
        }else{
            
            _stk.each(attr_type,function(ky,vl){
                if(meth.getAttribute)
                globl[vl]=meth.getAttribute(vl);
            });
        }
	}
	return globl; 
}


function getElementExistAttr(res){
	var attr_elem={};
	for (var att, i = 0, atts = res.attributes, n = atts.length; i < n; i++){
		att = atts[i];
		
		attr_elem[att.nodeName]=att.nodeValue;
	}
	return attr_elem;
}





function domGetCSS(ele,prop){
		
		

	this.loopstyle=function(dom,style,intt){
		var golb={};
		var golb_st="";
	
		
				if (!window.getComputedStyle) {
				golb[style] = dom.currentStyle[style];
				golb_st= dom.currentStyle[style];
				} else {
			golb[style] = window.getComputedStyle(dom).getPropertyValue(style);
			golb_st= window.getComputedStyle(dom).getPropertyValue(style);
			}
			return golb_st;
		};
		
		
		if(_stk.getTypeof(prop)==="array"){
		var golb_ret={};
			for(var fn in prop){
			
		golb_ret[prop[fn]]=this.loopstyle(ele,prop[fn],"array");
			}
			
			}
		else if(_stk.getTypeof(prop)==="string"){
			golb_ret=this.loopstyle(ele,prop,"str");
		
				}
			 
			return golb_ret;
}





function domCSS(id,d){
	var elem_str_class="";
	var get_attr=(_stk.has(getDomAttr(id,['style']).style))?getDomAttr(id,['style']).style:"";
	var split_style=get_attr.toString().split(";");

		_stk.each(split_style,function(spk,spv){ 
			var elem_d=spv.split(":");
			if(_stk.count(elem_d)>0 && _stk.has(spv)){
				if(!_stk.has(d,elem_d[0]) && _stk.has(elem_d[1])){
			var ele_key=elem_d[0].replace(/\s/,"");
			var ele_val=elem_d[1].replace(/\s/,"");
			if(!_stk.has(d[ele_key]))
				d[ele_key]=ele_val;
		
				}
			}
		});		

		for(var v in d){
			
		elem_str_class+=(v+":"+d[v]+";");
	if(_stk.has(id)){	
	try{

	if(_stk.has(id.style.setAttribute)){ id.style.setAttribute(v,d[v]); }	

	}catch(e){ console.log(e); }
	}
	}
	if(_stk.has(id) ){
	try{

	if(_stk.has(id.setAttributeNode)){
	var creat_elem=document.createAttribute("style");
	creat_elem.value=elem_str_class;
	id.setAttributeNode(creat_elem);	
	}
	}catch(e){ console.log(e); }
		}
}





function domSelectOption(main,bol,type){
	var opt;
	var sel_opt='';
	var sel_opt_ar=[];
	var opt_cnt=0;
	var select_count=0;
	var booln=bol||false;
	main.each(function(td,meth){
		
	if( _stk.has(meth[td]) ){
		opt=meth[td].options;
		for(var i=0;i<opt.length;i++){
		
		if(opt[i].selected==true){
			if(/\b(value)\b/g.test(type)){
				sel_opt=opt[i].value;
				sel_opt_ar.push(opt[i].value);
			}
			if(/\b(text)\b/g.test(type)){
				sel_opt=opt[i].text;
				sel_opt_ar.push(opt[i].text);
			}
			if(/\b(count)\b/g.test(type)){
				select_count=i;
			}
			opt_cnt++;
		}
	}
	}
	});
	if(/(value|text)/g.test(type)){
	if(booln==false)
	return (opt_cnt>1)?sel_opt_ar:sel_opt;
	else return sel_opt_ar;
	}else{
	return select_count;
	}
}





function formGetValues( self ){
    var list_elem = ["input","select","textarea"];
	var ret_value = [];	
	self.each(function(html_form,td){
		for(var key in list_elem){
			if(list_elem[key] == "select"){
				dom(html_form).findElem(list_elem[key]).each(function(k,v){
					var get_attr = dom(k).attr();
					get_attr["value"]=dom(k).val();
					get_attr["type"]="select";
					ret_value =_stk.arrayConcat(ret_value,get_attr);
				});
			}else{
				
				ret_value =_stk.arrayConcat(ret_value,dom(html_form).findElem(list_elem[key]).attr());
			}
		}
	});
	return ret_value; 
}




function domIOtype(type,dom,htmll){

	var main_dom=null;
	
	if(/\b(val)\b/g.test(type)){ 
		var alt_val=this.get_attr(dom,"ps_alt_value");
		if(_stk.has(htmll)){  
			dom.value=htmll;
		}
		if(_stk.has(alt_val,"ps_alt_value") && dom.value.trim().length==0){
		return alt_val.ps_alt_value;
		}else{
		return dom.value;
		}
			 
			
	}
	if(/\b(html)\b/g.test(type)){
			if(_stk.has(htmll)){ 
				dom.innerHTML=htmll;
			} return dom.innerHTML;
				}
	if(/\b(text)\b/g.test(type)){
			if(_stk.has(htmll)){ 
				(!_stk.has(dom.innerText))?dom.textContent:dom.innerText=htmll;
			} return (!_stk.has(dom.innerText))?dom.textContent:dom.innerText;		
			
	}if(/\b(outerhtml)\b/g.test(type)){
		if(_stk.has(htmll)){ 
			dom.outerHTML=htmll;
		}
        return dom.outerHTML;					
	}		
}


})(window)
