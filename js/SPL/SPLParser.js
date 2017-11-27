// Generated from SPLParser.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SPLParserListener = require('./SPLParserListener').SPLParserListener;
var grammarFileName = "SPLParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003k\u0245\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0003\u0002\u0006\u0002\u0084\n\u0002\r\u0002\u000e\u0002\u0085",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003\u008c\n",
    "\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u0090\n\u0004\u0003\u0004",
    "\u0005\u0004\u0093\n\u0004\u0003\u0004\u0005\u0004\u0096\n\u0004\u0003",
    "\u0004\u0005\u0004\u0099\n\u0004\u0003\u0004\u0005\u0004\u009c\n\u0004",
    "\u0003\u0004\u0005\u0004\u009f\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0005\u0007\u00ad\n\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u00b1\n\u0007\u0003\u0007\u0005",
    "\u0007\u00b4\n\u0007\u0003\u0007\u0005\u0007\u00b7\n\u0007\u0003\u0007",
    "\u0005\u0007\u00ba\n\u0007\u0003\u0007\u0005\u0007\u00bd\n\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0007\n\u00ca\n\n\f\n\u000e\n\u00cd\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00dd",
    "\n\u000e\u0003\u000e\u0005\u000e\u00e0\n\u000e\u0003\u000e\u0005\u000e",
    "\u00e3\n\u000e\u0003\u000e\u0006\u000e\u00e6\n\u000e\r\u000e\u000e\u000e",
    "\u00e7\u0003\u000e\u0003\u000e\u0007\u000e\u00ec\n\u000e\f\u000e\u000e",
    "\u000e\u00ef\u000b\u000e\u0003\u000e\u0005\u000e\u00f2\n\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u0101\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u0117\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0127\n\u0018",
    "\f\u0018\u000e\u0018\u012a\u000b\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u0133",
    "\n\u0019\f\u0019\u000e\u0019\u0136\u000b\u0019\u0005\u0019\u0138\n\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a",
    "\u013f\n\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0143\n\u001a\u0003",
    "\u001a\u0005\u001a\u0146\n\u001a\u0003\u001a\u0005\u001a\u0149\n\u001a",
    "\u0003\u001a\u0005\u001a\u014c\n\u001a\u0003\u001a\u0005\u001a\u014f",
    "\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u015e\n\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u0166",
    "\n\u001d\f\u001d\u000e\u001d\u0169\u000b\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0189\n",
    "\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0007#\u0199\n#\f#\u000e#\u019c",
    "\u000b#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003%\u0003%\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0006(\u01ae\n",
    "(\r(\u000e(\u01af\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0005)\u01be\n)\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003-\u0003-\u0003-\u0006-\u01d1\n-\r-\u000e-\u01d2\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003/\u0006/\u01df",
    "\n/\r/\u000e/\u01e0\u00030\u00030\u00030\u00030\u00030\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00032\u00032\u00032\u00032\u00032\u0003",
    "3\u00033\u00034\u00034\u00034\u00034\u00034\u00035\u00035\u00035\u0003",
    "5\u00035\u00035\u00035\u00065\u0201\n5\r5\u000e5\u0202\u00036\u0003",
    "6\u00036\u00036\u00036\u00037\u00037\u00037\u00037\u00037\u00067\u020f",
    "\n7\r7\u000e7\u0210\u00038\u00038\u00038\u00038\u00038\u00039\u0003",
    "9\u00039\u00039\u00039\u00039\u0003:\u0003:\u0003:\u0003:\u0003:\u0003",
    ";\u0003;\u0003<\u0003<\u0003<\u0003<\u0003<\u0003=\u0003=\u0003=\u0003",
    "=\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003?\u0006?\u0235\n?\r",
    "?\u000e?\u0236\u0003@\u0003@\u0006@\u023b\n@\r@\u000e@\u023c\u0003A",
    "\u0007A\u0240\nA\fA\u000eA\u0243\u000bA\u0003A\u0002\u0002B\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0002\b\u0003",
    "\u0002jk\u0005\u0002CCFFjj\u0004\u0002CCFF\u0003\u0002GN\u0003\u0002",
    "gi\u0004\u0002FFjj\u0252\u0002\u0083\u0003\u0002\u0002\u0002\u0004\u008b",
    "\u0003\u0002\u0002\u0002\u0006\u008d\u0003\u0002\u0002\u0002\b\u00a2",
    "\u0003\u0002\u0002\u0002\n\u00a8\u0003\u0002\u0002\u0002\f\u00ac\u0003",
    "\u0002\u0002\u0002\u000e\u00be\u0003\u0002\u0002\u0002\u0010\u00c0\u0003",
    "\u0002\u0002\u0002\u0012\u00c3\u0003\u0002\u0002\u0002\u0014\u00ce\u0003",
    "\u0002\u0002\u0002\u0016\u00d2\u0003\u0002\u0002\u0002\u0018\u00d6\u0003",
    "\u0002\u0002\u0002\u001a\u00d9\u0003\u0002\u0002\u0002\u001c\u00f5\u0003",
    "\u0002\u0002\u0002\u001e\u00fb\u0003\u0002\u0002\u0002 \u0102\u0003",
    "\u0002\u0002\u0002\"\u0106\u0003\u0002\u0002\u0002$\u010a\u0003\u0002",
    "\u0002\u0002&\u0111\u0003\u0002\u0002\u0002(\u0114\u0003\u0002\u0002",
    "\u0002*\u011b\u0003\u0002\u0002\u0002,\u011e\u0003\u0002\u0002\u0002",
    ".\u0121\u0003\u0002\u0002\u00020\u012d\u0003\u0002\u0002\u00022\u013b",
    "\u0003\u0002\u0002\u00024\u0150\u0003\u0002\u0002\u00026\u0154\u0003",
    "\u0002\u0002\u00028\u0161\u0003\u0002\u0002\u0002:\u016c\u0003\u0002",
    "\u0002\u0002<\u0188\u0003\u0002\u0002\u0002>\u018a\u0003\u0002\u0002",
    "\u0002@\u018c\u0003\u0002\u0002\u0002B\u018f\u0003\u0002\u0002\u0002",
    "D\u0192\u0003\u0002\u0002\u0002F\u019f\u0003\u0002\u0002\u0002H\u01a2",
    "\u0003\u0002\u0002\u0002J\u01a4\u0003\u0002\u0002\u0002L\u01a6\u0003",
    "\u0002\u0002\u0002N\u01a8\u0003\u0002\u0002\u0002P\u01bd\u0003\u0002",
    "\u0002\u0002R\u01bf\u0003\u0002\u0002\u0002T\u01c4\u0003\u0002\u0002",
    "\u0002V\u01c8\u0003\u0002\u0002\u0002X\u01cd\u0003\u0002\u0002\u0002",
    "Z\u01d4\u0003\u0002\u0002\u0002\\\u01d9\u0003\u0002\u0002\u0002^\u01e2",
    "\u0003\u0002\u0002\u0002`\u01e7\u0003\u0002\u0002\u0002b\u01ed\u0003",
    "\u0002\u0002\u0002d\u01f2\u0003\u0002\u0002\u0002f\u01f4\u0003\u0002",
    "\u0002\u0002h\u01f9\u0003\u0002\u0002\u0002j\u0204\u0003\u0002\u0002",
    "\u0002l\u0209\u0003\u0002\u0002\u0002n\u0212\u0003\u0002\u0002\u0002",
    "p\u0217\u0003\u0002\u0002\u0002r\u021d\u0003\u0002\u0002\u0002t\u0222",
    "\u0003\u0002\u0002\u0002v\u0224\u0003\u0002\u0002\u0002x\u0229\u0003",
    "\u0002\u0002\u0002z\u022d\u0003\u0002\u0002\u0002|\u0234\u0003\u0002",
    "\u0002\u0002~\u0238\u0003\u0002\u0002\u0002\u0080\u0241\u0003\u0002",
    "\u0002\u0002\u0082\u0084\u0005\u0004\u0003\u0002\u0083\u0082\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0007\u0002\u0002\u0003\u0088\u0003\u0003\u0002",
    "\u0002\u0002\u0089\u008c\u0005\u0006\u0004\u0002\u008a\u008c\u0005\u001a",
    "\u000e\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u0005\u0003\u0002\u0002\u0002\u008d\u008f\u0005\b",
    "\u0005\u0002\u008e\u0090\u0005\f\u0007\u0002\u008f\u008e\u0003\u0002",
    "\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002",
    "\u0002\u0002\u0091\u0093\u0005\u0010\t\u0002\u0092\u0091\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002",
    "\u0002\u0002\u0094\u0096\u0005\u0014\u000b\u0002\u0095\u0094\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0098\u0003\u0002",
    "\u0002\u0002\u0097\u0099\u0005\u0012\n\u0002\u0098\u0097\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009b\u0003\u0002",
    "\u0002\u0002\u009a\u009c\u0005\u0016\f\u0002\u009b\u009a\u0003\u0002",
    "\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009e\u0003\u0002",
    "\u0002\u0002\u009d\u009f\u0005\u0018\r\u0002\u009e\u009d\u0003\u0002",
    "\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0007\u0003\u0002\u0002\u00a1\u0007\u0003\u0002",
    "\u0002\u0002\u00a2\u00a3\u0007\u0013\u0002\u0002\u00a3\u00a4\u0007\u0014",
    "\u0002\u0002\u00a4\u00a5\u0005\n\u0006\u0002\u00a5\u00a6\u0007\u0016",
    "\u0002\u0002\u00a6\u00a7\u0007F\u0002\u0002\u00a7\t\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\t\u0002\u0002\u0002\u00a9\u000b\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0007 \u0002\u0002\u00ab\u00ad\u00070\u0002\u0002",
    "\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002",
    "\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00af\u0007\u0015\u0002\u0002",
    "\u00af\u00b1\u0005\u000e\b\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002",
    "\u00b2\u00b4\u00072\u0002\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b6\u0003\u0002\u0002\u0002",
    "\u00b5\u00b7\u00071\u0002\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002",
    "\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b9\u0003\u0002\u0002\u0002",
    "\u00b8\u00ba\u0007\'\u0002\u0002\u00b9\u00b8\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002",
    "\u00bb\u00bd\u0007(\u0002\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\r\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\t\u0002\u0002\u0002\u00bf\u000f\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0007\u001a\u0002\u0002\u00c1\u00c2\u0007F\u0002\u0002",
    "\u00c2\u0011\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007#\u0002\u0002",
    "\u00c4\u00c5\u0007E\u0002\u0002\u00c5\u00c6\u0007\u001e\u0002\u0002",
    "\u00c6\u00cb\u0007j\u0002\u0002\u00c7\u00c8\u0007\u0010\u0002\u0002",
    "\u00c8\u00ca\u0007j\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002",
    "\u00ca\u00cd\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u0013\u0003\u0002\u0002\u0002",
    "\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007\u0017\u0002\u0002",
    "\u00cf\u00d0\u0007\u0019\u0002\u0002\u00d0\u00d1\u0007E\u0002\u0002",
    "\u00d1\u0015\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007\u0018\u0002\u0002",
    "\u00d3\u00d4\u0007\u0019\u0002\u0002\u00d4\u00d5\u0007E\u0002\u0002",
    "\u00d5\u0017\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007!\u0002\u0002",
    "\u00d7\u00d8\u0007E\u0002\u0002\u00d8\u0019\u0003\u0002\u0002\u0002",
    "\u00d9\u00da\u0005\u001c\u000f\u0002\u00da\u00dc\u0005\u001e\u0010\u0002",
    "\u00db\u00dd\u0005,\u0017\u0002\u00dc\u00db\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00df\u0003\u0002\u0002\u0002",
    "\u00de\u00e0\u0005(\u0015\u0002\u00df\u00de\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e2\u0003\u0002\u0002\u0002",
    "\u00e1\u00e3\u0005*\u0016\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002",
    "\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e5\u0003\u0002\u0002\u0002",
    "\u00e4\u00e6\u00052\u001a\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002",
    "\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002",
    "\u00e9\u00ed\u0005.\u0018\u0002\u00ea\u00ec\u0005P)\u0002\u00eb\u00ea",
    "\u0003\u0002\u0002\u0002\u00ec\u00ef\u0003\u0002\u0002\u0002\u00ed\u00eb",
    "\u0003\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00f1",
    "\u0003\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00f0\u00f2",
    "\u00050\u0019\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f1\u00f2",
    "\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0007\u0003\u0002\u0002\u00f4\u001b\u0003\u0002\u0002\u0002\u00f5\u00f6",
    "\u0007\u0013\u0002\u0002\u00f6\u00f7\u0007\u001b\u0002\u0002\u00f7\u00f8",
    "\u0007j\u0002\u0002\u00f8\u00f9\u0007\u0014\u0002\u0002\u00f9\u00fa",
    "\u0005\n\u0006\u0002\u00fa\u001d\u0003\u0002\u0002\u0002\u00fb\u0100",
    "\u0007*\u0002\u0002\u00fc\u0101\u0005 \u0011\u0002\u00fd\u0101\u0005",
    "\"\u0012\u0002\u00fe\u0101\u0005$\u0013\u0002\u00ff\u0101\u0005&\u0014",
    "\u0002\u0100\u00fc\u0003\u0002\u0002\u0002\u0100\u00fd\u0003\u0002\u0002",
    "\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u00ff\u0003\u0002\u0002",
    "\u0002\u0101\u001f\u0003\u0002\u0002\u0002\u0102\u0103\u0007,\u0002",
    "\u0002\u0103\u0104\u0007\u001c\u0002\u0002\u0104\u0105\u0007E\u0002",
    "\u0002\u0105!\u0003\u0002\u0002\u0002\u0106\u0107\u0007+\u0002\u0002",
    "\u0107\u0108\u0007E\u0002\u0002\u0108\u0109\u0007E\u0002\u0002\u0109",
    "#\u0003\u0002\u0002\u0002\u010a\u010b\u0007-\u0002\u0002\u010b\u010c",
    "\u0007F\u0002\u0002\u010c\u010d\u0007\u0010\u0002\u0002\u010d\u010e",
    "\u0007F\u0002\u0002\u010e\u010f\u0007\u0010\u0002\u0002\u010f\u0110",
    "\u0007F\u0002\u0002\u0110%\u0003\u0002\u0002\u0002\u0111\u0112\u0007",
    ".\u0002\u0002\u0112\u0113\u0007E\u0002\u0002\u0113\'\u0003\u0002\u0002",
    "\u0002\u0114\u0116\u0007$\u0002\u0002\u0115\u0117\u0007&\u0002\u0002",
    "\u0116\u0115\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0119\u0007E\u0002\u0002",
    "\u0119\u011a\u0007F\u0002\u0002\u011a)\u0003\u0002\u0002\u0002\u011b",
    "\u011c\u0007)\u0002\u0002\u011c\u011d\u0007C\u0002\u0002\u011d+\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u0007%\u0002\u0002\u011f\u0120\u0007",
    "E\u0002\u0002\u0120-\u0003\u0002\u0002\u0002\u0121\u0122\u00078\u0002",
    "\u0002\u0122\u0123\u0007\t\u0002\u0002\u0123\u0128\u0007j\u0002\u0002",
    "\u0124\u0125\u0007\u0010\u0002\u0002\u0125\u0127\u0007j\u0002\u0002",
    "\u0126\u0124\u0003\u0002\u0002\u0002\u0127\u012a\u0003\u0002\u0002\u0002",
    "\u0128\u0126\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002",
    "\u0129\u012b\u0003\u0002\u0002\u0002\u012a\u0128\u0003\u0002\u0002\u0002",
    "\u012b\u012c\u0007\n\u0002\u0002\u012c/\u0003\u0002\u0002\u0002\u012d",
    "\u012e\u00073\u0002\u0002\u012e\u0137\u0007\t\u0002\u0002\u012f\u0134",
    "\u0007j\u0002\u0002\u0130\u0131\u0007\u0010\u0002\u0002\u0131\u0133",
    "\u0007j\u0002\u0002\u0132\u0130\u0003\u0002\u0002\u0002\u0133\u0136",
    "\u0003\u0002\u0002\u0002\u0134\u0132\u0003\u0002\u0002\u0002\u0134\u0135",
    "\u0003\u0002\u0002\u0002\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134",
    "\u0003\u0002\u0002\u0002\u0137\u012f\u0003\u0002\u0002\u0002\u0137\u0138",
    "\u0003\u0002\u0002\u0002\u0138\u0139\u0003\u0002\u0002\u0002\u0139\u013a",
    "\u0007\n\u0002\u0002\u013a1\u0003\u0002\u0002\u0002\u013b\u013c\u0007",
    "\u001d\u0002\u0002\u013c\u013e\u0007j\u0002\u0002\u013d\u013f\u0005",
    "4\u001b\u0002\u013e\u013d\u0003\u0002\u0002\u0002\u013e\u013f\u0003",
    "\u0002\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0142\u0005",
    "6\u001c\u0002\u0141\u0143\u00058\u001d\u0002\u0142\u0141\u0003\u0002",
    "\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u0145\u0003\u0002",
    "\u0002\u0002\u0144\u0146\u0005@!\u0002\u0145\u0144\u0003\u0002\u0002",
    "\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0148\u0003\u0002\u0002",
    "\u0002\u0147\u0149\u0005L\'\u0002\u0148\u0147\u0003\u0002\u0002\u0002",
    "\u0148\u0149\u0003\u0002\u0002\u0002\u0149\u014b\u0003\u0002\u0002\u0002",
    "\u014a\u014c\u0005B\"\u0002\u014b\u014a\u0003\u0002\u0002\u0002\u014b",
    "\u014c\u0003\u0002\u0002\u0002\u014c\u014e\u0003\u0002\u0002\u0002\u014d",
    "\u014f\u0005D#\u0002\u014e\u014d\u0003\u0002\u0002\u0002\u014e\u014f",
    "\u0003\u0002\u0002\u0002\u014f3\u0003\u0002\u0002\u0002\u0150\u0151",
    "\u0007\t\u0002\u0002\u0151\u0152\u0007k\u0002\u0002\u0152\u0153\u0007",
    "\n\u0002\u0002\u01535\u0003\u0002\u0002\u0002\u0154\u0155\u0007\u0007",
    "\u0002\u0002\u0155\u0156\u0007D\u0002\u0002\u0156\u0157\u0007\t\u0002",
    "\u0002\u0157\u0158\u0007C\u0002\u0002\u0158\u0159\u0007\n\u0002\u0002",
    "\u0159\u015a\u0007\u0004\u0002\u0002\u015a\u015d\u0007/\u0002\u0002",
    "\u015b\u015c\u0007\u0004\u0002\u0002\u015c\u015e\u0007F\u0002\u0002",
    "\u015d\u015b\u0003\u0002\u0002\u0002\u015d\u015e\u0003\u0002\u0002\u0002",
    "\u015e\u015f\u0003\u0002\u0002\u0002\u015f\u0160\u0007\b\u0002\u0002",
    "\u01607\u0003\u0002\u0002\u0002\u0161\u0162\u0007\f\u0002\u0002\u0162",
    "\u0167\u0005:\u001e\u0002\u0163\u0164\u0007\u0010\u0002\u0002\u0164",
    "\u0166\u0005:\u001e\u0002\u0165\u0163\u0003\u0002\u0002\u0002\u0166",
    "\u0169\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002\u0167",
    "\u0168\u0003\u0002\u0002\u0002\u0168\u016a\u0003\u0002\u0002\u0002\u0169",
    "\u0167\u0003\u0002\u0002\u0002\u016a\u016b\u0007\u000b\u0002\u0002\u016b",
    "9\u0003\u0002\u0002\u0002\u016c\u016d\u0005<\u001f\u0002\u016d\u016e",
    "\u0005> \u0002\u016e;\u0003\u0002\u0002\u0002\u016f\u0189\u0007c\u0002",
    "\u0002\u0170\u0189\u0007O\u0002\u0002\u0171\u0189\u0007P\u0002\u0002",
    "\u0172\u0189\u0007Q\u0002\u0002\u0173\u0189\u0007R\u0002\u0002\u0174",
    "\u0189\u0007S\u0002\u0002\u0175\u0189\u0007T\u0002\u0002\u0176\u0189",
    "\u0007U\u0002\u0002\u0177\u0189\u0007V\u0002\u0002\u0178\u0189\u0007",
    "W\u0002\u0002\u0179\u0189\u0007X\u0002\u0002\u017a\u0189\u0007[\u0002",
    "\u0002\u017b\u0189\u0007\\\u0002\u0002\u017c\u0189\u0007]\u0002\u0002",
    "\u017d\u0189\u0007^\u0002\u0002\u017e\u0189\u0007_\u0002\u0002\u017f",
    "\u0189\u0007`\u0002\u0002\u0180\u0189\u0007a\u0002\u0002\u0181\u0189",
    "\u0007b\u0002\u0002\u0182\u0189\u0007d\u0002\u0002\u0183\u0189\u0007",
    "e\u0002\u0002\u0184\u0189\u0007f\u0002\u0002\u0185\u0189\u0007Y\u0002",
    "\u0002\u0186\u0189\u0007Z\u0002\u0002\u0187\u0189\u0003\u0002\u0002",
    "\u0002\u0188\u016f\u0003\u0002\u0002\u0002\u0188\u0170\u0003\u0002\u0002",
    "\u0002\u0188\u0171\u0003\u0002\u0002\u0002\u0188\u0172\u0003\u0002\u0002",
    "\u0002\u0188\u0173\u0003\u0002\u0002\u0002\u0188\u0174\u0003\u0002\u0002",
    "\u0002\u0188\u0175\u0003\u0002\u0002\u0002\u0188\u0176\u0003\u0002\u0002",
    "\u0002\u0188\u0177\u0003\u0002\u0002\u0002\u0188\u0178\u0003\u0002\u0002",
    "\u0002\u0188\u0179\u0003\u0002\u0002\u0002\u0188\u017a\u0003\u0002\u0002",
    "\u0002\u0188\u017b\u0003\u0002\u0002\u0002\u0188\u017c\u0003\u0002\u0002",
    "\u0002\u0188\u017d\u0003\u0002\u0002\u0002\u0188\u017e\u0003\u0002\u0002",
    "\u0002\u0188\u017f\u0003\u0002\u0002\u0002\u0188\u0180\u0003\u0002\u0002",
    "\u0002\u0188\u0181\u0003\u0002\u0002\u0002\u0188\u0182\u0003\u0002\u0002",
    "\u0002\u0188\u0183\u0003\u0002\u0002\u0002\u0188\u0184\u0003\u0002\u0002",
    "\u0002\u0188\u0185\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002",
    "\u0002\u0188\u0187\u0003\u0002\u0002\u0002\u0189=\u0003\u0002\u0002",
    "\u0002\u018a\u018b\t\u0003\u0002\u0002\u018b?\u0003\u0002\u0002\u0002",
    "\u018c\u018d\u0007\u001e\u0002\u0002\u018d\u018e\t\u0004\u0002\u0002",
    "\u018eA\u0003\u0002\u0002\u0002\u018f\u0190\u0007\u001f\u0002\u0002",
    "\u0190\u0191\u0007F\u0002\u0002\u0191C\u0003\u0002\u0002\u0002\u0192",
    "\u0193\u0007\u0019\u0002\u0002\u0193\u0194\u0007\"\u0002\u0002\u0194",
    "\u0195\u0007\t\u0002\u0002\u0195\u019a\u0005F$\u0002\u0196\u0197\u0007",
    "\u0010\u0002\u0002\u0197\u0199\u0005F$\u0002\u0198\u0196\u0003\u0002",
    "\u0002\u0002\u0199\u019c\u0003\u0002\u0002\u0002\u019a\u0198\u0003\u0002",
    "\u0002\u0002\u019a\u019b\u0003\u0002\u0002\u0002\u019b\u019d\u0003\u0002",
    "\u0002\u0002\u019c\u019a\u0003\u0002\u0002\u0002\u019d\u019e\u0007\n",
    "\u0002\u0002\u019eE\u0003\u0002\u0002\u0002\u019f\u01a0\u0005H%\u0002",
    "\u01a0\u01a1\u0005J&\u0002\u01a1G\u0003\u0002\u0002\u0002\u01a2\u01a3",
    "\t\u0005\u0002\u0002\u01a3I\u0003\u0002\u0002\u0002\u01a4\u01a5\t\u0003",
    "\u0002\u0002\u01a5K\u0003\u0002\u0002\u0002\u01a6\u01a7\t\u0006\u0002",
    "\u0002\u01a7M\u0003\u0002\u0002\u0002\u01a8\u01a9\u0007j\u0002\u0002",
    "\u01a9\u01aa\u0007\t\u0002\u0002\u01aa\u01ad\u0007j\u0002\u0002\u01ab",
    "\u01ac\u0007\u0010\u0002\u0002\u01ac\u01ae\t\u0007\u0002\u0002\u01ad",
    "\u01ab\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af",
    "\u01ad\u0003\u0002\u0002\u0002\u01af\u01b0\u0003\u0002\u0002\u0002\u01b0",
    "\u01b1\u0003\u0002\u0002\u0002\u01b1\u01b2\u0007\n\u0002\u0002\u01b2",
    "O\u0003\u0002\u0002\u0002\u01b3\u01be\u0005R*\u0002\u01b4\u01be\u0005",
    "n8\u0002\u01b5\u01be\u0005V,\u0002\u01b6\u01be\u0005j6\u0002\u01b7\u01be",
    "\u0005Z.\u0002\u01b8\u01be\u0005^0\u0002\u01b9\u01be\u0005b2\u0002\u01ba",
    "\u01be\u0005f4\u0002\u01bb\u01be\u0005r:\u0002\u01bc\u01be\u0005z>\u0002",
    "\u01bd\u01b3\u0003\u0002\u0002\u0002\u01bd\u01b4\u0003\u0002\u0002\u0002",
    "\u01bd\u01b5\u0003\u0002\u0002\u0002\u01bd\u01b6\u0003\u0002\u0002\u0002",
    "\u01bd\u01b7\u0003\u0002\u0002\u0002\u01bd\u01b8\u0003\u0002\u0002\u0002",
    "\u01bd\u01b9\u0003\u0002\u0002\u0002\u01bd\u01ba\u0003\u0002\u0002\u0002",
    "\u01bd\u01bb\u0003\u0002\u0002\u0002\u01bd\u01bc\u0003\u0002\u0002\u0002",
    "\u01beQ\u0003\u0002\u0002\u0002\u01bf\u01c0\u00077\u0002\u0002\u01c0",
    "\u01c1\u0007\t\u0002\u0002\u01c1\u01c2\u0005T+\u0002\u01c2\u01c3\u0007",
    "\n\u0002\u0002\u01c3S\u0003\u0002\u0002\u0002\u01c4\u01c5\t\u0007\u0002",
    "\u0002\u01c5\u01c6\u0007\u0010\u0002\u0002\u01c6\u01c7\u0007j\u0002",
    "\u0002\u01c7U\u0003\u0002\u0002\u0002\u01c8\u01c9\u00076\u0002\u0002",
    "\u01c9\u01ca\u0007\t\u0002\u0002\u01ca\u01cb\u0005X-\u0002\u01cb\u01cc",
    "\u0007\n\u0002\u0002\u01ccW\u0003\u0002\u0002\u0002\u01cd\u01d0\u0007",
    "j\u0002\u0002\u01ce\u01cf\u0007\u0010\u0002\u0002\u01cf\u01d1\t\u0007",
    "\u0002\u0002\u01d0\u01ce\u0003\u0002\u0002\u0002\u01d1\u01d2\u0003\u0002",
    "\u0002\u0002\u01d2\u01d0\u0003\u0002\u0002\u0002\u01d2\u01d3\u0003\u0002",
    "\u0002\u0002\u01d3Y\u0003\u0002\u0002\u0002\u01d4\u01d5\u00079\u0002",
    "\u0002\u01d5\u01d6\u0007\t\u0002\u0002\u01d6\u01d7\u0005\\/\u0002\u01d7",
    "\u01d8\u0007\n\u0002\u0002\u01d8[\u0003\u0002\u0002\u0002\u01d9\u01da",
    "\u0007j\u0002\u0002\u01da\u01db\u0007\u0010\u0002\u0002\u01db\u01de",
    "\u0007E\u0002\u0002\u01dc\u01dd\u0007\u0010\u0002\u0002\u01dd\u01df",
    "\u0007j\u0002\u0002\u01de\u01dc\u0003\u0002\u0002\u0002\u01df\u01e0",
    "\u0003\u0002\u0002\u0002\u01e0\u01de\u0003\u0002\u0002\u0002\u01e0\u01e1",
    "\u0003\u0002\u0002\u0002\u01e1]\u0003\u0002\u0002\u0002\u01e2\u01e3",
    "\u0007:\u0002\u0002\u01e3\u01e4\u0007\t\u0002\u0002\u01e4\u01e5\u0005",
    "`1\u0002\u01e5\u01e6\u0007\n\u0002\u0002\u01e6_\u0003\u0002\u0002\u0002",
    "\u01e7\u01e8\u0007E\u0002\u0002\u01e8\u01e9\u0007\u0010\u0002\u0002",
    "\u01e9\u01ea\u0007F\u0002\u0002\u01ea\u01eb\u0007\u0010\u0002\u0002",
    "\u01eb\u01ec\u0007j\u0002\u0002\u01eca\u0003\u0002\u0002\u0002\u01ed",
    "\u01ee\u00075\u0002\u0002\u01ee\u01ef\u0007\t\u0002\u0002\u01ef\u01f0",
    "\u0005d3\u0002\u01f0\u01f1\u0007\n\u0002\u0002\u01f1c\u0003\u0002\u0002",
    "\u0002\u01f2\u01f3\u0007j\u0002\u0002\u01f3e\u0003\u0002\u0002\u0002",
    "\u01f4\u01f5\u0007;\u0002\u0002\u01f5\u01f6\u0007\t\u0002\u0002\u01f6",
    "\u01f7\u0005h5\u0002\u01f7\u01f8\u0007\n\u0002\u0002\u01f8g\u0003\u0002",
    "\u0002\u0002\u01f9\u01fa\u0007j\u0002\u0002\u01fa\u01fb\u0007\u0010",
    "\u0002\u0002\u01fb\u01fc\u0007j\u0002\u0002\u01fc\u01fd\u0007\u0010",
    "\u0002\u0002\u01fd\u0200\u0007E\u0002\u0002\u01fe\u01ff\u0007\u0010",
    "\u0002\u0002\u01ff\u0201\t\u0007\u0002\u0002\u0200\u01fe\u0003\u0002",
    "\u0002\u0002\u0201\u0202\u0003\u0002\u0002\u0002\u0202\u0200\u0003\u0002",
    "\u0002\u0002\u0202\u0203\u0003\u0002\u0002\u0002\u0203i\u0003\u0002",
    "\u0002\u0002\u0204\u0205\u0007<\u0002\u0002\u0205\u0206\u0007\t\u0002",
    "\u0002\u0206\u0207\u0005l7\u0002\u0207\u0208\u0007\n\u0002\u0002\u0208",
    "k\u0003\u0002\u0002\u0002\u0209\u020a\u0007j\u0002\u0002\u020a\u020b",
    "\u0007\u0010\u0002\u0002\u020b\u020e\u0007B\u0002\u0002\u020c\u020d",
    "\u0007\u0010\u0002\u0002\u020d\u020f\t\u0007\u0002\u0002\u020e\u020c",
    "\u0003\u0002\u0002\u0002\u020f\u0210\u0003\u0002\u0002\u0002\u0210\u020e",
    "\u0003\u0002\u0002\u0002\u0210\u0211\u0003\u0002\u0002\u0002\u0211m",
    "\u0003\u0002\u0002\u0002\u0212\u0213\u0007A\u0002\u0002\u0213\u0214",
    "\u0007\t\u0002\u0002\u0214\u0215\u0005p9\u0002\u0215\u0216\u0007\n\u0002",
    "\u0002\u0216o\u0003\u0002\u0002\u0002\u0217\u0218\u0007j\u0002\u0002",
    "\u0218\u0219\u0007\u0010\u0002\u0002\u0219\u021a\u0007E\u0002\u0002",
    "\u021a\u021b\u0007\u0010\u0002\u0002\u021b\u021c\u0007j\u0002\u0002",
    "\u021cq\u0003\u0002\u0002\u0002\u021d\u021e\u00074\u0002\u0002\u021e",
    "\u021f\u0007\t\u0002\u0002\u021f\u0220\u0005t;\u0002\u0220\u0221\u0007",
    "\n\u0002\u0002\u0221s\u0003\u0002\u0002\u0002\u0222\u0223\u0007j\u0002",
    "\u0002\u0223u\u0003\u0002\u0002\u0002\u0224\u0225\u0007@\u0002\u0002",
    "\u0225\u0226\u0007\t\u0002\u0002\u0226\u0227\u0005x=\u0002\u0227\u0228",
    "\u0007\n\u0002\u0002\u0228w\u0003\u0002\u0002\u0002\u0229\u022a\u0007",
    "j\u0002\u0002\u022a\u022b\u0007\u0010\u0002\u0002\u022b\u022c\u0007",
    "E\u0002\u0002\u022cy\u0003\u0002\u0002\u0002\u022d\u022e\u0007=\u0002",
    "\u0002\u022e\u022f\u0005|?\u0002\u022f\u0230\u0007>\u0002\u0002\u0230",
    "\u0231\u0005\u0080A\u0002\u0231\u0232\u0007?\u0002\u0002\u0232{\u0003",
    "\u0002\u0002\u0002\u0233\u0235\u0005~@\u0002\u0234\u0233\u0003\u0002",
    "\u0002\u0002\u0235\u0236\u0003\u0002\u0002\u0002\u0236\u0234\u0003\u0002",
    "\u0002\u0002\u0236\u0237\u0003\u0002\u0002\u0002\u0237}\u0003\u0002",
    "\u0002\u0002\u0238\u023a\u0005v<\u0002\u0239\u023b\u0005P)\u0002\u023a",
    "\u0239\u0003\u0002\u0002\u0002\u023b\u023c\u0003\u0002\u0002\u0002\u023c",
    "\u023a\u0003\u0002\u0002\u0002\u023c\u023d\u0003\u0002\u0002\u0002\u023d",
    "\u007f\u0003\u0002\u0002\u0002\u023e\u0240\u0005P)\u0002\u023f\u023e",
    "\u0003\u0002\u0002\u0002\u0240\u0243\u0003\u0002\u0002\u0002\u0241\u023f",
    "\u0003\u0002\u0002\u0002\u0241\u0242\u0003\u0002\u0002\u0002\u0242\u0081",
    "\u0003\u0002\u0002\u0002\u0243\u0241\u0003\u0002\u0002\u0002/\u0085",
    "\u008b\u008f\u0092\u0095\u0098\u009b\u009e\u00ac\u00b0\u00b3\u00b6\u00b9",
    "\u00bc\u00cb\u00dc\u00df\u00e2\u00e7\u00ed\u00f1\u0100\u0116\u0128\u0134",
    "\u0137\u013e\u0142\u0145\u0148\u014b\u014e\u015d\u0167\u0188\u019a\u01af",
    "\u01bd\u01d2\u01e0\u0202\u0210\u0236\u023c\u0241"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "';'", "':'", "'/'", "'\\'", "'['", "']'", 
                     "'('", "')'", "'>'", "'<'", "'='", "'''", "'.'", "','", 
                     'null', 'null', "'DEFINE'", "'NAMESPACE'", "'REF'", 
                     "'DESCRIPTION'", "'BEGINS'", "'ENDS'", "'WITH'", "'BUNDLETYPE'", 
                     "'TABLE'", "'LINEGRAB'", "'COLUMN'", "'AS'", "'WITH NAME'", 
                     "'TYPE'", "'FILEPATTERN'", "'SOLRMAPPING'", "'CONTEXT'", 
                     "'MULTILINE'", "'SETXMLNAMESPACE'", "'NOT'", "'XML'", 
                     "'JSON'", "'SKIP'", "'ICON'", "'nvpair_basic'", "'list_basic'", 
                     "'aligned_basic'", "'xml_basic'", 'null', 'null', "'SOLR'", 
                     "'LOCK'", "'CONSTRAIN'", "'COLDROP'", "'COLFILL'", 
                     "'COLJOIN'", "'COLCOPY'", "'ADD_CONTEXT'", "'COLSPLIT'", 
                     "'COLREP'", "'COLMAP'", "'COLCALC'", "'COLCASE'", "'COLELSE'", 
                     "'COLEND'", "'COLWHEN'", "'COLCOUNT'", 'null', 'null', 
                     'null', 'null', 'null', "'name='", "'datatype='", "'multivalued='", 
                     "'uniquefielddef='", "'omitnorms='", "'storetermvectors='", 
                     "'storetermpositions='", "'storetermoffsets='", "'sysid1='", 
                     "'sysid2='", "'sysid3='", "'sessionid1='", "'sessionid2='", 
                     "'sessionid3='", "'sessionname='", "'sessionattr='", 
                     "'sessioncount='", "'filename='", "'ts='", "'linked='", 
                     "'content='", "'fragment_id='", "'obs_url='", "'obs_size='", 
                     "'uploaded_by='", "'facet='", "'severity='", "'units='", 
                     "'label='", "'begin_offset='", "'namespace='", "'type='", 
                     "'[L]'", "'[R]'", "'[C]'" ];

