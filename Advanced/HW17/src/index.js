import './HW14/css/style.css'
import isPalyndrom from './HW3/function';
import marksProject from './HW4/array';
import getModa from './HW7/arrayMethods';
import getStudentsNames from './HW8/object'
import { Student } from './HW10/Prototype';

const mainImage = document.getElementById("mainImage")
mainImage.classList.add('stylePlanet');

isPalyndrom("Я несу гусеня");
const andry = new Student("КПІ - м.Київ", "Бакалавр - Дизайнер сай", "Сусик Андрій Олексійович");
console.log(andry.getInfo());
