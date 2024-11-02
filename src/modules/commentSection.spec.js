import { describe, it, expect, beforeEach } from 'vitest';
import { toggleComments } from './commentSection';
describe('toggleComments', () => {
    let showHideBtn;
    let commentWrapper;
    beforeEach(() => {
        document.body.innerHTML = `
      <button class="show-hide">Show comments</button>
      <div class="comment-wrapper hidden"></div>
    `;
        showHideBtn = document.querySelector('.show-hide');
        commentWrapper = document.querySelector('.comment-wrapper');
        if (showHideBtn === null || commentWrapper === null) {
            throw new Error('Required elements not found in the DOM');
        }
    });
    it('should toggle the visibility of the comment section', () => {
        if (showHideBtn !== null && commentWrapper !== null) {
            toggleComments();
            showHideBtn.click();
            expect(showHideBtn.textContent).toBe('Hide comments');
            expect(commentWrapper.classList.contains('hidden')).toBe(false);
            showHideBtn.click();
            expect(showHideBtn.textContent).toBe('Show comments');
            expect(commentWrapper.classList.contains('hidden')).toBe(true);
        }
    });
});