var symbolicNames = [ 'null', "SEMICOLON", "COLON", "DIVIDE", "BACKSLASH", 
                      "OPENSQUARE", "CLOSESQUARE", "OPENPARENTHESIS", "CLOSEPARENTHESIS", 
                      "GT", "LT", "EQUAL", "SINGLEQUOT", "DOT", "COMMA", 
                      "COMMENT", "WS", "DEFINE", "NAMESPACE", "REF", "DESCRIPTION", 
                      "BEGINS", "ENDS", "WITH", "BUNDLETYPE", "TABLE", "LINEGRAB", 
                      "COLUMN", "AS", "WITH_NAME", "TYPE", "FILEPATTERN", 
                      "SOLRMAPPING", "CONTEXT", "MULTILINE", "SETXMLNAMESPACE", 
                      "NOT", "XML", "JSON", "SKIP_N", "ICON", "NV_PAIR", 
                      "LIST_BASIC", "ALIGNED_BASIC", "XML_BASIC", "NULL_DEF", 
                      "NS_TYPES", "SOLR", "LOCK", "CONSTRAIN", "COLDROP", 
                      "COLFILL", "COLJOIN", "COLCOPY", "ADD_CONTEXT", "COLSPLIT", 
                      "COLREP", "COLMAP", "COLCALC", "COLCASE", "COLELSE", 
                      "COLEND", "COLWHEN", "COLCOUNT", "FUNCTION", "INT", 
                      "DT", "REGEX", "QUOTED_LABEL", "SOLRMAPPING_NAME", 
                      "SOLRMAPPING_DATATYPE", "SOLRMAPPING_MULTIVALUED", 
                      "SOLRMAPPING_UNIQFLDEF", "SOLRMAPPING_OMITNORMS", 
                      "SOLRMAPPING_STORETV", "SOLRMAPPING_STORETP", "SOLRMAPPING_STORETO", 
                      "COLMETA_SYSID1", "COLMETA_SYSID2", "COLMETA_SYSID3", 
                      "COLMETA_SESSID1", "COLMETA_SESSID2", "COLMETA_SESSID3", 
                      "COLMETA_SESS_NAME", "COLMETA_SESS_ATTR", "COLMETA_SESS_COUNT", 
                      "COLMETA_FILENAME", "COLMETA_TS", "COLMETA_LINKED", 
                      "COLMETA_CONTENT", "COLMETA_FRAGMENT_ID", "COLMETA_OBSURL", 
                      "COLMETA_OBSSIZE", "COLMETA_UPLOADEDBY", "COLMETA_FACET", 
                      "COLMETA_SEVERITY", "COLMETA_UNITS", "COLMETA_LABEL", 
                      "COLMETA_BEGIN_OFFSET", "COLMETA_NAMESPACE", "COLMETA_TYPE", 
                      "ALIGNED_BASIC_L", "ALIGNED_BASIC_R", "ALIGNED_BASIC_C", 
                      "IDENT", "IDENT_DOT" ];

