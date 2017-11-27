parser grammar SPLParser;

options { tokenVocab=SPLLexer; }

splg 
	: 	define+ EOF
	;

define 	
	: 	namespace | table
	;
	
//----NameSpace	
namespace
	:	namespace_def ns_type_def?
		(bundle_type)?
		(begins_with)?
		(ns_ctx)?
		(ends_with)?
        (file_pattern)?
		SEMICOLON
	;

namespace_def
	:	DEFINE NAMESPACE ns_name DESCRIPTION QUOTED_LABEL
	;

ns_name
	: (IDENT | IDENT_DOT)
	;

ns_type_def
	: (TYPE NS_TYPES)? (REF ns_ref_name)? LOCK? SOLR? XML? JSON?
    ;

ns_ref_name
	: (IDENT | IDENT_DOT)
	;

bundle_type : BUNDLETYPE QUOTED_LABEL;

ns_ctx
	: CONTEXT REGEX AS IDENT (COMMA IDENT)*
	;


begins_with
	: BEGINS WITH REGEX
	;

ends_with
	: ENDS WITH REGEX
	;

file_pattern
	: FILEPATTERN REGEX
	;


table
	:	table_def 
		icon_def 
		set_xml_ns?
		multiline?
		skip_n?
		(column_def)+
		add_context 
		col_op_def* 
		constrain? 
		SEMICOLON 	
	;

table_def	
	:	DEFINE TABLE IDENT NAMESPACE ns_name
	;

icon_def
	:  	ICON ( list_basic_icon_def | nvpair_icon_def | aligned_basic_icon_def | xml_icon_def)
	;

list_basic_icon_def : LIST_BASIC LINEGRAB REGEX;

nvpair_icon_def : NV_PAIR REGEX REGEX;

aligned_basic_icon_def : ALIGNED_BASIC QUOTED_LABEL COMMA QUOTED_LABEL COMMA QUOTED_LABEL;

xml_icon_def : XML_BASIC REGEX;

multiline
	: MULTILINE (NOT)? REGEX QUOTED_LABEL
	;

skip_n : SKIP_N INT;

set_xml_ns
	: SETXMLNAMESPACE REGEX
	;

add_context
	: 	ADD_CONTEXT OPENPARENTHESIS  IDENT (COMMA (IDENT))* CLOSEPARENTHESIS
	;
constrain
	: 	CONSTRAIN OPENPARENTHESIS  (IDENT (COMMA (IDENT))*)? CLOSEPARENTHESIS
	;
	
//------Column Def
column_def
	:	COLUMN IDENT 
		(obj_ref)? 
		data_type 
		label_def? 
		(as_def)?
		(alignment)?
		(with_name_def)?
		(solr_mapping)?
	;

obj_ref 	
	: 	OPENPARENTHESIS IDENT_DOT CLOSEPARENTHESIS 
	;
data_type
	:	OPENSQUARE DT OPENPARENTHESIS INT CLOSEPARENTHESIS COLON NULL_DEF (COLON QUOTED_LABEL)? CLOSESQUARE
	;
	
label_def
	:	LT attrib_def ( COMMA attrib_def )* GT
	;
attrib_def
	:	colmeta_attrib_name colmeta_attrib_value
	;
colmeta_attrib_name
	: (COLMETA_LABEL | COLMETA_SYSID1 | COLMETA_SYSID2 | COLMETA_SYSID3 | COLMETA_SESSID1 |
		COLMETA_SESSID2 | COLMETA_SESSID3 | COLMETA_SESS_NAME | COLMETA_SESS_ATTR |	COLMETA_SESS_COUNT |
		COLMETA_FILENAME | COLMETA_CONTENT | COLMETA_FRAGMENT_ID |	COLMETA_OBSURL | COLMETA_OBSSIZE |
		COLMETA_UPLOADEDBY | COLMETA_FACET | COLMETA_SEVERITY | COLMETA_UNITS | COLMETA_BEGIN_OFFSET |
		COLMETA_NAMESPACE | COLMETA_TYPE | COLMETA_TS | COLMETA_LINKED |)
	;
colmeta_attrib_value
	: (QUOTED_LABEL|IDENT|INT);

as_def
	: AS (INT | QUOTED_LABEL)
	;

with_name_def : WITH_NAME QUOTED_LABEL;
	
solr_mapping
	:	WITH SOLRMAPPING OPENPARENTHESIS solr_mapping_def ( COMMA solr_mapping_def )* CLOSEPARENTHESIS
	;

solr_mapping_def
	:	solr_mapping_attr_name solr_mapping_attr_value
	;

solr_mapping_attr_name
	: (SOLRMAPPING_NAME | SOLRMAPPING_DATATYPE | SOLRMAPPING_UNIQFLDEF | SOLRMAPPING_MULTIVALUED |
		SOLRMAPPING_OMITNORMS | SOLRMAPPING_STORETV | SOLRMAPPING_STORETP | SOLRMAPPING_STORETO)
	;

solr_mapping_attr_value
	: (QUOTED_LABEL|IDENT|INT)
	;

alignment: ALIGNED_BASIC_L | ALIGNED_BASIC_R | ALIGNED_BASIC_C;

generic_colop_def
	: IDENT OPENPARENTHESIS IDENT (COMMA (QUOTED_LABEL|IDENT))+ CLOSEPARENTHESIS
	;

col_op_def	
	: 	colcopy|colcount|coljoin|colcalc|colsplit|colrep|colfill|colmap|coldrop|colcase
	;

colcopy : COLCOPY OPENPARENTHESIS colcopy_param CLOSEPARENTHESIS;
colcopy_param : (QUOTED_LABEL|IDENT) COMMA IDENT;


coljoin : COLJOIN OPENPARENTHESIS coljoin_param CLOSEPARENTHESIS;
coljoin_param : IDENT (COMMA (QUOTED_LABEL|IDENT))+ ;

colsplit : COLSPLIT OPENPARENTHESIS colsplit_param CLOSEPARENTHESIS;
colsplit_param : IDENT COMMA REGEX (COMMA (IDENT))+;
	

colrep : COLREP OPENPARENTHESIS colrep_param CLOSEPARENTHESIS;
colrep_param : REGEX COMMA QUOTED_LABEL COMMA IDENT ;

colfill : COLFILL OPENPARENTHESIS colfill_param CLOSEPARENTHESIS;
colfill_param : IDENT ;

colmap : COLMAP OPENPARENTHESIS colmap_param CLOSEPARENTHESIS;
colmap_param : IDENT COMMA IDENT COMMA REGEX (COMMA (QUOTED_LABEL|IDENT))+;


colcalc: COLCALC OPENPARENTHESIS colcalc_param CLOSEPARENTHESIS;
colcalc_param : IDENT COMMA FUNCTION (COMMA (QUOTED_LABEL|IDENT))+;

//COLCOUNT(src, /PATTERN/, dest)
colcount: COLCOUNT OPENPARENTHESIS colcount_param CLOSEPARENTHESIS;
colcount_param : IDENT COMMA REGEX COMMA IDENT;

//COLDROP(col)
coldrop:  COLDROP OPENPARENTHESIS coldrop_param CLOSEPARENTHESIS;
coldrop_param : IDENT ;

//COLWHEN(st_temp,/<regex to check>/)
colwhen: COLWHEN OPENPARENTHESIS colwhen_param CLOSEPARENTHESIS;
colwhen_param : IDENT COMMA REGEX;

colcase: COLCASE colcase_when COLELSE colcase_else COLEND;
colcase_when : (colcase_when_nested)+;
colcase_when_nested : colwhen col_op_def+;
colcase_else : col_op_def*;


