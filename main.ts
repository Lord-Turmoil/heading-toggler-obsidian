import { App, Modal, Notice, Plugin, PluginSettingTab, Setting, Editor } from 'obsidian';

export default class HeadingTogglerPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: 'increase-heading-level',
      name: 'Increase heading level',
      callback: () => this.toggleHeading('increase')
    });

    this.addCommand({
      id: 'decrease-heading-level',
      name: 'Decrease heading level',
      callback: () => this.toggleHeading('decrease')
    });

    for (let i = 1; i <= 6; i++) {
      this.addCommand({
        id: `toggle-heading-level-${i}`,
        name: `Toggle heading level to H${i}`,
        callback: () => this.toggleHeading('toggle', i)
      });
    }
  }

  // Returns the heading level of the text, 0 if it's not a heading
  getHeadingLevel(text: string): number {
    const match = text.match(/^(#+)\s/);
    if (match) {
      return match[1].length;
    }
    return 0;
  }

  getHeadingText(text: string): string {
    return text.replace(/^(#+)\s/, '');
  }

  formatHeading(text: string, level: number): string {
    return level === 0 ? text : '#'.repeat(level) + ' ' + text;
  }

  toggleHeading(operation: 'increase' | 'decrease' | 'toggle', targetLevel: number | null = null) {
    const editor = this.app.workspace.activeEditor?.editor;
    if (!editor) {
      new Notice("No active editor found");
      return;
    }

    const line = editor.getCursor().line;
    const text = editor.getLine(line);
    if (operation === 'increase') {
      this.increaseHeadingLevel(editor, line, text);
    } else if (operation === 'decrease') {
      this.decreaseHeadingLevel(editor, line, text);
    } else if (operation === 'toggle') {
      this.toggleHeadingLevel(editor, line, text, targetLevel);
    }
  }

  increaseHeadingLevel(editor: Editor, line: number, text: string) {
    const level = this.getHeadingLevel(text);
    if (level == 1) {
      return;
    }
    const targetLevel = level === 0 ? 6 : level - 1;
    const newLine = this.formatHeading(this.getHeadingText(text), targetLevel);
    if (newLine !== text) {
      editor.replaceRange(newLine, { line, ch: 0 }, { line, ch: text.length });
    }
  }

  decreaseHeadingLevel(editor: Editor, line: number, text: string) {
    const level = this.getHeadingLevel(text);
    if (level === 0) {
      return;
    }
    const targetLevel = level === 6 ? 0 : level + 1;
    const newLine = this.formatHeading(this.getHeadingText(text), targetLevel);
    if (newLine !== text) {
      editor.replaceRange(newLine, { line, ch: 0 }, { line, ch: text.length });
    }
  }

  // If targetLevel is null, will set the heading to normal text.
  // If current level is the same as targetLevel, will toggle between heading and normal text.
  toggleHeadingLevel(editor: Editor, line: number, text: string, targetLevel: number | null) {
    const level = this.getHeadingLevel(text);
    if (targetLevel === null || targetLevel === level) {
      const newLine = this.getHeadingText(text);
      editor.replaceRange(newLine, { line, ch: 0 }, { line, ch: text.length });
      return;
    }

    const newLine = this.formatHeading(this.getHeadingText(text), targetLevel);
    if (newLine !== text) {
      editor.replaceRange(newLine, { line, ch: 0 }, { line, ch: text.length });
    }
  }
}
