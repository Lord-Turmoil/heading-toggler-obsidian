import { Editor } from "obsidian";

export class EditorService {
    getHeadingLevel(text: string): number {
        const match = text.match(/^(#+)\s/);
        if (match) {
            return match[1].length;
        }
        return 0;
    }

    applyHeading(editor: Editor, line: number, level: number) {
        const oldLine = editor.getLine(line);
        const newLine = this._formatHeading(this._getHeadingText(oldLine), level);
        this._applyChange(editor, line, oldLine, newLine);
        
        const cursor = editor.getCursor();
        if (cursor.line === line && level !== 0 && cursor.ch < level + 1) {
            cursor.ch = level + 1;
            editor.setCursor(cursor);
        }
    }

    _getHeadingText(text: string): string {
        return text.replace(/^(#+)\s/, '');
    }

    _formatHeading(text: string, level: number): string {
        return level === 0 ? text : '#'.repeat(level) + ' ' + text;
    }

    _applyChange(editor: Editor, line: number, oldLine: string, newLine: string) {
        if (oldLine === newLine) {
            return;
        }

        const cursor = editor.getCursor();
        editor.replaceRange(newLine, { line, ch: 0 }, { line, ch: oldLine.length });
        if (cursor.line === line) {
            cursor.ch += newLine.length - oldLine.length;
            cursor.ch = Math.max(0, cursor.ch);
            cursor.ch = Math.min(cursor.ch, newLine.length);
            editor.setCursor(cursor);
        }
    }
}