var ruleNames =  [ "splg", "define", "namespace", "namespace_def", "ns_name", 
                   "ns_type_def", "ns_ref_name", "bundle_type", "ns_ctx", 
                   "begins_with", "ends_with", "file_pattern", "table", 
                   "table_def", "icon_def", "list_basic_icon_def", "nvpair_icon_def", 
                   "aligned_basic_icon_def", "xml_icon_def", "multiline", 
                   "skip_n", "set_xml_ns", "add_context", "constrain", "column_def", 
                   "obj_ref", "data_type", "label_def", "attrib_def", "colmeta_attrib_name", 
                   "colmeta_attrib_value", "as_def", "with_name_def", "solr_mapping", 
                   "solr_mapping_def", "solr_mapping_attr_name", "solr_mapping_attr_value", 
                   "alignment", "generic_colop_def", "col_op_def", "colcopy", 
                   "colcopy_param", "coljoin", "coljoin_param", "colsplit", 
                   "colsplit_param", "colrep", "colrep_param", "colfill", 
                   "colfill_param", "colmap", "colmap_param", "colcalc", 
                   "colcalc_param", "colcount", "colcount_param", "coldrop", 
                   "coldrop_param", "colwhen", "colwhen_param", "colcase", 
                   "colcase_when", "colcase_when_nested", "colcase_else" ];

function SPLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SPLParser.prototype = Object.create(antlr4.Parser.prototype);
SPLParser.prototype.constructor = SPLParser;

Object.defineProperty(SPLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SPLParser.EOF = antlr4.Token.EOF;
SPLParser.SEMICOLON = 1;
SPLParser.COLON = 2;
SPLParser.DIVIDE = 3;
SPLParser.BACKSLASH = 4;
SPLParser.OPENSQUARE = 5;
SPLParser.CLOSESQUARE = 6;
SPLParser.OPENPARENTHESIS = 7;
SPLParser.CLOSEPARENTHESIS = 8;
SPLParser.GT = 9;
SPLParser.LT = 10;
SPLParser.EQUAL = 11;
SPLParser.SINGLEQUOT = 12;
SPLParser.DOT = 13;
SPLParser.COMMA = 14;
SPLParser.COMMENT = 15;
SPLParser.WS = 16;
SPLParser.DEFINE = 17;
SPLParser.NAMESPACE = 18;
SPLParser.REF = 19;
SPLParser.DESCRIPTION = 20;
SPLParser.BEGINS = 21;
SPLParser.ENDS = 22;
SPLParser.WITH = 23;
SPLParser.BUNDLETYPE = 24;
SPLParser.TABLE = 25;
SPLParser.LINEGRAB = 26;
SPLParser.COLUMN = 27;
SPLParser.AS = 28;
SPLParser.WITH_NAME = 29;
SPLParser.TYPE = 30;
SPLParser.FILEPATTERN = 31;
SPLParser.SOLRMAPPING = 32;
SPLParser.CONTEXT = 33;
SPLParser.MULTILINE = 34;
SPLParser.SETXMLNAMESPACE = 35;
SPLParser.NOT = 36;
SPLParser.XML = 37;
SPLParser.JSON = 38;
SPLParser.SKIP_N = 39;
SPLParser.ICON = 40;
SPLParser.NV_PAIR = 41;
SPLParser.LIST_BASIC = 42;
SPLParser.ALIGNED_BASIC = 43;
SPLParser.XML_BASIC = 44;
SPLParser.NULL_DEF = 45;
SPLParser.NS_TYPES = 46;
SPLParser.SOLR = 47;
SPLParser.LOCK = 48;
SPLParser.CONSTRAIN = 49;
SPLParser.COLDROP = 50;
SPLParser.COLFILL = 51;
SPLParser.COLJOIN = 52;
SPLParser.COLCOPY = 53;
SPLParser.ADD_CONTEXT = 54;
SPLParser.COLSPLIT = 55;
SPLParser.COLREP = 56;
SPLParser.COLMAP = 57;
SPLParser.COLCALC = 58;
SPLParser.COLCASE = 59;
SPLParser.COLELSE = 60;
SPLParser.COLEND = 61;
SPLParser.COLWHEN = 62;
SPLParser.COLCOUNT = 63;
SPLParser.FUNCTION = 64;
SPLParser.INT = 65;
SPLParser.DT = 66;
SPLParser.REGEX = 67;
SPLParser.QUOTED_LABEL = 68;
SPLParser.SOLRMAPPING_NAME = 69;
SPLParser.SOLRMAPPING_DATATYPE = 70;
SPLParser.SOLRMAPPING_MULTIVALUED = 71;
SPLParser.SOLRMAPPING_UNIQFLDEF = 72;
SPLParser.SOLRMAPPING_OMITNORMS = 73;
SPLParser.SOLRMAPPING_STORETV = 74;
SPLParser.SOLRMAPPING_STORETP = 75;
SPLParser.SOLRMAPPING_STORETO = 76;
SPLParser.COLMETA_SYSID1 = 77;
SPLParser.COLMETA_SYSID2 = 78;
SPLParser.COLMETA_SYSID3 = 79;
SPLParser.COLMETA_SESSID1 = 80;
SPLParser.COLMETA_SESSID2 = 81;
SPLParser.COLMETA_SESSID3 = 82;
SPLParser.COLMETA_SESS_NAME = 83;
SPLParser.COLMETA_SESS_ATTR = 84;
SPLParser.COLMETA_SESS_COUNT = 85;
SPLParser.COLMETA_FILENAME = 86;
SPLParser.COLMETA_TS = 87;
SPLParser.COLMETA_LINKED = 88;
SPLParser.COLMETA_CONTENT = 89;
SPLParser.COLMETA_FRAGMENT_ID = 90;
SPLParser.COLMETA_OBSURL = 91;
SPLParser.COLMETA_OBSSIZE = 92;
SPLParser.COLMETA_UPLOADEDBY = 93;
SPLParser.COLMETA_FACET = 94;
SPLParser.COLMETA_SEVERITY = 95;
SPLParser.COLMETA_UNITS = 96;
SPLParser.COLMETA_LABEL = 97;
SPLParser.COLMETA_BEGIN_OFFSET = 98;
SPLParser.COLMETA_NAMESPACE = 99;
SPLParser.COLMETA_TYPE = 100;
SPLParser.ALIGNED_BASIC_L = 101;
SPLParser.ALIGNED_BASIC_R = 102;
SPLParser.ALIGNED_BASIC_C = 103;
SPLParser.IDENT = 104;
SPLParser.IDENT_DOT = 105;

SPLParser.RULE_splg = 0;
SPLParser.RULE_define = 1;
SPLParser.RULE_namespace = 2;
SPLParser.RULE_namespace_def = 3;
SPLParser.RULE_ns_name = 4;
SPLParser.RULE_ns_type_def = 5;
SPLParser.RULE_ns_ref_name = 6;
SPLParser.RULE_bundle_type = 7;
SPLParser.RULE_ns_ctx = 8;
SPLParser.RULE_begins_with = 9;
SPLParser.RULE_ends_with = 10;
SPLParser.RULE_file_pattern = 11;
SPLParser.RULE_table = 12;
SPLParser.RULE_table_def = 13;
SPLParser.RULE_icon_def = 14;
SPLParser.RULE_list_basic_icon_def = 15;
SPLParser.RULE_nvpair_icon_def = 16;
SPLParser.RULE_aligned_basic_icon_def = 17;
SPLParser.RULE_xml_icon_def = 18;
SPLParser.RULE_multiline = 19;
SPLParser.RULE_skip_n = 20;
SPLParser.RULE_set_xml_ns = 21;
SPLParser.RULE_add_context = 22;
SPLParser.RULE_constrain = 23;
SPLParser.RULE_column_def = 24;
SPLParser.RULE_obj_ref = 25;
SPLParser.RULE_data_type = 26;
SPLParser.RULE_label_def = 27;
SPLParser.RULE_attrib_def = 28;
SPLParser.RULE_colmeta_attrib_name = 29;
SPLParser.RULE_colmeta_attrib_value = 30;
SPLParser.RULE_as_def = 31;
SPLParser.RULE_with_name_def = 32;
SPLParser.RULE_solr_mapping = 33;
SPLParser.RULE_solr_mapping_def = 34;
SPLParser.RULE_solr_mapping_attr_name = 35;
SPLParser.RULE_solr_mapping_attr_value = 36;
SPLParser.RULE_alignment = 37;
SPLParser.RULE_generic_colop_def = 38;
SPLParser.RULE_col_op_def = 39;
SPLParser.RULE_colcopy = 40;
SPLParser.RULE_colcopy_param = 41;
SPLParser.RULE_coljoin = 42;
SPLParser.RULE_coljoin_param = 43;
SPLParser.RULE_colsplit = 44;
SPLParser.RULE_colsplit_param = 45;
SPLParser.RULE_colrep = 46;
SPLParser.RULE_colrep_param = 47;
SPLParser.RULE_colfill = 48;
SPLParser.RULE_colfill_param = 49;
SPLParser.RULE_colmap = 50;
SPLParser.RULE_colmap_param = 51;
SPLParser.RULE_colcalc = 52;
SPLParser.RULE_colcalc_param = 53;
SPLParser.RULE_colcount = 54;
SPLParser.RULE_colcount_param = 55;
SPLParser.RULE_coldrop = 56;
SPLParser.RULE_coldrop_param = 57;
SPLParser.RULE_colwhen = 58;
SPLParser.RULE_colwhen_param = 59;
SPLParser.RULE_colcase = 60;
SPLParser.RULE_colcase_when = 61;
SPLParser.RULE_colcase_when_nested = 62;
SPLParser.RULE_colcase_else = 63;

function SplgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_splg;
    return this;
}

SplgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SplgContext.prototype.constructor = SplgContext;

SplgContext.prototype.EOF = function() {
    return this.getToken(SPLParser.EOF, 0);
};

SplgContext.prototype.define = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DefineContext);
    } else {
        return this.getTypedRuleContext(DefineContext,i);
    }
};

SplgContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterSplg(this);
	}
};

SplgContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitSplg(this);
	}
};




SPLParser.SplgContext = SplgContext;

SPLParser.prototype.splg = function() {

    var localctx = new SplgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SPLParser.RULE_splg);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 128;
            this.define();
            this.state = 131; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.DEFINE);
        this.state = 133;
        this.match(SPLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_define;
    return this;
}

DefineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineContext.prototype.constructor = DefineContext;

DefineContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

DefineContext.prototype.table = function() {
    return this.getTypedRuleContext(TableContext,0);
};

DefineContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterDefine(this);
	}
};

DefineContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitDefine(this);
	}
};




SPLParser.DefineContext = DefineContext;

SPLParser.prototype.define = function() {

    var localctx = new DefineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SPLParser.RULE_define);
    try {
        this.state = 137;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 135;
            this.namespace();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
            this.table();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.namespace_def = function() {
    return this.getTypedRuleContext(Namespace_defContext,0);
};

NamespaceContext.prototype.SEMICOLON = function() {
    return this.getToken(SPLParser.SEMICOLON, 0);
};

NamespaceContext.prototype.ns_type_def = function() {
    return this.getTypedRuleContext(Ns_type_defContext,0);
};

NamespaceContext.prototype.bundle_type = function() {
    return this.getTypedRuleContext(Bundle_typeContext,0);
};

NamespaceContext.prototype.begins_with = function() {
    return this.getTypedRuleContext(Begins_withContext,0);
};

NamespaceContext.prototype.ns_ctx = function() {
    return this.getTypedRuleContext(Ns_ctxContext,0);
};

NamespaceContext.prototype.ends_with = function() {
    return this.getTypedRuleContext(Ends_withContext,0);
};

NamespaceContext.prototype.file_pattern = function() {
    return this.getTypedRuleContext(File_patternContext,0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitNamespace(this);
	}
};




SPLParser.NamespaceContext = NamespaceContext;

SPLParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SPLParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.namespace_def();
        this.state = 141;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 140;
            this.ns_type_def();

        }
        this.state = 144;
        _la = this._input.LA(1);
        if(_la===SPLParser.BUNDLETYPE) {
            this.state = 143;
            this.bundle_type();
        }

        this.state = 147;
        _la = this._input.LA(1);
        if(_la===SPLParser.BEGINS) {
            this.state = 146;
            this.begins_with();
        }

        this.state = 150;
        _la = this._input.LA(1);
        if(_la===SPLParser.CONTEXT) {
            this.state = 149;
            this.ns_ctx();
        }

        this.state = 153;
        _la = this._input.LA(1);
        if(_la===SPLParser.ENDS) {
            this.state = 152;
            this.ends_with();
        }

        this.state = 156;
        _la = this._input.LA(1);
        if(_la===SPLParser.FILEPATTERN) {
            this.state = 155;
            this.file_pattern();
        }

        this.state = 158;
        this.match(SPLParser.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Namespace_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_namespace_def;
    return this;
}

Namespace_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Namespace_defContext.prototype.constructor = Namespace_defContext;

Namespace_defContext.prototype.DEFINE = function() {
    return this.getToken(SPLParser.DEFINE, 0);
};

Namespace_defContext.prototype.NAMESPACE = function() {
    return this.getToken(SPLParser.NAMESPACE, 0);
};

Namespace_defContext.prototype.ns_name = function() {
    return this.getTypedRuleContext(Ns_nameContext,0);
};

Namespace_defContext.prototype.DESCRIPTION = function() {
    return this.getToken(SPLParser.DESCRIPTION, 0);
};

Namespace_defContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

Namespace_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterNamespace_def(this);
	}
};

Namespace_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitNamespace_def(this);
	}
};




SPLParser.Namespace_defContext = Namespace_defContext;

SPLParser.prototype.namespace_def = function() {

    var localctx = new Namespace_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SPLParser.RULE_namespace_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(SPLParser.DEFINE);
        this.state = 161;
        this.match(SPLParser.NAMESPACE);
        this.state = 162;
        this.ns_name();
        this.state = 163;
        this.match(SPLParser.DESCRIPTION);
        this.state = 164;
        this.match(SPLParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ns_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_ns_name;
    return this;
}

Ns_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_nameContext.prototype.constructor = Ns_nameContext;

Ns_nameContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Ns_nameContext.prototype.IDENT_DOT = function() {
    return this.getToken(SPLParser.IDENT_DOT, 0);
};

Ns_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterNs_name(this);
	}
};

Ns_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitNs_name(this);
	}
};




SPLParser.Ns_nameContext = Ns_nameContext;

SPLParser.prototype.ns_name = function() {

    var localctx = new Ns_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SPLParser.RULE_ns_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        _la = this._input.LA(1);
        if(!(_la===SPLParser.IDENT || _la===SPLParser.IDENT_DOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ns_type_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_ns_type_def;
    return this;
}

Ns_type_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_type_defContext.prototype.constructor = Ns_type_defContext;

Ns_type_defContext.prototype.TYPE = function() {
    return this.getToken(SPLParser.TYPE, 0);
};

Ns_type_defContext.prototype.NS_TYPES = function() {
    return this.getToken(SPLParser.NS_TYPES, 0);
};

Ns_type_defContext.prototype.REF = function() {
    return this.getToken(SPLParser.REF, 0);
};

Ns_type_defContext.prototype.ns_ref_name = function() {
    return this.getTypedRuleContext(Ns_ref_nameContext,0);
};

Ns_type_defContext.prototype.LOCK = function() {
    return this.getToken(SPLParser.LOCK, 0);
};

Ns_type_defContext.prototype.SOLR = function() {
    return this.getToken(SPLParser.SOLR, 0);
};

Ns_type_defContext.prototype.XML = function() {
    return this.getToken(SPLParser.XML, 0);
};

Ns_type_defContext.prototype.JSON = function() {
    return this.getToken(SPLParser.JSON, 0);
};

Ns_type_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterNs_type_def(this);
	}
};

Ns_type_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitNs_type_def(this);
	}
};




SPLParser.Ns_type_defContext = Ns_type_defContext;

SPLParser.prototype.ns_type_def = function() {

    var localctx = new Ns_type_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SPLParser.RULE_ns_type_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        _la = this._input.LA(1);
        if(_la===SPLParser.TYPE) {
            this.state = 168;
            this.match(SPLParser.TYPE);
            this.state = 169;
            this.match(SPLParser.NS_TYPES);
        }

        this.state = 174;
        _la = this._input.LA(1);
        if(_la===SPLParser.REF) {
            this.state = 172;
            this.match(SPLParser.REF);
            this.state = 173;
            this.ns_ref_name();
        }

        this.state = 177;
        _la = this._input.LA(1);
        if(_la===SPLParser.LOCK) {
            this.state = 176;
            this.match(SPLParser.LOCK);
        }

        this.state = 180;
        _la = this._input.LA(1);
        if(_la===SPLParser.SOLR) {
            this.state = 179;
            this.match(SPLParser.SOLR);
        }

        this.state = 183;
        _la = this._input.LA(1);
        if(_la===SPLParser.XML) {
            this.state = 182;
            this.match(SPLParser.XML);
        }

        this.state = 186;
        _la = this._input.LA(1);
        if(_la===SPLParser.JSON) {
            this.state = 185;
            this.match(SPLParser.JSON);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ns_ref_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_ns_ref_name;
    return this;
}

Ns_ref_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_ref_nameContext.prototype.constructor = Ns_ref_nameContext;

Ns_ref_nameContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Ns_ref_nameContext.prototype.IDENT_DOT = function() {
    return this.getToken(SPLParser.IDENT_DOT, 0);
};

Ns_ref_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterNs_ref_name(this);
	}
};

Ns_ref_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitNs_ref_name(this);
	}
};




SPLParser.Ns_ref_nameContext = Ns_ref_nameContext;

SPLParser.prototype.ns_ref_name = function() {

    var localctx = new Ns_ref_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SPLParser.RULE_ns_ref_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        _la = this._input.LA(1);
        if(!(_la===SPLParser.IDENT || _la===SPLParser.IDENT_DOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Bundle_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_bundle_type;
    return this;
}

Bundle_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bundle_typeContext.prototype.constructor = Bundle_typeContext;

Bundle_typeContext.prototype.BUNDLETYPE = function() {
    return this.getToken(SPLParser.BUNDLETYPE, 0);
};

Bundle_typeContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

Bundle_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterBundle_type(this);
	}
};

Bundle_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitBundle_type(this);
	}
};




SPLParser.Bundle_typeContext = Bundle_typeContext;

SPLParser.prototype.bundle_type = function() {

    var localctx = new Bundle_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SPLParser.RULE_bundle_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(SPLParser.BUNDLETYPE);
        this.state = 191;
        this.match(SPLParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ns_ctxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_ns_ctx;
    return this;
}

Ns_ctxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_ctxContext.prototype.constructor = Ns_ctxContext;

Ns_ctxContext.prototype.CONTEXT = function() {
    return this.getToken(SPLParser.CONTEXT, 0);
};

Ns_ctxContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Ns_ctxContext.prototype.AS = function() {
    return this.getToken(SPLParser.AS, 0);
};

Ns_ctxContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Ns_ctxContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Ns_ctxContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterNs_ctx(this);
	}
};

Ns_ctxContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitNs_ctx(this);
	}
};




SPLParser.Ns_ctxContext = Ns_ctxContext;

SPLParser.prototype.ns_ctx = function() {

    var localctx = new Ns_ctxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SPLParser.RULE_ns_ctx);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(SPLParser.CONTEXT);
        this.state = 194;
        this.match(SPLParser.REGEX);
        this.state = 195;
        this.match(SPLParser.AS);
        this.state = 196;
        this.match(SPLParser.IDENT);
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SPLParser.COMMA) {
            this.state = 197;
            this.match(SPLParser.COMMA);
            this.state = 198;
            this.match(SPLParser.IDENT);
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Begins_withContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_begins_with;
    return this;
}

Begins_withContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Begins_withContext.prototype.constructor = Begins_withContext;

Begins_withContext.prototype.BEGINS = function() {
    return this.getToken(SPLParser.BEGINS, 0);
};

Begins_withContext.prototype.WITH = function() {
    return this.getToken(SPLParser.WITH, 0);
};

Begins_withContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Begins_withContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterBegins_with(this);
	}
};

Begins_withContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitBegins_with(this);
	}
};




SPLParser.Begins_withContext = Begins_withContext;

SPLParser.prototype.begins_with = function() {

    var localctx = new Begins_withContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SPLParser.RULE_begins_with);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(SPLParser.BEGINS);
        this.state = 205;
        this.match(SPLParser.WITH);
        this.state = 206;
        this.match(SPLParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ends_withContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_ends_with;
    return this;
}

Ends_withContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ends_withContext.prototype.constructor = Ends_withContext;

Ends_withContext.prototype.ENDS = function() {
    return this.getToken(SPLParser.ENDS, 0);
};

Ends_withContext.prototype.WITH = function() {
    return this.getToken(SPLParser.WITH, 0);
};

Ends_withContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Ends_withContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterEnds_with(this);
	}
};

Ends_withContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitEnds_with(this);
	}
};




SPLParser.Ends_withContext = Ends_withContext;

SPLParser.prototype.ends_with = function() {

    var localctx = new Ends_withContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SPLParser.RULE_ends_with);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(SPLParser.ENDS);
        this.state = 209;
        this.match(SPLParser.WITH);
        this.state = 210;
        this.match(SPLParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function File_patternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_file_pattern;
    return this;
}

File_patternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
File_patternContext.prototype.constructor = File_patternContext;

File_patternContext.prototype.FILEPATTERN = function() {
    return this.getToken(SPLParser.FILEPATTERN, 0);
};

File_patternContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

File_patternContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterFile_pattern(this);
	}
};

File_patternContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitFile_pattern(this);
	}
};




SPLParser.File_patternContext = File_patternContext;

SPLParser.prototype.file_pattern = function() {

    var localctx = new File_patternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SPLParser.RULE_file_pattern);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(SPLParser.FILEPATTERN);
        this.state = 213;
        this.match(SPLParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_table;
    return this;
}

TableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableContext.prototype.constructor = TableContext;

TableContext.prototype.table_def = function() {
    return this.getTypedRuleContext(Table_defContext,0);
};

