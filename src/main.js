import { pageLoadRender } from './pageLoadRenderer'
import { Projects } from './projects';
import { TodoItem } from './item';
import './styles.css'

const projects = new Projects();

document.addEventListener('DOMContentLoaded', () => {
    pageLoadRender();
});

export { projects }