import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const TextEditor = () => {
	return (
		<>
			<CKEditor
				editor={ ClassicEditor }
				data="<p>Hello from CKEditor 5!</p>"
				onReady={ (editor: any) => console.log(editor) }
				onChange={ ( event: any, editor: any ) => {
						const data = editor.getData();
						console.log( { event, editor, data } );
				} }
				onBlur={ (editor: any) => {
						console.log( 'Blur.', editor );
				} }
				onFocus={ (editor: any) => {
						console.log( 'Focus.', editor );
				} }
			/>
		</>
	)
}

export default TextEditor;