TableContext.prototype.icon_def = function() {
    return this.getTypedRuleContext(Icon_defContext,0);
};

TableContext.prototype.add_context = function() {
    return this.getTypedRuleContext(Add_contextContext,0);
};

TableContext.prototype.SEMICOLON = function() {
    return this.getToken(SPLParser.SEMICOLON, 0);
};

TableContext.prototype.set_xml_ns = function() {
    return this.getTypedRuleContext(Set_xml_nsContext,0);
};

TableContext.prototype.multiline = function() {
    return this.getTypedRuleContext(MultilineContext,0);
};

TableContext.prototype.skip_n = function() {
    return this.getTypedRuleContext(Skip_nContext,0);
};

TableContext.prototype.column_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Column_defContext);
    } else {
        return this.getTypedRuleContext(Column_defContext,i);
    }
};

TableContext.prototype.col_op_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Col_op_defContext);
    } else {
        return this.getTypedRuleContext(Col_op_defContext,i);
    }
};

TableContext.prototype.constrain = function() {
    return this.getTypedRuleContext(ConstrainContext,0);
};

TableContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterTable(this);
	}
};

TableContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitTable(this);
	}
};




SPLParser.TableContext = TableContext;

SPLParser.prototype.table = function() {

    var localctx = new TableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SPLParser.RULE_table);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.table_def();
        this.state = 216;
        this.icon_def();
        this.state = 218;
        _la = this._input.LA(1);
        if(_la===SPLParser.SETXMLNAMESPACE) {
            this.state = 217;
            this.set_xml_ns();
        }

        this.state = 221;
        _la = this._input.LA(1);
        if(_la===SPLParser.MULTILINE) {
            this.state = 220;
            this.multiline();
        }

        this.state = 224;
        _la = this._input.LA(1);
        if(_la===SPLParser.SKIP_N) {
            this.state = 223;
            this.skip_n();
        }

        this.state = 227; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 226;
            this.column_def();
            this.state = 229; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.COLUMN);
        this.state = 231;
        this.add_context();
        this.state = 235;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (SPLParser.COLDROP - 50)) | (1 << (SPLParser.COLFILL - 50)) | (1 << (SPLParser.COLJOIN - 50)) | (1 << (SPLParser.COLCOPY - 50)) | (1 << (SPLParser.COLSPLIT - 50)) | (1 << (SPLParser.COLREP - 50)) | (1 << (SPLParser.COLMAP - 50)) | (1 << (SPLParser.COLCALC - 50)) | (1 << (SPLParser.COLCASE - 50)) | (1 << (SPLParser.COLCOUNT - 50)))) !== 0)) {
            this.state = 232;
            this.col_op_def();
            this.state = 237;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 239;
        _la = this._input.LA(1);
        if(_la===SPLParser.CONSTRAIN) {
            this.state = 238;
            this.constrain();
        }

        this.state = 241;
        this.match(SPLParser.SEMICOLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Table_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_table_def;
    return this;
}

Table_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_defContext.prototype.constructor = Table_defContext;

Table_defContext.prototype.DEFINE = function() {
    return this.getToken(SPLParser.DEFINE, 0);
};

Table_defContext.prototype.TABLE = function() {
    return this.getToken(SPLParser.TABLE, 0);
};

Table_defContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Table_defContext.prototype.NAMESPACE = function() {
    return this.getToken(SPLParser.NAMESPACE, 0);
};

Table_defContext.prototype.ns_name = function() {
    return this.getTypedRuleContext(Ns_nameContext,0);
};

Table_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterTable_def(this);
	}
};

Table_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitTable_def(this);
	}
};




SPLParser.Table_defContext = Table_defContext;

SPLParser.prototype.table_def = function() {

    var localctx = new Table_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SPLParser.RULE_table_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(SPLParser.DEFINE);
        this.state = 244;
        this.match(SPLParser.TABLE);
        this.state = 245;
        this.match(SPLParser.IDENT);
        this.state = 246;
        this.match(SPLParser.NAMESPACE);
        this.state = 247;
        this.ns_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_icon_def;
    return this;
}

Icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Icon_defContext.prototype.constructor = Icon_defContext;

Icon_defContext.prototype.ICON = function() {
    return this.getToken(SPLParser.ICON, 0);
};

Icon_defContext.prototype.list_basic_icon_def = function() {
    return this.getTypedRuleContext(List_basic_icon_defContext,0);
};

Icon_defContext.prototype.nvpair_icon_def = function() {
    return this.getTypedRuleContext(Nvpair_icon_defContext,0);
};

Icon_defContext.prototype.aligned_basic_icon_def = function() {
    return this.getTypedRuleContext(Aligned_basic_icon_defContext,0);
};

Icon_defContext.prototype.xml_icon_def = function() {
    return this.getTypedRuleContext(Xml_icon_defContext,0);
};

Icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterIcon_def(this);
	}
};

Icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitIcon_def(this);
	}
};




SPLParser.Icon_defContext = Icon_defContext;

SPLParser.prototype.icon_def = function() {

    var localctx = new Icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SPLParser.RULE_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(SPLParser.ICON);
        this.state = 254;
        switch(this._input.LA(1)) {
        case SPLParser.LIST_BASIC:
            this.state = 250;
            this.list_basic_icon_def();
            break;
        case SPLParser.NV_PAIR:
            this.state = 251;
            this.nvpair_icon_def();
            break;
        case SPLParser.ALIGNED_BASIC:
            this.state = 252;
            this.aligned_basic_icon_def();
            break;
        case SPLParser.XML_BASIC:
            this.state = 253;
            this.xml_icon_def();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function List_basic_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_list_basic_icon_def;
    return this;
}

List_basic_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
List_basic_icon_defContext.prototype.constructor = List_basic_icon_defContext;

List_basic_icon_defContext.prototype.LIST_BASIC = function() {
    return this.getToken(SPLParser.LIST_BASIC, 0);
};

List_basic_icon_defContext.prototype.LINEGRAB = function() {
    return this.getToken(SPLParser.LINEGRAB, 0);
};

List_basic_icon_defContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

List_basic_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterList_basic_icon_def(this);
	}
};

List_basic_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitList_basic_icon_def(this);
	}
};




SPLParser.List_basic_icon_defContext = List_basic_icon_defContext;

SPLParser.prototype.list_basic_icon_def = function() {

    var localctx = new List_basic_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SPLParser.RULE_list_basic_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.match(SPLParser.LIST_BASIC);
        this.state = 257;
        this.match(SPLParser.LINEGRAB);
        this.state = 258;
        this.match(SPLParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Nvpair_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_nvpair_icon_def;
    return this;
}

Nvpair_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Nvpair_icon_defContext.prototype.constructor = Nvpair_icon_defContext;

Nvpair_icon_defContext.prototype.NV_PAIR = function() {
    return this.getToken(SPLParser.NV_PAIR, 0);
};

Nvpair_icon_defContext.prototype.REGEX = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.REGEX);
    } else {
        return this.getToken(SPLParser.REGEX, i);
    }
};


Nvpair_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterNvpair_icon_def(this);
	}
};

Nvpair_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitNvpair_icon_def(this);
	}
};




SPLParser.Nvpair_icon_defContext = Nvpair_icon_defContext;

SPLParser.prototype.nvpair_icon_def = function() {

    var localctx = new Nvpair_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SPLParser.RULE_nvpair_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.match(SPLParser.NV_PAIR);
        this.state = 261;
        this.match(SPLParser.REGEX);
        this.state = 262;
        this.match(SPLParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Aligned_basic_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_aligned_basic_icon_def;
    return this;
}

Aligned_basic_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Aligned_basic_icon_defContext.prototype.constructor = Aligned_basic_icon_defContext;

Aligned_basic_icon_defContext.prototype.ALIGNED_BASIC = function() {
    return this.getToken(SPLParser.ALIGNED_BASIC, 0);
};

Aligned_basic_icon_defContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.QUOTED_LABEL);
    } else {
        return this.getToken(SPLParser.QUOTED_LABEL, i);
    }
};


Aligned_basic_icon_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Aligned_basic_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterAligned_basic_icon_def(this);
	}
};

Aligned_basic_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitAligned_basic_icon_def(this);
	}
};




SPLParser.Aligned_basic_icon_defContext = Aligned_basic_icon_defContext;

SPLParser.prototype.aligned_basic_icon_def = function() {

    var localctx = new Aligned_basic_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SPLParser.RULE_aligned_basic_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(SPLParser.ALIGNED_BASIC);
        this.state = 265;
        this.match(SPLParser.QUOTED_LABEL);
        this.state = 266;
        this.match(SPLParser.COMMA);
        this.state = 267;
        this.match(SPLParser.QUOTED_LABEL);
        this.state = 268;
        this.match(SPLParser.COMMA);
        this.state = 269;
        this.match(SPLParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Xml_icon_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_xml_icon_def;
    return this;
}

Xml_icon_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Xml_icon_defContext.prototype.constructor = Xml_icon_defContext;

Xml_icon_defContext.prototype.XML_BASIC = function() {
    return this.getToken(SPLParser.XML_BASIC, 0);
};

Xml_icon_defContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Xml_icon_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterXml_icon_def(this);
	}
};

Xml_icon_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitXml_icon_def(this);
	}
};




SPLParser.Xml_icon_defContext = Xml_icon_defContext;

SPLParser.prototype.xml_icon_def = function() {

    var localctx = new Xml_icon_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SPLParser.RULE_xml_icon_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(SPLParser.XML_BASIC);
        this.state = 272;
        this.match(SPLParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultilineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_multiline;
    return this;
}

MultilineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultilineContext.prototype.constructor = MultilineContext;

MultilineContext.prototype.MULTILINE = function() {
    return this.getToken(SPLParser.MULTILINE, 0);
};

MultilineContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

MultilineContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

MultilineContext.prototype.NOT = function() {
    return this.getToken(SPLParser.NOT, 0);
};

MultilineContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterMultiline(this);
	}
};

MultilineContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitMultiline(this);
	}
};




SPLParser.MultilineContext = MultilineContext;

SPLParser.prototype.multiline = function() {

    var localctx = new MultilineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SPLParser.RULE_multiline);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(SPLParser.MULTILINE);
        this.state = 276;
        _la = this._input.LA(1);
        if(_la===SPLParser.NOT) {
            this.state = 275;
            this.match(SPLParser.NOT);
        }

        this.state = 278;
        this.match(SPLParser.REGEX);
        this.state = 279;
        this.match(SPLParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Skip_nContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_skip_n;
    return this;
}

Skip_nContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Skip_nContext.prototype.constructor = Skip_nContext;

Skip_nContext.prototype.SKIP_N = function() {
    return this.getToken(SPLParser.SKIP_N, 0);
};

Skip_nContext.prototype.INT = function() {
    return this.getToken(SPLParser.INT, 0);
};

Skip_nContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterSkip_n(this);
	}
};

Skip_nContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitSkip_n(this);
	}
};




SPLParser.Skip_nContext = Skip_nContext;

SPLParser.prototype.skip_n = function() {

    var localctx = new Skip_nContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SPLParser.RULE_skip_n);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(SPLParser.SKIP_N);
        this.state = 282;
        this.match(SPLParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Set_xml_nsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_set_xml_ns;
    return this;
}

Set_xml_nsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_xml_nsContext.prototype.constructor = Set_xml_nsContext;

Set_xml_nsContext.prototype.SETXMLNAMESPACE = function() {
    return this.getToken(SPLParser.SETXMLNAMESPACE, 0);
};

Set_xml_nsContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Set_xml_nsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterSet_xml_ns(this);
	}
};

Set_xml_nsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitSet_xml_ns(this);
	}
};




SPLParser.Set_xml_nsContext = Set_xml_nsContext;

SPLParser.prototype.set_xml_ns = function() {

    var localctx = new Set_xml_nsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SPLParser.RULE_set_xml_ns);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(SPLParser.SETXMLNAMESPACE);
        this.state = 285;
        this.match(SPLParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Add_contextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_add_context;
    return this;
}

Add_contextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Add_contextContext.prototype.constructor = Add_contextContext;

Add_contextContext.prototype.ADD_CONTEXT = function() {
    return this.getToken(SPLParser.ADD_CONTEXT, 0);
};

Add_contextContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

Add_contextContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Add_contextContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

Add_contextContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Add_contextContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterAdd_context(this);
	}
};

Add_contextContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitAdd_context(this);
	}
};




SPLParser.Add_contextContext = Add_contextContext;

SPLParser.prototype.add_context = function() {

    var localctx = new Add_contextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SPLParser.RULE_add_context);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(SPLParser.ADD_CONTEXT);
        this.state = 288;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 289;
        this.match(SPLParser.IDENT);
        this.state = 294;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SPLParser.COMMA) {
            this.state = 290;
            this.match(SPLParser.COMMA);

            this.state = 291;
            this.match(SPLParser.IDENT);
            this.state = 296;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 297;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstrainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_constrain;
    return this;
}

ConstrainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstrainContext.prototype.constructor = ConstrainContext;

ConstrainContext.prototype.CONSTRAIN = function() {
    return this.getToken(SPLParser.CONSTRAIN, 0);
};

ConstrainContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ConstrainContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ConstrainContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


ConstrainContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


ConstrainContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterConstrain(this);
	}
};

ConstrainContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitConstrain(this);
	}
};




SPLParser.ConstrainContext = ConstrainContext;

SPLParser.prototype.constrain = function() {

    var localctx = new ConstrainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SPLParser.RULE_constrain);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.match(SPLParser.CONSTRAIN);
        this.state = 300;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 309;
        _la = this._input.LA(1);
        if(_la===SPLParser.IDENT) {
            this.state = 301;
            this.match(SPLParser.IDENT);
            this.state = 306;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SPLParser.COMMA) {
                this.state = 302;
                this.match(SPLParser.COMMA);

                this.state = 303;
                this.match(SPLParser.IDENT);
                this.state = 308;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 311;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Column_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_column_def;
    return this;
}

Column_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Column_defContext.prototype.constructor = Column_defContext;

Column_defContext.prototype.COLUMN = function() {
    return this.getToken(SPLParser.COLUMN, 0);
};

Column_defContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Column_defContext.prototype.data_type = function() {
    return this.getTypedRuleContext(Data_typeContext,0);
};

Column_defContext.prototype.obj_ref = function() {
    return this.getTypedRuleContext(Obj_refContext,0);
};

Column_defContext.prototype.label_def = function() {
    return this.getTypedRuleContext(Label_defContext,0);
};

Column_defContext.prototype.as_def = function() {
    return this.getTypedRuleContext(As_defContext,0);
};

Column_defContext.prototype.alignment = function() {
    return this.getTypedRuleContext(AlignmentContext,0);
};

Column_defContext.prototype.with_name_def = function() {
    return this.getTypedRuleContext(With_name_defContext,0);
};

Column_defContext.prototype.solr_mapping = function() {
    return this.getTypedRuleContext(Solr_mappingContext,0);
};

Column_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColumn_def(this);
	}
};

Column_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColumn_def(this);
	}
};




SPLParser.Column_defContext = Column_defContext;

