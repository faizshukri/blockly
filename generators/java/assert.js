'use strict';

goog.provide('Blockly.Java.assert');

goog.require('Blockly.Java');


Blockly.Java['assert_true'] = function(block) {
    var argument0 = Blockly.Java.valueToCode(block, 'VAR',
            Blockly.Java.ORDER_NONE) || '""';

    var code = "assertTrue( "+argument0+" );\n";
    return code;
};

Blockly.Java['assert_false'] = function(block) {
    var argument0 = Blockly.Java.valueToCode(block, 'VAR',
            Blockly.Java.ORDER_NONE) || '""';

    var code = "assertFalse( "+argument0+" );\n";
    return code;
};

Blockly.Java['assert_equals'] = function(block) {
    var argument0 = Blockly.Java.valueToCode(block, 'VAR',
            Blockly.Java.ORDER_NONE) || '""';

    var argument1 = Blockly.Java.valueToCode(block, 'VAR2',
            Blockly.Java.ORDER_NONE) || '""';

    var code = "assertEquals( "+argument0+", "+argument1+" );\n";
    return code;
};
Blockly.Java['assert_null'] = function(block) {
    var argument0 = Blockly.Java.valueToCode(block, 'VAR',
            Blockly.Java.ORDER_NONE) || '""';

    var code = "assertNull( "+argument0+" );\n";
    return code;
};

Blockly.Java['assert_notnull'] = function(block) {
    var argument0 = Blockly.Java.valueToCode(block, 'VAR',
            Blockly.Java.ORDER_NONE) || '""';

    var code = "assertNotNull( "+argument0+" );\n";
    return code;
};