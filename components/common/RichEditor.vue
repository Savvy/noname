<template>
    <div class="editor-container d-flex flex-column">
        <div class="editor">
            <div class="editor-nav" v-if="editor">
                <div class="btn-group">
                    <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                        <i class="bi bi-type-bold"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                        <i class="bi bi-type-italic"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                        <i class="bi bi-type-strikethrough"></i>
                    </button>
                </div>
                <button @click="editor.chain().focus().unsetAllMarks().run()">
                    <i class="bi bi-eraser"></i>
                </button>
                <button @click="editor.chain().focus().clearNodes().run()">
                    <i class="bi bi-eraser-fill"></i>
                </button>
                <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
                    <i class="bi bi-paragraph"></i>
                </button>
                <div class="btn-group">
                    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                        <i class="bi bi-type-h1"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                        <i class="bi bi-type-h2"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                        <i class="bi bi-type-h3"></i>
                    </button>
                    <!-- <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                        <i class="bi bi-type-h4"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                        <i class="bi bi-type-h5"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                        <i class="bi bi-type-h6"></i>
                    </button> -->
                </div>
                <div class="btn-group">
                    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                        <i class="bi bi-list-ul"></i>
                    </button>
                    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                        <i class="bi bi-list-ol"></i>
                    </button>
                </div>
                <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                    <i class="bi bi-blockquote-left"></i>
                </button>
                <button @click="editor.chain().focus().setHorizontalRule().run()">
                    <i class="bi bi-hr"></i>
                </button>
                <button @click="editor.chain().focus().setHardBreak().run()">
                    <i class="bi bi-file-break"></i>
                </button>
                <div class="btn-group">
                    <button @click="editor.chain().focus().undo().run()">
                        <i class="bi bi-arrow-return-left"></i>
                    </button>
                    <button @click="editor.chain().focus().redo().run()">
                        <i class="bi bi-arrow-return-right"></i>
                    </button>
                </div>
            </div>
            <editor-content :editor="editor" />
        </div>
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
export default {
    components: {
        EditorContent,
    },
    props: {
        value: {
            default: '',
            type: String,
        },
    },
    data() {
        return {
            editor: null,
        }
    },
    mounted() {
        this.editor = new Editor({
            content: this.value,
            extensions: [
                StarterKit
            ],
            onUpdate: () => {
                this.$emit('input', this.editor.getHTML())
            }
        });
    },
    beforeDestroy() {
        this.editor.destroy();
    },
    watch: {
        value(value) {
            const isSame = this.editor.getHTML() === value;

            if (isSame) {
                return;
            }

            this.editor.commands.setContent(value, false)
        }
    }
}
</script>

<style scoped>
.editor-container {
    gap: 10px;
    margin-bottom: 30px;
}
.editor {
    background-color: var(--body-color);
    border-radius: var(--border-radius);
    overflow: hidden;
}
.editor-nav {
    display: flex;
    background-color: var(--header-color);
    padding: 10px;
    gap: 10px;
}

.editor-nav button {
    background-color: var(--bg-light-10);
    outline: none;
    border: none;
    color: var(--light-text);
    padding: 5px 7px;
    cursor: pointer;
    line-height: 22px;
    font-size: 14px;
    border-radius: var(--border-radius);
}

.editor-nav .btn-group button {
    border-radius: 0;
    background-color: transparent;
}

.btn-group {
    display: flex;
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: var(--bg-light-10);
}

.editor-nav button:hover {
    background-color: var(--bg-light-20);
}

.btn.btn-primary#submit {
    align-self: flex-end;
}

@media screen and (max-width: 720px) {
    .editor-nav {
        flex-wrap: wrap;
    }
}
</style>