SPLParser.prototype.column_def = function() {

    var localctx = new Column_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SPLParser.RULE_column_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this.match(SPLParser.COLUMN);
        this.state = 314;
        this.match(SPLParser.IDENT);
        this.state = 316;
        _la = this._input.LA(1);
        if(_la===SPLParser.OPENPARENTHESIS) {
            this.state = 315;
            this.obj_ref();
        }

        this.state = 318;
        this.data_type();
        this.state = 320;
        _la = this._input.LA(1);
        if(_la===SPLParser.LT) {
            this.state = 319;
            this.label_def();
        }

        this.state = 323;
        _la = this._input.LA(1);
        if(_la===SPLParser.AS) {
            this.state = 322;
            this.as_def();
        }

        this.state = 326;
        _la = this._input.LA(1);
        if(((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (SPLParser.ALIGNED_BASIC_L - 101)) | (1 << (SPLParser.ALIGNED_BASIC_R - 101)) | (1 << (SPLParser.ALIGNED_BASIC_C - 101)))) !== 0)) {
            this.state = 325;
            this.alignment();
        }

        this.state = 329;
        _la = this._input.LA(1);
        if(_la===SPLParser.WITH_NAME) {
            this.state = 328;
            this.with_name_def();
        }

        this.state = 332;
        _la = this._input.LA(1);
        if(_la===SPLParser.WITH) {
            this.state = 331;
            this.solr_mapping();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Obj_refContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_obj_ref;
    return this;
}

Obj_refContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Obj_refContext.prototype.constructor = Obj_refContext;

Obj_refContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

Obj_refContext.prototype.IDENT_DOT = function() {
    return this.getToken(SPLParser.IDENT_DOT, 0);
};

Obj_refContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

Obj_refContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterObj_ref(this);
	}
};

Obj_refContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitObj_ref(this);
	}
};




SPLParser.Obj_refContext = Obj_refContext;

SPLParser.prototype.obj_ref = function() {

    var localctx = new Obj_refContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SPLParser.RULE_obj_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 335;
        this.match(SPLParser.IDENT_DOT);
        this.state = 336;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Data_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_data_type;
    return this;
}

Data_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Data_typeContext.prototype.constructor = Data_typeContext;

Data_typeContext.prototype.OPENSQUARE = function() {
    return this.getToken(SPLParser.OPENSQUARE, 0);
};

Data_typeContext.prototype.DT = function() {
    return this.getToken(SPLParser.DT, 0);
};

Data_typeContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

Data_typeContext.prototype.INT = function() {
    return this.getToken(SPLParser.INT, 0);
};

Data_typeContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

Data_typeContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COLON);
    } else {
        return this.getToken(SPLParser.COLON, i);
    }
};


Data_typeContext.prototype.NULL_DEF = function() {
    return this.getToken(SPLParser.NULL_DEF, 0);
};

Data_typeContext.prototype.CLOSESQUARE = function() {
    return this.getToken(SPLParser.CLOSESQUARE, 0);
};

Data_typeContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

Data_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterData_type(this);
	}
};

Data_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitData_type(this);
	}
};




SPLParser.Data_typeContext = Data_typeContext;

SPLParser.prototype.data_type = function() {

    var localctx = new Data_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SPLParser.RULE_data_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(SPLParser.OPENSQUARE);
        this.state = 339;
        this.match(SPLParser.DT);
        this.state = 340;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 341;
        this.match(SPLParser.INT);
        this.state = 342;
        this.match(SPLParser.CLOSEPARENTHESIS);
        this.state = 343;
        this.match(SPLParser.COLON);
        this.state = 344;
        this.match(SPLParser.NULL_DEF);
        this.state = 347;
        _la = this._input.LA(1);
        if(_la===SPLParser.COLON) {
            this.state = 345;
            this.match(SPLParser.COLON);
            this.state = 346;
            this.match(SPLParser.QUOTED_LABEL);
        }

        this.state = 349;
        this.match(SPLParser.CLOSESQUARE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Label_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_label_def;
    return this;
}

Label_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Label_defContext.prototype.constructor = Label_defContext;

Label_defContext.prototype.LT = function() {
    return this.getToken(SPLParser.LT, 0);
};

Label_defContext.prototype.attrib_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Attrib_defContext);
    } else {
        return this.getTypedRuleContext(Attrib_defContext,i);
    }
};

Label_defContext.prototype.GT = function() {
    return this.getToken(SPLParser.GT, 0);
};

Label_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Label_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterLabel_def(this);
	}
};

Label_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitLabel_def(this);
	}
};




SPLParser.Label_defContext = Label_defContext;

SPLParser.prototype.label_def = function() {

    var localctx = new Label_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SPLParser.RULE_label_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 351;
        this.match(SPLParser.LT);
        this.state = 352;
        this.attrib_def();
        this.state = 357;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SPLParser.COMMA) {
            this.state = 353;
            this.match(SPLParser.COMMA);
            this.state = 354;
            this.attrib_def();
            this.state = 359;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 360;
        this.match(SPLParser.GT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attrib_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_attrib_def;
    return this;
}

Attrib_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attrib_defContext.prototype.constructor = Attrib_defContext;

Attrib_defContext.prototype.colmeta_attrib_name = function() {
    return this.getTypedRuleContext(Colmeta_attrib_nameContext,0);
};

Attrib_defContext.prototype.colmeta_attrib_value = function() {
    return this.getTypedRuleContext(Colmeta_attrib_valueContext,0);
};

Attrib_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterAttrib_def(this);
	}
};

Attrib_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitAttrib_def(this);
	}
};




SPLParser.Attrib_defContext = Attrib_defContext;

SPLParser.prototype.attrib_def = function() {

    var localctx = new Attrib_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SPLParser.RULE_attrib_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        this.colmeta_attrib_name();
        this.state = 363;
        this.colmeta_attrib_value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colmeta_attrib_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colmeta_attrib_name;
    return this;
}

Colmeta_attrib_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colmeta_attrib_nameContext.prototype.constructor = Colmeta_attrib_nameContext;

