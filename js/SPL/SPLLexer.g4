lexer grammar SPLLexer;

SEMICOLON: ';' ;
COLON : ':' ;
DIVIDE : '/' ; 
BACKSLASH : '\\' ;
OPENSQUARE : '[' ;
CLOSESQUARE : ']' ;
OPENPARENTHESIS : '(' ;
CLOSEPARENTHESIS : ')' ;
GT : '>' ;
LT : '<' ;
EQUAL : '=' ;
SINGLEQUOT : '\'' ;
DOT: '.';
COMMA: ',';

COMMENT : '#' ~[\r\n]* '\r'? '\n' -> skip ;
WS : [ \n\t\r\u000C]+ -> skip ;

DEFINE : 'DEFINE' ;
NAMESPACE : 'NAMESPACE' ;
REF: 'REF';
DESCRIPTION : 'DESCRIPTION' ;
BEGINS : 'BEGINS' ;
ENDS : 'ENDS' ;
WITH : 'WITH' ;
BUNDLETYPE: 'BUNDLETYPE';
TABLE : 'TABLE' ;
LINEGRAB : 'LINEGRAB' ;
COLUMN : 'COLUMN' ;
AS : 'AS' ;
WITH_NAME : 'WITH NAME';
TYPE  : 'TYPE' ;
FILEPATTERN : 'FILEPATTERN' ;
SOLRMAPPING : 'SOLRMAPPING' ;
CONTEXT: 'CONTEXT';
MULTILINE: 'MULTILINE';
SETXMLNAMESPACE : 'SETXMLNAMESPACE';
NOT: 'NOT';
XML: 'XML';
JSON: 'JSON';
SKIP_N : 'SKIP';

ICON  : 'ICON' ;
NV_PAIR : 'nvpair_basic' ;
LIST_BASIC : 'list_basic' ;
ALIGNED_BASIC : 'aligned_basic';
XML_BASIC : 'xml_basic';

NULL_DEF : 'nn' | 'n' ;
NS_TYPES : 'EVENT' | 'UNPARSED' | 'SESSION' | 'SECTION' | 'STAT' | 'TRASH';
SOLR : 'SOLR' ;
LOCK : 'LOCK' ;

CONSTRAIN: 'CONSTRAIN';
COLDROP: 'COLDROP';
COLFILL: 'COLFILL';
COLJOIN: 'COLJOIN';
COLCOPY: 'COLCOPY';
ADD_CONTEXT: 'ADD_CONTEXT';
COLSPLIT: 'COLSPLIT';
COLREP: 'COLREP';
COLMAP: 'COLMAP';
COLCALC: 'COLCALC';
COLCASE : 'COLCASE' ;
COLELSE : 'COLELSE' ;
COLEND : 'COLEND' ;
COLWHEN: 'COLWHEN';
COLCOUNT: 'COLCOUNT';
FUNCTION: 'ADJYEAR' | 'CONCAT' | 'DIVIDEBY' | 'EPOCH2SDF' | 'SDF2EPOCH' | 'STR2SUM' | 'MINUS' | 'PLUS' | 'HEX2DEC' | 'INT' | 'LC' | 'UC' | 'TIMES' | 'LENGHT';

INT : '1'..'9' '0'..'9'*;

DT: 'i' | 's' | 'r';

REGEX : DIVIDE ((BACKSLASH .) | ~'/' )* DIVIDE ;

QUOTED_LABEL : SINGLEQUOT ((BACKSLASH .) | ~'\'' )* SINGLEQUOT ;

SOLRMAPPING_NAME : 'name=';
SOLRMAPPING_DATATYPE : 'datatype=';  //beware of type=1 col meta attribute token while changing ordering
SOLRMAPPING_MULTIVALUED : 'multivalued=';
SOLRMAPPING_UNIQFLDEF : 'uniquefielddef=';
SOLRMAPPING_OMITNORMS : 'omitnorms=';
SOLRMAPPING_STORETV : 'storetermvectors=';
SOLRMAPPING_STORETP : 'storetermpositions=';
SOLRMAPPING_STORETO : 'storetermoffsets=';


//column level metadata
COLMETA_SYSID1 : 'sysid1=';
COLMETA_SYSID2 : 'sysid2=';
COLMETA_SYSID3 : 'sysid3=';
COLMETA_SESSID1 : 'sessionid1=';
COLMETA_SESSID2 : 'sessionid2=';
COLMETA_SESSID3 : 'sessionid3=';
COLMETA_SESS_NAME : 'sessionname=';
COLMETA_SESS_ATTR : 'sessionattr=';
COLMETA_SESS_COUNT : 'sessioncount=';


COLMETA_FILENAME : 'filename=';
COLMETA_TS : 'ts=';
COLMETA_LINKED : 'linked=';
COLMETA_CONTENT : 'content=';
COLMETA_FRAGMENT_ID : 'fragment_id=';
COLMETA_OBSURL : 'obs_url=';
COLMETA_OBSSIZE : 'obs_size=';
COLMETA_UPLOADEDBY : 'uploaded_by=';
COLMETA_FACET : 'facet=';
COLMETA_SEVERITY : 'severity=';
COLMETA_UNITS : 'units=';
COLMETA_LABEL : 'label=';
COLMETA_BEGIN_OFFSET : 'begin_offset=';
COLMETA_NAMESPACE : 'namespace=';
COLMETA_TYPE : 'type=';

ALIGNED_BASIC_L : '[L]';
ALIGNED_BASIC_R : '[R]';
ALIGNED_BASIC_C : '[C]';

IDENT : [a-z][a-z0-9_]+ ;
IDENT_DOT : IDENT ( DOT IDENT )+ ;
