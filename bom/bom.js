window.addEventListener('load', () => {
    const form = document.querySelector("#new-chapter");
    const input = document.querySelector("#favChap-input");
    const list = document.querySelector("#chapters");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const chapter = input.value;

        const chapter_in = document.createElement('div');
        chapter_in.classList.add('chapter');

        const chapter_content = document.createElement('div');
        chapter_content.classList.add('content');

        chapter_in.appendChild(chapter_content);

        const chapter_input = document.createElement('input');
        chapter_input.classList.add('text');
        chapter_input.type = 'text';
        chapter_input.value = chapter;
        chapter_input.setAttribute('readonly', 'readonly');

        chapter_content.appendChild(chapter_input);

        const chapter_actions = document.createElement('div');
        chapter_actions.classList.add('actions');

        const chapter_edit = document.createElement('button');
        chapter_edit.classList.add('edit');
        chapter_edit.innerText = 'Edit';

        const chapter_delete = document.createElement('button');
        chapter_delete.classList.add('delete');
        chapter_delete.innerText = 'Delete';

        chapter_actions.appendChild(chapter_edit);
        chapter_actions.appendChild(chapter_delete);

        chapter_in.appendChild(chapter_actions);

        list.appendChild(chapter_in);

        input.value = '';

        chapter_edit.addEventListener('click', (e) => {
            if (chapter_edit.innerText.toLowerCase() == "edit") {
                chapter_edit.innerText = "Save";
                chapter_input.removeAttribute("readonly");
                chapter_input.focus();
            } else {
                chapter_edit.innerText = "Edit";
                chapter_input.setAttribute("readonly", "readonly");
            }
        });

        chapter_delete.addEventListener('click', (e) => {
            list.removeChild(chapter_in);
        });
    });
});