Colmeta_attrib_nameContext.prototype.COLMETA_LABEL = function() {
    return this.getToken(SPLParser.COLMETA_LABEL, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SYSID1 = function() {
    return this.getToken(SPLParser.COLMETA_SYSID1, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SYSID2 = function() {
    return this.getToken(SPLParser.COLMETA_SYSID2, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SYSID3 = function() {
    return this.getToken(SPLParser.COLMETA_SYSID3, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESSID1 = function() {
    return this.getToken(SPLParser.COLMETA_SESSID1, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESSID2 = function() {
    return this.getToken(SPLParser.COLMETA_SESSID2, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESSID3 = function() {
    return this.getToken(SPLParser.COLMETA_SESSID3, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESS_NAME = function() {
    return this.getToken(SPLParser.COLMETA_SESS_NAME, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESS_ATTR = function() {
    return this.getToken(SPLParser.COLMETA_SESS_ATTR, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SESS_COUNT = function() {
    return this.getToken(SPLParser.COLMETA_SESS_COUNT, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_FILENAME = function() {
    return this.getToken(SPLParser.COLMETA_FILENAME, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_CONTENT = function() {
    return this.getToken(SPLParser.COLMETA_CONTENT, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_FRAGMENT_ID = function() {
    return this.getToken(SPLParser.COLMETA_FRAGMENT_ID, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_OBSURL = function() {
    return this.getToken(SPLParser.COLMETA_OBSURL, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_OBSSIZE = function() {
    return this.getToken(SPLParser.COLMETA_OBSSIZE, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_UPLOADEDBY = function() {
    return this.getToken(SPLParser.COLMETA_UPLOADEDBY, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_FACET = function() {
    return this.getToken(SPLParser.COLMETA_FACET, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_SEVERITY = function() {
    return this.getToken(SPLParser.COLMETA_SEVERITY, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_UNITS = function() {
    return this.getToken(SPLParser.COLMETA_UNITS, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_BEGIN_OFFSET = function() {
    return this.getToken(SPLParser.COLMETA_BEGIN_OFFSET, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_NAMESPACE = function() {
    return this.getToken(SPLParser.COLMETA_NAMESPACE, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_TYPE = function() {
    return this.getToken(SPLParser.COLMETA_TYPE, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_TS = function() {
    return this.getToken(SPLParser.COLMETA_TS, 0);
};

Colmeta_attrib_nameContext.prototype.COLMETA_LINKED = function() {
    return this.getToken(SPLParser.COLMETA_LINKED, 0);
};

Colmeta_attrib_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColmeta_attrib_name(this);
	}
};

Colmeta_attrib_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColmeta_attrib_name(this);
	}
};




SPLParser.Colmeta_attrib_nameContext = Colmeta_attrib_nameContext;

SPLParser.prototype.colmeta_attrib_name = function() {

    var localctx = new Colmeta_attrib_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SPLParser.RULE_colmeta_attrib_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        switch(this._input.LA(1)) {
        case SPLParser.COLMETA_LABEL:
            this.state = 365;
            this.match(SPLParser.COLMETA_LABEL);
            break;
        case SPLParser.COLMETA_SYSID1:
            this.state = 366;
            this.match(SPLParser.COLMETA_SYSID1);
            break;
        case SPLParser.COLMETA_SYSID2:
            this.state = 367;
            this.match(SPLParser.COLMETA_SYSID2);
            break;
        case SPLParser.COLMETA_SYSID3:
            this.state = 368;
            this.match(SPLParser.COLMETA_SYSID3);
            break;
        case SPLParser.COLMETA_SESSID1:
            this.state = 369;
            this.match(SPLParser.COLMETA_SESSID1);
            break;
        case SPLParser.COLMETA_SESSID2:
            this.state = 370;
            this.match(SPLParser.COLMETA_SESSID2);
            break;
        case SPLParser.COLMETA_SESSID3:
            this.state = 371;
            this.match(SPLParser.COLMETA_SESSID3);
            break;
        case SPLParser.COLMETA_SESS_NAME:
            this.state = 372;
            this.match(SPLParser.COLMETA_SESS_NAME);
            break;
        case SPLParser.COLMETA_SESS_ATTR:
            this.state = 373;
            this.match(SPLParser.COLMETA_SESS_ATTR);
            break;
        case SPLParser.COLMETA_SESS_COUNT:
            this.state = 374;
            this.match(SPLParser.COLMETA_SESS_COUNT);
            break;
        case SPLParser.COLMETA_FILENAME:
            this.state = 375;
            this.match(SPLParser.COLMETA_FILENAME);
            break;
        case SPLParser.COLMETA_CONTENT:
            this.state = 376;
            this.match(SPLParser.COLMETA_CONTENT);
            break;
        case SPLParser.COLMETA_FRAGMENT_ID:
            this.state = 377;
            this.match(SPLParser.COLMETA_FRAGMENT_ID);
            break;
        case SPLParser.COLMETA_OBSURL:
            this.state = 378;
            this.match(SPLParser.COLMETA_OBSURL);
            break;
        case SPLParser.COLMETA_OBSSIZE:
            this.state = 379;
            this.match(SPLParser.COLMETA_OBSSIZE);
            break;
        case SPLParser.COLMETA_UPLOADEDBY:
            this.state = 380;
            this.match(SPLParser.COLMETA_UPLOADEDBY);
            break;
        case SPLParser.COLMETA_FACET:
            this.state = 381;
            this.match(SPLParser.COLMETA_FACET);
            break;
        case SPLParser.COLMETA_SEVERITY:
            this.state = 382;
            this.match(SPLParser.COLMETA_SEVERITY);
            break;
        case SPLParser.COLMETA_UNITS:
            this.state = 383;
            this.match(SPLParser.COLMETA_UNITS);
            break;
        case SPLParser.COLMETA_BEGIN_OFFSET:
            this.state = 384;
            this.match(SPLParser.COLMETA_BEGIN_OFFSET);
            break;
        case SPLParser.COLMETA_NAMESPACE:
            this.state = 385;
            this.match(SPLParser.COLMETA_NAMESPACE);
            break;
        case SPLParser.COLMETA_TYPE:
            this.state = 386;
            this.match(SPLParser.COLMETA_TYPE);
            break;
        case SPLParser.COLMETA_TS:
            this.state = 387;
            this.match(SPLParser.COLMETA_TS);
            break;
        case SPLParser.COLMETA_LINKED:
            this.state = 388;
            this.match(SPLParser.COLMETA_LINKED);
            break;
        case SPLParser.INT:
        case SPLParser.QUOTED_LABEL:
        case SPLParser.IDENT:
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colmeta_attrib_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colmeta_attrib_value;
    return this;
}

Colmeta_attrib_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colmeta_attrib_valueContext.prototype.constructor = Colmeta_attrib_valueContext;

Colmeta_attrib_valueContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

Colmeta_attrib_valueContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Colmeta_attrib_valueContext.prototype.INT = function() {
    return this.getToken(SPLParser.INT, 0);
};

Colmeta_attrib_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColmeta_attrib_value(this);
	}
};

Colmeta_attrib_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColmeta_attrib_value(this);
	}
};




SPLParser.Colmeta_attrib_valueContext = Colmeta_attrib_valueContext;

SPLParser.prototype.colmeta_attrib_value = function() {

    var localctx = new Colmeta_attrib_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SPLParser.RULE_colmeta_attrib_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        _la = this._input.LA(1);
        if(!(_la===SPLParser.INT || _la===SPLParser.QUOTED_LABEL || _la===SPLParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function As_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_as_def;
    return this;
}

As_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
As_defContext.prototype.constructor = As_defContext;

As_defContext.prototype.AS = function() {
    return this.getToken(SPLParser.AS, 0);
};

As_defContext.prototype.INT = function() {
    return this.getToken(SPLParser.INT, 0);
};

As_defContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

As_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterAs_def(this);
	}
};

As_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitAs_def(this);
	}
};




SPLParser.As_defContext = As_defContext;

SPLParser.prototype.as_def = function() {

    var localctx = new As_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SPLParser.RULE_as_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(SPLParser.AS);
        this.state = 395;
        _la = this._input.LA(1);
        if(!(_la===SPLParser.INT || _la===SPLParser.QUOTED_LABEL)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function With_name_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_with_name_def;
    return this;
}

With_name_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
With_name_defContext.prototype.constructor = With_name_defContext;

With_name_defContext.prototype.WITH_NAME = function() {
    return this.getToken(SPLParser.WITH_NAME, 0);
};

With_name_defContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

With_name_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterWith_name_def(this);
	}
};

With_name_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitWith_name_def(this);
	}
};




SPLParser.With_name_defContext = With_name_defContext;

SPLParser.prototype.with_name_def = function() {

    var localctx = new With_name_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SPLParser.RULE_with_name_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397;
        this.match(SPLParser.WITH_NAME);
        this.state = 398;
        this.match(SPLParser.QUOTED_LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Solr_mappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_solr_mapping;
    return this;
}

Solr_mappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Solr_mappingContext.prototype.constructor = Solr_mappingContext;

Solr_mappingContext.prototype.WITH = function() {
    return this.getToken(SPLParser.WITH, 0);
};

Solr_mappingContext.prototype.SOLRMAPPING = function() {
    return this.getToken(SPLParser.SOLRMAPPING, 0);
};

Solr_mappingContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

Solr_mappingContext.prototype.solr_mapping_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Solr_mapping_defContext);
    } else {
        return this.getTypedRuleContext(Solr_mapping_defContext,i);
    }
};

Solr_mappingContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

Solr_mappingContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Solr_mappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterSolr_mapping(this);
	}
};

Solr_mappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitSolr_mapping(this);
	}
};




SPLParser.Solr_mappingContext = Solr_mappingContext;

SPLParser.prototype.solr_mapping = function() {

    var localctx = new Solr_mappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SPLParser.RULE_solr_mapping);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 400;
        this.match(SPLParser.WITH);
        this.state = 401;
        this.match(SPLParser.SOLRMAPPING);
        this.state = 402;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 403;
        this.solr_mapping_def();
        this.state = 408;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SPLParser.COMMA) {
            this.state = 404;
            this.match(SPLParser.COMMA);
            this.state = 405;
            this.solr_mapping_def();
            this.state = 410;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 411;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Solr_mapping_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_solr_mapping_def;
    return this;
}

Solr_mapping_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Solr_mapping_defContext.prototype.constructor = Solr_mapping_defContext;

Solr_mapping_defContext.prototype.solr_mapping_attr_name = function() {
    return this.getTypedRuleContext(Solr_mapping_attr_nameContext,0);
};

Solr_mapping_defContext.prototype.solr_mapping_attr_value = function() {
    return this.getTypedRuleContext(Solr_mapping_attr_valueContext,0);
};

Solr_mapping_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterSolr_mapping_def(this);
	}
};

Solr_mapping_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitSolr_mapping_def(this);
	}
};




SPLParser.Solr_mapping_defContext = Solr_mapping_defContext;

SPLParser.prototype.solr_mapping_def = function() {

    var localctx = new Solr_mapping_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SPLParser.RULE_solr_mapping_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this.solr_mapping_attr_name();
        this.state = 414;
        this.solr_mapping_attr_value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Solr_mapping_attr_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_solr_mapping_attr_name;
    return this;
}

Solr_mapping_attr_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Solr_mapping_attr_nameContext.prototype.constructor = Solr_mapping_attr_nameContext;

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_NAME = function() {
    return this.getToken(SPLParser.SOLRMAPPING_NAME, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_DATATYPE = function() {
    return this.getToken(SPLParser.SOLRMAPPING_DATATYPE, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_UNIQFLDEF = function() {
    return this.getToken(SPLParser.SOLRMAPPING_UNIQFLDEF, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_MULTIVALUED = function() {
    return this.getToken(SPLParser.SOLRMAPPING_MULTIVALUED, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_OMITNORMS = function() {
    return this.getToken(SPLParser.SOLRMAPPING_OMITNORMS, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_STORETV = function() {
    return this.getToken(SPLParser.SOLRMAPPING_STORETV, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_STORETP = function() {
    return this.getToken(SPLParser.SOLRMAPPING_STORETP, 0);
};

Solr_mapping_attr_nameContext.prototype.SOLRMAPPING_STORETO = function() {
    return this.getToken(SPLParser.SOLRMAPPING_STORETO, 0);
};

Solr_mapping_attr_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterSolr_mapping_attr_name(this);
	}
};

Solr_mapping_attr_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitSolr_mapping_attr_name(this);
	}
};




SPLParser.Solr_mapping_attr_nameContext = Solr_mapping_attr_nameContext;

SPLParser.prototype.solr_mapping_attr_name = function() {

    var localctx = new Solr_mapping_attr_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SPLParser.RULE_solr_mapping_attr_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        _la = this._input.LA(1);
        if(!(((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (SPLParser.SOLRMAPPING_NAME - 69)) | (1 << (SPLParser.SOLRMAPPING_DATATYPE - 69)) | (1 << (SPLParser.SOLRMAPPING_MULTIVALUED - 69)) | (1 << (SPLParser.SOLRMAPPING_UNIQFLDEF - 69)) | (1 << (SPLParser.SOLRMAPPING_OMITNORMS - 69)) | (1 << (SPLParser.SOLRMAPPING_STORETV - 69)) | (1 << (SPLParser.SOLRMAPPING_STORETP - 69)) | (1 << (SPLParser.SOLRMAPPING_STORETO - 69)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Solr_mapping_attr_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_solr_mapping_attr_value;
    return this;
}

Solr_mapping_attr_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Solr_mapping_attr_valueContext.prototype.constructor = Solr_mapping_attr_valueContext;

Solr_mapping_attr_valueContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

Solr_mapping_attr_valueContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Solr_mapping_attr_valueContext.prototype.INT = function() {
    return this.getToken(SPLParser.INT, 0);
};

Solr_mapping_attr_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterSolr_mapping_attr_value(this);
	}
};

Solr_mapping_attr_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitSolr_mapping_attr_value(this);
	}
};




SPLParser.Solr_mapping_attr_valueContext = Solr_mapping_attr_valueContext;

SPLParser.prototype.solr_mapping_attr_value = function() {

    var localctx = new Solr_mapping_attr_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SPLParser.RULE_solr_mapping_attr_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 418;
        _la = this._input.LA(1);
        if(!(_la===SPLParser.INT || _la===SPLParser.QUOTED_LABEL || _la===SPLParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AlignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_alignment;
    return this;
}

AlignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlignmentContext.prototype.constructor = AlignmentContext;

AlignmentContext.prototype.ALIGNED_BASIC_L = function() {
    return this.getToken(SPLParser.ALIGNED_BASIC_L, 0);
};

AlignmentContext.prototype.ALIGNED_BASIC_R = function() {
    return this.getToken(SPLParser.ALIGNED_BASIC_R, 0);
};

AlignmentContext.prototype.ALIGNED_BASIC_C = function() {
    return this.getToken(SPLParser.ALIGNED_BASIC_C, 0);
};

AlignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterAlignment(this);
	}
};

AlignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitAlignment(this);
	}
};




SPLParser.AlignmentContext = AlignmentContext;

SPLParser.prototype.alignment = function() {

    var localctx = new AlignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SPLParser.RULE_alignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 420;
        _la = this._input.LA(1);
        if(!(((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (SPLParser.ALIGNED_BASIC_L - 101)) | (1 << (SPLParser.ALIGNED_BASIC_R - 101)) | (1 << (SPLParser.ALIGNED_BASIC_C - 101)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Generic_colop_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_generic_colop_def;
    return this;
}

Generic_colop_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Generic_colop_defContext.prototype.constructor = Generic_colop_defContext;

Generic_colop_defContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Generic_colop_defContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

Generic_colop_defContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

Generic_colop_defContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Generic_colop_defContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.QUOTED_LABEL);
    } else {
        return this.getToken(SPLParser.QUOTED_LABEL, i);
    }
};


Generic_colop_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterGeneric_colop_def(this);
	}
};

Generic_colop_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitGeneric_colop_def(this);
	}
};




SPLParser.Generic_colop_defContext = Generic_colop_defContext;

SPLParser.prototype.generic_colop_def = function() {

    var localctx = new Generic_colop_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SPLParser.RULE_generic_colop_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 422;
        this.match(SPLParser.IDENT);
        this.state = 423;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 424;
        this.match(SPLParser.IDENT);
        this.state = 427; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 425;
            this.match(SPLParser.COMMA);
            this.state = 426;
            _la = this._input.LA(1);
            if(!(_la===SPLParser.QUOTED_LABEL || _la===SPLParser.IDENT)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 429; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.COMMA);
        this.state = 431;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Col_op_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_col_op_def;
    return this;
}

Col_op_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Col_op_defContext.prototype.constructor = Col_op_defContext;

Col_op_defContext.prototype.colcopy = function() {
    return this.getTypedRuleContext(ColcopyContext,0);
};

Col_op_defContext.prototype.colcount = function() {
    return this.getTypedRuleContext(ColcountContext,0);
};

Col_op_defContext.prototype.coljoin = function() {
    return this.getTypedRuleContext(ColjoinContext,0);
};

Col_op_defContext.prototype.colcalc = function() {
    return this.getTypedRuleContext(ColcalcContext,0);
};

Col_op_defContext.prototype.colsplit = function() {
    return this.getTypedRuleContext(ColsplitContext,0);
};

Col_op_defContext.prototype.colrep = function() {
    return this.getTypedRuleContext(ColrepContext,0);
};

Col_op_defContext.prototype.colfill = function() {
    return this.getTypedRuleContext(ColfillContext,0);
};

Col_op_defContext.prototype.colmap = function() {
    return this.getTypedRuleContext(ColmapContext,0);
};

Col_op_defContext.prototype.coldrop = function() {
    return this.getTypedRuleContext(ColdropContext,0);
};

Col_op_defContext.prototype.colcase = function() {
    return this.getTypedRuleContext(ColcaseContext,0);
};

Col_op_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterCol_op_def(this);
	}
};

Col_op_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitCol_op_def(this);
	}
};




SPLParser.Col_op_defContext = Col_op_defContext;

SPLParser.prototype.col_op_def = function() {

    var localctx = new Col_op_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SPLParser.RULE_col_op_def);
    try {
        this.state = 443;
        switch(this._input.LA(1)) {
        case SPLParser.COLCOPY:
            this.enterOuterAlt(localctx, 1);
            this.state = 433;
            this.colcopy();
            break;
        case SPLParser.COLCOUNT:
            this.enterOuterAlt(localctx, 2);
            this.state = 434;
            this.colcount();
            break;
        case SPLParser.COLJOIN:
            this.enterOuterAlt(localctx, 3);
            this.state = 435;
            this.coljoin();
            break;
        case SPLParser.COLCALC:
            this.enterOuterAlt(localctx, 4);
            this.state = 436;
            this.colcalc();
            break;
        case SPLParser.COLSPLIT:
            this.enterOuterAlt(localctx, 5);
            this.state = 437;
            this.colsplit();
            break;
        case SPLParser.COLREP:
            this.enterOuterAlt(localctx, 6);
            this.state = 438;
            this.colrep();
            break;
        case SPLParser.COLFILL:
            this.enterOuterAlt(localctx, 7);
            this.state = 439;
            this.colfill();
            break;
        case SPLParser.COLMAP:
            this.enterOuterAlt(localctx, 8);
            this.state = 440;
            this.colmap();
            break;
        case SPLParser.COLDROP:
            this.enterOuterAlt(localctx, 9);
            this.state = 441;
            this.coldrop();
            break;
        case SPLParser.COLCASE:
            this.enterOuterAlt(localctx, 10);
            this.state = 442;
            this.colcase();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColcopyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcopy;
    return this;
}

ColcopyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColcopyContext.prototype.constructor = ColcopyContext;

ColcopyContext.prototype.COLCOPY = function() {
    return this.getToken(SPLParser.COLCOPY, 0);
};

ColcopyContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColcopyContext.prototype.colcopy_param = function() {
    return this.getTypedRuleContext(Colcopy_paramContext,0);
};

ColcopyContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColcopyContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcopy(this);
	}
};

ColcopyContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcopy(this);
	}
};




SPLParser.ColcopyContext = ColcopyContext;

SPLParser.prototype.colcopy = function() {

    var localctx = new ColcopyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SPLParser.RULE_colcopy);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(SPLParser.COLCOPY);
        this.state = 446;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 447;
        this.colcopy_param();
        this.state = 448;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcopy_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcopy_param;
    return this;
}

Colcopy_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcopy_paramContext.prototype.constructor = Colcopy_paramContext;

Colcopy_paramContext.prototype.COMMA = function() {
    return this.getToken(SPLParser.COMMA, 0);
};

Colcopy_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Colcopy_paramContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

Colcopy_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcopy_param(this);
	}
};

Colcopy_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcopy_param(this);
	}
};




SPLParser.Colcopy_paramContext = Colcopy_paramContext;

SPLParser.prototype.colcopy_param = function() {

    var localctx = new Colcopy_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SPLParser.RULE_colcopy_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 450;
        _la = this._input.LA(1);
        if(!(_la===SPLParser.QUOTED_LABEL || _la===SPLParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 451;
        this.match(SPLParser.COMMA);
        this.state = 452;
        this.match(SPLParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColjoinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_coljoin;
    return this;
}

ColjoinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColjoinContext.prototype.constructor = ColjoinContext;

ColjoinContext.prototype.COLJOIN = function() {
    return this.getToken(SPLParser.COLJOIN, 0);
};

ColjoinContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColjoinContext.prototype.coljoin_param = function() {
    return this.getTypedRuleContext(Coljoin_paramContext,0);
};

ColjoinContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColjoinContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColjoin(this);
	}
};

ColjoinContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColjoin(this);
	}
};




SPLParser.ColjoinContext = ColjoinContext;

SPLParser.prototype.coljoin = function() {

    var localctx = new ColjoinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SPLParser.RULE_coljoin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 454;
        this.match(SPLParser.COLJOIN);
        this.state = 455;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 456;
        this.coljoin_param();
        this.state = 457;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Coljoin_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_coljoin_param;
    return this;
}

Coljoin_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Coljoin_paramContext.prototype.constructor = Coljoin_paramContext;

Coljoin_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Coljoin_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Coljoin_paramContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.QUOTED_LABEL);
    } else {
        return this.getToken(SPLParser.QUOTED_LABEL, i);
    }
};


Coljoin_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColjoin_param(this);
	}
};

Coljoin_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColjoin_param(this);
	}
};




SPLParser.Coljoin_paramContext = Coljoin_paramContext;

SPLParser.prototype.coljoin_param = function() {

    var localctx = new Coljoin_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SPLParser.RULE_coljoin_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 459;
        this.match(SPLParser.IDENT);
        this.state = 462; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 460;
            this.match(SPLParser.COMMA);
            this.state = 461;
            _la = this._input.LA(1);
            if(!(_la===SPLParser.QUOTED_LABEL || _la===SPLParser.IDENT)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 464; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.COMMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColsplitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colsplit;
    return this;
}

ColsplitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColsplitContext.prototype.constructor = ColsplitContext;

ColsplitContext.prototype.COLSPLIT = function() {
    return this.getToken(SPLParser.COLSPLIT, 0);
};

ColsplitContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColsplitContext.prototype.colsplit_param = function() {
    return this.getTypedRuleContext(Colsplit_paramContext,0);
};

ColsplitContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColsplitContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColsplit(this);
	}
};

ColsplitContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColsplit(this);
	}
};




SPLParser.ColsplitContext = ColsplitContext;

SPLParser.prototype.colsplit = function() {

    var localctx = new ColsplitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SPLParser.RULE_colsplit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 466;
        this.match(SPLParser.COLSPLIT);
        this.state = 467;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 468;
        this.colsplit_param();
        this.state = 469;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colsplit_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colsplit_param;
    return this;
}

Colsplit_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colsplit_paramContext.prototype.constructor = Colsplit_paramContext;

Colsplit_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Colsplit_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Colsplit_paramContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Colsplit_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColsplit_param(this);
	}
};

Colsplit_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColsplit_param(this);
	}
};




SPLParser.Colsplit_paramContext = Colsplit_paramContext;

SPLParser.prototype.colsplit_param = function() {

    var localctx = new Colsplit_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SPLParser.RULE_colsplit_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        this.match(SPLParser.IDENT);
        this.state = 472;
        this.match(SPLParser.COMMA);
        this.state = 473;
        this.match(SPLParser.REGEX);
        this.state = 476; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 474;
            this.match(SPLParser.COMMA);

            this.state = 475;
            this.match(SPLParser.IDENT);
            this.state = 478; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.COMMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColrepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colrep;
    return this;
}

ColrepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColrepContext.prototype.constructor = ColrepContext;

ColrepContext.prototype.COLREP = function() {
    return this.getToken(SPLParser.COLREP, 0);
};

ColrepContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColrepContext.prototype.colrep_param = function() {
    return this.getTypedRuleContext(Colrep_paramContext,0);
};

ColrepContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColrepContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColrep(this);
	}
};

ColrepContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColrep(this);
	}
};




SPLParser.ColrepContext = ColrepContext;

SPLParser.prototype.colrep = function() {

    var localctx = new ColrepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SPLParser.RULE_colrep);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 480;
        this.match(SPLParser.COLREP);
        this.state = 481;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 482;
        this.colrep_param();
        this.state = 483;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colrep_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colrep_param;
    return this;
}

Colrep_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colrep_paramContext.prototype.constructor = Colrep_paramContext;

Colrep_paramContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Colrep_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Colrep_paramContext.prototype.QUOTED_LABEL = function() {
    return this.getToken(SPLParser.QUOTED_LABEL, 0);
};

Colrep_paramContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Colrep_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColrep_param(this);
	}
};

Colrep_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColrep_param(this);
	}
};




SPLParser.Colrep_paramContext = Colrep_paramContext;

