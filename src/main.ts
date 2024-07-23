import { App, Modal, Notice, Plugin, PluginSettingTab, Setting, Editor, MarkdownView } from 'obsidian';
import { EditorService } from './editorService';

export default class HeadingTogglerPlugin extends Plugin {
    editorService: EditorService;

    async onload() {
        this.editorService = new EditorService();

        this.addCommand({
            id: 'increase-heading-level',
            name: 'Increase heading level',
            editorCallback: (editor: Editor) => this.increaseHeadingLevel(editor)
        });

        this.addCommand({
            id: 'decrease-heading-level',
            name: 'Decrease heading level',
            editorCallback: (editor: Editor) => this.decreaseHeadingLevel(editor)
        });

        for (let i = 1; i <= 6; i++) {
            this.addCommand({
                id: `toggle-heading-level-${i}`,
                name: `Toggle heading level to H${i}`,
                editorCallback: (editor: Editor) => this.toggleHeadingLevel(editor, i)
            });
        }
    }

    increaseHeadingLevel(editor: Editor) {
        const line = editor.getCursor().line;
        const level = this.editorService.getHeadingLevel(editor.getLine(line));
        if (level == 1) {
            return;
        }
        const targetLevel = level === 0 ? 6 : level - 1;
        this.editorService.applyHeading(editor, line, targetLevel);
    }

    decreaseHeadingLevel(editor: Editor) {
        const line = editor.getCursor().line;
        const level = this.editorService.getHeadingLevel(editor.getLine(line));
        if (level === 0) {
            return;
        }
        const targetLevel = level === 6 ? 0 : level + 1;
        this.editorService.applyHeading(editor, line, targetLevel);
    }

    // If targetLevel is null, will set the heading to normal text.
    // If current level is the same as targetLevel, will toggle between heading and normal text.
    toggleHeadingLevel(editor: Editor, level: number) {
        const line = editor.getCursor().line;
        const currentLevel = this.editorService.getHeadingLevel(editor.getLine(line));
        if (currentLevel === level) {
            this.editorService.applyHeading(editor, line, 0);
        } else {
            this.editorService.applyHeading(editor, line, level);
        }
    }
}
