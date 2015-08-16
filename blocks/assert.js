'use strict';

goog.provide('Blockly.Blocks.assert');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.assert.HUE = 40;

Blockly.Blocks['assert_true'] = {
    init: function() {
        this.appendValueInput("VAR").setCheck(null).appendField("Assert that");
        this.appendDummyInput().appendField("is TRUE");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.assert.HUE);
        this.setTooltip('');
        return this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['assert_false'] = {
    init: function() {
        this.appendValueInput("VAR").setCheck(null).appendField("Assert that");
        this.appendDummyInput().appendField("is FALSE");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.assert.HUE);
        this.setTooltip('');
        return this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['assert_equals'] = {
    init: function() {
        this.appendValueInput("VAR").setCheck(null).appendField("Assert that");
        this.appendDummyInput().appendField("is equals");
        this.appendValueInput("VAR2").setCheck(null);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.assert.HUE);
        this.setTooltip('');
        return this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['assert_null'] = {
    init: function() {
        this.appendValueInput("VAR").setCheck(null).appendField("Assert that");
        this.appendDummyInput().appendField("is NULL");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.assert.HUE);
        this.setTooltip('');
        return this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['assert_notnull'] = {
    init: function() {
        this.appendValueInput("VAR").setCheck(null).appendField("Assert that");
        this.appendDummyInput().appendField("is NOT NULL");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.assert.HUE);
        this.setTooltip('');
        return this.setHelpUrl('http://www.example.com/');
    }
};