SPLParser.prototype.colrep_param = function() {

    var localctx = new Colrep_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SPLParser.RULE_colrep_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 485;
        this.match(SPLParser.REGEX);
        this.state = 486;
        this.match(SPLParser.COMMA);
        this.state = 487;
        this.match(SPLParser.QUOTED_LABEL);
        this.state = 488;
        this.match(SPLParser.COMMA);
        this.state = 489;
        this.match(SPLParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColfillContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colfill;
    return this;
}

ColfillContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColfillContext.prototype.constructor = ColfillContext;

ColfillContext.prototype.COLFILL = function() {
    return this.getToken(SPLParser.COLFILL, 0);
};

ColfillContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColfillContext.prototype.colfill_param = function() {
    return this.getTypedRuleContext(Colfill_paramContext,0);
};

ColfillContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColfillContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColfill(this);
	}
};

ColfillContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColfill(this);
	}
};




SPLParser.ColfillContext = ColfillContext;

SPLParser.prototype.colfill = function() {

    var localctx = new ColfillContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SPLParser.RULE_colfill);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 491;
        this.match(SPLParser.COLFILL);
        this.state = 492;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 493;
        this.colfill_param();
        this.state = 494;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colfill_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colfill_param;
    return this;
}

Colfill_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colfill_paramContext.prototype.constructor = Colfill_paramContext;

Colfill_paramContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Colfill_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColfill_param(this);
	}
};

Colfill_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColfill_param(this);
	}
};




SPLParser.Colfill_paramContext = Colfill_paramContext;

SPLParser.prototype.colfill_param = function() {

    var localctx = new Colfill_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SPLParser.RULE_colfill_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 496;
        this.match(SPLParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColmapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colmap;
    return this;
}

ColmapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColmapContext.prototype.constructor = ColmapContext;

ColmapContext.prototype.COLMAP = function() {
    return this.getToken(SPLParser.COLMAP, 0);
};

ColmapContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColmapContext.prototype.colmap_param = function() {
    return this.getTypedRuleContext(Colmap_paramContext,0);
};

ColmapContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColmapContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColmap(this);
	}
};

ColmapContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColmap(this);
	}
};




SPLParser.ColmapContext = ColmapContext;

SPLParser.prototype.colmap = function() {

    var localctx = new ColmapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, SPLParser.RULE_colmap);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 498;
        this.match(SPLParser.COLMAP);
        this.state = 499;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 500;
        this.colmap_param();
        this.state = 501;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colmap_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colmap_param;
    return this;
}

Colmap_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colmap_paramContext.prototype.constructor = Colmap_paramContext;

Colmap_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Colmap_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Colmap_paramContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Colmap_paramContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.QUOTED_LABEL);
    } else {
        return this.getToken(SPLParser.QUOTED_LABEL, i);
    }
};


Colmap_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColmap_param(this);
	}
};

Colmap_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColmap_param(this);
	}
};




SPLParser.Colmap_paramContext = Colmap_paramContext;

SPLParser.prototype.colmap_param = function() {

    var localctx = new Colmap_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SPLParser.RULE_colmap_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 503;
        this.match(SPLParser.IDENT);
        this.state = 504;
        this.match(SPLParser.COMMA);
        this.state = 505;
        this.match(SPLParser.IDENT);
        this.state = 506;
        this.match(SPLParser.COMMA);
        this.state = 507;
        this.match(SPLParser.REGEX);
        this.state = 510; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 508;
            this.match(SPLParser.COMMA);
            this.state = 509;
            _la = this._input.LA(1);
            if(!(_la===SPLParser.QUOTED_LABEL || _la===SPLParser.IDENT)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 512; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.COMMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColcalcContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcalc;
    return this;
}

ColcalcContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColcalcContext.prototype.constructor = ColcalcContext;

ColcalcContext.prototype.COLCALC = function() {
    return this.getToken(SPLParser.COLCALC, 0);
};

ColcalcContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColcalcContext.prototype.colcalc_param = function() {
    return this.getTypedRuleContext(Colcalc_paramContext,0);
};

ColcalcContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColcalcContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcalc(this);
	}
};

ColcalcContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcalc(this);
	}
};




SPLParser.ColcalcContext = ColcalcContext;

SPLParser.prototype.colcalc = function() {

    var localctx = new ColcalcContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, SPLParser.RULE_colcalc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 514;
        this.match(SPLParser.COLCALC);
        this.state = 515;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 516;
        this.colcalc_param();
        this.state = 517;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcalc_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcalc_param;
    return this;
}

Colcalc_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcalc_paramContext.prototype.constructor = Colcalc_paramContext;

Colcalc_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Colcalc_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Colcalc_paramContext.prototype.FUNCTION = function() {
    return this.getToken(SPLParser.FUNCTION, 0);
};

Colcalc_paramContext.prototype.QUOTED_LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.QUOTED_LABEL);
    } else {
        return this.getToken(SPLParser.QUOTED_LABEL, i);
    }
};


Colcalc_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcalc_param(this);
	}
};

Colcalc_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcalc_param(this);
	}
};




SPLParser.Colcalc_paramContext = Colcalc_paramContext;

SPLParser.prototype.colcalc_param = function() {

    var localctx = new Colcalc_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, SPLParser.RULE_colcalc_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 519;
        this.match(SPLParser.IDENT);
        this.state = 520;
        this.match(SPLParser.COMMA);
        this.state = 521;
        this.match(SPLParser.FUNCTION);
        this.state = 524; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 522;
            this.match(SPLParser.COMMA);
            this.state = 523;
            _la = this._input.LA(1);
            if(!(_la===SPLParser.QUOTED_LABEL || _la===SPLParser.IDENT)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 526; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.COMMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColcountContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcount;
    return this;
}

ColcountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColcountContext.prototype.constructor = ColcountContext;

ColcountContext.prototype.COLCOUNT = function() {
    return this.getToken(SPLParser.COLCOUNT, 0);
};

ColcountContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColcountContext.prototype.colcount_param = function() {
    return this.getTypedRuleContext(Colcount_paramContext,0);
};

ColcountContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColcountContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcount(this);
	}
};

ColcountContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcount(this);
	}
};




SPLParser.ColcountContext = ColcountContext;

SPLParser.prototype.colcount = function() {

    var localctx = new ColcountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, SPLParser.RULE_colcount);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 528;
        this.match(SPLParser.COLCOUNT);
        this.state = 529;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 530;
        this.colcount_param();
        this.state = 531;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcount_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcount_param;
    return this;
}

Colcount_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcount_paramContext.prototype.constructor = Colcount_paramContext;

Colcount_paramContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.IDENT);
    } else {
        return this.getToken(SPLParser.IDENT, i);
    }
};


Colcount_paramContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SPLParser.COMMA);
    } else {
        return this.getToken(SPLParser.COMMA, i);
    }
};


Colcount_paramContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Colcount_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcount_param(this);
	}
};

Colcount_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcount_param(this);
	}
};




SPLParser.Colcount_paramContext = Colcount_paramContext;

SPLParser.prototype.colcount_param = function() {

    var localctx = new Colcount_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, SPLParser.RULE_colcount_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 533;
        this.match(SPLParser.IDENT);
        this.state = 534;
        this.match(SPLParser.COMMA);
        this.state = 535;
        this.match(SPLParser.REGEX);
        this.state = 536;
        this.match(SPLParser.COMMA);
        this.state = 537;
        this.match(SPLParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColdropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_coldrop;
    return this;
}

ColdropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColdropContext.prototype.constructor = ColdropContext;

ColdropContext.prototype.COLDROP = function() {
    return this.getToken(SPLParser.COLDROP, 0);
};

ColdropContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColdropContext.prototype.coldrop_param = function() {
    return this.getTypedRuleContext(Coldrop_paramContext,0);
};

ColdropContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColdropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColdrop(this);
	}
};

ColdropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColdrop(this);
	}
};




SPLParser.ColdropContext = ColdropContext;

SPLParser.prototype.coldrop = function() {

    var localctx = new ColdropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, SPLParser.RULE_coldrop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 539;
        this.match(SPLParser.COLDROP);
        this.state = 540;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 541;
        this.coldrop_param();
        this.state = 542;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Coldrop_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_coldrop_param;
    return this;
}

Coldrop_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Coldrop_paramContext.prototype.constructor = Coldrop_paramContext;

Coldrop_paramContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Coldrop_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColdrop_param(this);
	}
};

Coldrop_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColdrop_param(this);
	}
};




SPLParser.Coldrop_paramContext = Coldrop_paramContext;

SPLParser.prototype.coldrop_param = function() {

    var localctx = new Coldrop_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, SPLParser.RULE_coldrop_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 544;
        this.match(SPLParser.IDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColwhenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colwhen;
    return this;
}

ColwhenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColwhenContext.prototype.constructor = ColwhenContext;

ColwhenContext.prototype.COLWHEN = function() {
    return this.getToken(SPLParser.COLWHEN, 0);
};

ColwhenContext.prototype.OPENPARENTHESIS = function() {
    return this.getToken(SPLParser.OPENPARENTHESIS, 0);
};

ColwhenContext.prototype.colwhen_param = function() {
    return this.getTypedRuleContext(Colwhen_paramContext,0);
};

ColwhenContext.prototype.CLOSEPARENTHESIS = function() {
    return this.getToken(SPLParser.CLOSEPARENTHESIS, 0);
};

ColwhenContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColwhen(this);
	}
};

ColwhenContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColwhen(this);
	}
};




SPLParser.ColwhenContext = ColwhenContext;

SPLParser.prototype.colwhen = function() {

    var localctx = new ColwhenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, SPLParser.RULE_colwhen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 546;
        this.match(SPLParser.COLWHEN);
        this.state = 547;
        this.match(SPLParser.OPENPARENTHESIS);
        this.state = 548;
        this.colwhen_param();
        this.state = 549;
        this.match(SPLParser.CLOSEPARENTHESIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colwhen_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colwhen_param;
    return this;
}

Colwhen_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colwhen_paramContext.prototype.constructor = Colwhen_paramContext;

Colwhen_paramContext.prototype.IDENT = function() {
    return this.getToken(SPLParser.IDENT, 0);
};

Colwhen_paramContext.prototype.COMMA = function() {
    return this.getToken(SPLParser.COMMA, 0);
};

Colwhen_paramContext.prototype.REGEX = function() {
    return this.getToken(SPLParser.REGEX, 0);
};

Colwhen_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColwhen_param(this);
	}
};

Colwhen_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColwhen_param(this);
	}
};




SPLParser.Colwhen_paramContext = Colwhen_paramContext;

SPLParser.prototype.colwhen_param = function() {

    var localctx = new Colwhen_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, SPLParser.RULE_colwhen_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 551;
        this.match(SPLParser.IDENT);
        this.state = 552;
        this.match(SPLParser.COMMA);
        this.state = 553;
        this.match(SPLParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColcaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcase;
    return this;
}

ColcaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColcaseContext.prototype.constructor = ColcaseContext;

ColcaseContext.prototype.COLCASE = function() {
    return this.getToken(SPLParser.COLCASE, 0);
};

ColcaseContext.prototype.colcase_when = function() {
    return this.getTypedRuleContext(Colcase_whenContext,0);
};

ColcaseContext.prototype.COLELSE = function() {
    return this.getToken(SPLParser.COLELSE, 0);
};

ColcaseContext.prototype.colcase_else = function() {
    return this.getTypedRuleContext(Colcase_elseContext,0);
};

ColcaseContext.prototype.COLEND = function() {
    return this.getToken(SPLParser.COLEND, 0);
};

ColcaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcase(this);
	}
};

ColcaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcase(this);
	}
};




SPLParser.ColcaseContext = ColcaseContext;

SPLParser.prototype.colcase = function() {

    var localctx = new ColcaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, SPLParser.RULE_colcase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 555;
        this.match(SPLParser.COLCASE);
        this.state = 556;
        this.colcase_when();
        this.state = 557;
        this.match(SPLParser.COLELSE);
        this.state = 558;
        this.colcase_else();
        this.state = 559;
        this.match(SPLParser.COLEND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcase_whenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcase_when;
    return this;
}

Colcase_whenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcase_whenContext.prototype.constructor = Colcase_whenContext;

Colcase_whenContext.prototype.colcase_when_nested = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Colcase_when_nestedContext);
    } else {
        return this.getTypedRuleContext(Colcase_when_nestedContext,i);
    }
};

Colcase_whenContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcase_when(this);
	}
};

Colcase_whenContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcase_when(this);
	}
};




SPLParser.Colcase_whenContext = Colcase_whenContext;

SPLParser.prototype.colcase_when = function() {

    var localctx = new Colcase_whenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, SPLParser.RULE_colcase_when);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 562; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 561;
            this.colcase_when_nested();
            this.state = 564; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SPLParser.COLWHEN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcase_when_nestedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcase_when_nested;
    return this;
}

Colcase_when_nestedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcase_when_nestedContext.prototype.constructor = Colcase_when_nestedContext;

Colcase_when_nestedContext.prototype.colwhen = function() {
    return this.getTypedRuleContext(ColwhenContext,0);
};

Colcase_when_nestedContext.prototype.col_op_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Col_op_defContext);
    } else {
        return this.getTypedRuleContext(Col_op_defContext,i);
    }
};

Colcase_when_nestedContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcase_when_nested(this);
	}
};

Colcase_when_nestedContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcase_when_nested(this);
	}
};




SPLParser.Colcase_when_nestedContext = Colcase_when_nestedContext;

SPLParser.prototype.colcase_when_nested = function() {

    var localctx = new Colcase_when_nestedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, SPLParser.RULE_colcase_when_nested);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 566;
        this.colwhen();
        this.state = 568; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 567;
            this.col_op_def();
            this.state = 570; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (SPLParser.COLDROP - 50)) | (1 << (SPLParser.COLFILL - 50)) | (1 << (SPLParser.COLJOIN - 50)) | (1 << (SPLParser.COLCOPY - 50)) | (1 << (SPLParser.COLSPLIT - 50)) | (1 << (SPLParser.COLREP - 50)) | (1 << (SPLParser.COLMAP - 50)) | (1 << (SPLParser.COLCALC - 50)) | (1 << (SPLParser.COLCASE - 50)) | (1 << (SPLParser.COLCOUNT - 50)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Colcase_elseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SPLParser.RULE_colcase_else;
    return this;
}

Colcase_elseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Colcase_elseContext.prototype.constructor = Colcase_elseContext;

Colcase_elseContext.prototype.col_op_def = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Col_op_defContext);
    } else {
        return this.getTypedRuleContext(Col_op_defContext,i);
    }
};

Colcase_elseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.enterColcase_else(this);
	}
};

Colcase_elseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SPLParserListener ) {
        listener.exitColcase_else(this);
	}
};




SPLParser.Colcase_elseContext = Colcase_elseContext;

SPLParser.prototype.colcase_else = function() {

    var localctx = new Colcase_elseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, SPLParser.RULE_colcase_else);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 575;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (SPLParser.COLDROP - 50)) | (1 << (SPLParser.COLFILL - 50)) | (1 << (SPLParser.COLJOIN - 50)) | (1 << (SPLParser.COLCOPY - 50)) | (1 << (SPLParser.COLSPLIT - 50)) | (1 << (SPLParser.COLREP - 50)) | (1 << (SPLParser.COLMAP - 50)) | (1 << (SPLParser.COLCALC - 50)) | (1 << (SPLParser.COLCASE - 50)) | (1 << (SPLParser.COLCOUNT - 50)))) !== 0)) {
            this.state = 572;
            this.col_op_def();
            this.state = 577;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SPLParser = SPLParser;
