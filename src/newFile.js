import {
ref,
nextTick,
onMounted
} from "vue";
import { jsPDF } from "jspdf";
import axios from 'axios';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const body = ref(null);

const getInputsText = () => {
const inputsTexts = document.querySelectorAll('input[type="text"]');
for (let index = 0; index < inputsTexts.length; index++) {
const element = inputsTexts[index];
element.id = `InputText_${index}`;
element.addEventListener('input', function (e) {
element.setAttribute('value', e.target.value);
});
}
};
const getInputsRadio = () => {
const inputsTexts = document.querySelectorAll('input[type="radio"]');
for (let index = 0; index < inputsTexts.length; index++) {
const element = inputsTexts[index];
element.id = `InputRadio_${index}`;
element.addEventListener('input', function () {
element.setAttribute('checked', '');
});
}
};

const getInputsSelect = () => {
const inputsTexts = document.querySelectorAll('select');
for (let index = 0; index < inputsTexts.length; index++) {
const element = inputsTexts[index];
element.id = `InputSelect_${index}`;
element.addEventListener('change', function (e) {
for (var i = 0; i < element.options.length; i++) {
element.options[i].removeAttribute("selected");
}

// Seleccionar la opción deseada
for (var s = 0; s < element.options.length; s++) {
if (element.options[s].value === e.target.value) {
element.options[s].setAttribute("selected", "selected");
break;
}
}
});
}
};



const submit = async () => {
await nextTick();
const doc = new jsPDF();
const contentHtml = await body.value.innerHTML;
await doc.html(`${contentHtml}`, { x: 8, y: 15, html2canvas: { scale: 0.3, width: 100 } });

// Verificar que blob contiene el PDF
const blob = doc.output('blob');
console.log('Blob:', blob);

const formData = new FormData();
formData.append('archivo', blob, `${new Date()}.pdf`);

// Configurar las opciones para la solicitud axios
const axiosConfig = {
headers: {
'Content-Type': 'multipart/form-data',
},
};

// Verificar que la URL sea correcta
const url = 'https://1-xactimate.com/formulario-water/send_mail.php';
console.log('URL:', url);

// Realizar la solicitud POST con axios
axios.post(url, formData, axiosConfig)
.then(response => {
// Manejar la respuesta del servidor
console.log('Solicitud exitosa. Respuesta:', response.data);
})
.catch(error => {
// Manejar errores de la solicitud
console.error('Error en la solicitud:', error.message);
});
};

onMounted(() => {
getInputsText();
getInputsRadio();
getInputsSelect();
});



const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.body; __VLS_intrinsicElements.body;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.nav; __VLS_intrinsicElements.nav;
__VLS_intrinsicElements.img;
__VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul;
__VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.i; __VLS_intrinsicElements.i;
__VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset; __VLS_intrinsicElements.fieldset;
__VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend; __VLS_intrinsicElements.legend;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select; __VLS_intrinsicElements.select;
__VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option;
__VLS_intrinsicElements.hr; __VLS_intrinsicElements.hr;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
{
const __VLS_0 = __VLS_intrinsicElements["body"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, id: ("form"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, id: ("form"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, ref: ("body"), id: ("body"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, ref: ("body"), id: ("body"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
// @ts-ignore
(__VLS_ctx.body);
{
const __VLS_10 = __VLS_intrinsicElements["nav"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("nav__logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("nav__logo"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["img"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, src: ("assets/xactime.png"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, src: ("assets/xactime.png"), alt: (""), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
{
const __VLS_25 = __VLS_intrinsicElements["ul"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("nav__links"), id: ("nav-links"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("nav__links"), id: ("nav-links"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["li"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, class: ("link"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("link"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = __VLS_intrinsicElements["a"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, href: ("#"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
(__VLS_38.slots!).default;
}
(__VLS_33.slots!).default;
}
{
const __VLS_40 = __VLS_intrinsicElements["li"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, class: ("link"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("link"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = __VLS_intrinsicElements["a"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, href: ("#"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
(__VLS_48.slots!).default;
}
(__VLS_43.slots!).default;
}
{
const __VLS_50 = __VLS_intrinsicElements["li"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{}, class: ("link"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, class: ("link"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
{
const __VLS_55 = __VLS_intrinsicElements["a"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, href: ("#"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
(__VLS_58.slots!).default;
}
(__VLS_53.slots!).default;
}
{
const __VLS_60 = __VLS_intrinsicElements["li"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{}, class: ("link"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, class: ("link"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = __VLS_intrinsicElements["a"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, href: ("#"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_68.slots!).default;
}
(__VLS_63.slots!).default;
}
{
const __VLS_70 = __VLS_intrinsicElements["li"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{}, class: ("link"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, class: ("link"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = __VLS_intrinsicElements["a"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, href: ("#"), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
(__VLS_78.slots!).default;
}
(__VLS_73.slots!).default;
}
(__VLS_28.slots!).default;
}
{
const __VLS_80 = __VLS_intrinsicElements["div"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{}, class: ("nav__menu__btn"), id: ("menu-btn"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, class: ("nav__menu__btn"), id: ("menu-btn"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
{
const __VLS_85 = __VLS_intrinsicElements["span"];
const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
{
const __VLS_90 = __VLS_intrinsicElements["i"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
const __VLS_92 = __VLS_91({ ...{}, class: ("ri-menu-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, class: ("ri-menu-line"), });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
}
(__VLS_88.slots!).default;
}
(__VLS_83.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_95 = __VLS_intrinsicElements["fieldset"];
const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
const __VLS_97 = __VLS_96({ ...{}, id: ("fieldset_1"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_1"), style: ({}), });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
{
const __VLS_100 = __VLS_intrinsicElements["legend"];
const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
const __VLS_102 = __VLS_101({ ...{}, class: ("titles-sections-1"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_100, typeof __VLS_102> & Record<string, unknown>) => void)({ ...{}, class: ("titles-sections-1"), style: ({}), });
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
let __VLS_104!: __VLS_NormalizeEmits<typeof __VLS_103.emit>;
(__VLS_103.slots!).default;
}
{
const __VLS_105 = __VLS_intrinsicElements["div"];
const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
const __VLS_107 = __VLS_106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_105, typeof __VLS_107> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
let __VLS_109!: __VLS_NormalizeEmits<typeof __VLS_108.emit>;
{
const __VLS_110 = __VLS_intrinsicElements["label"];
const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
const __VLS_112 = __VLS_111({ ...{}, class: ("subtitles"), for: ("customerName"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_110, typeof __VLS_112> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles"), for: ("customerName"), });
const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112)!;
let __VLS_114!: __VLS_NormalizeEmits<typeof __VLS_113.emit>;
(__VLS_113.slots!).default;
}
{
const __VLS_115 = __VLS_intrinsicElements["input"];
const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
const __VLS_117 = __VLS_116({ ...{}, type: ("text"), id: ("customerName"), name: ("customerName"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_115, typeof __VLS_117> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("customerName"), name: ("customerName"), style: ({}), });
const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117)!;
let __VLS_119!: __VLS_NormalizeEmits<typeof __VLS_118.emit>;
}
(__VLS_108.slots!).default;
}
{
const __VLS_120 = __VLS_intrinsicElements["div"];
const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
const __VLS_122 = __VLS_121({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_121));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_120, typeof __VLS_122> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122)!;
let __VLS_124!: __VLS_NormalizeEmits<typeof __VLS_123.emit>;
{
const __VLS_125 = __VLS_intrinsicElements["label"];
const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
const __VLS_127 = __VLS_126({ ...{}, class: ("subtitles"), for: ("techName"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_125, typeof __VLS_127> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles"), for: ("techName"), });
const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127)!;
let __VLS_129!: __VLS_NormalizeEmits<typeof __VLS_128.emit>;
(__VLS_128.slots!).default;
}
{
const __VLS_130 = __VLS_intrinsicElements["input"];
const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
const __VLS_132 = __VLS_131({ ...{}, type: ("text"), id: ("techName"), name: ("techName"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_130, typeof __VLS_132> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("techName"), name: ("techName"), style: ({}), });
const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132)!;
let __VLS_134!: __VLS_NormalizeEmits<typeof __VLS_133.emit>;
}
(__VLS_123.slots!).default;
}
{
const __VLS_135 = __VLS_intrinsicElements["div"];
const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
const __VLS_137 = __VLS_136({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_135, typeof __VLS_137> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137)!;
let __VLS_139!: __VLS_NormalizeEmits<typeof __VLS_138.emit>;
{
const __VLS_140 = __VLS_intrinsicElements["div"];
const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
const __VLS_142 = __VLS_141({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_140, typeof __VLS_142> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142)!;
let __VLS_144!: __VLS_NormalizeEmits<typeof __VLS_143.emit>;
{
const __VLS_145 = __VLS_intrinsicElements["label"];
const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
const __VLS_147 = __VLS_146({ ...{}, class: ("subtitles"), for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_145, typeof __VLS_147> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles"), for: ("cat1"), });
const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147)!;
let __VLS_149!: __VLS_NormalizeEmits<typeof __VLS_148.emit>;
(__VLS_148.slots!).default;
}
{
const __VLS_150 = __VLS_intrinsicElements["input"];
const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
const __VLS_152 = __VLS_151({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-1"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_150, typeof __VLS_152> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-1"), value: ("1"), });
const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
let __VLS_154!: __VLS_NormalizeEmits<typeof __VLS_153.emit>;
}
(__VLS_143.slots!).default;
}
{
const __VLS_155 = __VLS_intrinsicElements["div"];
const __VLS_156 = __VLS_elementAsFunctionalComponent(__VLS_155);
const __VLS_157 = __VLS_156({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_155, typeof __VLS_157> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157)!;
let __VLS_159!: __VLS_NormalizeEmits<typeof __VLS_158.emit>;
{
const __VLS_160 = __VLS_intrinsicElements["label"];
const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
const __VLS_162 = __VLS_161({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_160, typeof __VLS_162> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162)!;
let __VLS_164!: __VLS_NormalizeEmits<typeof __VLS_163.emit>;
(__VLS_163.slots!).default;
}
{
const __VLS_165 = __VLS_intrinsicElements["input"];
const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
const __VLS_167 = __VLS_166({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-1"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_165, typeof __VLS_167> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-1"), value: ("2"), });
const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167)!;
let __VLS_169!: __VLS_NormalizeEmits<typeof __VLS_168.emit>;
}
(__VLS_158.slots!).default;
}
{
const __VLS_170 = __VLS_intrinsicElements["div"];
const __VLS_171 = __VLS_elementAsFunctionalComponent(__VLS_170);
const __VLS_172 = __VLS_171({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_170, typeof __VLS_172> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172)!;
let __VLS_174!: __VLS_NormalizeEmits<typeof __VLS_173.emit>;
{
const __VLS_175 = __VLS_intrinsicElements["label"];
const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
const __VLS_177 = __VLS_176({ ...{}, for: ("cat2"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_175, typeof __VLS_177> & Record<string, unknown>) => void)({ ...{}, for: ("cat2"), });
const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177)!;
let __VLS_179!: __VLS_NormalizeEmits<typeof __VLS_178.emit>;
(__VLS_178.slots!).default;
}
{
const __VLS_180 = __VLS_intrinsicElements["input"];
const __VLS_181 = __VLS_elementAsFunctionalComponent(__VLS_180);
const __VLS_182 = __VLS_181({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-1"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_180, typeof __VLS_182> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-1"), value: ("3"), });
const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182)!;
let __VLS_184!: __VLS_NormalizeEmits<typeof __VLS_183.emit>;
}
(__VLS_173.slots!).default;
}
{
const __VLS_185 = __VLS_intrinsicElements["div"];
const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
const __VLS_187 = __VLS_186({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_186));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_185, typeof __VLS_187> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187)!;
let __VLS_189!: __VLS_NormalizeEmits<typeof __VLS_188.emit>;
{
const __VLS_190 = __VLS_intrinsicElements["label"];
const __VLS_191 = __VLS_elementAsFunctionalComponent(__VLS_190);
const __VLS_192 = __VLS_191({ ...{}, for: ("cat3"), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_190, typeof __VLS_192> & Record<string, unknown>) => void)({ ...{}, for: ("cat3"), });
const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192)!;
let __VLS_194!: __VLS_NormalizeEmits<typeof __VLS_193.emit>;
(__VLS_193.slots!).default;
}
{
const __VLS_195 = __VLS_intrinsicElements["input"];
const __VLS_196 = __VLS_elementAsFunctionalComponent(__VLS_195);
const __VLS_197 = __VLS_196({ ...{}, type: ("radio"), id: ("cat3"), name: ("category-1"), value: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_195, typeof __VLS_197> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat3"), name: ("category-1"), value: ("3"), });
const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197)!;
let __VLS_199!: __VLS_NormalizeEmits<typeof __VLS_198.emit>;
}
(__VLS_188.slots!).default;
}
(__VLS_138.slots!).default;
}
(__VLS_98.slots!).default;
}
{
const __VLS_200 = __VLS_intrinsicElements["fieldset"];
const __VLS_201 = __VLS_elementAsFunctionalComponent(__VLS_200);
const __VLS_202 = __VLS_201({ ...{}, id: ("fieldset_2"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_200, typeof __VLS_202> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_2"), style: ({}), });
const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202)!;
let __VLS_204!: __VLS_NormalizeEmits<typeof __VLS_203.emit>;
{
const __VLS_205 = __VLS_intrinsicElements["legend"];
const __VLS_206 = __VLS_elementAsFunctionalComponent(__VLS_205);
const __VLS_207 = __VLS_206({ ...{}, class: ("titles-sections"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_205, typeof __VLS_207> & Record<string, unknown>) => void)({ ...{}, class: ("titles-sections"), style: ({}), });
const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207)!;
let __VLS_209!: __VLS_NormalizeEmits<typeof __VLS_208.emit>;
(__VLS_208.slots!).default;
}
{
const __VLS_210 = __VLS_intrinsicElements["legend"];
const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
const __VLS_212 = __VLS_211({ ...{}, class: ("titles-sections"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_210, typeof __VLS_212> & Record<string, unknown>) => void)({ ...{}, class: ("titles-sections"), style: ({}), });
const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212)!;
let __VLS_214!: __VLS_NormalizeEmits<typeof __VLS_213.emit>;
(__VLS_213.slots!).default;
}
{
const __VLS_215 = __VLS_intrinsicElements["div"];
const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
const __VLS_217 = __VLS_216({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_215, typeof __VLS_217> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217)!;
let __VLS_219!: __VLS_NormalizeEmits<typeof __VLS_218.emit>;
{
const __VLS_220 = __VLS_intrinsicElements["div"];
const __VLS_221 = __VLS_elementAsFunctionalComponent(__VLS_220);
const __VLS_222 = __VLS_221({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_220, typeof __VLS_222> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222)!;
let __VLS_224!: __VLS_NormalizeEmits<typeof __VLS_223.emit>;
{
const __VLS_225 = __VLS_intrinsicElements["label"];
const __VLS_226 = __VLS_elementAsFunctionalComponent(__VLS_225);
const __VLS_227 = __VLS_226({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_225, typeof __VLS_227> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), });
const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227)!;
let __VLS_229!: __VLS_NormalizeEmits<typeof __VLS_228.emit>;
{
const __VLS_230 = __VLS_intrinsicElements["div"];
const __VLS_231 = __VLS_elementAsFunctionalComponent(__VLS_230);
const __VLS_232 = __VLS_231({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_230, typeof __VLS_232> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232)!;
let __VLS_234!: __VLS_NormalizeEmits<typeof __VLS_233.emit>;
(__VLS_233.slots!).default;
}
{
const __VLS_235 = __VLS_intrinsicElements["div"];
const __VLS_236 = __VLS_elementAsFunctionalComponent(__VLS_235);
const __VLS_237 = __VLS_236({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_235, typeof __VLS_237> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_235, __VLS_237)!;
let __VLS_239!: __VLS_NormalizeEmits<typeof __VLS_238.emit>;
(__VLS_238.slots!).default;
}
(__VLS_228.slots!).default;
}
{
const __VLS_240 = __VLS_intrinsicElements["input"];
const __VLS_241 = __VLS_elementAsFunctionalComponent(__VLS_240);
const __VLS_242 = __VLS_241({ ...{}, type: ("text"), id: ("roomLength"), ref: ("roomLength"), name: ("roomLength"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_241));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_240, typeof __VLS_242> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomLength"), ref: ("roomLength"), name: ("roomLength"), style: ({}), });
const __VLS_243 = __VLS_pickFunctionalComponentCtx(__VLS_240, __VLS_242)!;
let __VLS_244!: __VLS_NormalizeEmits<typeof __VLS_243.emit>;
// @ts-ignore
(__VLS_ctx.roomLength);
}
(__VLS_223.slots!).default;
}
{
const __VLS_245 = __VLS_intrinsicElements["div"];
const __VLS_246 = __VLS_elementAsFunctionalComponent(__VLS_245);
const __VLS_247 = __VLS_246({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_246));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_245, typeof __VLS_247> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_248 = __VLS_pickFunctionalComponentCtx(__VLS_245, __VLS_247)!;
let __VLS_249!: __VLS_NormalizeEmits<typeof __VLS_248.emit>;
{
const __VLS_250 = __VLS_intrinsicElements["label"];
const __VLS_251 = __VLS_elementAsFunctionalComponent(__VLS_250);
const __VLS_252 = __VLS_251({ ...{}, class: ("subtitles-room"), for: ("roomWidth"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_250, typeof __VLS_252> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomWidth"), style: ({}), });
const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252)!;
let __VLS_254!: __VLS_NormalizeEmits<typeof __VLS_253.emit>;
{
const __VLS_255 = __VLS_intrinsicElements["div"];
const __VLS_256 = __VLS_elementAsFunctionalComponent(__VLS_255);
const __VLS_257 = __VLS_256({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_255, typeof __VLS_257> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257)!;
let __VLS_259!: __VLS_NormalizeEmits<typeof __VLS_258.emit>;
(__VLS_258.slots!).default;
}
{
const __VLS_260 = __VLS_intrinsicElements["div"];
const __VLS_261 = __VLS_elementAsFunctionalComponent(__VLS_260);
const __VLS_262 = __VLS_261({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_260, typeof __VLS_262> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262)!;
let __VLS_264!: __VLS_NormalizeEmits<typeof __VLS_263.emit>;
(__VLS_263.slots!).default;
}
(__VLS_253.slots!).default;
}
{
const __VLS_265 = __VLS_intrinsicElements["input"];
const __VLS_266 = __VLS_elementAsFunctionalComponent(__VLS_265);
const __VLS_267 = __VLS_266({ ...{}, type: ("text"), id: ("roomWidth"), name: ("roomWidth"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_265, typeof __VLS_267> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomWidth"), name: ("roomWidth"), style: ({}), });
const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267)!;
let __VLS_269!: __VLS_NormalizeEmits<typeof __VLS_268.emit>;
}
(__VLS_248.slots!).default;
}
{
const __VLS_270 = __VLS_intrinsicElements["div"];
const __VLS_271 = __VLS_elementAsFunctionalComponent(__VLS_270);
const __VLS_272 = __VLS_271({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_271));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_270, typeof __VLS_272> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_273 = __VLS_pickFunctionalComponentCtx(__VLS_270, __VLS_272)!;
let __VLS_274!: __VLS_NormalizeEmits<typeof __VLS_273.emit>;
{
const __VLS_275 = __VLS_intrinsicElements["label"];
const __VLS_276 = __VLS_elementAsFunctionalComponent(__VLS_275);
const __VLS_277 = __VLS_276({ ...{}, class: ("subtitles-room"), for: ("roomHeight"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_276));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_275, typeof __VLS_277> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomHeight"), style: ({}), });
const __VLS_278 = __VLS_pickFunctionalComponentCtx(__VLS_275, __VLS_277)!;
let __VLS_279!: __VLS_NormalizeEmits<typeof __VLS_278.emit>;
{
const __VLS_280 = __VLS_intrinsicElements["div"];
const __VLS_281 = __VLS_elementAsFunctionalComponent(__VLS_280);
const __VLS_282 = __VLS_281({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_281));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_280, typeof __VLS_282> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_283 = __VLS_pickFunctionalComponentCtx(__VLS_280, __VLS_282)!;
let __VLS_284!: __VLS_NormalizeEmits<typeof __VLS_283.emit>;
(__VLS_283.slots!).default;
}
{
const __VLS_285 = __VLS_intrinsicElements["div"];
const __VLS_286 = __VLS_elementAsFunctionalComponent(__VLS_285);
const __VLS_287 = __VLS_286({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_286));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_285, typeof __VLS_287> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_285, __VLS_287)!;
let __VLS_289!: __VLS_NormalizeEmits<typeof __VLS_288.emit>;
(__VLS_288.slots!).default;
}
(__VLS_278.slots!).default;
}
{
const __VLS_290 = __VLS_intrinsicElements["input"];
const __VLS_291 = __VLS_elementAsFunctionalComponent(__VLS_290);
const __VLS_292 = __VLS_291({ ...{}, type: ("text"), id: ("roomHeight"), name: ("roomHeight"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_290, typeof __VLS_292> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomHeight"), name: ("roomHeight"), style: ({}), });
const __VLS_293 = __VLS_pickFunctionalComponentCtx(__VLS_290, __VLS_292)!;
let __VLS_294!: __VLS_NormalizeEmits<typeof __VLS_293.emit>;
}
(__VLS_273.slots!).default;
}
{
const __VLS_295 = __VLS_intrinsicElements["div"];
const __VLS_296 = __VLS_elementAsFunctionalComponent(__VLS_295);
const __VLS_297 = __VLS_296({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_296));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_295, typeof __VLS_297> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_298 = __VLS_pickFunctionalComponentCtx(__VLS_295, __VLS_297)!;
let __VLS_299!: __VLS_NormalizeEmits<typeof __VLS_298.emit>;
{
const __VLS_300 = __VLS_intrinsicElements["label"];
const __VLS_301 = __VLS_elementAsFunctionalComponent(__VLS_300);
const __VLS_302 = __VLS_301({ ...{}, class: ("subtitles-room"), for: ("floorType"), }, ...__VLS_functionalComponentArgsRest(__VLS_301));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_300, typeof __VLS_302> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("floorType"), });
const __VLS_303 = __VLS_pickFunctionalComponentCtx(__VLS_300, __VLS_302)!;
let __VLS_304!: __VLS_NormalizeEmits<typeof __VLS_303.emit>;
(__VLS_303.slots!).default;
}
{
const __VLS_305 = __VLS_intrinsicElements["select"];
const __VLS_306 = __VLS_elementAsFunctionalComponent(__VLS_305);
const __VLS_307 = __VLS_306({ ...{}, id: ("floorType"), name: ("floorType"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_306));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_305, typeof __VLS_307> & Record<string, unknown>) => void)({ ...{}, id: ("floorType"), name: ("floorType"), style: ({}), });
const __VLS_308 = __VLS_pickFunctionalComponentCtx(__VLS_305, __VLS_307)!;
let __VLS_309!: __VLS_NormalizeEmits<typeof __VLS_308.emit>;
{
const __VLS_310 = __VLS_intrinsicElements["option"];
const __VLS_311 = __VLS_elementAsFunctionalComponent(__VLS_310);
const __VLS_312 = __VLS_311({ ...{}, value: (" C"), }, ...__VLS_functionalComponentArgsRest(__VLS_311));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_310, typeof __VLS_312> & Record<string, unknown>) => void)({ ...{}, value: (" C"), });
const __VLS_313 = __VLS_pickFunctionalComponentCtx(__VLS_310, __VLS_312)!;
let __VLS_314!: __VLS_NormalizeEmits<typeof __VLS_313.emit>;
(__VLS_313.slots!).default;
}
{
const __VLS_315 = __VLS_intrinsicElements["option"];
const __VLS_316 = __VLS_elementAsFunctionalComponent(__VLS_315);
const __VLS_317 = __VLS_316({ ...{}, value: ("V"), }, ...__VLS_functionalComponentArgsRest(__VLS_316));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_315, typeof __VLS_317> & Record<string, unknown>) => void)({ ...{}, value: ("V"), });
const __VLS_318 = __VLS_pickFunctionalComponentCtx(__VLS_315, __VLS_317)!;
let __VLS_319!: __VLS_NormalizeEmits<typeof __VLS_318.emit>;
(__VLS_318.slots!).default;
}
{
const __VLS_320 = __VLS_intrinsicElements["option"];
const __VLS_321 = __VLS_elementAsFunctionalComponent(__VLS_320);
const __VLS_322 = __VLS_321({ ...{}, value: ("L"), }, ...__VLS_functionalComponentArgsRest(__VLS_321));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_320, typeof __VLS_322> & Record<string, unknown>) => void)({ ...{}, value: ("L"), });
const __VLS_323 = __VLS_pickFunctionalComponentCtx(__VLS_320, __VLS_322)!;
let __VLS_324!: __VLS_NormalizeEmits<typeof __VLS_323.emit>;
(__VLS_323.slots!).default;
}
{
const __VLS_325 = __VLS_intrinsicElements["option"];
const __VLS_326 = __VLS_elementAsFunctionalComponent(__VLS_325);
const __VLS_327 = __VLS_326({ ...{}, value: ("W"), }, ...__VLS_functionalComponentArgsRest(__VLS_326));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_325, typeof __VLS_327> & Record<string, unknown>) => void)({ ...{}, value: ("W"), });
const __VLS_328 = __VLS_pickFunctionalComponentCtx(__VLS_325, __VLS_327)!;
let __VLS_329!: __VLS_NormalizeEmits<typeof __VLS_328.emit>;
(__VLS_328.slots!).default;
}
(__VLS_308.slots!).default;
}
(__VLS_298.slots!).default;
}
(__VLS_218.slots!).default;
}
(__VLS_203.slots!).default;
}
{
const __VLS_330 = __VLS_intrinsicElements["fieldset"];
const __VLS_331 = __VLS_elementAsFunctionalComponent(__VLS_330);
const __VLS_332 = __VLS_331({ ...{}, id: ("fieldset_3"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_331));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_330, typeof __VLS_332> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_3"), style: ({}), });
const __VLS_333 = __VLS_pickFunctionalComponentCtx(__VLS_330, __VLS_332)!;
let __VLS_334!: __VLS_NormalizeEmits<typeof __VLS_333.emit>;
{
const __VLS_335 = __VLS_intrinsicElements["legend"];
const __VLS_336 = __VLS_elementAsFunctionalComponent(__VLS_335);
const __VLS_337 = __VLS_336({ ...{}, class: ("titles-sections"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_336));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_335, typeof __VLS_337> & Record<string, unknown>) => void)({ ...{}, class: ("titles-sections"), style: ({}), });
const __VLS_338 = __VLS_pickFunctionalComponentCtx(__VLS_335, __VLS_337)!;
let __VLS_339!: __VLS_NormalizeEmits<typeof __VLS_338.emit>;
(__VLS_338.slots!).default;
}
{
const __VLS_340 = __VLS_intrinsicElements["div"];
const __VLS_341 = __VLS_elementAsFunctionalComponent(__VLS_340);
const __VLS_342 = __VLS_341({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_341));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_340, typeof __VLS_342> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_343 = __VLS_pickFunctionalComponentCtx(__VLS_340, __VLS_342)!;
let __VLS_344!: __VLS_NormalizeEmits<typeof __VLS_343.emit>;
{
const __VLS_345 = __VLS_intrinsicElements["div"];
const __VLS_346 = __VLS_elementAsFunctionalComponent(__VLS_345);
const __VLS_347 = __VLS_346({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_346));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_345, typeof __VLS_347> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_348 = __VLS_pickFunctionalComponentCtx(__VLS_345, __VLS_347)!;
let __VLS_349!: __VLS_NormalizeEmits<typeof __VLS_348.emit>;
{
const __VLS_350 = __VLS_intrinsicElements["label"];
const __VLS_351 = __VLS_elementAsFunctionalComponent(__VLS_350);
const __VLS_352 = __VLS_351({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_351));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_350, typeof __VLS_352> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), });
const __VLS_353 = __VLS_pickFunctionalComponentCtx(__VLS_350, __VLS_352)!;
let __VLS_354!: __VLS_NormalizeEmits<typeof __VLS_353.emit>;
{
const __VLS_355 = __VLS_intrinsicElements["div"];
const __VLS_356 = __VLS_elementAsFunctionalComponent(__VLS_355);
const __VLS_357 = __VLS_356({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_356));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_355, typeof __VLS_357> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_358 = __VLS_pickFunctionalComponentCtx(__VLS_355, __VLS_357)!;
let __VLS_359!: __VLS_NormalizeEmits<typeof __VLS_358.emit>;
(__VLS_358.slots!).default;
}
{
const __VLS_360 = __VLS_intrinsicElements["div"];
const __VLS_361 = __VLS_elementAsFunctionalComponent(__VLS_360);
const __VLS_362 = __VLS_361({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_361));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_360, typeof __VLS_362> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_363 = __VLS_pickFunctionalComponentCtx(__VLS_360, __VLS_362)!;
let __VLS_364!: __VLS_NormalizeEmits<typeof __VLS_363.emit>;
(__VLS_363.slots!).default;
}
(__VLS_353.slots!).default;
}
{
const __VLS_365 = __VLS_intrinsicElements["input"];
const __VLS_366 = __VLS_elementAsFunctionalComponent(__VLS_365);
const __VLS_367 = __VLS_366({ ...{}, type: ("text"), id: ("roomLength"), name: ("roomLength"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_366));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_365, typeof __VLS_367> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomLength"), name: ("roomLength"), style: ({}), });
const __VLS_368 = __VLS_pickFunctionalComponentCtx(__VLS_365, __VLS_367)!;
let __VLS_369!: __VLS_NormalizeEmits<typeof __VLS_368.emit>;
}
(__VLS_348.slots!).default;
}
{
const __VLS_370 = __VLS_intrinsicElements["div"];
const __VLS_371 = __VLS_elementAsFunctionalComponent(__VLS_370);
const __VLS_372 = __VLS_371({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_371));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_370, typeof __VLS_372> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_373 = __VLS_pickFunctionalComponentCtx(__VLS_370, __VLS_372)!;
let __VLS_374!: __VLS_NormalizeEmits<typeof __VLS_373.emit>;
{
const __VLS_375 = __VLS_intrinsicElements["label"];
const __VLS_376 = __VLS_elementAsFunctionalComponent(__VLS_375);
const __VLS_377 = __VLS_376({ ...{}, class: ("subtitles-room"), for: ("roomWidth"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_376));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_375, typeof __VLS_377> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomWidth"), style: ({}), });
const __VLS_378 = __VLS_pickFunctionalComponentCtx(__VLS_375, __VLS_377)!;
let __VLS_379!: __VLS_NormalizeEmits<typeof __VLS_378.emit>;
{
const __VLS_380 = __VLS_intrinsicElements["div"];
const __VLS_381 = __VLS_elementAsFunctionalComponent(__VLS_380);
const __VLS_382 = __VLS_381({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_381));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_380, typeof __VLS_382> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_383 = __VLS_pickFunctionalComponentCtx(__VLS_380, __VLS_382)!;
let __VLS_384!: __VLS_NormalizeEmits<typeof __VLS_383.emit>;
(__VLS_383.slots!).default;
}
{
const __VLS_385 = __VLS_intrinsicElements["div"];
const __VLS_386 = __VLS_elementAsFunctionalComponent(__VLS_385);
const __VLS_387 = __VLS_386({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_386));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_385, typeof __VLS_387> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_388 = __VLS_pickFunctionalComponentCtx(__VLS_385, __VLS_387)!;
let __VLS_389!: __VLS_NormalizeEmits<typeof __VLS_388.emit>;
(__VLS_388.slots!).default;
}
(__VLS_378.slots!).default;
}
{
const __VLS_390 = __VLS_intrinsicElements["input"];
const __VLS_391 = __VLS_elementAsFunctionalComponent(__VLS_390);
const __VLS_392 = __VLS_391({ ...{}, type: ("text"), id: ("roomWidth"), name: ("roomWidth"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_391));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_390, typeof __VLS_392> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomWidth"), name: ("roomWidth"), style: ({}), });
const __VLS_393 = __VLS_pickFunctionalComponentCtx(__VLS_390, __VLS_392)!;
let __VLS_394!: __VLS_NormalizeEmits<typeof __VLS_393.emit>;
}
(__VLS_373.slots!).default;
}
{
const __VLS_395 = __VLS_intrinsicElements["div"];
const __VLS_396 = __VLS_elementAsFunctionalComponent(__VLS_395);
const __VLS_397 = __VLS_396({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_396));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_395, typeof __VLS_397> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_398 = __VLS_pickFunctionalComponentCtx(__VLS_395, __VLS_397)!;
let __VLS_399!: __VLS_NormalizeEmits<typeof __VLS_398.emit>;
{
const __VLS_400 = __VLS_intrinsicElements["label"];
const __VLS_401 = __VLS_elementAsFunctionalComponent(__VLS_400);
const __VLS_402 = __VLS_401({ ...{}, class: ("subtitles-room"), for: ("roomHeight"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_401));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_400, typeof __VLS_402> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomHeight"), style: ({}), });
const __VLS_403 = __VLS_pickFunctionalComponentCtx(__VLS_400, __VLS_402)!;
let __VLS_404!: __VLS_NormalizeEmits<typeof __VLS_403.emit>;
{
const __VLS_405 = __VLS_intrinsicElements["div"];
const __VLS_406 = __VLS_elementAsFunctionalComponent(__VLS_405);
const __VLS_407 = __VLS_406({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_406));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_405, typeof __VLS_407> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_408 = __VLS_pickFunctionalComponentCtx(__VLS_405, __VLS_407)!;
let __VLS_409!: __VLS_NormalizeEmits<typeof __VLS_408.emit>;
(__VLS_408.slots!).default;
}
{
const __VLS_410 = __VLS_intrinsicElements["div"];
const __VLS_411 = __VLS_elementAsFunctionalComponent(__VLS_410);
const __VLS_412 = __VLS_411({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_411));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_410, typeof __VLS_412> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_413 = __VLS_pickFunctionalComponentCtx(__VLS_410, __VLS_412)!;
let __VLS_414!: __VLS_NormalizeEmits<typeof __VLS_413.emit>;
(__VLS_413.slots!).default;
}
(__VLS_403.slots!).default;
}
{
const __VLS_415 = __VLS_intrinsicElements["input"];
const __VLS_416 = __VLS_elementAsFunctionalComponent(__VLS_415);
const __VLS_417 = __VLS_416({ ...{}, type: ("text"), id: ("roomHeight"), name: ("roomHeight"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_416));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_415, typeof __VLS_417> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomHeight"), name: ("roomHeight"), style: ({}), });
const __VLS_418 = __VLS_pickFunctionalComponentCtx(__VLS_415, __VLS_417)!;
let __VLS_419!: __VLS_NormalizeEmits<typeof __VLS_418.emit>;
}
(__VLS_398.slots!).default;
}
{
const __VLS_420 = __VLS_intrinsicElements["div"];
const __VLS_421 = __VLS_elementAsFunctionalComponent(__VLS_420);
const __VLS_422 = __VLS_421({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_421));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_420, typeof __VLS_422> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_423 = __VLS_pickFunctionalComponentCtx(__VLS_420, __VLS_422)!;
let __VLS_424!: __VLS_NormalizeEmits<typeof __VLS_423.emit>;
{
const __VLS_425 = __VLS_intrinsicElements["label"];
const __VLS_426 = __VLS_elementAsFunctionalComponent(__VLS_425);
const __VLS_427 = __VLS_426({ ...{}, class: ("subtitles-room"), for: ("floorType"), }, ...__VLS_functionalComponentArgsRest(__VLS_426));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_425, typeof __VLS_427> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("floorType"), });
const __VLS_428 = __VLS_pickFunctionalComponentCtx(__VLS_425, __VLS_427)!;
let __VLS_429!: __VLS_NormalizeEmits<typeof __VLS_428.emit>;
(__VLS_428.slots!).default;
}
{
const __VLS_430 = __VLS_intrinsicElements["select"];
const __VLS_431 = __VLS_elementAsFunctionalComponent(__VLS_430);
const __VLS_432 = __VLS_431({ ...{}, id: ("floorType"), name: ("floorType"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_431));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_430, typeof __VLS_432> & Record<string, unknown>) => void)({ ...{}, id: ("floorType"), name: ("floorType"), style: ({}), });
const __VLS_433 = __VLS_pickFunctionalComponentCtx(__VLS_430, __VLS_432)!;
let __VLS_434!: __VLS_NormalizeEmits<typeof __VLS_433.emit>;
{
const __VLS_435 = __VLS_intrinsicElements["option"];
const __VLS_436 = __VLS_elementAsFunctionalComponent(__VLS_435);
const __VLS_437 = __VLS_436({ ...{}, value: ("C"), }, ...__VLS_functionalComponentArgsRest(__VLS_436));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_435, typeof __VLS_437> & Record<string, unknown>) => void)({ ...{}, value: ("C"), });
const __VLS_438 = __VLS_pickFunctionalComponentCtx(__VLS_435, __VLS_437)!;
let __VLS_439!: __VLS_NormalizeEmits<typeof __VLS_438.emit>;
(__VLS_438.slots!).default;
}
{
const __VLS_440 = __VLS_intrinsicElements["option"];
const __VLS_441 = __VLS_elementAsFunctionalComponent(__VLS_440);
const __VLS_442 = __VLS_441({ ...{}, value: ("V"), }, ...__VLS_functionalComponentArgsRest(__VLS_441));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_440, typeof __VLS_442> & Record<string, unknown>) => void)({ ...{}, value: ("V"), });
const __VLS_443 = __VLS_pickFunctionalComponentCtx(__VLS_440, __VLS_442)!;
let __VLS_444!: __VLS_NormalizeEmits<typeof __VLS_443.emit>;
(__VLS_443.slots!).default;
}
{
const __VLS_445 = __VLS_intrinsicElements["option"];
const __VLS_446 = __VLS_elementAsFunctionalComponent(__VLS_445);
const __VLS_447 = __VLS_446({ ...{}, value: ("L"), }, ...__VLS_functionalComponentArgsRest(__VLS_446));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_445, typeof __VLS_447> & Record<string, unknown>) => void)({ ...{}, value: ("L"), });
const __VLS_448 = __VLS_pickFunctionalComponentCtx(__VLS_445, __VLS_447)!;
let __VLS_449!: __VLS_NormalizeEmits<typeof __VLS_448.emit>;
(__VLS_448.slots!).default;
}
{
const __VLS_450 = __VLS_intrinsicElements["option"];
const __VLS_451 = __VLS_elementAsFunctionalComponent(__VLS_450);
const __VLS_452 = __VLS_451({ ...{}, value: ("W"), }, ...__VLS_functionalComponentArgsRest(__VLS_451));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_450, typeof __VLS_452> & Record<string, unknown>) => void)({ ...{}, value: ("W"), });
const __VLS_453 = __VLS_pickFunctionalComponentCtx(__VLS_450, __VLS_452)!;
let __VLS_454!: __VLS_NormalizeEmits<typeof __VLS_453.emit>;
(__VLS_453.slots!).default;
}
(__VLS_433.slots!).default;
}
(__VLS_423.slots!).default;
}
(__VLS_343.slots!).default;
}
(__VLS_333.slots!).default;
}
{
const __VLS_455 = __VLS_intrinsicElements["fieldset"];
const __VLS_456 = __VLS_elementAsFunctionalComponent(__VLS_455);
const __VLS_457 = __VLS_456({ ...{}, id: ("fieldset_4"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_456));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_455, typeof __VLS_457> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_4"), style: ({}), });
const __VLS_458 = __VLS_pickFunctionalComponentCtx(__VLS_455, __VLS_457)!;
let __VLS_459!: __VLS_NormalizeEmits<typeof __VLS_458.emit>;
{
const __VLS_460 = __VLS_intrinsicElements["legend"];
const __VLS_461 = __VLS_elementAsFunctionalComponent(__VLS_460);
const __VLS_462 = __VLS_461({ ...{}, class: ("titles-sections"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_461));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_460, typeof __VLS_462> & Record<string, unknown>) => void)({ ...{}, class: ("titles-sections"), style: ({}), });
const __VLS_463 = __VLS_pickFunctionalComponentCtx(__VLS_460, __VLS_462)!;
let __VLS_464!: __VLS_NormalizeEmits<typeof __VLS_463.emit>;
(__VLS_463.slots!).default;
}
{
const __VLS_465 = __VLS_intrinsicElements["div"];
const __VLS_466 = __VLS_elementAsFunctionalComponent(__VLS_465);
const __VLS_467 = __VLS_466({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_466));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_465, typeof __VLS_467> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_468 = __VLS_pickFunctionalComponentCtx(__VLS_465, __VLS_467)!;
let __VLS_469!: __VLS_NormalizeEmits<typeof __VLS_468.emit>;
{
const __VLS_470 = __VLS_intrinsicElements["div"];
const __VLS_471 = __VLS_elementAsFunctionalComponent(__VLS_470);
const __VLS_472 = __VLS_471({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_471));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_470, typeof __VLS_472> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_473 = __VLS_pickFunctionalComponentCtx(__VLS_470, __VLS_472)!;
let __VLS_474!: __VLS_NormalizeEmits<typeof __VLS_473.emit>;
{
const __VLS_475 = __VLS_intrinsicElements["label"];
const __VLS_476 = __VLS_elementAsFunctionalComponent(__VLS_475);
const __VLS_477 = __VLS_476({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_476));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_475, typeof __VLS_477> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), });
const __VLS_478 = __VLS_pickFunctionalComponentCtx(__VLS_475, __VLS_477)!;
let __VLS_479!: __VLS_NormalizeEmits<typeof __VLS_478.emit>;
{
const __VLS_480 = __VLS_intrinsicElements["div"];
const __VLS_481 = __VLS_elementAsFunctionalComponent(__VLS_480);
const __VLS_482 = __VLS_481({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_481));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_480, typeof __VLS_482> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_483 = __VLS_pickFunctionalComponentCtx(__VLS_480, __VLS_482)!;
let __VLS_484!: __VLS_NormalizeEmits<typeof __VLS_483.emit>;
(__VLS_483.slots!).default;
}
{
const __VLS_485 = __VLS_intrinsicElements["div"];
const __VLS_486 = __VLS_elementAsFunctionalComponent(__VLS_485);
const __VLS_487 = __VLS_486({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_486));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_485, typeof __VLS_487> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_488 = __VLS_pickFunctionalComponentCtx(__VLS_485, __VLS_487)!;
let __VLS_489!: __VLS_NormalizeEmits<typeof __VLS_488.emit>;
(__VLS_488.slots!).default;
}
(__VLS_478.slots!).default;
}
{
const __VLS_490 = __VLS_intrinsicElements["input"];
const __VLS_491 = __VLS_elementAsFunctionalComponent(__VLS_490);
const __VLS_492 = __VLS_491({ ...{}, type: ("text"), id: ("roomLength"), name: ("roomLength"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_491));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_490, typeof __VLS_492> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomLength"), name: ("roomLength"), style: ({}), });
const __VLS_493 = __VLS_pickFunctionalComponentCtx(__VLS_490, __VLS_492)!;
let __VLS_494!: __VLS_NormalizeEmits<typeof __VLS_493.emit>;
}
(__VLS_473.slots!).default;
}
{
const __VLS_495 = __VLS_intrinsicElements["div"];
const __VLS_496 = __VLS_elementAsFunctionalComponent(__VLS_495);
const __VLS_497 = __VLS_496({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_496));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_495, typeof __VLS_497> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_498 = __VLS_pickFunctionalComponentCtx(__VLS_495, __VLS_497)!;
let __VLS_499!: __VLS_NormalizeEmits<typeof __VLS_498.emit>;
{
const __VLS_500 = __VLS_intrinsicElements["label"];
const __VLS_501 = __VLS_elementAsFunctionalComponent(__VLS_500);
const __VLS_502 = __VLS_501({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_501));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_500, typeof __VLS_502> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), });
const __VLS_503 = __VLS_pickFunctionalComponentCtx(__VLS_500, __VLS_502)!;
let __VLS_504!: __VLS_NormalizeEmits<typeof __VLS_503.emit>;
{
const __VLS_505 = __VLS_intrinsicElements["div"];
const __VLS_506 = __VLS_elementAsFunctionalComponent(__VLS_505);
const __VLS_507 = __VLS_506({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_506));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_505, typeof __VLS_507> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_508 = __VLS_pickFunctionalComponentCtx(__VLS_505, __VLS_507)!;
let __VLS_509!: __VLS_NormalizeEmits<typeof __VLS_508.emit>;
(__VLS_508.slots!).default;
}
{
const __VLS_510 = __VLS_intrinsicElements["div"];
const __VLS_511 = __VLS_elementAsFunctionalComponent(__VLS_510);
const __VLS_512 = __VLS_511({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_511));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_510, typeof __VLS_512> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_513 = __VLS_pickFunctionalComponentCtx(__VLS_510, __VLS_512)!;
let __VLS_514!: __VLS_NormalizeEmits<typeof __VLS_513.emit>;
(__VLS_513.slots!).default;
}
(__VLS_503.slots!).default;
}
{
const __VLS_515 = __VLS_intrinsicElements["input"];
const __VLS_516 = __VLS_elementAsFunctionalComponent(__VLS_515);
const __VLS_517 = __VLS_516({ ...{}, type: ("text"), id: ("roomWidth"), name: ("roomWidth"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_516));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_515, typeof __VLS_517> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomWidth"), name: ("roomWidth"), style: ({}), });
const __VLS_518 = __VLS_pickFunctionalComponentCtx(__VLS_515, __VLS_517)!;
let __VLS_519!: __VLS_NormalizeEmits<typeof __VLS_518.emit>;
}
(__VLS_498.slots!).default;
}
{
const __VLS_520 = __VLS_intrinsicElements["div"];
const __VLS_521 = __VLS_elementAsFunctionalComponent(__VLS_520);
const __VLS_522 = __VLS_521({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_521));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_520, typeof __VLS_522> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_523 = __VLS_pickFunctionalComponentCtx(__VLS_520, __VLS_522)!;
let __VLS_524!: __VLS_NormalizeEmits<typeof __VLS_523.emit>;
{
const __VLS_525 = __VLS_intrinsicElements["label"];
const __VLS_526 = __VLS_elementAsFunctionalComponent(__VLS_525);
const __VLS_527 = __VLS_526({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_526));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_525, typeof __VLS_527> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("roomLength"), style: ({}), });
const __VLS_528 = __VLS_pickFunctionalComponentCtx(__VLS_525, __VLS_527)!;
let __VLS_529!: __VLS_NormalizeEmits<typeof __VLS_528.emit>;
{
const __VLS_530 = __VLS_intrinsicElements["div"];
const __VLS_531 = __VLS_elementAsFunctionalComponent(__VLS_530);
const __VLS_532 = __VLS_531({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_531));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_530, typeof __VLS_532> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_533 = __VLS_pickFunctionalComponentCtx(__VLS_530, __VLS_532)!;
let __VLS_534!: __VLS_NormalizeEmits<typeof __VLS_533.emit>;
(__VLS_533.slots!).default;
}
{
const __VLS_535 = __VLS_intrinsicElements["div"];
const __VLS_536 = __VLS_elementAsFunctionalComponent(__VLS_535);
const __VLS_537 = __VLS_536({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_536));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_535, typeof __VLS_537> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_538 = __VLS_pickFunctionalComponentCtx(__VLS_535, __VLS_537)!;
let __VLS_539!: __VLS_NormalizeEmits<typeof __VLS_538.emit>;
(__VLS_538.slots!).default;
}
(__VLS_528.slots!).default;
}
{
const __VLS_540 = __VLS_intrinsicElements["input"];
const __VLS_541 = __VLS_elementAsFunctionalComponent(__VLS_540);
const __VLS_542 = __VLS_541({ ...{}, type: ("text"), id: ("roomHeight"), name: ("roomHeight"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_541));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_540, typeof __VLS_542> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("roomHeight"), name: ("roomHeight"), style: ({}), });
const __VLS_543 = __VLS_pickFunctionalComponentCtx(__VLS_540, __VLS_542)!;
let __VLS_544!: __VLS_NormalizeEmits<typeof __VLS_543.emit>;
}
(__VLS_523.slots!).default;
}
{
const __VLS_545 = __VLS_intrinsicElements["div"];
const __VLS_546 = __VLS_elementAsFunctionalComponent(__VLS_545);
const __VLS_547 = __VLS_546({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_546));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_545, typeof __VLS_547> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_548 = __VLS_pickFunctionalComponentCtx(__VLS_545, __VLS_547)!;
let __VLS_549!: __VLS_NormalizeEmits<typeof __VLS_548.emit>;
{
const __VLS_550 = __VLS_intrinsicElements["label"];
const __VLS_551 = __VLS_elementAsFunctionalComponent(__VLS_550);
const __VLS_552 = __VLS_551({ ...{}, class: ("subtitles-room"), for: ("floorType"), }, ...__VLS_functionalComponentArgsRest(__VLS_551));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_550, typeof __VLS_552> & Record<string, unknown>) => void)({ ...{}, class: ("subtitles-room"), for: ("floorType"), });
const __VLS_553 = __VLS_pickFunctionalComponentCtx(__VLS_550, __VLS_552)!;
let __VLS_554!: __VLS_NormalizeEmits<typeof __VLS_553.emit>;
(__VLS_553.slots!).default;
}
{
const __VLS_555 = __VLS_intrinsicElements["select"];
const __VLS_556 = __VLS_elementAsFunctionalComponent(__VLS_555);
const __VLS_557 = __VLS_556({ ...{}, id: ("floorType"), name: ("floorType"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_556));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_555, typeof __VLS_557> & Record<string, unknown>) => void)({ ...{}, id: ("floorType"), name: ("floorType"), style: ({}), });
const __VLS_558 = __VLS_pickFunctionalComponentCtx(__VLS_555, __VLS_557)!;
let __VLS_559!: __VLS_NormalizeEmits<typeof __VLS_558.emit>;
{
const __VLS_560 = __VLS_intrinsicElements["option"];
const __VLS_561 = __VLS_elementAsFunctionalComponent(__VLS_560);
const __VLS_562 = __VLS_561({ ...{}, value: ("C"), }, ...__VLS_functionalComponentArgsRest(__VLS_561));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_560, typeof __VLS_562> & Record<string, unknown>) => void)({ ...{}, value: ("C"), });
const __VLS_563 = __VLS_pickFunctionalComponentCtx(__VLS_560, __VLS_562)!;
let __VLS_564!: __VLS_NormalizeEmits<typeof __VLS_563.emit>;
(__VLS_563.slots!).default;
}
{
const __VLS_565 = __VLS_intrinsicElements["option"];
const __VLS_566 = __VLS_elementAsFunctionalComponent(__VLS_565);
const __VLS_567 = __VLS_566({ ...{}, value: ("V"), }, ...__VLS_functionalComponentArgsRest(__VLS_566));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_565, typeof __VLS_567> & Record<string, unknown>) => void)({ ...{}, value: ("V"), });
const __VLS_568 = __VLS_pickFunctionalComponentCtx(__VLS_565, __VLS_567)!;
let __VLS_569!: __VLS_NormalizeEmits<typeof __VLS_568.emit>;
(__VLS_568.slots!).default;
}
{
const __VLS_570 = __VLS_intrinsicElements["option"];
const __VLS_571 = __VLS_elementAsFunctionalComponent(__VLS_570);
const __VLS_572 = __VLS_571({ ...{}, value: ("L"), }, ...__VLS_functionalComponentArgsRest(__VLS_571));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_570, typeof __VLS_572> & Record<string, unknown>) => void)({ ...{}, value: ("L"), });
const __VLS_573 = __VLS_pickFunctionalComponentCtx(__VLS_570, __VLS_572)!;
let __VLS_574!: __VLS_NormalizeEmits<typeof __VLS_573.emit>;
(__VLS_573.slots!).default;
}
{
const __VLS_575 = __VLS_intrinsicElements["option"];
const __VLS_576 = __VLS_elementAsFunctionalComponent(__VLS_575);
const __VLS_577 = __VLS_576({ ...{}, value: ("W"), }, ...__VLS_functionalComponentArgsRest(__VLS_576));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_575, typeof __VLS_577> & Record<string, unknown>) => void)({ ...{}, value: ("W"), });
const __VLS_578 = __VLS_pickFunctionalComponentCtx(__VLS_575, __VLS_577)!;
let __VLS_579!: __VLS_NormalizeEmits<typeof __VLS_578.emit>;
(__VLS_578.slots!).default;
}
(__VLS_558.slots!).default;
}
(__VLS_548.slots!).default;
}
(__VLS_468.slots!).default;
}
(__VLS_458.slots!).default;
}
{
const __VLS_580 = __VLS_intrinsicElements["fieldset"];
const __VLS_581 = __VLS_elementAsFunctionalComponent(__VLS_580);
const __VLS_582 = __VLS_581({ ...{}, id: ("fieldset_5"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_581));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_580, typeof __VLS_582> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_5"), style: ({}), });
const __VLS_583 = __VLS_pickFunctionalComponentCtx(__VLS_580, __VLS_582)!;
let __VLS_584!: __VLS_NormalizeEmits<typeof __VLS_583.emit>;
{
const __VLS_585 = __VLS_intrinsicElements["legend"];
const __VLS_586 = __VLS_elementAsFunctionalComponent(__VLS_585);
const __VLS_587 = __VLS_586({ ...{}, class: ("titles-sections-equipment"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_586));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_585, typeof __VLS_587> & Record<string, unknown>) => void)({ ...{}, class: ("titles-sections-equipment"), style: ({}), });
const __VLS_588 = __VLS_pickFunctionalComponentCtx(__VLS_585, __VLS_587)!;
let __VLS_589!: __VLS_NormalizeEmits<typeof __VLS_588.emit>;
(__VLS_588.slots!).default;
}
{
const __VLS_590 = __VLS_intrinsicElements["fieldset"];
const __VLS_591 = __VLS_elementAsFunctionalComponent(__VLS_590);
const __VLS_592 = __VLS_591({ ...{}, id: ("fieldset_6"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_591));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_590, typeof __VLS_592> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_6"), style: ({}), });
const __VLS_593 = __VLS_pickFunctionalComponentCtx(__VLS_590, __VLS_592)!;
let __VLS_594!: __VLS_NormalizeEmits<typeof __VLS_593.emit>;
{
const __VLS_595 = __VLS_intrinsicElements["div"];
const __VLS_596 = __VLS_elementAsFunctionalComponent(__VLS_595);
const __VLS_597 = __VLS_596({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_596));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_595, typeof __VLS_597> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_598 = __VLS_pickFunctionalComponentCtx(__VLS_595, __VLS_597)!;
let __VLS_599!: __VLS_NormalizeEmits<typeof __VLS_598.emit>;
{
const __VLS_600 = __VLS_intrinsicElements["label"];
const __VLS_601 = __VLS_elementAsFunctionalComponent(__VLS_600);
const __VLS_602 = __VLS_601({ ...{}, class: ("equipamientos-titulos"), for: ("dehumidifierSize"), }, ...__VLS_functionalComponentArgsRest(__VLS_601));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_600, typeof __VLS_602> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("dehumidifierSize"), });
const __VLS_603 = __VLS_pickFunctionalComponentCtx(__VLS_600, __VLS_602)!;
let __VLS_604!: __VLS_NormalizeEmits<typeof __VLS_603.emit>;
(__VLS_603.slots!).default;
}
{
const __VLS_605 = __VLS_intrinsicElements["input"];
const __VLS_606 = __VLS_elementAsFunctionalComponent(__VLS_605);
const __VLS_607 = __VLS_606({ ...{}, type: ("text"), id: ("dehumidifierSize"), name: ("dehumidifierSize"), placeholder: (""), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_606));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_605, typeof __VLS_607> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierSize"), name: ("dehumidifierSize"), placeholder: (""), style: ({}), });
const __VLS_608 = __VLS_pickFunctionalComponentCtx(__VLS_605, __VLS_607)!;
let __VLS_609!: __VLS_NormalizeEmits<typeof __VLS_608.emit>;
}
(__VLS_598.slots!).default;
}
{
const __VLS_610 = __VLS_intrinsicElements["div"];
const __VLS_611 = __VLS_elementAsFunctionalComponent(__VLS_610);
const __VLS_612 = __VLS_611({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_611));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_610, typeof __VLS_612> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_613 = __VLS_pickFunctionalComponentCtx(__VLS_610, __VLS_612)!;
let __VLS_614!: __VLS_NormalizeEmits<typeof __VLS_613.emit>;
{
const __VLS_615 = __VLS_intrinsicElements["label"];
const __VLS_616 = __VLS_elementAsFunctionalComponent(__VLS_615);
const __VLS_617 = __VLS_616({ ...{}, class: ("ejemplos"), for: ("dehumidifierEA"), }, ...__VLS_functionalComponentArgsRest(__VLS_616));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_615, typeof __VLS_617> & Record<string, unknown>) => void)({ ...{}, class: ("ejemplos"), for: ("dehumidifierEA"), });
const __VLS_618 = __VLS_pickFunctionalComponentCtx(__VLS_615, __VLS_617)!;
let __VLS_619!: __VLS_NormalizeEmits<typeof __VLS_618.emit>;
{
const __VLS_620 = __VLS_intrinsicElements["span"];
const __VLS_621 = __VLS_elementAsFunctionalComponent(__VLS_620);
const __VLS_622 = __VLS_621({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_621));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_620, typeof __VLS_622> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_623 = __VLS_pickFunctionalComponentCtx(__VLS_620, __VLS_622)!;
let __VLS_624!: __VLS_NormalizeEmits<typeof __VLS_623.emit>;
(__VLS_623.slots!).default;
}
(__VLS_618.slots!).default;
}
(__VLS_613.slots!).default;
}
{
const __VLS_625 = __VLS_intrinsicElements["div"];
const __VLS_626 = __VLS_elementAsFunctionalComponent(__VLS_625);
const __VLS_627 = __VLS_626({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_626));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_625, typeof __VLS_627> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_628 = __VLS_pickFunctionalComponentCtx(__VLS_625, __VLS_627)!;
let __VLS_629!: __VLS_NormalizeEmits<typeof __VLS_628.emit>;
{
const __VLS_630 = __VLS_intrinsicElements["input"];
const __VLS_631 = __VLS_elementAsFunctionalComponent(__VLS_630);
const __VLS_632 = __VLS_631({ ...{}, type: ("text"), id: ("dehumidifierEA"), name: ("dehumidifierEA"), placeholder: ("(____/______EA)__"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_631));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_630, typeof __VLS_632> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierEA"), name: ("dehumidifierEA"), placeholder: ("(____/______EA)__"), style: ({}), });
const __VLS_633 = __VLS_pickFunctionalComponentCtx(__VLS_630, __VLS_632)!;
let __VLS_634!: __VLS_NormalizeEmits<typeof __VLS_633.emit>;
}
{
const __VLS_635 = __VLS_intrinsicElements["span"];
const __VLS_636 = __VLS_elementAsFunctionalComponent(__VLS_635);
const __VLS_637 = __VLS_636({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_636));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_635, typeof __VLS_637> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_638 = __VLS_pickFunctionalComponentCtx(__VLS_635, __VLS_637)!;
let __VLS_639!: __VLS_NormalizeEmits<typeof __VLS_638.emit>;
(__VLS_638.slots!).default;
}
{
const __VLS_640 = __VLS_intrinsicElements["input"];
const __VLS_641 = __VLS_elementAsFunctionalComponent(__VLS_640);
const __VLS_642 = __VLS_641({ ...{}, type: ("text"), id: ("dehumidifierDays"), name: ("dehumidifierDays"), placeholder: ("___(________Days)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_641));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_640, typeof __VLS_642> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierDays"), name: ("dehumidifierDays"), placeholder: ("___(________Days)"), style: ({}), });
const __VLS_643 = __VLS_pickFunctionalComponentCtx(__VLS_640, __VLS_642)!;
let __VLS_644!: __VLS_NormalizeEmits<typeof __VLS_643.emit>;
}
(__VLS_628.slots!).default;
}
(__VLS_593.slots!).default;
}
(__VLS_583.slots!).default;
}
{
const __VLS_645 = __VLS_intrinsicElements["fieldset"];
const __VLS_646 = __VLS_elementAsFunctionalComponent(__VLS_645);
const __VLS_647 = __VLS_646({ ...{}, id: ("fieldset_7"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_646));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_645, typeof __VLS_647> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_7"), style: ({}), });
const __VLS_648 = __VLS_pickFunctionalComponentCtx(__VLS_645, __VLS_647)!;
let __VLS_649!: __VLS_NormalizeEmits<typeof __VLS_648.emit>;
{
const __VLS_650 = __VLS_intrinsicElements["div"];
const __VLS_651 = __VLS_elementAsFunctionalComponent(__VLS_650);
const __VLS_652 = __VLS_651({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_651));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_650, typeof __VLS_652> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_653 = __VLS_pickFunctionalComponentCtx(__VLS_650, __VLS_652)!;
let __VLS_654!: __VLS_NormalizeEmits<typeof __VLS_653.emit>;
{
const __VLS_655 = __VLS_intrinsicElements["label"];
const __VLS_656 = __VLS_elementAsFunctionalComponent(__VLS_655);
const __VLS_657 = __VLS_656({ ...{}, class: ("equipamientos-titulos"), for: ("dehumidifierSize"), }, ...__VLS_functionalComponentArgsRest(__VLS_656));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_655, typeof __VLS_657> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("dehumidifierSize"), });
const __VLS_658 = __VLS_pickFunctionalComponentCtx(__VLS_655, __VLS_657)!;
let __VLS_659!: __VLS_NormalizeEmits<typeof __VLS_658.emit>;
{
const __VLS_660 = __VLS_intrinsicElements["span"];
const __VLS_661 = __VLS_elementAsFunctionalComponent(__VLS_660);
const __VLS_662 = __VLS_661({ ...{}, class: ("checkOne"), }, ...__VLS_functionalComponentArgsRest(__VLS_661));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_660, typeof __VLS_662> & Record<string, unknown>) => void)({ ...{}, class: ("checkOne"), });
const __VLS_663 = __VLS_pickFunctionalComponentCtx(__VLS_660, __VLS_662)!;
let __VLS_664!: __VLS_NormalizeEmits<typeof __VLS_663.emit>;
(__VLS_663.slots!).default;
}
(__VLS_658.slots!).default;
}
{
const __VLS_665 = __VLS_intrinsicElements["div"];
const __VLS_666 = __VLS_elementAsFunctionalComponent(__VLS_665);
const __VLS_667 = __VLS_666({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_666));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_665, typeof __VLS_667> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_668 = __VLS_pickFunctionalComponentCtx(__VLS_665, __VLS_667)!;
let __VLS_669!: __VLS_NormalizeEmits<typeof __VLS_668.emit>;
{
const __VLS_670 = __VLS_intrinsicElements["input"];
const __VLS_671 = __VLS_elementAsFunctionalComponent(__VLS_670);
const __VLS_672 = __VLS_671({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-2"), value: ("1"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_671));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_670, typeof __VLS_672> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-2"), value: ("1"), style: ({}), });
const __VLS_673 = __VLS_pickFunctionalComponentCtx(__VLS_670, __VLS_672)!;
let __VLS_674!: __VLS_NormalizeEmits<typeof __VLS_673.emit>;
}
{
const __VLS_675 = __VLS_intrinsicElements["label"];
const __VLS_676 = __VLS_elementAsFunctionalComponent(__VLS_675);
const __VLS_677 = __VLS_676({ ...{}, class: ("opciones"), for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_676));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_675, typeof __VLS_677> & Record<string, unknown>) => void)({ ...{}, class: ("opciones"), for: ("cat1"), });
const __VLS_678 = __VLS_pickFunctionalComponentCtx(__VLS_675, __VLS_677)!;
let __VLS_679!: __VLS_NormalizeEmits<typeof __VLS_678.emit>;
(__VLS_678.slots!).default;
}
(__VLS_668.slots!).default;
}
{
const __VLS_680 = __VLS_intrinsicElements["div"];
const __VLS_681 = __VLS_elementAsFunctionalComponent(__VLS_680);
const __VLS_682 = __VLS_681({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_681));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_680, typeof __VLS_682> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_683 = __VLS_pickFunctionalComponentCtx(__VLS_680, __VLS_682)!;
let __VLS_684!: __VLS_NormalizeEmits<typeof __VLS_683.emit>;
{
const __VLS_685 = __VLS_intrinsicElements["input"];
const __VLS_686 = __VLS_elementAsFunctionalComponent(__VLS_685);
const __VLS_687 = __VLS_686({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-2"), value: ("2"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_686));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_685, typeof __VLS_687> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-2"), value: ("2"), style: ({}), });
const __VLS_688 = __VLS_pickFunctionalComponentCtx(__VLS_685, __VLS_687)!;
let __VLS_689!: __VLS_NormalizeEmits<typeof __VLS_688.emit>;
}
{
const __VLS_690 = __VLS_intrinsicElements["label"];
const __VLS_691 = __VLS_elementAsFunctionalComponent(__VLS_690);
const __VLS_692 = __VLS_691({ ...{}, class: ("opciones"), for: ("cat2"), }, ...__VLS_functionalComponentArgsRest(__VLS_691));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_690, typeof __VLS_692> & Record<string, unknown>) => void)({ ...{}, class: ("opciones"), for: ("cat2"), });
const __VLS_693 = __VLS_pickFunctionalComponentCtx(__VLS_690, __VLS_692)!;
let __VLS_694!: __VLS_NormalizeEmits<typeof __VLS_693.emit>;
(__VLS_693.slots!).default;
}
(__VLS_683.slots!).default;
}
(__VLS_653.slots!).default;
}
{
const __VLS_695 = __VLS_intrinsicElements["div"];
const __VLS_696 = __VLS_elementAsFunctionalComponent(__VLS_695);
const __VLS_697 = __VLS_696({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_696));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_695, typeof __VLS_697> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_698 = __VLS_pickFunctionalComponentCtx(__VLS_695, __VLS_697)!;
let __VLS_699!: __VLS_NormalizeEmits<typeof __VLS_698.emit>;
{
const __VLS_700 = __VLS_intrinsicElements["label"];
const __VLS_701 = __VLS_elementAsFunctionalComponent(__VLS_700);
const __VLS_702 = __VLS_701({ ...{}, class: ("ejemplos"), for: ("dehumidifierEA"), }, ...__VLS_functionalComponentArgsRest(__VLS_701));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_700, typeof __VLS_702> & Record<string, unknown>) => void)({ ...{}, class: ("ejemplos"), for: ("dehumidifierEA"), });
const __VLS_703 = __VLS_pickFunctionalComponentCtx(__VLS_700, __VLS_702)!;
let __VLS_704!: __VLS_NormalizeEmits<typeof __VLS_703.emit>;
{
const __VLS_705 = __VLS_intrinsicElements["span"];
const __VLS_706 = __VLS_elementAsFunctionalComponent(__VLS_705);
const __VLS_707 = __VLS_706({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_706));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_705, typeof __VLS_707> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_708 = __VLS_pickFunctionalComponentCtx(__VLS_705, __VLS_707)!;
let __VLS_709!: __VLS_NormalizeEmits<typeof __VLS_708.emit>;
(__VLS_708.slots!).default;
}
(__VLS_703.slots!).default;
}
(__VLS_698.slots!).default;
}
{
const __VLS_710 = __VLS_intrinsicElements["div"];
const __VLS_711 = __VLS_elementAsFunctionalComponent(__VLS_710);
const __VLS_712 = __VLS_711({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_711));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_710, typeof __VLS_712> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_713 = __VLS_pickFunctionalComponentCtx(__VLS_710, __VLS_712)!;
let __VLS_714!: __VLS_NormalizeEmits<typeof __VLS_713.emit>;
{
const __VLS_715 = __VLS_intrinsicElements["label"];
const __VLS_716 = __VLS_elementAsFunctionalComponent(__VLS_715);
const __VLS_717 = __VLS_716({ ...{}, class: ("equipamientos-titulos"), for: ("dehumidifierSize"), }, ...__VLS_functionalComponentArgsRest(__VLS_716));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_715, typeof __VLS_717> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("dehumidifierSize"), });
const __VLS_718 = __VLS_pickFunctionalComponentCtx(__VLS_715, __VLS_717)!;
let __VLS_719!: __VLS_NormalizeEmits<typeof __VLS_718.emit>;
(__VLS_718.slots!).default;
}
{
const __VLS_720 = __VLS_intrinsicElements["input"];
const __VLS_721 = __VLS_elementAsFunctionalComponent(__VLS_720);
const __VLS_722 = __VLS_721({ ...{}, type: ("text"), id: ("dehumidifierSize"), name: ("dehumidifierSize"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_721));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_720, typeof __VLS_722> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierSize"), name: ("dehumidifierSize"), style: ({}), });
const __VLS_723 = __VLS_pickFunctionalComponentCtx(__VLS_720, __VLS_722)!;
let __VLS_724!: __VLS_NormalizeEmits<typeof __VLS_723.emit>;
}
(__VLS_713.slots!).default;
}
{
const __VLS_725 = __VLS_intrinsicElements["div"];
const __VLS_726 = __VLS_elementAsFunctionalComponent(__VLS_725);
const __VLS_727 = __VLS_726({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_726));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_725, typeof __VLS_727> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_728 = __VLS_pickFunctionalComponentCtx(__VLS_725, __VLS_727)!;
let __VLS_729!: __VLS_NormalizeEmits<typeof __VLS_728.emit>;
{
const __VLS_730 = __VLS_intrinsicElements["label"];
const __VLS_731 = __VLS_elementAsFunctionalComponent(__VLS_730);
const __VLS_732 = __VLS_731({ ...{}, class: ("ejemplos"), for: ("dehumidifierEA"), }, ...__VLS_functionalComponentArgsRest(__VLS_731));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_730, typeof __VLS_732> & Record<string, unknown>) => void)({ ...{}, class: ("ejemplos"), for: ("dehumidifierEA"), });
const __VLS_733 = __VLS_pickFunctionalComponentCtx(__VLS_730, __VLS_732)!;
let __VLS_734!: __VLS_NormalizeEmits<typeof __VLS_733.emit>;
{
const __VLS_735 = __VLS_intrinsicElements["span"];
const __VLS_736 = __VLS_elementAsFunctionalComponent(__VLS_735);
const __VLS_737 = __VLS_736({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_736));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_735, typeof __VLS_737> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_738 = __VLS_pickFunctionalComponentCtx(__VLS_735, __VLS_737)!;
let __VLS_739!: __VLS_NormalizeEmits<typeof __VLS_738.emit>;
(__VLS_738.slots!).default;
}
(__VLS_733.slots!).default;
}
(__VLS_728.slots!).default;
}
{
const __VLS_740 = __VLS_intrinsicElements["div"];
const __VLS_741 = __VLS_elementAsFunctionalComponent(__VLS_740);
const __VLS_742 = __VLS_741({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_741));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_740, typeof __VLS_742> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_743 = __VLS_pickFunctionalComponentCtx(__VLS_740, __VLS_742)!;
let __VLS_744!: __VLS_NormalizeEmits<typeof __VLS_743.emit>;
{
const __VLS_745 = __VLS_intrinsicElements["input"];
const __VLS_746 = __VLS_elementAsFunctionalComponent(__VLS_745);
const __VLS_747 = __VLS_746({ ...{}, type: ("text"), id: ("dehumidifierEA"), name: ("dehumidifierEA"), placeholder: ("(____EA)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_746));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_745, typeof __VLS_747> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierEA"), name: ("dehumidifierEA"), placeholder: ("(____EA)"), style: ({}), });
const __VLS_748 = __VLS_pickFunctionalComponentCtx(__VLS_745, __VLS_747)!;
let __VLS_749!: __VLS_NormalizeEmits<typeof __VLS_748.emit>;
}
{
const __VLS_750 = __VLS_intrinsicElements["span"];
const __VLS_751 = __VLS_elementAsFunctionalComponent(__VLS_750);
const __VLS_752 = __VLS_751({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_751));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_750, typeof __VLS_752> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_753 = __VLS_pickFunctionalComponentCtx(__VLS_750, __VLS_752)!;
let __VLS_754!: __VLS_NormalizeEmits<typeof __VLS_753.emit>;
(__VLS_753.slots!).default;
}
{
const __VLS_755 = __VLS_intrinsicElements["input"];
const __VLS_756 = __VLS_elementAsFunctionalComponent(__VLS_755);
const __VLS_757 = __VLS_756({ ...{}, type: ("text"), id: ("dehumidifierDays"), name: ("dehumidifierDays"), placeholder: ("(_____Days)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_756));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_755, typeof __VLS_757> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierDays"), name: ("dehumidifierDays"), placeholder: ("(_____Days)"), style: ({}), });
const __VLS_758 = __VLS_pickFunctionalComponentCtx(__VLS_755, __VLS_757)!;
let __VLS_759!: __VLS_NormalizeEmits<typeof __VLS_758.emit>;
}
(__VLS_743.slots!).default;
}
(__VLS_648.slots!).default;
}
{
const __VLS_760 = __VLS_intrinsicElements["fieldset"];
const __VLS_761 = __VLS_elementAsFunctionalComponent(__VLS_760);
const __VLS_762 = __VLS_761({ ...{}, id: ("fieldset_8"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_761));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_760, typeof __VLS_762> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_8"), style: ({}), });
const __VLS_763 = __VLS_pickFunctionalComponentCtx(__VLS_760, __VLS_762)!;
let __VLS_764!: __VLS_NormalizeEmits<typeof __VLS_763.emit>;
{
const __VLS_765 = __VLS_intrinsicElements["div"];
const __VLS_766 = __VLS_elementAsFunctionalComponent(__VLS_765);
const __VLS_767 = __VLS_766({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_766));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_765, typeof __VLS_767> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_768 = __VLS_pickFunctionalComponentCtx(__VLS_765, __VLS_767)!;
let __VLS_769!: __VLS_NormalizeEmits<typeof __VLS_768.emit>;
{
const __VLS_770 = __VLS_intrinsicElements["label"];
const __VLS_771 = __VLS_elementAsFunctionalComponent(__VLS_770);
const __VLS_772 = __VLS_771({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_771));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_770, typeof __VLS_772> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_773 = __VLS_pickFunctionalComponentCtx(__VLS_770, __VLS_772)!;
let __VLS_774!: __VLS_NormalizeEmits<typeof __VLS_773.emit>;
{
const __VLS_775 = __VLS_intrinsicElements["span"];
const __VLS_776 = __VLS_elementAsFunctionalComponent(__VLS_775);
const __VLS_777 = __VLS_776({ ...{}, class: ("checkOne"), }, ...__VLS_functionalComponentArgsRest(__VLS_776));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_775, typeof __VLS_777> & Record<string, unknown>) => void)({ ...{}, class: ("checkOne"), });
const __VLS_778 = __VLS_pickFunctionalComponentCtx(__VLS_775, __VLS_777)!;
let __VLS_779!: __VLS_NormalizeEmits<typeof __VLS_778.emit>;
(__VLS_778.slots!).default;
}
(__VLS_773.slots!).default;
}
{
const __VLS_780 = __VLS_intrinsicElements["div"];
const __VLS_781 = __VLS_elementAsFunctionalComponent(__VLS_780);
const __VLS_782 = __VLS_781({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_781));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_780, typeof __VLS_782> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_783 = __VLS_pickFunctionalComponentCtx(__VLS_780, __VLS_782)!;
let __VLS_784!: __VLS_NormalizeEmits<typeof __VLS_783.emit>;
{
const __VLS_785 = __VLS_intrinsicElements["input"];
const __VLS_786 = __VLS_elementAsFunctionalComponent(__VLS_785);
const __VLS_787 = __VLS_786({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-3"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_786));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_785, typeof __VLS_787> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-3"), value: ("1"), });
const __VLS_788 = __VLS_pickFunctionalComponentCtx(__VLS_785, __VLS_787)!;
let __VLS_789!: __VLS_NormalizeEmits<typeof __VLS_788.emit>;
}
{
const __VLS_790 = __VLS_intrinsicElements["label"];
const __VLS_791 = __VLS_elementAsFunctionalComponent(__VLS_790);
const __VLS_792 = __VLS_791({ ...{}, class: ("opciones"), for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_791));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_790, typeof __VLS_792> & Record<string, unknown>) => void)({ ...{}, class: ("opciones"), for: ("cat1"), });
const __VLS_793 = __VLS_pickFunctionalComponentCtx(__VLS_790, __VLS_792)!;
let __VLS_794!: __VLS_NormalizeEmits<typeof __VLS_793.emit>;
(__VLS_793.slots!).default;
}
(__VLS_783.slots!).default;
}
{
const __VLS_795 = __VLS_intrinsicElements["div"];
const __VLS_796 = __VLS_elementAsFunctionalComponent(__VLS_795);
const __VLS_797 = __VLS_796({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_796));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_795, typeof __VLS_797> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_798 = __VLS_pickFunctionalComponentCtx(__VLS_795, __VLS_797)!;
let __VLS_799!: __VLS_NormalizeEmits<typeof __VLS_798.emit>;
{
const __VLS_800 = __VLS_intrinsicElements["input"];
const __VLS_801 = __VLS_elementAsFunctionalComponent(__VLS_800);
const __VLS_802 = __VLS_801({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-3"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_801));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_800, typeof __VLS_802> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-3"), value: ("2"), });
const __VLS_803 = __VLS_pickFunctionalComponentCtx(__VLS_800, __VLS_802)!;
let __VLS_804!: __VLS_NormalizeEmits<typeof __VLS_803.emit>;
}
{
const __VLS_805 = __VLS_intrinsicElements["label"];
const __VLS_806 = __VLS_elementAsFunctionalComponent(__VLS_805);
const __VLS_807 = __VLS_806({ ...{}, class: ("opciones"), for: ("cat2"), }, ...__VLS_functionalComponentArgsRest(__VLS_806));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_805, typeof __VLS_807> & Record<string, unknown>) => void)({ ...{}, class: ("opciones"), for: ("cat2"), });
const __VLS_808 = __VLS_pickFunctionalComponentCtx(__VLS_805, __VLS_807)!;
let __VLS_809!: __VLS_NormalizeEmits<typeof __VLS_808.emit>;
(__VLS_808.slots!).default;
}
(__VLS_798.slots!).default;
}
{
const __VLS_810 = __VLS_intrinsicElements["div"];
const __VLS_811 = __VLS_elementAsFunctionalComponent(__VLS_810);
const __VLS_812 = __VLS_811({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_811));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_810, typeof __VLS_812> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_813 = __VLS_pickFunctionalComponentCtx(__VLS_810, __VLS_812)!;
let __VLS_814!: __VLS_NormalizeEmits<typeof __VLS_813.emit>;
{
const __VLS_815 = __VLS_intrinsicElements["input"];
const __VLS_816 = __VLS_elementAsFunctionalComponent(__VLS_815);
const __VLS_817 = __VLS_816({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-3"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_816));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_815, typeof __VLS_817> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-3"), value: ("2"), });
const __VLS_818 = __VLS_pickFunctionalComponentCtx(__VLS_815, __VLS_817)!;
let __VLS_819!: __VLS_NormalizeEmits<typeof __VLS_818.emit>;
}
{
const __VLS_820 = __VLS_intrinsicElements["label"];
const __VLS_821 = __VLS_elementAsFunctionalComponent(__VLS_820);
const __VLS_822 = __VLS_821({ ...{}, class: ("opciones"), for: ("cat2"), }, ...__VLS_functionalComponentArgsRest(__VLS_821));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_820, typeof __VLS_822> & Record<string, unknown>) => void)({ ...{}, class: ("opciones"), for: ("cat2"), });
const __VLS_823 = __VLS_pickFunctionalComponentCtx(__VLS_820, __VLS_822)!;
let __VLS_824!: __VLS_NormalizeEmits<typeof __VLS_823.emit>;
(__VLS_823.slots!).default;
}
(__VLS_813.slots!).default;
}
(__VLS_768.slots!).default;
}
{
const __VLS_825 = __VLS_intrinsicElements["div"];
const __VLS_826 = __VLS_elementAsFunctionalComponent(__VLS_825);
const __VLS_827 = __VLS_826({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_826));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_825, typeof __VLS_827> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_828 = __VLS_pickFunctionalComponentCtx(__VLS_825, __VLS_827)!;
let __VLS_829!: __VLS_NormalizeEmits<typeof __VLS_828.emit>;
{
const __VLS_830 = __VLS_intrinsicElements["input"];
const __VLS_831 = __VLS_elementAsFunctionalComponent(__VLS_830);
const __VLS_832 = __VLS_831({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________EA)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_831));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_830, typeof __VLS_832> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________EA)"), style: ({}), });
const __VLS_833 = __VLS_pickFunctionalComponentCtx(__VLS_830, __VLS_832)!;
let __VLS_834!: __VLS_NormalizeEmits<typeof __VLS_833.emit>;
}
{
const __VLS_835 = __VLS_intrinsicElements["span"];
const __VLS_836 = __VLS_elementAsFunctionalComponent(__VLS_835);
const __VLS_837 = __VLS_836({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_836));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_835, typeof __VLS_837> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_838 = __VLS_pickFunctionalComponentCtx(__VLS_835, __VLS_837)!;
let __VLS_839!: __VLS_NormalizeEmits<typeof __VLS_838.emit>;
(__VLS_838.slots!).default;
}
{
const __VLS_840 = __VLS_intrinsicElements["input"];
const __VLS_841 = __VLS_elementAsFunctionalComponent(__VLS_840);
const __VLS_842 = __VLS_841({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("(_______________Days)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_841));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_840, typeof __VLS_842> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("(_______________Days)"), style: ({}), });
const __VLS_843 = __VLS_pickFunctionalComponentCtx(__VLS_840, __VLS_842)!;
let __VLS_844!: __VLS_NormalizeEmits<typeof __VLS_843.emit>;
}
(__VLS_828.slots!).default;
}
{
const __VLS_845 = __VLS_intrinsicElements["div"];
const __VLS_846 = __VLS_elementAsFunctionalComponent(__VLS_845);
const __VLS_847 = __VLS_846({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_846));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_845, typeof __VLS_847> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_848 = __VLS_pickFunctionalComponentCtx(__VLS_845, __VLS_847)!;
let __VLS_849!: __VLS_NormalizeEmits<typeof __VLS_848.emit>;
{
const __VLS_850 = __VLS_intrinsicElements["div"];
const __VLS_851 = __VLS_elementAsFunctionalComponent(__VLS_850);
const __VLS_852 = __VLS_851({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_851));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_850, typeof __VLS_852> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_853 = __VLS_pickFunctionalComponentCtx(__VLS_850, __VLS_852)!;
let __VLS_854!: __VLS_NormalizeEmits<typeof __VLS_853.emit>;
{
const __VLS_855 = __VLS_intrinsicElements["label"];
const __VLS_856 = __VLS_elementAsFunctionalComponent(__VLS_855);
const __VLS_857 = __VLS_856({ ...{}, class: ("equipamientos-titulos"), for: ("eTES"), }, ...__VLS_functionalComponentArgsRest(__VLS_856));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_855, typeof __VLS_857> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("eTES"), });
const __VLS_858 = __VLS_pickFunctionalComponentCtx(__VLS_855, __VLS_857)!;
let __VLS_859!: __VLS_NormalizeEmits<typeof __VLS_858.emit>;
(__VLS_858.slots!).default;
}
(__VLS_853.slots!).default;
}
{
const __VLS_860 = __VLS_intrinsicElements["div"];
const __VLS_861 = __VLS_elementAsFunctionalComponent(__VLS_860);
const __VLS_862 = __VLS_861({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_861));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_860, typeof __VLS_862> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_863 = __VLS_pickFunctionalComponentCtx(__VLS_860, __VLS_862)!;
let __VLS_864!: __VLS_NormalizeEmits<typeof __VLS_863.emit>;
{
const __VLS_865 = __VLS_intrinsicElements["input"];
const __VLS_866 = __VLS_elementAsFunctionalComponent(__VLS_865);
const __VLS_867 = __VLS_866({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________EA)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_866));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_865, typeof __VLS_867> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________EA)"), style: ({}), });
const __VLS_868 = __VLS_pickFunctionalComponentCtx(__VLS_865, __VLS_867)!;
let __VLS_869!: __VLS_NormalizeEmits<typeof __VLS_868.emit>;
}
{
const __VLS_870 = __VLS_intrinsicElements["span"];
const __VLS_871 = __VLS_elementAsFunctionalComponent(__VLS_870);
const __VLS_872 = __VLS_871({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_871));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_870, typeof __VLS_872> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_873 = __VLS_pickFunctionalComponentCtx(__VLS_870, __VLS_872)!;
let __VLS_874!: __VLS_NormalizeEmits<typeof __VLS_873.emit>;
(__VLS_873.slots!).default;
}
{
const __VLS_875 = __VLS_intrinsicElements["input"];
const __VLS_876 = __VLS_elementAsFunctionalComponent(__VLS_875);
const __VLS_877 = __VLS_876({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("(_______________Days)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_876));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_875, typeof __VLS_877> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("(_______________Days)"), style: ({}), });
const __VLS_878 = __VLS_pickFunctionalComponentCtx(__VLS_875, __VLS_877)!;
let __VLS_879!: __VLS_NormalizeEmits<typeof __VLS_878.emit>;
}
(__VLS_863.slots!).default;
}
(__VLS_848.slots!).default;
}
{
const __VLS_880 = __VLS_intrinsicElements["hr"];
const __VLS_881 = __VLS_elementAsFunctionalComponent(__VLS_880);
const __VLS_882 = __VLS_881({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_881));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_880, typeof __VLS_882> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_883 = __VLS_pickFunctionalComponentCtx(__VLS_880, __VLS_882)!;
let __VLS_884!: __VLS_NormalizeEmits<typeof __VLS_883.emit>;
}
{
const __VLS_885 = __VLS_intrinsicElements["div"];
const __VLS_886 = __VLS_elementAsFunctionalComponent(__VLS_885);
const __VLS_887 = __VLS_886({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_886));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_885, typeof __VLS_887> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_888 = __VLS_pickFunctionalComponentCtx(__VLS_885, __VLS_887)!;
let __VLS_889!: __VLS_NormalizeEmits<typeof __VLS_888.emit>;
{
const __VLS_890 = __VLS_intrinsicElements["label"];
const __VLS_891 = __VLS_elementAsFunctionalComponent(__VLS_890);
const __VLS_892 = __VLS_891({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_891));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_890, typeof __VLS_892> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_893 = __VLS_pickFunctionalComponentCtx(__VLS_890, __VLS_892)!;
let __VLS_894!: __VLS_NormalizeEmits<typeof __VLS_893.emit>;
{
const __VLS_895 = __VLS_intrinsicElements["span"];
const __VLS_896 = __VLS_elementAsFunctionalComponent(__VLS_895);
const __VLS_897 = __VLS_896({ ...{}, class: ("checkOne"), }, ...__VLS_functionalComponentArgsRest(__VLS_896));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_895, typeof __VLS_897> & Record<string, unknown>) => void)({ ...{}, class: ("checkOne"), });
const __VLS_898 = __VLS_pickFunctionalComponentCtx(__VLS_895, __VLS_897)!;
let __VLS_899!: __VLS_NormalizeEmits<typeof __VLS_898.emit>;
(__VLS_898.slots!).default;
}
(__VLS_893.slots!).default;
}
{
const __VLS_900 = __VLS_intrinsicElements["div"];
const __VLS_901 = __VLS_elementAsFunctionalComponent(__VLS_900);
const __VLS_902 = __VLS_901({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_901));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_900, typeof __VLS_902> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_903 = __VLS_pickFunctionalComponentCtx(__VLS_900, __VLS_902)!;
let __VLS_904!: __VLS_NormalizeEmits<typeof __VLS_903.emit>;
{
const __VLS_905 = __VLS_intrinsicElements["input"];
const __VLS_906 = __VLS_elementAsFunctionalComponent(__VLS_905);
const __VLS_907 = __VLS_906({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-4"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_906));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_905, typeof __VLS_907> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-4"), value: ("1"), });
const __VLS_908 = __VLS_pickFunctionalComponentCtx(__VLS_905, __VLS_907)!;
let __VLS_909!: __VLS_NormalizeEmits<typeof __VLS_908.emit>;
}
{
const __VLS_910 = __VLS_intrinsicElements["label"];
const __VLS_911 = __VLS_elementAsFunctionalComponent(__VLS_910);
const __VLS_912 = __VLS_911({ ...{}, class: ("opciones-1"), for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_911));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_910, typeof __VLS_912> & Record<string, unknown>) => void)({ ...{}, class: ("opciones-1"), for: ("cat1"), });
const __VLS_913 = __VLS_pickFunctionalComponentCtx(__VLS_910, __VLS_912)!;
let __VLS_914!: __VLS_NormalizeEmits<typeof __VLS_913.emit>;
(__VLS_913.slots!).default;
}
(__VLS_903.slots!).default;
}
{
const __VLS_915 = __VLS_intrinsicElements["div"];
const __VLS_916 = __VLS_elementAsFunctionalComponent(__VLS_915);
const __VLS_917 = __VLS_916({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_916));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_915, typeof __VLS_917> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_918 = __VLS_pickFunctionalComponentCtx(__VLS_915, __VLS_917)!;
let __VLS_919!: __VLS_NormalizeEmits<typeof __VLS_918.emit>;
{
const __VLS_920 = __VLS_intrinsicElements["input"];
const __VLS_921 = __VLS_elementAsFunctionalComponent(__VLS_920);
const __VLS_922 = __VLS_921({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-4"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_921));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_920, typeof __VLS_922> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-4"), value: ("2"), });
const __VLS_923 = __VLS_pickFunctionalComponentCtx(__VLS_920, __VLS_922)!;
let __VLS_924!: __VLS_NormalizeEmits<typeof __VLS_923.emit>;
}
{
const __VLS_925 = __VLS_intrinsicElements["label"];
const __VLS_926 = __VLS_elementAsFunctionalComponent(__VLS_925);
const __VLS_927 = __VLS_926({ ...{}, class: ("opciones-1"), for: ("cat2"), }, ...__VLS_functionalComponentArgsRest(__VLS_926));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_925, typeof __VLS_927> & Record<string, unknown>) => void)({ ...{}, class: ("opciones-1"), for: ("cat2"), });
const __VLS_928 = __VLS_pickFunctionalComponentCtx(__VLS_925, __VLS_927)!;
let __VLS_929!: __VLS_NormalizeEmits<typeof __VLS_928.emit>;
(__VLS_928.slots!).default;
}
(__VLS_918.slots!).default;
}
{
const __VLS_930 = __VLS_intrinsicElements["div"];
const __VLS_931 = __VLS_elementAsFunctionalComponent(__VLS_930);
const __VLS_932 = __VLS_931({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_931));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_930, typeof __VLS_932> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_933 = __VLS_pickFunctionalComponentCtx(__VLS_930, __VLS_932)!;
let __VLS_934!: __VLS_NormalizeEmits<typeof __VLS_933.emit>;
{
const __VLS_935 = __VLS_intrinsicElements["input"];
const __VLS_936 = __VLS_elementAsFunctionalComponent(__VLS_935);
const __VLS_937 = __VLS_936({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-4"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_936));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_935, typeof __VLS_937> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-4"), value: ("2"), });
const __VLS_938 = __VLS_pickFunctionalComponentCtx(__VLS_935, __VLS_937)!;
let __VLS_939!: __VLS_NormalizeEmits<typeof __VLS_938.emit>;
}
{
const __VLS_940 = __VLS_intrinsicElements["label"];
const __VLS_941 = __VLS_elementAsFunctionalComponent(__VLS_940);
const __VLS_942 = __VLS_941({ ...{}, class: ("opciones-1"), for: ("cat2"), }, ...__VLS_functionalComponentArgsRest(__VLS_941));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_940, typeof __VLS_942> & Record<string, unknown>) => void)({ ...{}, class: ("opciones-1"), for: ("cat2"), });
const __VLS_943 = __VLS_pickFunctionalComponentCtx(__VLS_940, __VLS_942)!;
let __VLS_944!: __VLS_NormalizeEmits<typeof __VLS_943.emit>;
(__VLS_943.slots!).default;
}
(__VLS_933.slots!).default;
}
(__VLS_888.slots!).default;
}
{
const __VLS_945 = __VLS_intrinsicElements["div"];
const __VLS_946 = __VLS_elementAsFunctionalComponent(__VLS_945);
const __VLS_947 = __VLS_946({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_946));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_945, typeof __VLS_947> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_948 = __VLS_pickFunctionalComponentCtx(__VLS_945, __VLS_947)!;
let __VLS_949!: __VLS_NormalizeEmits<typeof __VLS_948.emit>;
{
const __VLS_950 = __VLS_intrinsicElements["input"];
const __VLS_951 = __VLS_elementAsFunctionalComponent(__VLS_950);
const __VLS_952 = __VLS_951({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________EA)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_951));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_950, typeof __VLS_952> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________EA)"), style: ({}), });
const __VLS_953 = __VLS_pickFunctionalComponentCtx(__VLS_950, __VLS_952)!;
let __VLS_954!: __VLS_NormalizeEmits<typeof __VLS_953.emit>;
}
{
const __VLS_955 = __VLS_intrinsicElements["span"];
const __VLS_956 = __VLS_elementAsFunctionalComponent(__VLS_955);
const __VLS_957 = __VLS_956({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_956));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_955, typeof __VLS_957> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_958 = __VLS_pickFunctionalComponentCtx(__VLS_955, __VLS_957)!;
let __VLS_959!: __VLS_NormalizeEmits<typeof __VLS_958.emit>;
(__VLS_958.slots!).default;
}
{
const __VLS_960 = __VLS_intrinsicElements["input"];
const __VLS_961 = __VLS_elementAsFunctionalComponent(__VLS_960);
const __VLS_962 = __VLS_961({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("(_______________Days)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_961));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_960, typeof __VLS_962> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("(_______________Days)"), style: ({}), });
const __VLS_963 = __VLS_pickFunctionalComponentCtx(__VLS_960, __VLS_962)!;
let __VLS_964!: __VLS_NormalizeEmits<typeof __VLS_963.emit>;
}
(__VLS_948.slots!).default;
}
{
const __VLS_965 = __VLS_intrinsicElements["div"];
const __VLS_966 = __VLS_elementAsFunctionalComponent(__VLS_965);
const __VLS_967 = __VLS_966({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_966));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_965, typeof __VLS_967> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_968 = __VLS_pickFunctionalComponentCtx(__VLS_965, __VLS_967)!;
let __VLS_969!: __VLS_NormalizeEmits<typeof __VLS_968.emit>;
{
const __VLS_970 = __VLS_intrinsicElements["label"];
const __VLS_971 = __VLS_elementAsFunctionalComponent(__VLS_970);
const __VLS_972 = __VLS_971({ ...{}, class: ("equipamientos-titulos"), }, ...__VLS_functionalComponentArgsRest(__VLS_971));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_970, typeof __VLS_972> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), });
const __VLS_973 = __VLS_pickFunctionalComponentCtx(__VLS_970, __VLS_972)!;
let __VLS_974!: __VLS_NormalizeEmits<typeof __VLS_973.emit>;
(__VLS_973.slots!).default;
}
{
const __VLS_975 = __VLS_intrinsicElements["input"];
const __VLS_976 = __VLS_elementAsFunctionalComponent(__VLS_975);
const __VLS_977 = __VLS_976({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-5"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_976));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_975, typeof __VLS_977> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-5"), value: ("1"), });
const __VLS_978 = __VLS_pickFunctionalComponentCtx(__VLS_975, __VLS_977)!;
let __VLS_979!: __VLS_NormalizeEmits<typeof __VLS_978.emit>;
}
{
const __VLS_980 = __VLS_intrinsicElements["label"];
const __VLS_981 = __VLS_elementAsFunctionalComponent(__VLS_980);
const __VLS_982 = __VLS_981({ ...{}, class: ("opciones"), for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_981));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_980, typeof __VLS_982> & Record<string, unknown>) => void)({ ...{}, class: ("opciones"), for: ("cat1"), });
const __VLS_983 = __VLS_pickFunctionalComponentCtx(__VLS_980, __VLS_982)!;
let __VLS_984!: __VLS_NormalizeEmits<typeof __VLS_983.emit>;
(__VLS_983.slots!).default;
}
{
const __VLS_985 = __VLS_intrinsicElements["input"];
const __VLS_986 = __VLS_elementAsFunctionalComponent(__VLS_985);
const __VLS_987 = __VLS_986({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-5"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_986));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_985, typeof __VLS_987> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-5"), value: ("2"), });
const __VLS_988 = __VLS_pickFunctionalComponentCtx(__VLS_985, __VLS_987)!;
let __VLS_989!: __VLS_NormalizeEmits<typeof __VLS_988.emit>;
}
{
const __VLS_990 = __VLS_intrinsicElements["label"];
const __VLS_991 = __VLS_elementAsFunctionalComponent(__VLS_990);
const __VLS_992 = __VLS_991({ ...{}, class: ("opciones"), for: ("cat2"), }, ...__VLS_functionalComponentArgsRest(__VLS_991));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_990, typeof __VLS_992> & Record<string, unknown>) => void)({ ...{}, class: ("opciones"), for: ("cat2"), });
const __VLS_993 = __VLS_pickFunctionalComponentCtx(__VLS_990, __VLS_992)!;
let __VLS_994!: __VLS_NormalizeEmits<typeof __VLS_993.emit>;
(__VLS_993.slots!).default;
}
(__VLS_968.slots!).default;
}
(__VLS_763.slots!).default;
}
{
const __VLS_995 = __VLS_intrinsicElements["fieldset"];
const __VLS_996 = __VLS_elementAsFunctionalComponent(__VLS_995);
const __VLS_997 = __VLS_996({ ...{}, class: ("sin-id"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_996));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_995, typeof __VLS_997> & Record<string, unknown>) => void)({ ...{}, class: ("sin-id"), style: ({}), });
const __VLS_998 = __VLS_pickFunctionalComponentCtx(__VLS_995, __VLS_997)!;
let __VLS_999!: __VLS_NormalizeEmits<typeof __VLS_998.emit>;
{
const __VLS_1000 = __VLS_intrinsicElements["div"];
const __VLS_1001 = __VLS_elementAsFunctionalComponent(__VLS_1000);
const __VLS_1002 = __VLS_1001({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1001));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1000, typeof __VLS_1002> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1003 = __VLS_pickFunctionalComponentCtx(__VLS_1000, __VLS_1002)!;
let __VLS_1004!: __VLS_NormalizeEmits<typeof __VLS_1003.emit>;
{
const __VLS_1005 = __VLS_intrinsicElements["label"];
const __VLS_1006 = __VLS_elementAsFunctionalComponent(__VLS_1005);
const __VLS_1007 = __VLS_1006({ ...{}, class: ("equipamientos-titulos"), for: ("dehumidifierSize"), }, ...__VLS_functionalComponentArgsRest(__VLS_1006));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1005, typeof __VLS_1007> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("dehumidifierSize"), });
const __VLS_1008 = __VLS_pickFunctionalComponentCtx(__VLS_1005, __VLS_1007)!;
let __VLS_1009!: __VLS_NormalizeEmits<typeof __VLS_1008.emit>;
(__VLS_1008.slots!).default;
}
{
const __VLS_1010 = __VLS_intrinsicElements["input"];
const __VLS_1011 = __VLS_elementAsFunctionalComponent(__VLS_1010);
const __VLS_1012 = __VLS_1011({ ...{}, type: ("text"), id: ("dehumidifierSize"), name: ("dehumidifierSize"), placeholder: (""), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1011));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1010, typeof __VLS_1012> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierSize"), name: ("dehumidifierSize"), placeholder: (""), style: ({}), });
const __VLS_1013 = __VLS_pickFunctionalComponentCtx(__VLS_1010, __VLS_1012)!;
let __VLS_1014!: __VLS_NormalizeEmits<typeof __VLS_1013.emit>;
}
(__VLS_1003.slots!).default;
}
{
const __VLS_1015 = __VLS_intrinsicElements["div"];
const __VLS_1016 = __VLS_elementAsFunctionalComponent(__VLS_1015);
const __VLS_1017 = __VLS_1016({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1016));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1015, typeof __VLS_1017> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1018 = __VLS_pickFunctionalComponentCtx(__VLS_1015, __VLS_1017)!;
let __VLS_1019!: __VLS_NormalizeEmits<typeof __VLS_1018.emit>;
{
const __VLS_1020 = __VLS_intrinsicElements["label"];
const __VLS_1021 = __VLS_elementAsFunctionalComponent(__VLS_1020);
const __VLS_1022 = __VLS_1021({ ...{}, class: ("ejemplos"), for: ("dehumidifierEA"), }, ...__VLS_functionalComponentArgsRest(__VLS_1021));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1020, typeof __VLS_1022> & Record<string, unknown>) => void)({ ...{}, class: ("ejemplos"), for: ("dehumidifierEA"), });
const __VLS_1023 = __VLS_pickFunctionalComponentCtx(__VLS_1020, __VLS_1022)!;
let __VLS_1024!: __VLS_NormalizeEmits<typeof __VLS_1023.emit>;
{
const __VLS_1025 = __VLS_intrinsicElements["span"];
const __VLS_1026 = __VLS_elementAsFunctionalComponent(__VLS_1025);
const __VLS_1027 = __VLS_1026({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1026));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1025, typeof __VLS_1027> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_1028 = __VLS_pickFunctionalComponentCtx(__VLS_1025, __VLS_1027)!;
let __VLS_1029!: __VLS_NormalizeEmits<typeof __VLS_1028.emit>;
(__VLS_1028.slots!).default;
}
(__VLS_1023.slots!).default;
}
(__VLS_1018.slots!).default;
}
{
const __VLS_1030 = __VLS_intrinsicElements["div"];
const __VLS_1031 = __VLS_elementAsFunctionalComponent(__VLS_1030);
const __VLS_1032 = __VLS_1031({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1031));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1030, typeof __VLS_1032> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1033 = __VLS_pickFunctionalComponentCtx(__VLS_1030, __VLS_1032)!;
let __VLS_1034!: __VLS_NormalizeEmits<typeof __VLS_1033.emit>;
{
const __VLS_1035 = __VLS_intrinsicElements["input"];
const __VLS_1036 = __VLS_elementAsFunctionalComponent(__VLS_1035);
const __VLS_1037 = __VLS_1036({ ...{}, type: ("text"), id: ("dehumidifierEA"), name: ("dehumidifierEA"), placeholder: ("(____EA)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1036));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1035, typeof __VLS_1037> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierEA"), name: ("dehumidifierEA"), placeholder: ("(____EA)"), style: ({}), });
const __VLS_1038 = __VLS_pickFunctionalComponentCtx(__VLS_1035, __VLS_1037)!;
let __VLS_1039!: __VLS_NormalizeEmits<typeof __VLS_1038.emit>;
}
{
const __VLS_1040 = __VLS_intrinsicElements["span"];
const __VLS_1041 = __VLS_elementAsFunctionalComponent(__VLS_1040);
const __VLS_1042 = __VLS_1041({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1041));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1040, typeof __VLS_1042> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1043 = __VLS_pickFunctionalComponentCtx(__VLS_1040, __VLS_1042)!;
let __VLS_1044!: __VLS_NormalizeEmits<typeof __VLS_1043.emit>;
(__VLS_1043.slots!).default;
}
{
const __VLS_1045 = __VLS_intrinsicElements["input"];
const __VLS_1046 = __VLS_elementAsFunctionalComponent(__VLS_1045);
const __VLS_1047 = __VLS_1046({ ...{}, type: ("text"), id: ("dehumidifierDays"), name: ("dehumidifierDays"), placeholder: ("(_____Days)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1046));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1045, typeof __VLS_1047> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("dehumidifierDays"), name: ("dehumidifierDays"), placeholder: ("(_____Days)"), style: ({}), });
const __VLS_1048 = __VLS_pickFunctionalComponentCtx(__VLS_1045, __VLS_1047)!;
let __VLS_1049!: __VLS_NormalizeEmits<typeof __VLS_1048.emit>;
}
(__VLS_1033.slots!).default;
}
(__VLS_998.slots!).default;
}
{
const __VLS_1050 = __VLS_intrinsicElements["fieldset"];
const __VLS_1051 = __VLS_elementAsFunctionalComponent(__VLS_1050);
const __VLS_1052 = __VLS_1051({ ...{}, id: ("fieldset_9"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1051));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1050, typeof __VLS_1052> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_9"), style: ({}), });
const __VLS_1053 = __VLS_pickFunctionalComponentCtx(__VLS_1050, __VLS_1052)!;
let __VLS_1054!: __VLS_NormalizeEmits<typeof __VLS_1053.emit>;
{
const __VLS_1055 = __VLS_intrinsicElements["div"];
const __VLS_1056 = __VLS_elementAsFunctionalComponent(__VLS_1055);
const __VLS_1057 = __VLS_1056({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1056));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1055, typeof __VLS_1057> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1058 = __VLS_pickFunctionalComponentCtx(__VLS_1055, __VLS_1057)!;
let __VLS_1059!: __VLS_NormalizeEmits<typeof __VLS_1058.emit>;
{
const __VLS_1060 = __VLS_intrinsicElements["label"];
const __VLS_1061 = __VLS_elementAsFunctionalComponent(__VLS_1060);
const __VLS_1062 = __VLS_1061({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1061));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1060, typeof __VLS_1062> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_1063 = __VLS_pickFunctionalComponentCtx(__VLS_1060, __VLS_1062)!;
let __VLS_1064!: __VLS_NormalizeEmits<typeof __VLS_1063.emit>;
(__VLS_1063.slots!).default;
}
{
const __VLS_1065 = __VLS_intrinsicElements["div"];
const __VLS_1066 = __VLS_elementAsFunctionalComponent(__VLS_1065);
const __VLS_1067 = __VLS_1066({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1066));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1065, typeof __VLS_1067> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1068 = __VLS_pickFunctionalComponentCtx(__VLS_1065, __VLS_1067)!;
let __VLS_1069!: __VLS_NormalizeEmits<typeof __VLS_1068.emit>;
{
const __VLS_1070 = __VLS_intrinsicElements["input"];
const __VLS_1071 = __VLS_elementAsFunctionalComponent(__VLS_1070);
const __VLS_1072 = __VLS_1071({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-6"), value: ("1"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1071));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1070, typeof __VLS_1072> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-6"), value: ("1"), style: ({}), });
const __VLS_1073 = __VLS_pickFunctionalComponentCtx(__VLS_1070, __VLS_1072)!;
let __VLS_1074!: __VLS_NormalizeEmits<typeof __VLS_1073.emit>;
}
{
const __VLS_1075 = __VLS_intrinsicElements["label"];
const __VLS_1076 = __VLS_elementAsFunctionalComponent(__VLS_1075);
const __VLS_1077 = __VLS_1076({ ...{}, for: ("cat1"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1076));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1075, typeof __VLS_1077> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), style: ({}), });
const __VLS_1078 = __VLS_pickFunctionalComponentCtx(__VLS_1075, __VLS_1077)!;
let __VLS_1079!: __VLS_NormalizeEmits<typeof __VLS_1078.emit>;
(__VLS_1078.slots!).default;
}
(__VLS_1068.slots!).default;
}
{
const __VLS_1080 = __VLS_intrinsicElements["div"];
const __VLS_1081 = __VLS_elementAsFunctionalComponent(__VLS_1080);
const __VLS_1082 = __VLS_1081({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1081));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1080, typeof __VLS_1082> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1083 = __VLS_pickFunctionalComponentCtx(__VLS_1080, __VLS_1082)!;
let __VLS_1084!: __VLS_NormalizeEmits<typeof __VLS_1083.emit>;
{
const __VLS_1085 = __VLS_intrinsicElements["input"];
const __VLS_1086 = __VLS_elementAsFunctionalComponent(__VLS_1085);
const __VLS_1087 = __VLS_1086({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-6"), value: ("2"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1086));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1085, typeof __VLS_1087> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-6"), value: ("2"), style: ({}), });
const __VLS_1088 = __VLS_pickFunctionalComponentCtx(__VLS_1085, __VLS_1087)!;
let __VLS_1089!: __VLS_NormalizeEmits<typeof __VLS_1088.emit>;
}
{
const __VLS_1090 = __VLS_intrinsicElements["label"];
const __VLS_1091 = __VLS_elementAsFunctionalComponent(__VLS_1090);
const __VLS_1092 = __VLS_1091({ ...{}, for: ("cat2"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1091));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1090, typeof __VLS_1092> & Record<string, unknown>) => void)({ ...{}, for: ("cat2"), style: ({}), });
const __VLS_1093 = __VLS_pickFunctionalComponentCtx(__VLS_1090, __VLS_1092)!;
let __VLS_1094!: __VLS_NormalizeEmits<typeof __VLS_1093.emit>;
(__VLS_1093.slots!).default;
}
(__VLS_1083.slots!).default;
}
(__VLS_1058.slots!).default;
}
{
const __VLS_1095 = __VLS_intrinsicElements["div"];
const __VLS_1096 = __VLS_elementAsFunctionalComponent(__VLS_1095);
const __VLS_1097 = __VLS_1096({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1096));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1095, typeof __VLS_1097> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1098 = __VLS_pickFunctionalComponentCtx(__VLS_1095, __VLS_1097)!;
let __VLS_1099!: __VLS_NormalizeEmits<typeof __VLS_1098.emit>;
{
const __VLS_1100 = __VLS_intrinsicElements["input"];
const __VLS_1101 = __VLS_elementAsFunctionalComponent(__VLS_1100);
const __VLS_1102 = __VLS_1101({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________EA)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1100, typeof __VLS_1102> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________EA)"), style: ({}), });
const __VLS_1103 = __VLS_pickFunctionalComponentCtx(__VLS_1100, __VLS_1102)!;
let __VLS_1104!: __VLS_NormalizeEmits<typeof __VLS_1103.emit>;
}
{
const __VLS_1105 = __VLS_intrinsicElements["span"];
const __VLS_1106 = __VLS_elementAsFunctionalComponent(__VLS_1105);
const __VLS_1107 = __VLS_1106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1105, typeof __VLS_1107> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1108 = __VLS_pickFunctionalComponentCtx(__VLS_1105, __VLS_1107)!;
let __VLS_1109!: __VLS_NormalizeEmits<typeof __VLS_1108.emit>;
(__VLS_1108.slots!).default;
}
{
const __VLS_1110 = __VLS_intrinsicElements["input"];
const __VLS_1111 = __VLS_elementAsFunctionalComponent(__VLS_1110);
const __VLS_1112 = __VLS_1111({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("(_______________Days)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1110, typeof __VLS_1112> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("(_______________Days)"), style: ({}), });
const __VLS_1113 = __VLS_pickFunctionalComponentCtx(__VLS_1110, __VLS_1112)!;
let __VLS_1114!: __VLS_NormalizeEmits<typeof __VLS_1113.emit>;
}
(__VLS_1098.slots!).default;
}
{
const __VLS_1115 = __VLS_intrinsicElements["hr"];
const __VLS_1116 = __VLS_elementAsFunctionalComponent(__VLS_1115);
const __VLS_1117 = __VLS_1116({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1115, typeof __VLS_1117> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1118 = __VLS_pickFunctionalComponentCtx(__VLS_1115, __VLS_1117)!;
let __VLS_1119!: __VLS_NormalizeEmits<typeof __VLS_1118.emit>;
}
{
const __VLS_1120 = __VLS_intrinsicElements["div"];
const __VLS_1121 = __VLS_elementAsFunctionalComponent(__VLS_1120);
const __VLS_1122 = __VLS_1121({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1121));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1120, typeof __VLS_1122> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1123 = __VLS_pickFunctionalComponentCtx(__VLS_1120, __VLS_1122)!;
let __VLS_1124!: __VLS_NormalizeEmits<typeof __VLS_1123.emit>;
{
const __VLS_1125 = __VLS_intrinsicElements["label"];
const __VLS_1126 = __VLS_elementAsFunctionalComponent(__VLS_1125);
const __VLS_1127 = __VLS_1126({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1126));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1125, typeof __VLS_1127> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_1128 = __VLS_pickFunctionalComponentCtx(__VLS_1125, __VLS_1127)!;
let __VLS_1129!: __VLS_NormalizeEmits<typeof __VLS_1128.emit>;
{
const __VLS_1130 = __VLS_intrinsicElements["span"];
const __VLS_1131 = __VLS_elementAsFunctionalComponent(__VLS_1130);
const __VLS_1132 = __VLS_1131({ ...{}, class: ("checkOne"), }, ...__VLS_functionalComponentArgsRest(__VLS_1131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1130, typeof __VLS_1132> & Record<string, unknown>) => void)({ ...{}, class: ("checkOne"), });
const __VLS_1133 = __VLS_pickFunctionalComponentCtx(__VLS_1130, __VLS_1132)!;
let __VLS_1134!: __VLS_NormalizeEmits<typeof __VLS_1133.emit>;
(__VLS_1133.slots!).default;
}
(__VLS_1128.slots!).default;
}
{
const __VLS_1135 = __VLS_intrinsicElements["div"];
const __VLS_1136 = __VLS_elementAsFunctionalComponent(__VLS_1135);
const __VLS_1137 = __VLS_1136({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1135, typeof __VLS_1137> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1138 = __VLS_pickFunctionalComponentCtx(__VLS_1135, __VLS_1137)!;
let __VLS_1139!: __VLS_NormalizeEmits<typeof __VLS_1138.emit>;
{
const __VLS_1140 = __VLS_intrinsicElements["input"];
const __VLS_1141 = __VLS_elementAsFunctionalComponent(__VLS_1140);
const __VLS_1142 = __VLS_1141({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-7"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1140, typeof __VLS_1142> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-7"), value: ("1"), });
const __VLS_1143 = __VLS_pickFunctionalComponentCtx(__VLS_1140, __VLS_1142)!;
let __VLS_1144!: __VLS_NormalizeEmits<typeof __VLS_1143.emit>;
}
{
const __VLS_1145 = __VLS_intrinsicElements["label"];
const __VLS_1146 = __VLS_elementAsFunctionalComponent(__VLS_1145);
const __VLS_1147 = __VLS_1146({ ...{}, for: ("cat1"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1145, typeof __VLS_1147> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), style: ({}), });
const __VLS_1148 = __VLS_pickFunctionalComponentCtx(__VLS_1145, __VLS_1147)!;
let __VLS_1149!: __VLS_NormalizeEmits<typeof __VLS_1148.emit>;
(__VLS_1148.slots!).default;
}
(__VLS_1138.slots!).default;
}
{
const __VLS_1150 = __VLS_intrinsicElements["div"];
const __VLS_1151 = __VLS_elementAsFunctionalComponent(__VLS_1150);
const __VLS_1152 = __VLS_1151({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1150, typeof __VLS_1152> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1153 = __VLS_pickFunctionalComponentCtx(__VLS_1150, __VLS_1152)!;
let __VLS_1154!: __VLS_NormalizeEmits<typeof __VLS_1153.emit>;
{
const __VLS_1155 = __VLS_intrinsicElements["input"];
const __VLS_1156 = __VLS_elementAsFunctionalComponent(__VLS_1155);
const __VLS_1157 = __VLS_1156({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-7"), value: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_1156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1155, typeof __VLS_1157> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat2"), name: ("category-7"), value: ("2"), });
const __VLS_1158 = __VLS_pickFunctionalComponentCtx(__VLS_1155, __VLS_1157)!;
let __VLS_1159!: __VLS_NormalizeEmits<typeof __VLS_1158.emit>;
}
{
const __VLS_1160 = __VLS_intrinsicElements["label"];
const __VLS_1161 = __VLS_elementAsFunctionalComponent(__VLS_1160);
const __VLS_1162 = __VLS_1161({ ...{}, for: ("cat2"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1160, typeof __VLS_1162> & Record<string, unknown>) => void)({ ...{}, for: ("cat2"), style: ({}), });
const __VLS_1163 = __VLS_pickFunctionalComponentCtx(__VLS_1160, __VLS_1162)!;
let __VLS_1164!: __VLS_NormalizeEmits<typeof __VLS_1163.emit>;
(__VLS_1163.slots!).default;
}
(__VLS_1153.slots!).default;
}
(__VLS_1123.slots!).default;
}
(__VLS_1053.slots!).default;
}
{
const __VLS_1165 = __VLS_intrinsicElements["fieldset"];
const __VLS_1166 = __VLS_elementAsFunctionalComponent(__VLS_1165);
const __VLS_1167 = __VLS_1166({ ...{}, id: ("fieldset_10"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1165, typeof __VLS_1167> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_10"), style: ({}), });
const __VLS_1168 = __VLS_pickFunctionalComponentCtx(__VLS_1165, __VLS_1167)!;
let __VLS_1169!: __VLS_NormalizeEmits<typeof __VLS_1168.emit>;
{
const __VLS_1170 = __VLS_intrinsicElements["div"];
const __VLS_1171 = __VLS_elementAsFunctionalComponent(__VLS_1170);
const __VLS_1172 = __VLS_1171({ ...{}, class: ("notas"), }, ...__VLS_functionalComponentArgsRest(__VLS_1171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1170, typeof __VLS_1172> & Record<string, unknown>) => void)({ ...{}, class: ("notas"), });
const __VLS_1173 = __VLS_pickFunctionalComponentCtx(__VLS_1170, __VLS_1172)!;
let __VLS_1174!: __VLS_NormalizeEmits<typeof __VLS_1173.emit>;
{
const __VLS_1175 = __VLS_intrinsicElements["h1"];
const __VLS_1176 = __VLS_elementAsFunctionalComponent(__VLS_1175);
const __VLS_1177 = __VLS_1176({ ...{}, class: ("note"), }, ...__VLS_functionalComponentArgsRest(__VLS_1176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1175, typeof __VLS_1177> & Record<string, unknown>) => void)({ ...{}, class: ("note"), });
const __VLS_1178 = __VLS_pickFunctionalComponentCtx(__VLS_1175, __VLS_1177)!;
let __VLS_1179!: __VLS_NormalizeEmits<typeof __VLS_1178.emit>;
(__VLS_1178.slots!).default;
}
(__VLS_1173.slots!).default;
}
{
const __VLS_1180 = __VLS_intrinsicElements["h1"];
const __VLS_1181 = __VLS_elementAsFunctionalComponent(__VLS_1180);
const __VLS_1182 = __VLS_1181({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_1181));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1180, typeof __VLS_1182> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_1183 = __VLS_pickFunctionalComponentCtx(__VLS_1180, __VLS_1182)!;
let __VLS_1184!: __VLS_NormalizeEmits<typeof __VLS_1183.emit>;
(__VLS_1183.slots!).default;
}
(__VLS_1168.slots!).default;
}
{
const __VLS_1185 = __VLS_intrinsicElements["fieldset"];
const __VLS_1186 = __VLS_elementAsFunctionalComponent(__VLS_1185);
const __VLS_1187 = __VLS_1186({ ...{}, class: ("container-opcion"), id: ("fieldset_11"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1186));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1185, typeof __VLS_1187> & Record<string, unknown>) => void)({ ...{}, class: ("container-opcion"), id: ("fieldset_11"), style: ({}), });
const __VLS_1188 = __VLS_pickFunctionalComponentCtx(__VLS_1185, __VLS_1187)!;
let __VLS_1189!: __VLS_NormalizeEmits<typeof __VLS_1188.emit>;
{
const __VLS_1190 = __VLS_intrinsicElements["label"];
const __VLS_1191 = __VLS_elementAsFunctionalComponent(__VLS_1190);
const __VLS_1192 = __VLS_1191({ ...{}, class: ("equipamientos-titulos"), for: ("build-containment"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1191));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1190, typeof __VLS_1192> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("build-containment"), style: ({}), });
const __VLS_1193 = __VLS_pickFunctionalComponentCtx(__VLS_1190, __VLS_1192)!;
let __VLS_1194!: __VLS_NormalizeEmits<typeof __VLS_1193.emit>;
(__VLS_1193.slots!).default;
}
{
const __VLS_1195 = __VLS_intrinsicElements["select"];
const __VLS_1196 = __VLS_elementAsFunctionalComponent(__VLS_1195);
const __VLS_1197 = __VLS_1196({ ...{}, id: ("build-containment"), name: ("build-containment"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1195, typeof __VLS_1197> & Record<string, unknown>) => void)({ ...{}, id: ("build-containment"), name: ("build-containment"), style: ({}), });
const __VLS_1198 = __VLS_pickFunctionalComponentCtx(__VLS_1195, __VLS_1197)!;
let __VLS_1199!: __VLS_NormalizeEmits<typeof __VLS_1198.emit>;
{
const __VLS_1200 = __VLS_intrinsicElements["option"];
const __VLS_1201 = __VLS_elementAsFunctionalComponent(__VLS_1200);
const __VLS_1202 = __VLS_1201({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1201));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1200, typeof __VLS_1202> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1203 = __VLS_pickFunctionalComponentCtx(__VLS_1200, __VLS_1202)!;
let __VLS_1204!: __VLS_NormalizeEmits<typeof __VLS_1203.emit>;
(__VLS_1203.slots!).default;
}
{
const __VLS_1205 = __VLS_intrinsicElements["option"];
const __VLS_1206 = __VLS_elementAsFunctionalComponent(__VLS_1205);
const __VLS_1207 = __VLS_1206({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1205, typeof __VLS_1207> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1208 = __VLS_pickFunctionalComponentCtx(__VLS_1205, __VLS_1207)!;
let __VLS_1209!: __VLS_NormalizeEmits<typeof __VLS_1208.emit>;
(__VLS_1208.slots!).default;
}
(__VLS_1198.slots!).default;
}
{
const __VLS_1210 = __VLS_intrinsicElements["div"];
const __VLS_1211 = __VLS_elementAsFunctionalComponent(__VLS_1210);
const __VLS_1212 = __VLS_1211({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_1211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1210, typeof __VLS_1212> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_1213 = __VLS_pickFunctionalComponentCtx(__VLS_1210, __VLS_1212)!;
let __VLS_1214!: __VLS_NormalizeEmits<typeof __VLS_1213.emit>;
{
const __VLS_1215 = __VLS_intrinsicElements["input"];
const __VLS_1216 = __VLS_elementAsFunctionalComponent(__VLS_1215);
const __VLS_1217 = __VLS_1216({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1215, typeof __VLS_1217> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_1218 = __VLS_pickFunctionalComponentCtx(__VLS_1215, __VLS_1217)!;
let __VLS_1219!: __VLS_NormalizeEmits<typeof __VLS_1218.emit>;
}
(__VLS_1213.slots!).default;
}
(__VLS_1188.slots!).default;
}
{
const __VLS_1220 = __VLS_intrinsicElements["fieldset"];
const __VLS_1221 = __VLS_elementAsFunctionalComponent(__VLS_1220);
const __VLS_1222 = __VLS_1221({ ...{}, id: ("fieldset_12"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1220, typeof __VLS_1222> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_12"), style: ({}), });
const __VLS_1223 = __VLS_pickFunctionalComponentCtx(__VLS_1220, __VLS_1222)!;
let __VLS_1224!: __VLS_NormalizeEmits<typeof __VLS_1223.emit>;
{
const __VLS_1225 = __VLS_intrinsicElements["label"];
const __VLS_1226 = __VLS_elementAsFunctionalComponent(__VLS_1225);
const __VLS_1227 = __VLS_1226({ ...{}, class: ("equipamientos-titulos"), for: ("zip-poles"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1225, typeof __VLS_1227> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zip-poles"), style: ({}), });
const __VLS_1228 = __VLS_pickFunctionalComponentCtx(__VLS_1225, __VLS_1227)!;
let __VLS_1229!: __VLS_NormalizeEmits<typeof __VLS_1228.emit>;
(__VLS_1228.slots!).default;
}
{
const __VLS_1230 = __VLS_intrinsicElements["select"];
const __VLS_1231 = __VLS_elementAsFunctionalComponent(__VLS_1230);
const __VLS_1232 = __VLS_1231({ ...{}, id: ("build-containment"), name: ("build-containment"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1230, typeof __VLS_1232> & Record<string, unknown>) => void)({ ...{}, id: ("build-containment"), name: ("build-containment"), style: ({}), });
const __VLS_1233 = __VLS_pickFunctionalComponentCtx(__VLS_1230, __VLS_1232)!;
let __VLS_1234!: __VLS_NormalizeEmits<typeof __VLS_1233.emit>;
{
const __VLS_1235 = __VLS_intrinsicElements["option"];
const __VLS_1236 = __VLS_elementAsFunctionalComponent(__VLS_1235);
const __VLS_1237 = __VLS_1236({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1235, typeof __VLS_1237> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1238 = __VLS_pickFunctionalComponentCtx(__VLS_1235, __VLS_1237)!;
let __VLS_1239!: __VLS_NormalizeEmits<typeof __VLS_1238.emit>;
(__VLS_1238.slots!).default;
}
{
const __VLS_1240 = __VLS_intrinsicElements["option"];
const __VLS_1241 = __VLS_elementAsFunctionalComponent(__VLS_1240);
const __VLS_1242 = __VLS_1241({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1241));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1240, typeof __VLS_1242> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1243 = __VLS_pickFunctionalComponentCtx(__VLS_1240, __VLS_1242)!;
let __VLS_1244!: __VLS_NormalizeEmits<typeof __VLS_1243.emit>;
(__VLS_1243.slots!).default;
}
(__VLS_1233.slots!).default;
}
{
const __VLS_1245 = __VLS_intrinsicElements["div"];
const __VLS_1246 = __VLS_elementAsFunctionalComponent(__VLS_1245);
const __VLS_1247 = __VLS_1246({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_1246));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1245, typeof __VLS_1247> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_1248 = __VLS_pickFunctionalComponentCtx(__VLS_1245, __VLS_1247)!;
let __VLS_1249!: __VLS_NormalizeEmits<typeof __VLS_1248.emit>;
{
const __VLS_1250 = __VLS_intrinsicElements["input"];
const __VLS_1251 = __VLS_elementAsFunctionalComponent(__VLS_1250);
const __VLS_1252 = __VLS_1251({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("EA"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1250, typeof __VLS_1252> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("EA"), style: ({}), });
const __VLS_1253 = __VLS_pickFunctionalComponentCtx(__VLS_1250, __VLS_1252)!;
let __VLS_1254!: __VLS_NormalizeEmits<typeof __VLS_1253.emit>;
}
{
const __VLS_1255 = __VLS_intrinsicElements["span"];
const __VLS_1256 = __VLS_elementAsFunctionalComponent(__VLS_1255);
const __VLS_1257 = __VLS_1256({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1255, typeof __VLS_1257> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1258 = __VLS_pickFunctionalComponentCtx(__VLS_1255, __VLS_1257)!;
let __VLS_1259!: __VLS_NormalizeEmits<typeof __VLS_1258.emit>;
(__VLS_1258.slots!).default;
}
{
const __VLS_1260 = __VLS_intrinsicElements["input"];
const __VLS_1261 = __VLS_elementAsFunctionalComponent(__VLS_1260);
const __VLS_1262 = __VLS_1261({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("Days"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1260, typeof __VLS_1262> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverDays"), name: ("airMoverDays"), placeholder: ("Days"), style: ({}), });
const __VLS_1263 = __VLS_pickFunctionalComponentCtx(__VLS_1260, __VLS_1262)!;
let __VLS_1264!: __VLS_NormalizeEmits<typeof __VLS_1263.emit>;
}
(__VLS_1248.slots!).default;
}
(__VLS_1223.slots!).default;
}
{
const __VLS_1265 = __VLS_intrinsicElements["fieldset"];
const __VLS_1266 = __VLS_elementAsFunctionalComponent(__VLS_1265);
const __VLS_1267 = __VLS_1266({ ...{}, id: ("fieldset_13"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1265, typeof __VLS_1267> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_13"), style: ({}), });
const __VLS_1268 = __VLS_pickFunctionalComponentCtx(__VLS_1265, __VLS_1267)!;
let __VLS_1269!: __VLS_NormalizeEmits<typeof __VLS_1268.emit>;
{
const __VLS_1270 = __VLS_intrinsicElements["label"];
const __VLS_1271 = __VLS_elementAsFunctionalComponent(__VLS_1270);
const __VLS_1272 = __VLS_1271({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1271));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1270, typeof __VLS_1272> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), style: ({}), });
const __VLS_1273 = __VLS_pickFunctionalComponentCtx(__VLS_1270, __VLS_1272)!;
let __VLS_1274!: __VLS_NormalizeEmits<typeof __VLS_1273.emit>;
(__VLS_1273.slots!).default;
}
{
const __VLS_1275 = __VLS_intrinsicElements["select"];
const __VLS_1276 = __VLS_elementAsFunctionalComponent(__VLS_1275);
const __VLS_1277 = __VLS_1276({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1276));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1275, typeof __VLS_1277> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1278 = __VLS_pickFunctionalComponentCtx(__VLS_1275, __VLS_1277)!;
let __VLS_1279!: __VLS_NormalizeEmits<typeof __VLS_1278.emit>;
{
const __VLS_1280 = __VLS_intrinsicElements["option"];
const __VLS_1281 = __VLS_elementAsFunctionalComponent(__VLS_1280);
const __VLS_1282 = __VLS_1281({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1281));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1280, typeof __VLS_1282> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1283 = __VLS_pickFunctionalComponentCtx(__VLS_1280, __VLS_1282)!;
let __VLS_1284!: __VLS_NormalizeEmits<typeof __VLS_1283.emit>;
(__VLS_1283.slots!).default;
}
{
const __VLS_1285 = __VLS_intrinsicElements["option"];
const __VLS_1286 = __VLS_elementAsFunctionalComponent(__VLS_1285);
const __VLS_1287 = __VLS_1286({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1286));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1285, typeof __VLS_1287> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1288 = __VLS_pickFunctionalComponentCtx(__VLS_1285, __VLS_1287)!;
let __VLS_1289!: __VLS_NormalizeEmits<typeof __VLS_1288.emit>;
(__VLS_1288.slots!).default;
}
(__VLS_1278.slots!).default;
}
{
const __VLS_1290 = __VLS_intrinsicElements["div"];
const __VLS_1291 = __VLS_elementAsFunctionalComponent(__VLS_1290);
const __VLS_1292 = __VLS_1291({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_1291));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1290, typeof __VLS_1292> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_1293 = __VLS_pickFunctionalComponentCtx(__VLS_1290, __VLS_1292)!;
let __VLS_1294!: __VLS_NormalizeEmits<typeof __VLS_1293.emit>;
{
const __VLS_1295 = __VLS_intrinsicElements["input"];
const __VLS_1296 = __VLS_elementAsFunctionalComponent(__VLS_1295);
const __VLS_1297 = __VLS_1296({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("QTY"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1296));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1295, typeof __VLS_1297> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("QTY"), style: ({}), });
const __VLS_1298 = __VLS_pickFunctionalComponentCtx(__VLS_1295, __VLS_1297)!;
let __VLS_1299!: __VLS_NormalizeEmits<typeof __VLS_1298.emit>;
}
(__VLS_1293.slots!).default;
}
(__VLS_1268.slots!).default;
}
{
const __VLS_1300 = __VLS_intrinsicElements["fieldset"];
const __VLS_1301 = __VLS_elementAsFunctionalComponent(__VLS_1300);
const __VLS_1302 = __VLS_1301({ ...{}, id: ("fieldset_14"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1301));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1300, typeof __VLS_1302> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_14"), style: ({}), });
const __VLS_1303 = __VLS_pickFunctionalComponentCtx(__VLS_1300, __VLS_1302)!;
let __VLS_1304!: __VLS_NormalizeEmits<typeof __VLS_1303.emit>;
{
const __VLS_1305 = __VLS_intrinsicElements["h1"];
const __VLS_1306 = __VLS_elementAsFunctionalComponent(__VLS_1305);
const __VLS_1307 = __VLS_1306({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_1306));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1305, typeof __VLS_1307> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_1308 = __VLS_pickFunctionalComponentCtx(__VLS_1305, __VLS_1307)!;
let __VLS_1309!: __VLS_NormalizeEmits<typeof __VLS_1308.emit>;
(__VLS_1308.slots!).default;
}
{
const __VLS_1310 = __VLS_intrinsicElements["fieldset"];
const __VLS_1311 = __VLS_elementAsFunctionalComponent(__VLS_1310);
const __VLS_1312 = __VLS_1311({ ...{}, id: ("fieldset_15"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1311));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1310, typeof __VLS_1312> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_15"), style: ({}), });
const __VLS_1313 = __VLS_pickFunctionalComponentCtx(__VLS_1310, __VLS_1312)!;
let __VLS_1314!: __VLS_NormalizeEmits<typeof __VLS_1313.emit>;
{
const __VLS_1315 = __VLS_intrinsicElements["div"];
const __VLS_1316 = __VLS_elementAsFunctionalComponent(__VLS_1315);
const __VLS_1317 = __VLS_1316({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1316));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1315, typeof __VLS_1317> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1318 = __VLS_pickFunctionalComponentCtx(__VLS_1315, __VLS_1317)!;
let __VLS_1319!: __VLS_NormalizeEmits<typeof __VLS_1318.emit>;
{
const __VLS_1320 = __VLS_intrinsicElements["label"];
const __VLS_1321 = __VLS_elementAsFunctionalComponent(__VLS_1320);
const __VLS_1322 = __VLS_1321({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1321));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1320, typeof __VLS_1322> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_1323 = __VLS_pickFunctionalComponentCtx(__VLS_1320, __VLS_1322)!;
let __VLS_1324!: __VLS_NormalizeEmits<typeof __VLS_1323.emit>;
(__VLS_1323.slots!).default;
}
{
const __VLS_1325 = __VLS_intrinsicElements["div"];
const __VLS_1326 = __VLS_elementAsFunctionalComponent(__VLS_1325);
const __VLS_1327 = __VLS_1326({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1326));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1325, typeof __VLS_1327> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1328 = __VLS_pickFunctionalComponentCtx(__VLS_1325, __VLS_1327)!;
let __VLS_1329!: __VLS_NormalizeEmits<typeof __VLS_1328.emit>;
{
const __VLS_1330 = __VLS_intrinsicElements["input"];
const __VLS_1331 = __VLS_elementAsFunctionalComponent(__VLS_1330);
const __VLS_1332 = __VLS_1331({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1331));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1330, typeof __VLS_1332> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), });
const __VLS_1333 = __VLS_pickFunctionalComponentCtx(__VLS_1330, __VLS_1332)!;
let __VLS_1334!: __VLS_NormalizeEmits<typeof __VLS_1333.emit>;
}
{
const __VLS_1335 = __VLS_intrinsicElements["label"];
const __VLS_1336 = __VLS_elementAsFunctionalComponent(__VLS_1335);
const __VLS_1337 = __VLS_1336({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1336));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1335, typeof __VLS_1337> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1338 = __VLS_pickFunctionalComponentCtx(__VLS_1335, __VLS_1337)!;
let __VLS_1339!: __VLS_NormalizeEmits<typeof __VLS_1338.emit>;
(__VLS_1338.slots!).default;
}
(__VLS_1328.slots!).default;
}
{
const __VLS_1340 = __VLS_intrinsicElements["div"];
const __VLS_1341 = __VLS_elementAsFunctionalComponent(__VLS_1340);
const __VLS_1342 = __VLS_1341({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1341));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1340, typeof __VLS_1342> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1343 = __VLS_pickFunctionalComponentCtx(__VLS_1340, __VLS_1342)!;
let __VLS_1344!: __VLS_NormalizeEmits<typeof __VLS_1343.emit>;
{
const __VLS_1345 = __VLS_intrinsicElements["input"];
const __VLS_1346 = __VLS_elementAsFunctionalComponent(__VLS_1345);
const __VLS_1347 = __VLS_1346({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1346));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1345, typeof __VLS_1347> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), });
const __VLS_1348 = __VLS_pickFunctionalComponentCtx(__VLS_1345, __VLS_1347)!;
let __VLS_1349!: __VLS_NormalizeEmits<typeof __VLS_1348.emit>;
}
{
const __VLS_1350 = __VLS_intrinsicElements["label"];
const __VLS_1351 = __VLS_elementAsFunctionalComponent(__VLS_1350);
const __VLS_1352 = __VLS_1351({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1351));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1350, typeof __VLS_1352> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1353 = __VLS_pickFunctionalComponentCtx(__VLS_1350, __VLS_1352)!;
let __VLS_1354!: __VLS_NormalizeEmits<typeof __VLS_1353.emit>;
(__VLS_1353.slots!).default;
}
(__VLS_1343.slots!).default;
}
{
const __VLS_1355 = __VLS_intrinsicElements["div"];
const __VLS_1356 = __VLS_elementAsFunctionalComponent(__VLS_1355);
const __VLS_1357 = __VLS_1356({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1356));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1355, typeof __VLS_1357> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1358 = __VLS_pickFunctionalComponentCtx(__VLS_1355, __VLS_1357)!;
let __VLS_1359!: __VLS_NormalizeEmits<typeof __VLS_1358.emit>;
{
const __VLS_1360 = __VLS_intrinsicElements["input"];
const __VLS_1361 = __VLS_elementAsFunctionalComponent(__VLS_1360);
const __VLS_1362 = __VLS_1361({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1361));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1360, typeof __VLS_1362> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), });
const __VLS_1363 = __VLS_pickFunctionalComponentCtx(__VLS_1360, __VLS_1362)!;
let __VLS_1364!: __VLS_NormalizeEmits<typeof __VLS_1363.emit>;
}
{
const __VLS_1365 = __VLS_intrinsicElements["label"];
const __VLS_1366 = __VLS_elementAsFunctionalComponent(__VLS_1365);
const __VLS_1367 = __VLS_1366({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1366));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1365, typeof __VLS_1367> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1368 = __VLS_pickFunctionalComponentCtx(__VLS_1365, __VLS_1367)!;
let __VLS_1369!: __VLS_NormalizeEmits<typeof __VLS_1368.emit>;
(__VLS_1368.slots!).default;
}
(__VLS_1358.slots!).default;
}
{
const __VLS_1370 = __VLS_intrinsicElements["div"];
const __VLS_1371 = __VLS_elementAsFunctionalComponent(__VLS_1370);
const __VLS_1372 = __VLS_1371({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1371));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1370, typeof __VLS_1372> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1373 = __VLS_pickFunctionalComponentCtx(__VLS_1370, __VLS_1372)!;
let __VLS_1374!: __VLS_NormalizeEmits<typeof __VLS_1373.emit>;
{
const __VLS_1375 = __VLS_intrinsicElements["input"];
const __VLS_1376 = __VLS_elementAsFunctionalComponent(__VLS_1375);
const __VLS_1377 = __VLS_1376({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1376));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1375, typeof __VLS_1377> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), });
const __VLS_1378 = __VLS_pickFunctionalComponentCtx(__VLS_1375, __VLS_1377)!;
let __VLS_1379!: __VLS_NormalizeEmits<typeof __VLS_1378.emit>;
}
{
const __VLS_1380 = __VLS_intrinsicElements["label"];
const __VLS_1381 = __VLS_elementAsFunctionalComponent(__VLS_1380);
const __VLS_1382 = __VLS_1381({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1381));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1380, typeof __VLS_1382> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1383 = __VLS_pickFunctionalComponentCtx(__VLS_1380, __VLS_1382)!;
let __VLS_1384!: __VLS_NormalizeEmits<typeof __VLS_1383.emit>;
(__VLS_1383.slots!).default;
}
(__VLS_1373.slots!).default;
}
(__VLS_1318.slots!).default;
}
{
const __VLS_1385 = __VLS_intrinsicElements["select"];
const __VLS_1386 = __VLS_elementAsFunctionalComponent(__VLS_1385);
const __VLS_1387 = __VLS_1386({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1386));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1385, typeof __VLS_1387> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1388 = __VLS_pickFunctionalComponentCtx(__VLS_1385, __VLS_1387)!;
let __VLS_1389!: __VLS_NormalizeEmits<typeof __VLS_1388.emit>;
{
const __VLS_1390 = __VLS_intrinsicElements["option"];
const __VLS_1391 = __VLS_elementAsFunctionalComponent(__VLS_1390);
const __VLS_1392 = __VLS_1391({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1391));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1390, typeof __VLS_1392> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1393 = __VLS_pickFunctionalComponentCtx(__VLS_1390, __VLS_1392)!;
let __VLS_1394!: __VLS_NormalizeEmits<typeof __VLS_1393.emit>;
(__VLS_1393.slots!).default;
}
{
const __VLS_1395 = __VLS_intrinsicElements["option"];
const __VLS_1396 = __VLS_elementAsFunctionalComponent(__VLS_1395);
const __VLS_1397 = __VLS_1396({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1396));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1395, typeof __VLS_1397> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1398 = __VLS_pickFunctionalComponentCtx(__VLS_1395, __VLS_1397)!;
let __VLS_1399!: __VLS_NormalizeEmits<typeof __VLS_1398.emit>;
(__VLS_1398.slots!).default;
}
(__VLS_1388.slots!).default;
}
(__VLS_1313.slots!).default;
}
(__VLS_1303.slots!).default;
}
{
const __VLS_1400 = __VLS_intrinsicElements["fieldset"];
const __VLS_1401 = __VLS_elementAsFunctionalComponent(__VLS_1400);
const __VLS_1402 = __VLS_1401({ ...{}, id: ("fieldset_15"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1401));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1400, typeof __VLS_1402> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_15"), style: ({}), });
const __VLS_1403 = __VLS_pickFunctionalComponentCtx(__VLS_1400, __VLS_1402)!;
let __VLS_1404!: __VLS_NormalizeEmits<typeof __VLS_1403.emit>;
{
const __VLS_1405 = __VLS_intrinsicElements["div"];
const __VLS_1406 = __VLS_elementAsFunctionalComponent(__VLS_1405);
const __VLS_1407 = __VLS_1406({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1406));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1405, typeof __VLS_1407> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1408 = __VLS_pickFunctionalComponentCtx(__VLS_1405, __VLS_1407)!;
let __VLS_1409!: __VLS_NormalizeEmits<typeof __VLS_1408.emit>;
{
const __VLS_1410 = __VLS_intrinsicElements["label"];
const __VLS_1411 = __VLS_elementAsFunctionalComponent(__VLS_1410);
const __VLS_1412 = __VLS_1411({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1411));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1410, typeof __VLS_1412> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_1413 = __VLS_pickFunctionalComponentCtx(__VLS_1410, __VLS_1412)!;
let __VLS_1414!: __VLS_NormalizeEmits<typeof __VLS_1413.emit>;
(__VLS_1413.slots!).default;
}
{
const __VLS_1415 = __VLS_intrinsicElements["div"];
const __VLS_1416 = __VLS_elementAsFunctionalComponent(__VLS_1415);
const __VLS_1417 = __VLS_1416({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1416));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1415, typeof __VLS_1417> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1418 = __VLS_pickFunctionalComponentCtx(__VLS_1415, __VLS_1417)!;
let __VLS_1419!: __VLS_NormalizeEmits<typeof __VLS_1418.emit>;
{
const __VLS_1420 = __VLS_intrinsicElements["input"];
const __VLS_1421 = __VLS_elementAsFunctionalComponent(__VLS_1420);
const __VLS_1422 = __VLS_1421({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1421));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1420, typeof __VLS_1422> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), });
const __VLS_1423 = __VLS_pickFunctionalComponentCtx(__VLS_1420, __VLS_1422)!;
let __VLS_1424!: __VLS_NormalizeEmits<typeof __VLS_1423.emit>;
}
{
const __VLS_1425 = __VLS_intrinsicElements["label"];
const __VLS_1426 = __VLS_elementAsFunctionalComponent(__VLS_1425);
const __VLS_1427 = __VLS_1426({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1426));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1425, typeof __VLS_1427> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1428 = __VLS_pickFunctionalComponentCtx(__VLS_1425, __VLS_1427)!;
let __VLS_1429!: __VLS_NormalizeEmits<typeof __VLS_1428.emit>;
(__VLS_1428.slots!).default;
}
(__VLS_1418.slots!).default;
}
{
const __VLS_1430 = __VLS_intrinsicElements["div"];
const __VLS_1431 = __VLS_elementAsFunctionalComponent(__VLS_1430);
const __VLS_1432 = __VLS_1431({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1431));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1430, typeof __VLS_1432> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1433 = __VLS_pickFunctionalComponentCtx(__VLS_1430, __VLS_1432)!;
let __VLS_1434!: __VLS_NormalizeEmits<typeof __VLS_1433.emit>;
{
const __VLS_1435 = __VLS_intrinsicElements["input"];
const __VLS_1436 = __VLS_elementAsFunctionalComponent(__VLS_1435);
const __VLS_1437 = __VLS_1436({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1436));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1435, typeof __VLS_1437> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), });
const __VLS_1438 = __VLS_pickFunctionalComponentCtx(__VLS_1435, __VLS_1437)!;
let __VLS_1439!: __VLS_NormalizeEmits<typeof __VLS_1438.emit>;
}
{
const __VLS_1440 = __VLS_intrinsicElements["label"];
const __VLS_1441 = __VLS_elementAsFunctionalComponent(__VLS_1440);
const __VLS_1442 = __VLS_1441({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1441));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1440, typeof __VLS_1442> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1443 = __VLS_pickFunctionalComponentCtx(__VLS_1440, __VLS_1442)!;
let __VLS_1444!: __VLS_NormalizeEmits<typeof __VLS_1443.emit>;
(__VLS_1443.slots!).default;
}
(__VLS_1433.slots!).default;
}
{
const __VLS_1445 = __VLS_intrinsicElements["div"];
const __VLS_1446 = __VLS_elementAsFunctionalComponent(__VLS_1445);
const __VLS_1447 = __VLS_1446({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1446));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1445, typeof __VLS_1447> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1448 = __VLS_pickFunctionalComponentCtx(__VLS_1445, __VLS_1447)!;
let __VLS_1449!: __VLS_NormalizeEmits<typeof __VLS_1448.emit>;
{
const __VLS_1450 = __VLS_intrinsicElements["input"];
const __VLS_1451 = __VLS_elementAsFunctionalComponent(__VLS_1450);
const __VLS_1452 = __VLS_1451({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1451));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1450, typeof __VLS_1452> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), });
const __VLS_1453 = __VLS_pickFunctionalComponentCtx(__VLS_1450, __VLS_1452)!;
let __VLS_1454!: __VLS_NormalizeEmits<typeof __VLS_1453.emit>;
}
{
const __VLS_1455 = __VLS_intrinsicElements["label"];
const __VLS_1456 = __VLS_elementAsFunctionalComponent(__VLS_1455);
const __VLS_1457 = __VLS_1456({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1456));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1455, typeof __VLS_1457> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1458 = __VLS_pickFunctionalComponentCtx(__VLS_1455, __VLS_1457)!;
let __VLS_1459!: __VLS_NormalizeEmits<typeof __VLS_1458.emit>;
(__VLS_1458.slots!).default;
}
(__VLS_1448.slots!).default;
}
{
const __VLS_1460 = __VLS_intrinsicElements["div"];
const __VLS_1461 = __VLS_elementAsFunctionalComponent(__VLS_1460);
const __VLS_1462 = __VLS_1461({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1461));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1460, typeof __VLS_1462> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1463 = __VLS_pickFunctionalComponentCtx(__VLS_1460, __VLS_1462)!;
let __VLS_1464!: __VLS_NormalizeEmits<typeof __VLS_1463.emit>;
{
const __VLS_1465 = __VLS_intrinsicElements["input"];
const __VLS_1466 = __VLS_elementAsFunctionalComponent(__VLS_1465);
const __VLS_1467 = __VLS_1466({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1466));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1465, typeof __VLS_1467> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-8"), value: ("1"), });
const __VLS_1468 = __VLS_pickFunctionalComponentCtx(__VLS_1465, __VLS_1467)!;
let __VLS_1469!: __VLS_NormalizeEmits<typeof __VLS_1468.emit>;
}
{
const __VLS_1470 = __VLS_intrinsicElements["label"];
const __VLS_1471 = __VLS_elementAsFunctionalComponent(__VLS_1470);
const __VLS_1472 = __VLS_1471({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1471));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1470, typeof __VLS_1472> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1473 = __VLS_pickFunctionalComponentCtx(__VLS_1470, __VLS_1472)!;
let __VLS_1474!: __VLS_NormalizeEmits<typeof __VLS_1473.emit>;
(__VLS_1473.slots!).default;
}
(__VLS_1463.slots!).default;
}
(__VLS_1408.slots!).default;
}
{
const __VLS_1475 = __VLS_intrinsicElements["select"];
const __VLS_1476 = __VLS_elementAsFunctionalComponent(__VLS_1475);
const __VLS_1477 = __VLS_1476({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1476));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1475, typeof __VLS_1477> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1478 = __VLS_pickFunctionalComponentCtx(__VLS_1475, __VLS_1477)!;
let __VLS_1479!: __VLS_NormalizeEmits<typeof __VLS_1478.emit>;
{
const __VLS_1480 = __VLS_intrinsicElements["option"];
const __VLS_1481 = __VLS_elementAsFunctionalComponent(__VLS_1480);
const __VLS_1482 = __VLS_1481({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1481));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1480, typeof __VLS_1482> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1483 = __VLS_pickFunctionalComponentCtx(__VLS_1480, __VLS_1482)!;
let __VLS_1484!: __VLS_NormalizeEmits<typeof __VLS_1483.emit>;
(__VLS_1483.slots!).default;
}
{
const __VLS_1485 = __VLS_intrinsicElements["option"];
const __VLS_1486 = __VLS_elementAsFunctionalComponent(__VLS_1485);
const __VLS_1487 = __VLS_1486({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1486));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1485, typeof __VLS_1487> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1488 = __VLS_pickFunctionalComponentCtx(__VLS_1485, __VLS_1487)!;
let __VLS_1489!: __VLS_NormalizeEmits<typeof __VLS_1488.emit>;
(__VLS_1488.slots!).default;
}
(__VLS_1478.slots!).default;
}
(__VLS_1403.slots!).default;
}
{
const __VLS_1490 = __VLS_intrinsicElements["fieldset"];
const __VLS_1491 = __VLS_elementAsFunctionalComponent(__VLS_1490);
const __VLS_1492 = __VLS_1491({ ...{}, id: ("fieldset_17"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1491));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1490, typeof __VLS_1492> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_17"), style: ({}), });
const __VLS_1493 = __VLS_pickFunctionalComponentCtx(__VLS_1490, __VLS_1492)!;
let __VLS_1494!: __VLS_NormalizeEmits<typeof __VLS_1493.emit>;
{
const __VLS_1495 = __VLS_intrinsicElements["label"];
const __VLS_1496 = __VLS_elementAsFunctionalComponent(__VLS_1495);
const __VLS_1497 = __VLS_1496({ ...{}, class: ("equipamientos-titulos"), for: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1496));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1495, typeof __VLS_1497> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("content-manipulation"), style: ({}), });
const __VLS_1498 = __VLS_pickFunctionalComponentCtx(__VLS_1495, __VLS_1497)!;
let __VLS_1499!: __VLS_NormalizeEmits<typeof __VLS_1498.emit>;
(__VLS_1498.slots!).default;
}
{
const __VLS_1500 = __VLS_intrinsicElements["select"];
const __VLS_1501 = __VLS_elementAsFunctionalComponent(__VLS_1500);
const __VLS_1502 = __VLS_1501({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1501));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1500, typeof __VLS_1502> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1503 = __VLS_pickFunctionalComponentCtx(__VLS_1500, __VLS_1502)!;
let __VLS_1504!: __VLS_NormalizeEmits<typeof __VLS_1503.emit>;
{
const __VLS_1505 = __VLS_intrinsicElements["option"];
const __VLS_1506 = __VLS_elementAsFunctionalComponent(__VLS_1505);
const __VLS_1507 = __VLS_1506({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1506));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1505, typeof __VLS_1507> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1508 = __VLS_pickFunctionalComponentCtx(__VLS_1505, __VLS_1507)!;
let __VLS_1509!: __VLS_NormalizeEmits<typeof __VLS_1508.emit>;
(__VLS_1508.slots!).default;
}
{
const __VLS_1510 = __VLS_intrinsicElements["option"];
const __VLS_1511 = __VLS_elementAsFunctionalComponent(__VLS_1510);
const __VLS_1512 = __VLS_1511({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1511));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1510, typeof __VLS_1512> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1513 = __VLS_pickFunctionalComponentCtx(__VLS_1510, __VLS_1512)!;
let __VLS_1514!: __VLS_NormalizeEmits<typeof __VLS_1513.emit>;
(__VLS_1513.slots!).default;
}
(__VLS_1503.slots!).default;
}
(__VLS_1493.slots!).default;
}
{
const __VLS_1515 = __VLS_intrinsicElements["fieldset"];
const __VLS_1516 = __VLS_elementAsFunctionalComponent(__VLS_1515);
const __VLS_1517 = __VLS_1516({ ...{}, id: ("fieldset_18"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1516));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1515, typeof __VLS_1517> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_18"), style: ({}), });
const __VLS_1518 = __VLS_pickFunctionalComponentCtx(__VLS_1515, __VLS_1517)!;
let __VLS_1519!: __VLS_NormalizeEmits<typeof __VLS_1518.emit>;
{
const __VLS_1520 = __VLS_intrinsicElements["div"];
const __VLS_1521 = __VLS_elementAsFunctionalComponent(__VLS_1520);
const __VLS_1522 = __VLS_1521({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1521));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1520, typeof __VLS_1522> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1523 = __VLS_pickFunctionalComponentCtx(__VLS_1520, __VLS_1522)!;
let __VLS_1524!: __VLS_NormalizeEmits<typeof __VLS_1523.emit>;
{
const __VLS_1525 = __VLS_intrinsicElements["label"];
const __VLS_1526 = __VLS_elementAsFunctionalComponent(__VLS_1525);
const __VLS_1527 = __VLS_1526({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1526));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1525, typeof __VLS_1527> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), style: ({}), });
const __VLS_1528 = __VLS_pickFunctionalComponentCtx(__VLS_1525, __VLS_1527)!;
let __VLS_1529!: __VLS_NormalizeEmits<typeof __VLS_1528.emit>;
(__VLS_1528.slots!).default;
}
{
const __VLS_1530 = __VLS_intrinsicElements["select"];
const __VLS_1531 = __VLS_elementAsFunctionalComponent(__VLS_1530);
const __VLS_1532 = __VLS_1531({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1531));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1530, typeof __VLS_1532> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1533 = __VLS_pickFunctionalComponentCtx(__VLS_1530, __VLS_1532)!;
let __VLS_1534!: __VLS_NormalizeEmits<typeof __VLS_1533.emit>;
{
const __VLS_1535 = __VLS_intrinsicElements["option"];
const __VLS_1536 = __VLS_elementAsFunctionalComponent(__VLS_1535);
const __VLS_1537 = __VLS_1536({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1536));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1535, typeof __VLS_1537> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1538 = __VLS_pickFunctionalComponentCtx(__VLS_1535, __VLS_1537)!;
let __VLS_1539!: __VLS_NormalizeEmits<typeof __VLS_1538.emit>;
(__VLS_1538.slots!).default;
}
{
const __VLS_1540 = __VLS_intrinsicElements["option"];
const __VLS_1541 = __VLS_elementAsFunctionalComponent(__VLS_1540);
const __VLS_1542 = __VLS_1541({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1541));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1540, typeof __VLS_1542> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1543 = __VLS_pickFunctionalComponentCtx(__VLS_1540, __VLS_1542)!;
let __VLS_1544!: __VLS_NormalizeEmits<typeof __VLS_1543.emit>;
(__VLS_1543.slots!).default;
}
(__VLS_1533.slots!).default;
}
(__VLS_1523.slots!).default;
}
{
const __VLS_1545 = __VLS_intrinsicElements["div"];
const __VLS_1546 = __VLS_elementAsFunctionalComponent(__VLS_1545);
const __VLS_1547 = __VLS_1546({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1546));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1545, typeof __VLS_1547> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_1548 = __VLS_pickFunctionalComponentCtx(__VLS_1545, __VLS_1547)!;
let __VLS_1549!: __VLS_NormalizeEmits<typeof __VLS_1548.emit>;
{
const __VLS_1550 = __VLS_intrinsicElements["div"];
const __VLS_1551 = __VLS_elementAsFunctionalComponent(__VLS_1550);
const __VLS_1552 = __VLS_1551({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1551));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1550, typeof __VLS_1552> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1553 = __VLS_pickFunctionalComponentCtx(__VLS_1550, __VLS_1552)!;
let __VLS_1554!: __VLS_NormalizeEmits<typeof __VLS_1553.emit>;
{
const __VLS_1555 = __VLS_intrinsicElements["input"];
const __VLS_1556 = __VLS_elementAsFunctionalComponent(__VLS_1555);
const __VLS_1557 = __VLS_1556({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-9"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1556));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1555, typeof __VLS_1557> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-9"), value: ("1"), });
const __VLS_1558 = __VLS_pickFunctionalComponentCtx(__VLS_1555, __VLS_1557)!;
let __VLS_1559!: __VLS_NormalizeEmits<typeof __VLS_1558.emit>;
}
{
const __VLS_1560 = __VLS_intrinsicElements["label"];
const __VLS_1561 = __VLS_elementAsFunctionalComponent(__VLS_1560);
const __VLS_1562 = __VLS_1561({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1561));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1560, typeof __VLS_1562> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1563 = __VLS_pickFunctionalComponentCtx(__VLS_1560, __VLS_1562)!;
let __VLS_1564!: __VLS_NormalizeEmits<typeof __VLS_1563.emit>;
(__VLS_1563.slots!).default;
}
(__VLS_1553.slots!).default;
}
{
const __VLS_1565 = __VLS_intrinsicElements["div"];
const __VLS_1566 = __VLS_elementAsFunctionalComponent(__VLS_1565);
const __VLS_1567 = __VLS_1566({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1566));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1565, typeof __VLS_1567> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1568 = __VLS_pickFunctionalComponentCtx(__VLS_1565, __VLS_1567)!;
let __VLS_1569!: __VLS_NormalizeEmits<typeof __VLS_1568.emit>;
{
const __VLS_1570 = __VLS_intrinsicElements["input"];
const __VLS_1571 = __VLS_elementAsFunctionalComponent(__VLS_1570);
const __VLS_1572 = __VLS_1571({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-9"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1571));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1570, typeof __VLS_1572> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-9"), value: ("1"), });
const __VLS_1573 = __VLS_pickFunctionalComponentCtx(__VLS_1570, __VLS_1572)!;
let __VLS_1574!: __VLS_NormalizeEmits<typeof __VLS_1573.emit>;
}
{
const __VLS_1575 = __VLS_intrinsicElements["label"];
const __VLS_1576 = __VLS_elementAsFunctionalComponent(__VLS_1575);
const __VLS_1577 = __VLS_1576({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1576));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1575, typeof __VLS_1577> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1578 = __VLS_pickFunctionalComponentCtx(__VLS_1575, __VLS_1577)!;
let __VLS_1579!: __VLS_NormalizeEmits<typeof __VLS_1578.emit>;
(__VLS_1578.slots!).default;
}
(__VLS_1568.slots!).default;
}
{
const __VLS_1580 = __VLS_intrinsicElements["div"];
const __VLS_1581 = __VLS_elementAsFunctionalComponent(__VLS_1580);
const __VLS_1582 = __VLS_1581({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1581));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1580, typeof __VLS_1582> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1583 = __VLS_pickFunctionalComponentCtx(__VLS_1580, __VLS_1582)!;
let __VLS_1584!: __VLS_NormalizeEmits<typeof __VLS_1583.emit>;
{
const __VLS_1585 = __VLS_intrinsicElements["input"];
const __VLS_1586 = __VLS_elementAsFunctionalComponent(__VLS_1585);
const __VLS_1587 = __VLS_1586({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-9"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1586));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1585, typeof __VLS_1587> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-9"), value: ("1"), });
const __VLS_1588 = __VLS_pickFunctionalComponentCtx(__VLS_1585, __VLS_1587)!;
let __VLS_1589!: __VLS_NormalizeEmits<typeof __VLS_1588.emit>;
}
{
const __VLS_1590 = __VLS_intrinsicElements["label"];
const __VLS_1591 = __VLS_elementAsFunctionalComponent(__VLS_1590);
const __VLS_1592 = __VLS_1591({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1591));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1590, typeof __VLS_1592> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1593 = __VLS_pickFunctionalComponentCtx(__VLS_1590, __VLS_1592)!;
let __VLS_1594!: __VLS_NormalizeEmits<typeof __VLS_1593.emit>;
(__VLS_1593.slots!).default;
}
(__VLS_1583.slots!).default;
}
(__VLS_1548.slots!).default;
}
(__VLS_1518.slots!).default;
}
{
const __VLS_1595 = __VLS_intrinsicElements["fieldset"];
const __VLS_1596 = __VLS_elementAsFunctionalComponent(__VLS_1595);
const __VLS_1597 = __VLS_1596({ ...{}, id: ("fieldset_19"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1596));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1595, typeof __VLS_1597> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_19"), style: ({}), });
const __VLS_1598 = __VLS_pickFunctionalComponentCtx(__VLS_1595, __VLS_1597)!;
let __VLS_1599!: __VLS_NormalizeEmits<typeof __VLS_1598.emit>;
{
const __VLS_1600 = __VLS_intrinsicElements["label"];
const __VLS_1601 = __VLS_elementAsFunctionalComponent(__VLS_1600);
const __VLS_1602 = __VLS_1601({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_1601));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1600, typeof __VLS_1602> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_1603 = __VLS_pickFunctionalComponentCtx(__VLS_1600, __VLS_1602)!;
let __VLS_1604!: __VLS_NormalizeEmits<typeof __VLS_1603.emit>;
(__VLS_1603.slots!).default;
}
{
const __VLS_1605 = __VLS_intrinsicElements["select"];
const __VLS_1606 = __VLS_elementAsFunctionalComponent(__VLS_1605);
const __VLS_1607 = __VLS_1606({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1606));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1605, typeof __VLS_1607> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1608 = __VLS_pickFunctionalComponentCtx(__VLS_1605, __VLS_1607)!;
let __VLS_1609!: __VLS_NormalizeEmits<typeof __VLS_1608.emit>;
{
const __VLS_1610 = __VLS_intrinsicElements["option"];
const __VLS_1611 = __VLS_elementAsFunctionalComponent(__VLS_1610);
const __VLS_1612 = __VLS_1611({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1611));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1610, typeof __VLS_1612> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1613 = __VLS_pickFunctionalComponentCtx(__VLS_1610, __VLS_1612)!;
let __VLS_1614!: __VLS_NormalizeEmits<typeof __VLS_1613.emit>;
(__VLS_1613.slots!).default;
}
{
const __VLS_1615 = __VLS_intrinsicElements["option"];
const __VLS_1616 = __VLS_elementAsFunctionalComponent(__VLS_1615);
const __VLS_1617 = __VLS_1616({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1616));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1615, typeof __VLS_1617> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1618 = __VLS_pickFunctionalComponentCtx(__VLS_1615, __VLS_1617)!;
let __VLS_1619!: __VLS_NormalizeEmits<typeof __VLS_1618.emit>;
(__VLS_1618.slots!).default;
}
(__VLS_1608.slots!).default;
}
{
const __VLS_1620 = __VLS_intrinsicElements["div"];
const __VLS_1621 = __VLS_elementAsFunctionalComponent(__VLS_1620);
const __VLS_1622 = __VLS_1621({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_1621));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1620, typeof __VLS_1622> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_1623 = __VLS_pickFunctionalComponentCtx(__VLS_1620, __VLS_1622)!;
let __VLS_1624!: __VLS_NormalizeEmits<typeof __VLS_1623.emit>;
{
const __VLS_1625 = __VLS_intrinsicElements["input"];
const __VLS_1626 = __VLS_elementAsFunctionalComponent(__VLS_1625);
const __VLS_1627 = __VLS_1626({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1626));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1625, typeof __VLS_1627> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______SF)"), style: ({}), });
const __VLS_1628 = __VLS_pickFunctionalComponentCtx(__VLS_1625, __VLS_1627)!;
let __VLS_1629!: __VLS_NormalizeEmits<typeof __VLS_1628.emit>;
}
(__VLS_1623.slots!).default;
}
(__VLS_1598.slots!).default;
}
{
const __VLS_1630 = __VLS_intrinsicElements["fieldset"];
const __VLS_1631 = __VLS_elementAsFunctionalComponent(__VLS_1630);
const __VLS_1632 = __VLS_1631({ ...{}, id: ("fieldset_20"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1631));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1630, typeof __VLS_1632> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_20"), style: ({}), });
const __VLS_1633 = __VLS_pickFunctionalComponentCtx(__VLS_1630, __VLS_1632)!;
let __VLS_1634!: __VLS_NormalizeEmits<typeof __VLS_1633.emit>;
{
const __VLS_1635 = __VLS_intrinsicElements["h1"];
const __VLS_1636 = __VLS_elementAsFunctionalComponent(__VLS_1635);
const __VLS_1637 = __VLS_1636({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_1636));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1635, typeof __VLS_1637> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_1638 = __VLS_pickFunctionalComponentCtx(__VLS_1635, __VLS_1637)!;
let __VLS_1639!: __VLS_NormalizeEmits<typeof __VLS_1638.emit>;
(__VLS_1638.slots!).default;
}
{
const __VLS_1640 = __VLS_intrinsicElements["fieldset"];
const __VLS_1641 = __VLS_elementAsFunctionalComponent(__VLS_1640);
const __VLS_1642 = __VLS_1641({ ...{}, id: ("fieldset_21"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1641));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1640, typeof __VLS_1642> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_21"), style: ({}), });
const __VLS_1643 = __VLS_pickFunctionalComponentCtx(__VLS_1640, __VLS_1642)!;
let __VLS_1644!: __VLS_NormalizeEmits<typeof __VLS_1643.emit>;
{
const __VLS_1645 = __VLS_intrinsicElements["div"];
const __VLS_1646 = __VLS_elementAsFunctionalComponent(__VLS_1645);
const __VLS_1647 = __VLS_1646({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1646));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1645, typeof __VLS_1647> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1648 = __VLS_pickFunctionalComponentCtx(__VLS_1645, __VLS_1647)!;
let __VLS_1649!: __VLS_NormalizeEmits<typeof __VLS_1648.emit>;
{
const __VLS_1650 = __VLS_intrinsicElements["label"];
const __VLS_1651 = __VLS_elementAsFunctionalComponent(__VLS_1650);
const __VLS_1652 = __VLS_1651({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1651));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1650, typeof __VLS_1652> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), style: ({}), });
const __VLS_1653 = __VLS_pickFunctionalComponentCtx(__VLS_1650, __VLS_1652)!;
let __VLS_1654!: __VLS_NormalizeEmits<typeof __VLS_1653.emit>;
(__VLS_1653.slots!).default;
}
{
const __VLS_1655 = __VLS_intrinsicElements["select"];
const __VLS_1656 = __VLS_elementAsFunctionalComponent(__VLS_1655);
const __VLS_1657 = __VLS_1656({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1656));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1655, typeof __VLS_1657> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1658 = __VLS_pickFunctionalComponentCtx(__VLS_1655, __VLS_1657)!;
let __VLS_1659!: __VLS_NormalizeEmits<typeof __VLS_1658.emit>;
{
const __VLS_1660 = __VLS_intrinsicElements["option"];
const __VLS_1661 = __VLS_elementAsFunctionalComponent(__VLS_1660);
const __VLS_1662 = __VLS_1661({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1661));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1660, typeof __VLS_1662> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1663 = __VLS_pickFunctionalComponentCtx(__VLS_1660, __VLS_1662)!;
let __VLS_1664!: __VLS_NormalizeEmits<typeof __VLS_1663.emit>;
(__VLS_1663.slots!).default;
}
{
const __VLS_1665 = __VLS_intrinsicElements["option"];
const __VLS_1666 = __VLS_elementAsFunctionalComponent(__VLS_1665);
const __VLS_1667 = __VLS_1666({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1666));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1665, typeof __VLS_1667> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1668 = __VLS_pickFunctionalComponentCtx(__VLS_1665, __VLS_1667)!;
let __VLS_1669!: __VLS_NormalizeEmits<typeof __VLS_1668.emit>;
(__VLS_1668.slots!).default;
}
(__VLS_1658.slots!).default;
}
(__VLS_1648.slots!).default;
}
{
const __VLS_1670 = __VLS_intrinsicElements["div"];
const __VLS_1671 = __VLS_elementAsFunctionalComponent(__VLS_1670);
const __VLS_1672 = __VLS_1671({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1671));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1670, typeof __VLS_1672> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_1673 = __VLS_pickFunctionalComponentCtx(__VLS_1670, __VLS_1672)!;
let __VLS_1674!: __VLS_NormalizeEmits<typeof __VLS_1673.emit>;
{
const __VLS_1675 = __VLS_intrinsicElements["div"];
const __VLS_1676 = __VLS_elementAsFunctionalComponent(__VLS_1675);
const __VLS_1677 = __VLS_1676({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1676));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1675, typeof __VLS_1677> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1678 = __VLS_pickFunctionalComponentCtx(__VLS_1675, __VLS_1677)!;
let __VLS_1679!: __VLS_NormalizeEmits<typeof __VLS_1678.emit>;
{
const __VLS_1680 = __VLS_intrinsicElements["input"];
const __VLS_1681 = __VLS_elementAsFunctionalComponent(__VLS_1680);
const __VLS_1682 = __VLS_1681({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-10"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1681));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1680, typeof __VLS_1682> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-10"), value: ("1"), });
const __VLS_1683 = __VLS_pickFunctionalComponentCtx(__VLS_1680, __VLS_1682)!;
let __VLS_1684!: __VLS_NormalizeEmits<typeof __VLS_1683.emit>;
}
{
const __VLS_1685 = __VLS_intrinsicElements["label"];
const __VLS_1686 = __VLS_elementAsFunctionalComponent(__VLS_1685);
const __VLS_1687 = __VLS_1686({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1686));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1685, typeof __VLS_1687> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1688 = __VLS_pickFunctionalComponentCtx(__VLS_1685, __VLS_1687)!;
let __VLS_1689!: __VLS_NormalizeEmits<typeof __VLS_1688.emit>;
(__VLS_1688.slots!).default;
}
(__VLS_1678.slots!).default;
}
{
const __VLS_1690 = __VLS_intrinsicElements["div"];
const __VLS_1691 = __VLS_elementAsFunctionalComponent(__VLS_1690);
const __VLS_1692 = __VLS_1691({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1691));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1690, typeof __VLS_1692> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1693 = __VLS_pickFunctionalComponentCtx(__VLS_1690, __VLS_1692)!;
let __VLS_1694!: __VLS_NormalizeEmits<typeof __VLS_1693.emit>;
{
const __VLS_1695 = __VLS_intrinsicElements["input"];
const __VLS_1696 = __VLS_elementAsFunctionalComponent(__VLS_1695);
const __VLS_1697 = __VLS_1696({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-10"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1696));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1695, typeof __VLS_1697> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-10"), value: ("1"), });
const __VLS_1698 = __VLS_pickFunctionalComponentCtx(__VLS_1695, __VLS_1697)!;
let __VLS_1699!: __VLS_NormalizeEmits<typeof __VLS_1698.emit>;
}
{
const __VLS_1700 = __VLS_intrinsicElements["label"];
const __VLS_1701 = __VLS_elementAsFunctionalComponent(__VLS_1700);
const __VLS_1702 = __VLS_1701({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1701));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1700, typeof __VLS_1702> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1703 = __VLS_pickFunctionalComponentCtx(__VLS_1700, __VLS_1702)!;
let __VLS_1704!: __VLS_NormalizeEmits<typeof __VLS_1703.emit>;
(__VLS_1703.slots!).default;
}
(__VLS_1693.slots!).default;
}
(__VLS_1673.slots!).default;
}
(__VLS_1643.slots!).default;
}
(__VLS_1633.slots!).default;
}
{
const __VLS_1705 = __VLS_intrinsicElements["fieldset"];
const __VLS_1706 = __VLS_elementAsFunctionalComponent(__VLS_1705);
const __VLS_1707 = __VLS_1706({ ...{}, id: ("fieldset_22"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1706));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1705, typeof __VLS_1707> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_22"), style: ({}), });
const __VLS_1708 = __VLS_pickFunctionalComponentCtx(__VLS_1705, __VLS_1707)!;
let __VLS_1709!: __VLS_NormalizeEmits<typeof __VLS_1708.emit>;
{
const __VLS_1710 = __VLS_intrinsicElements["div"];
const __VLS_1711 = __VLS_elementAsFunctionalComponent(__VLS_1710);
const __VLS_1712 = __VLS_1711({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1711));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1710, typeof __VLS_1712> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1713 = __VLS_pickFunctionalComponentCtx(__VLS_1710, __VLS_1712)!;
let __VLS_1714!: __VLS_NormalizeEmits<typeof __VLS_1713.emit>;
{
const __VLS_1715 = __VLS_intrinsicElements["label"];
const __VLS_1716 = __VLS_elementAsFunctionalComponent(__VLS_1715);
const __VLS_1717 = __VLS_1716({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1716));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1715, typeof __VLS_1717> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), style: ({}), });
const __VLS_1718 = __VLS_pickFunctionalComponentCtx(__VLS_1715, __VLS_1717)!;
let __VLS_1719!: __VLS_NormalizeEmits<typeof __VLS_1718.emit>;
(__VLS_1718.slots!).default;
}
{
const __VLS_1720 = __VLS_intrinsicElements["select"];
const __VLS_1721 = __VLS_elementAsFunctionalComponent(__VLS_1720);
const __VLS_1722 = __VLS_1721({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1721));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1720, typeof __VLS_1722> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1723 = __VLS_pickFunctionalComponentCtx(__VLS_1720, __VLS_1722)!;
let __VLS_1724!: __VLS_NormalizeEmits<typeof __VLS_1723.emit>;
{
const __VLS_1725 = __VLS_intrinsicElements["option"];
const __VLS_1726 = __VLS_elementAsFunctionalComponent(__VLS_1725);
const __VLS_1727 = __VLS_1726({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1726));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1725, typeof __VLS_1727> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1728 = __VLS_pickFunctionalComponentCtx(__VLS_1725, __VLS_1727)!;
let __VLS_1729!: __VLS_NormalizeEmits<typeof __VLS_1728.emit>;
(__VLS_1728.slots!).default;
}
{
const __VLS_1730 = __VLS_intrinsicElements["option"];
const __VLS_1731 = __VLS_elementAsFunctionalComponent(__VLS_1730);
const __VLS_1732 = __VLS_1731({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1731));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1730, typeof __VLS_1732> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1733 = __VLS_pickFunctionalComponentCtx(__VLS_1730, __VLS_1732)!;
let __VLS_1734!: __VLS_NormalizeEmits<typeof __VLS_1733.emit>;
(__VLS_1733.slots!).default;
}
(__VLS_1723.slots!).default;
}
(__VLS_1713.slots!).default;
}
{
const __VLS_1735 = __VLS_intrinsicElements["div"];
const __VLS_1736 = __VLS_elementAsFunctionalComponent(__VLS_1735);
const __VLS_1737 = __VLS_1736({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1736));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1735, typeof __VLS_1737> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_1738 = __VLS_pickFunctionalComponentCtx(__VLS_1735, __VLS_1737)!;
let __VLS_1739!: __VLS_NormalizeEmits<typeof __VLS_1738.emit>;
{
const __VLS_1740 = __VLS_intrinsicElements["div"];
const __VLS_1741 = __VLS_elementAsFunctionalComponent(__VLS_1740);
const __VLS_1742 = __VLS_1741({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1741));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1740, typeof __VLS_1742> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1743 = __VLS_pickFunctionalComponentCtx(__VLS_1740, __VLS_1742)!;
let __VLS_1744!: __VLS_NormalizeEmits<typeof __VLS_1743.emit>;
{
const __VLS_1745 = __VLS_intrinsicElements["input"];
const __VLS_1746 = __VLS_elementAsFunctionalComponent(__VLS_1745);
const __VLS_1747 = __VLS_1746({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-11"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1746));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1745, typeof __VLS_1747> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-11"), value: ("1"), });
const __VLS_1748 = __VLS_pickFunctionalComponentCtx(__VLS_1745, __VLS_1747)!;
let __VLS_1749!: __VLS_NormalizeEmits<typeof __VLS_1748.emit>;
}
{
const __VLS_1750 = __VLS_intrinsicElements["label"];
const __VLS_1751 = __VLS_elementAsFunctionalComponent(__VLS_1750);
const __VLS_1752 = __VLS_1751({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1751));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1750, typeof __VLS_1752> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1753 = __VLS_pickFunctionalComponentCtx(__VLS_1750, __VLS_1752)!;
let __VLS_1754!: __VLS_NormalizeEmits<typeof __VLS_1753.emit>;
(__VLS_1753.slots!).default;
}
(__VLS_1743.slots!).default;
}
{
const __VLS_1755 = __VLS_intrinsicElements["div"];
const __VLS_1756 = __VLS_elementAsFunctionalComponent(__VLS_1755);
const __VLS_1757 = __VLS_1756({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1756));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1755, typeof __VLS_1757> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1758 = __VLS_pickFunctionalComponentCtx(__VLS_1755, __VLS_1757)!;
let __VLS_1759!: __VLS_NormalizeEmits<typeof __VLS_1758.emit>;
{
const __VLS_1760 = __VLS_intrinsicElements["input"];
const __VLS_1761 = __VLS_elementAsFunctionalComponent(__VLS_1760);
const __VLS_1762 = __VLS_1761({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-11"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1761));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1760, typeof __VLS_1762> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-11"), value: ("1"), });
const __VLS_1763 = __VLS_pickFunctionalComponentCtx(__VLS_1760, __VLS_1762)!;
let __VLS_1764!: __VLS_NormalizeEmits<typeof __VLS_1763.emit>;
}
{
const __VLS_1765 = __VLS_intrinsicElements["label"];
const __VLS_1766 = __VLS_elementAsFunctionalComponent(__VLS_1765);
const __VLS_1767 = __VLS_1766({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1766));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1765, typeof __VLS_1767> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1768 = __VLS_pickFunctionalComponentCtx(__VLS_1765, __VLS_1767)!;
let __VLS_1769!: __VLS_NormalizeEmits<typeof __VLS_1768.emit>;
(__VLS_1768.slots!).default;
}
(__VLS_1758.slots!).default;
}
(__VLS_1738.slots!).default;
}
(__VLS_1708.slots!).default;
}
{
const __VLS_1770 = __VLS_intrinsicElements["fieldset"];
const __VLS_1771 = __VLS_elementAsFunctionalComponent(__VLS_1770);
const __VLS_1772 = __VLS_1771({ ...{}, id: ("fieldset_23"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1771));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1770, typeof __VLS_1772> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_23"), style: ({}), });
const __VLS_1773 = __VLS_pickFunctionalComponentCtx(__VLS_1770, __VLS_1772)!;
let __VLS_1774!: __VLS_NormalizeEmits<typeof __VLS_1773.emit>;
{
const __VLS_1775 = __VLS_intrinsicElements["div"];
const __VLS_1776 = __VLS_elementAsFunctionalComponent(__VLS_1775);
const __VLS_1777 = __VLS_1776({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1776));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1775, typeof __VLS_1777> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1778 = __VLS_pickFunctionalComponentCtx(__VLS_1775, __VLS_1777)!;
let __VLS_1779!: __VLS_NormalizeEmits<typeof __VLS_1778.emit>;
{
const __VLS_1780 = __VLS_intrinsicElements["label"];
const __VLS_1781 = __VLS_elementAsFunctionalComponent(__VLS_1780);
const __VLS_1782 = __VLS_1781({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1781));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1780, typeof __VLS_1782> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_1783 = __VLS_pickFunctionalComponentCtx(__VLS_1780, __VLS_1782)!;
let __VLS_1784!: __VLS_NormalizeEmits<typeof __VLS_1783.emit>;
(__VLS_1783.slots!).default;
}
{
const __VLS_1785 = __VLS_intrinsicElements["div"];
const __VLS_1786 = __VLS_elementAsFunctionalComponent(__VLS_1785);
const __VLS_1787 = __VLS_1786({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1786));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1785, typeof __VLS_1787> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1788 = __VLS_pickFunctionalComponentCtx(__VLS_1785, __VLS_1787)!;
let __VLS_1789!: __VLS_NormalizeEmits<typeof __VLS_1788.emit>;
{
const __VLS_1790 = __VLS_intrinsicElements["input"];
const __VLS_1791 = __VLS_elementAsFunctionalComponent(__VLS_1790);
const __VLS_1792 = __VLS_1791({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-12"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1791));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1790, typeof __VLS_1792> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-12"), value: ("1"), });
const __VLS_1793 = __VLS_pickFunctionalComponentCtx(__VLS_1790, __VLS_1792)!;
let __VLS_1794!: __VLS_NormalizeEmits<typeof __VLS_1793.emit>;
}
{
const __VLS_1795 = __VLS_intrinsicElements["label"];
const __VLS_1796 = __VLS_elementAsFunctionalComponent(__VLS_1795);
const __VLS_1797 = __VLS_1796({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1796));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1795, typeof __VLS_1797> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1798 = __VLS_pickFunctionalComponentCtx(__VLS_1795, __VLS_1797)!;
let __VLS_1799!: __VLS_NormalizeEmits<typeof __VLS_1798.emit>;
(__VLS_1798.slots!).default;
}
(__VLS_1788.slots!).default;
}
{
const __VLS_1800 = __VLS_intrinsicElements["div"];
const __VLS_1801 = __VLS_elementAsFunctionalComponent(__VLS_1800);
const __VLS_1802 = __VLS_1801({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1801));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1800, typeof __VLS_1802> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1803 = __VLS_pickFunctionalComponentCtx(__VLS_1800, __VLS_1802)!;
let __VLS_1804!: __VLS_NormalizeEmits<typeof __VLS_1803.emit>;
{
const __VLS_1805 = __VLS_intrinsicElements["input"];
const __VLS_1806 = __VLS_elementAsFunctionalComponent(__VLS_1805);
const __VLS_1807 = __VLS_1806({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-12"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1806));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1805, typeof __VLS_1807> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-12"), value: ("1"), });
const __VLS_1808 = __VLS_pickFunctionalComponentCtx(__VLS_1805, __VLS_1807)!;
let __VLS_1809!: __VLS_NormalizeEmits<typeof __VLS_1808.emit>;
}
{
const __VLS_1810 = __VLS_intrinsicElements["label"];
const __VLS_1811 = __VLS_elementAsFunctionalComponent(__VLS_1810);
const __VLS_1812 = __VLS_1811({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1811));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1810, typeof __VLS_1812> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1813 = __VLS_pickFunctionalComponentCtx(__VLS_1810, __VLS_1812)!;
let __VLS_1814!: __VLS_NormalizeEmits<typeof __VLS_1813.emit>;
(__VLS_1813.slots!).default;
}
(__VLS_1803.slots!).default;
}
(__VLS_1778.slots!).default;
}
{
const __VLS_1815 = __VLS_intrinsicElements["div"];
const __VLS_1816 = __VLS_elementAsFunctionalComponent(__VLS_1815);
const __VLS_1817 = __VLS_1816({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_1816));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1815, typeof __VLS_1817> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_1818 = __VLS_pickFunctionalComponentCtx(__VLS_1815, __VLS_1817)!;
let __VLS_1819!: __VLS_NormalizeEmits<typeof __VLS_1818.emit>;
{
const __VLS_1820 = __VLS_intrinsicElements["div"];
const __VLS_1821 = __VLS_elementAsFunctionalComponent(__VLS_1820);
const __VLS_1822 = __VLS_1821({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1821));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1820, typeof __VLS_1822> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_1823 = __VLS_pickFunctionalComponentCtx(__VLS_1820, __VLS_1822)!;
let __VLS_1824!: __VLS_NormalizeEmits<typeof __VLS_1823.emit>;
{
const __VLS_1825 = __VLS_intrinsicElements["label"];
const __VLS_1826 = __VLS_elementAsFunctionalComponent(__VLS_1825);
const __VLS_1827 = __VLS_1826({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1826));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1825, typeof __VLS_1827> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_1828 = __VLS_pickFunctionalComponentCtx(__VLS_1825, __VLS_1827)!;
let __VLS_1829!: __VLS_NormalizeEmits<typeof __VLS_1828.emit>;
(__VLS_1828.slots!).default;
}
{
const __VLS_1830 = __VLS_intrinsicElements["div"];
const __VLS_1831 = __VLS_elementAsFunctionalComponent(__VLS_1830);
const __VLS_1832 = __VLS_1831({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1831));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1830, typeof __VLS_1832> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1833 = __VLS_pickFunctionalComponentCtx(__VLS_1830, __VLS_1832)!;
let __VLS_1834!: __VLS_NormalizeEmits<typeof __VLS_1833.emit>;
{
const __VLS_1835 = __VLS_intrinsicElements["input"];
const __VLS_1836 = __VLS_elementAsFunctionalComponent(__VLS_1835);
const __VLS_1837 = __VLS_1836({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-13"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1836));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1835, typeof __VLS_1837> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-13"), value: ("1"), });
const __VLS_1838 = __VLS_pickFunctionalComponentCtx(__VLS_1835, __VLS_1837)!;
let __VLS_1839!: __VLS_NormalizeEmits<typeof __VLS_1838.emit>;
}
{
const __VLS_1840 = __VLS_intrinsicElements["label"];
const __VLS_1841 = __VLS_elementAsFunctionalComponent(__VLS_1840);
const __VLS_1842 = __VLS_1841({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1841));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1840, typeof __VLS_1842> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1843 = __VLS_pickFunctionalComponentCtx(__VLS_1840, __VLS_1842)!;
let __VLS_1844!: __VLS_NormalizeEmits<typeof __VLS_1843.emit>;
(__VLS_1843.slots!).default;
}
(__VLS_1833.slots!).default;
}
{
const __VLS_1845 = __VLS_intrinsicElements["div"];
const __VLS_1846 = __VLS_elementAsFunctionalComponent(__VLS_1845);
const __VLS_1847 = __VLS_1846({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1846));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1845, typeof __VLS_1847> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1848 = __VLS_pickFunctionalComponentCtx(__VLS_1845, __VLS_1847)!;
let __VLS_1849!: __VLS_NormalizeEmits<typeof __VLS_1848.emit>;
{
const __VLS_1850 = __VLS_intrinsicElements["input"];
const __VLS_1851 = __VLS_elementAsFunctionalComponent(__VLS_1850);
const __VLS_1852 = __VLS_1851({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-13"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1851));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1850, typeof __VLS_1852> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-13"), value: ("1"), });
const __VLS_1853 = __VLS_pickFunctionalComponentCtx(__VLS_1850, __VLS_1852)!;
let __VLS_1854!: __VLS_NormalizeEmits<typeof __VLS_1853.emit>;
}
{
const __VLS_1855 = __VLS_intrinsicElements["label"];
const __VLS_1856 = __VLS_elementAsFunctionalComponent(__VLS_1855);
const __VLS_1857 = __VLS_1856({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1856));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1855, typeof __VLS_1857> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1858 = __VLS_pickFunctionalComponentCtx(__VLS_1855, __VLS_1857)!;
let __VLS_1859!: __VLS_NormalizeEmits<typeof __VLS_1858.emit>;
(__VLS_1858.slots!).default;
}
(__VLS_1848.slots!).default;
}
(__VLS_1823.slots!).default;
}
(__VLS_1818.slots!).default;
}
{
const __VLS_1860 = __VLS_intrinsicElements["select"];
const __VLS_1861 = __VLS_elementAsFunctionalComponent(__VLS_1860);
const __VLS_1862 = __VLS_1861({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1861));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1860, typeof __VLS_1862> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1863 = __VLS_pickFunctionalComponentCtx(__VLS_1860, __VLS_1862)!;
let __VLS_1864!: __VLS_NormalizeEmits<typeof __VLS_1863.emit>;
{
const __VLS_1865 = __VLS_intrinsicElements["option"];
const __VLS_1866 = __VLS_elementAsFunctionalComponent(__VLS_1865);
const __VLS_1867 = __VLS_1866({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1866));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1865, typeof __VLS_1867> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1868 = __VLS_pickFunctionalComponentCtx(__VLS_1865, __VLS_1867)!;
let __VLS_1869!: __VLS_NormalizeEmits<typeof __VLS_1868.emit>;
(__VLS_1868.slots!).default;
}
{
const __VLS_1870 = __VLS_intrinsicElements["option"];
const __VLS_1871 = __VLS_elementAsFunctionalComponent(__VLS_1870);
const __VLS_1872 = __VLS_1871({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1871));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1870, typeof __VLS_1872> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1873 = __VLS_pickFunctionalComponentCtx(__VLS_1870, __VLS_1872)!;
let __VLS_1874!: __VLS_NormalizeEmits<typeof __VLS_1873.emit>;
(__VLS_1873.slots!).default;
}
(__VLS_1863.slots!).default;
}
(__VLS_1773.slots!).default;
}
{
const __VLS_1875 = __VLS_intrinsicElements["fieldset"];
const __VLS_1876 = __VLS_elementAsFunctionalComponent(__VLS_1875);
const __VLS_1877 = __VLS_1876({ ...{}, id: ("fieldset_24"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1876));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1875, typeof __VLS_1877> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_24"), style: ({}), });
const __VLS_1878 = __VLS_pickFunctionalComponentCtx(__VLS_1875, __VLS_1877)!;
let __VLS_1879!: __VLS_NormalizeEmits<typeof __VLS_1878.emit>;
{
const __VLS_1880 = __VLS_intrinsicElements["div"];
const __VLS_1881 = __VLS_elementAsFunctionalComponent(__VLS_1880);
const __VLS_1882 = __VLS_1881({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1881));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1880, typeof __VLS_1882> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1883 = __VLS_pickFunctionalComponentCtx(__VLS_1880, __VLS_1882)!;
let __VLS_1884!: __VLS_NormalizeEmits<typeof __VLS_1883.emit>;
{
const __VLS_1885 = __VLS_intrinsicElements["label"];
const __VLS_1886 = __VLS_elementAsFunctionalComponent(__VLS_1885);
const __VLS_1887 = __VLS_1886({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1886));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1885, typeof __VLS_1887> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_1888 = __VLS_pickFunctionalComponentCtx(__VLS_1885, __VLS_1887)!;
let __VLS_1889!: __VLS_NormalizeEmits<typeof __VLS_1888.emit>;
(__VLS_1888.slots!).default;
}
{
const __VLS_1890 = __VLS_intrinsicElements["div"];
const __VLS_1891 = __VLS_elementAsFunctionalComponent(__VLS_1890);
const __VLS_1892 = __VLS_1891({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1891));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1890, typeof __VLS_1892> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1893 = __VLS_pickFunctionalComponentCtx(__VLS_1890, __VLS_1892)!;
let __VLS_1894!: __VLS_NormalizeEmits<typeof __VLS_1893.emit>;
{
const __VLS_1895 = __VLS_intrinsicElements["input"];
const __VLS_1896 = __VLS_elementAsFunctionalComponent(__VLS_1895);
const __VLS_1897 = __VLS_1896({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-14"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1896));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1895, typeof __VLS_1897> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-14"), value: ("1"), });
const __VLS_1898 = __VLS_pickFunctionalComponentCtx(__VLS_1895, __VLS_1897)!;
let __VLS_1899!: __VLS_NormalizeEmits<typeof __VLS_1898.emit>;
}
{
const __VLS_1900 = __VLS_intrinsicElements["label"];
const __VLS_1901 = __VLS_elementAsFunctionalComponent(__VLS_1900);
const __VLS_1902 = __VLS_1901({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1901));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1900, typeof __VLS_1902> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1903 = __VLS_pickFunctionalComponentCtx(__VLS_1900, __VLS_1902)!;
let __VLS_1904!: __VLS_NormalizeEmits<typeof __VLS_1903.emit>;
(__VLS_1903.slots!).default;
}
(__VLS_1893.slots!).default;
}
{
const __VLS_1905 = __VLS_intrinsicElements["div"];
const __VLS_1906 = __VLS_elementAsFunctionalComponent(__VLS_1905);
const __VLS_1907 = __VLS_1906({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1906));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1905, typeof __VLS_1907> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1908 = __VLS_pickFunctionalComponentCtx(__VLS_1905, __VLS_1907)!;
let __VLS_1909!: __VLS_NormalizeEmits<typeof __VLS_1908.emit>;
{
const __VLS_1910 = __VLS_intrinsicElements["input"];
const __VLS_1911 = __VLS_elementAsFunctionalComponent(__VLS_1910);
const __VLS_1912 = __VLS_1911({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-14"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1911));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1910, typeof __VLS_1912> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-14"), value: ("1"), });
const __VLS_1913 = __VLS_pickFunctionalComponentCtx(__VLS_1910, __VLS_1912)!;
let __VLS_1914!: __VLS_NormalizeEmits<typeof __VLS_1913.emit>;
}
{
const __VLS_1915 = __VLS_intrinsicElements["label"];
const __VLS_1916 = __VLS_elementAsFunctionalComponent(__VLS_1915);
const __VLS_1917 = __VLS_1916({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1916));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1915, typeof __VLS_1917> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1918 = __VLS_pickFunctionalComponentCtx(__VLS_1915, __VLS_1917)!;
let __VLS_1919!: __VLS_NormalizeEmits<typeof __VLS_1918.emit>;
(__VLS_1918.slots!).default;
}
(__VLS_1908.slots!).default;
}
(__VLS_1883.slots!).default;
}
{
const __VLS_1920 = __VLS_intrinsicElements["select"];
const __VLS_1921 = __VLS_elementAsFunctionalComponent(__VLS_1920);
const __VLS_1922 = __VLS_1921({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1921));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1920, typeof __VLS_1922> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1923 = __VLS_pickFunctionalComponentCtx(__VLS_1920, __VLS_1922)!;
let __VLS_1924!: __VLS_NormalizeEmits<typeof __VLS_1923.emit>;
{
const __VLS_1925 = __VLS_intrinsicElements["option"];
const __VLS_1926 = __VLS_elementAsFunctionalComponent(__VLS_1925);
const __VLS_1927 = __VLS_1926({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1926));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1925, typeof __VLS_1927> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1928 = __VLS_pickFunctionalComponentCtx(__VLS_1925, __VLS_1927)!;
let __VLS_1929!: __VLS_NormalizeEmits<typeof __VLS_1928.emit>;
(__VLS_1928.slots!).default;
}
{
const __VLS_1930 = __VLS_intrinsicElements["option"];
const __VLS_1931 = __VLS_elementAsFunctionalComponent(__VLS_1930);
const __VLS_1932 = __VLS_1931({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1931));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1930, typeof __VLS_1932> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1933 = __VLS_pickFunctionalComponentCtx(__VLS_1930, __VLS_1932)!;
let __VLS_1934!: __VLS_NormalizeEmits<typeof __VLS_1933.emit>;
(__VLS_1933.slots!).default;
}
(__VLS_1923.slots!).default;
}
(__VLS_1878.slots!).default;
}
{
const __VLS_1935 = __VLS_intrinsicElements["fieldset"];
const __VLS_1936 = __VLS_elementAsFunctionalComponent(__VLS_1935);
const __VLS_1937 = __VLS_1936({ ...{}, id: ("fieldset_25"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1936));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1935, typeof __VLS_1937> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_25"), style: ({}), });
const __VLS_1938 = __VLS_pickFunctionalComponentCtx(__VLS_1935, __VLS_1937)!;
let __VLS_1939!: __VLS_NormalizeEmits<typeof __VLS_1938.emit>;
{
const __VLS_1940 = __VLS_intrinsicElements["div"];
const __VLS_1941 = __VLS_elementAsFunctionalComponent(__VLS_1940);
const __VLS_1942 = __VLS_1941({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1941));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1940, typeof __VLS_1942> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_1943 = __VLS_pickFunctionalComponentCtx(__VLS_1940, __VLS_1942)!;
let __VLS_1944!: __VLS_NormalizeEmits<typeof __VLS_1943.emit>;
{
const __VLS_1945 = __VLS_intrinsicElements["label"];
const __VLS_1946 = __VLS_elementAsFunctionalComponent(__VLS_1945);
const __VLS_1947 = __VLS_1946({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1946));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1945, typeof __VLS_1947> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_1948 = __VLS_pickFunctionalComponentCtx(__VLS_1945, __VLS_1947)!;
let __VLS_1949!: __VLS_NormalizeEmits<typeof __VLS_1948.emit>;
(__VLS_1948.slots!).default;
}
{
const __VLS_1950 = __VLS_intrinsicElements["div"];
const __VLS_1951 = __VLS_elementAsFunctionalComponent(__VLS_1950);
const __VLS_1952 = __VLS_1951({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1951));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1950, typeof __VLS_1952> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1953 = __VLS_pickFunctionalComponentCtx(__VLS_1950, __VLS_1952)!;
let __VLS_1954!: __VLS_NormalizeEmits<typeof __VLS_1953.emit>;
{
const __VLS_1955 = __VLS_intrinsicElements["input"];
const __VLS_1956 = __VLS_elementAsFunctionalComponent(__VLS_1955);
const __VLS_1957 = __VLS_1956({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-15"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1956));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1955, typeof __VLS_1957> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-15"), value: ("1"), });
const __VLS_1958 = __VLS_pickFunctionalComponentCtx(__VLS_1955, __VLS_1957)!;
let __VLS_1959!: __VLS_NormalizeEmits<typeof __VLS_1958.emit>;
}
{
const __VLS_1960 = __VLS_intrinsicElements["label"];
const __VLS_1961 = __VLS_elementAsFunctionalComponent(__VLS_1960);
const __VLS_1962 = __VLS_1961({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1961));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1960, typeof __VLS_1962> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1963 = __VLS_pickFunctionalComponentCtx(__VLS_1960, __VLS_1962)!;
let __VLS_1964!: __VLS_NormalizeEmits<typeof __VLS_1963.emit>;
(__VLS_1963.slots!).default;
}
(__VLS_1953.slots!).default;
}
{
const __VLS_1965 = __VLS_intrinsicElements["div"];
const __VLS_1966 = __VLS_elementAsFunctionalComponent(__VLS_1965);
const __VLS_1967 = __VLS_1966({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1966));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1965, typeof __VLS_1967> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_1968 = __VLS_pickFunctionalComponentCtx(__VLS_1965, __VLS_1967)!;
let __VLS_1969!: __VLS_NormalizeEmits<typeof __VLS_1968.emit>;
{
const __VLS_1970 = __VLS_intrinsicElements["input"];
const __VLS_1971 = __VLS_elementAsFunctionalComponent(__VLS_1970);
const __VLS_1972 = __VLS_1971({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-15"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1971));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1970, typeof __VLS_1972> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-15"), value: ("1"), });
const __VLS_1973 = __VLS_pickFunctionalComponentCtx(__VLS_1970, __VLS_1972)!;
let __VLS_1974!: __VLS_NormalizeEmits<typeof __VLS_1973.emit>;
}
{
const __VLS_1975 = __VLS_intrinsicElements["label"];
const __VLS_1976 = __VLS_elementAsFunctionalComponent(__VLS_1975);
const __VLS_1977 = __VLS_1976({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1976));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1975, typeof __VLS_1977> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_1978 = __VLS_pickFunctionalComponentCtx(__VLS_1975, __VLS_1977)!;
let __VLS_1979!: __VLS_NormalizeEmits<typeof __VLS_1978.emit>;
(__VLS_1978.slots!).default;
}
(__VLS_1968.slots!).default;
}
(__VLS_1943.slots!).default;
}
{
const __VLS_1980 = __VLS_intrinsicElements["select"];
const __VLS_1981 = __VLS_elementAsFunctionalComponent(__VLS_1980);
const __VLS_1982 = __VLS_1981({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1981));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1980, typeof __VLS_1982> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_1983 = __VLS_pickFunctionalComponentCtx(__VLS_1980, __VLS_1982)!;
let __VLS_1984!: __VLS_NormalizeEmits<typeof __VLS_1983.emit>;
{
const __VLS_1985 = __VLS_intrinsicElements["option"];
const __VLS_1986 = __VLS_elementAsFunctionalComponent(__VLS_1985);
const __VLS_1987 = __VLS_1986({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1986));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1985, typeof __VLS_1987> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_1988 = __VLS_pickFunctionalComponentCtx(__VLS_1985, __VLS_1987)!;
let __VLS_1989!: __VLS_NormalizeEmits<typeof __VLS_1988.emit>;
(__VLS_1988.slots!).default;
}
{
const __VLS_1990 = __VLS_intrinsicElements["option"];
const __VLS_1991 = __VLS_elementAsFunctionalComponent(__VLS_1990);
const __VLS_1992 = __VLS_1991({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_1991));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1990, typeof __VLS_1992> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_1993 = __VLS_pickFunctionalComponentCtx(__VLS_1990, __VLS_1992)!;
let __VLS_1994!: __VLS_NormalizeEmits<typeof __VLS_1993.emit>;
(__VLS_1993.slots!).default;
}
(__VLS_1983.slots!).default;
}
(__VLS_1938.slots!).default;
}
{
const __VLS_1995 = __VLS_intrinsicElements["fieldset"];
const __VLS_1996 = __VLS_elementAsFunctionalComponent(__VLS_1995);
const __VLS_1997 = __VLS_1996({ ...{}, id: ("fieldset_26"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1996));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_1995, typeof __VLS_1997> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_26"), style: ({}), });
const __VLS_1998 = __VLS_pickFunctionalComponentCtx(__VLS_1995, __VLS_1997)!;
let __VLS_1999!: __VLS_NormalizeEmits<typeof __VLS_1998.emit>;
{
const __VLS_2000 = __VLS_intrinsicElements["div"];
const __VLS_2001 = __VLS_elementAsFunctionalComponent(__VLS_2000);
const __VLS_2002 = __VLS_2001({ ...{}, class: ("form-line"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2001));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2000, typeof __VLS_2002> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), style: ({}), });
const __VLS_2003 = __VLS_pickFunctionalComponentCtx(__VLS_2000, __VLS_2002)!;
let __VLS_2004!: __VLS_NormalizeEmits<typeof __VLS_2003.emit>;
{
const __VLS_2005 = __VLS_intrinsicElements["label"];
const __VLS_2006 = __VLS_elementAsFunctionalComponent(__VLS_2005);
const __VLS_2007 = __VLS_2006({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_2006));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2005, typeof __VLS_2007> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_2008 = __VLS_pickFunctionalComponentCtx(__VLS_2005, __VLS_2007)!;
let __VLS_2009!: __VLS_NormalizeEmits<typeof __VLS_2008.emit>;
(__VLS_2008.slots!).default;
}
{
const __VLS_2010 = __VLS_intrinsicElements["div"];
const __VLS_2011 = __VLS_elementAsFunctionalComponent(__VLS_2010);
const __VLS_2012 = __VLS_2011({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2011));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2010, typeof __VLS_2012> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2013 = __VLS_pickFunctionalComponentCtx(__VLS_2010, __VLS_2012)!;
let __VLS_2014!: __VLS_NormalizeEmits<typeof __VLS_2013.emit>;
{
const __VLS_2015 = __VLS_intrinsicElements["input"];
const __VLS_2016 = __VLS_elementAsFunctionalComponent(__VLS_2015);
const __VLS_2017 = __VLS_2016({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-16"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2016));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2015, typeof __VLS_2017> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-16"), value: ("1"), });
const __VLS_2018 = __VLS_pickFunctionalComponentCtx(__VLS_2015, __VLS_2017)!;
let __VLS_2019!: __VLS_NormalizeEmits<typeof __VLS_2018.emit>;
}
{
const __VLS_2020 = __VLS_intrinsicElements["label"];
const __VLS_2021 = __VLS_elementAsFunctionalComponent(__VLS_2020);
const __VLS_2022 = __VLS_2021({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2021));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2020, typeof __VLS_2022> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2023 = __VLS_pickFunctionalComponentCtx(__VLS_2020, __VLS_2022)!;
let __VLS_2024!: __VLS_NormalizeEmits<typeof __VLS_2023.emit>;
(__VLS_2023.slots!).default;
}
(__VLS_2013.slots!).default;
}
{
const __VLS_2025 = __VLS_intrinsicElements["div"];
const __VLS_2026 = __VLS_elementAsFunctionalComponent(__VLS_2025);
const __VLS_2027 = __VLS_2026({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2026));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2025, typeof __VLS_2027> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2028 = __VLS_pickFunctionalComponentCtx(__VLS_2025, __VLS_2027)!;
let __VLS_2029!: __VLS_NormalizeEmits<typeof __VLS_2028.emit>;
{
const __VLS_2030 = __VLS_intrinsicElements["input"];
const __VLS_2031 = __VLS_elementAsFunctionalComponent(__VLS_2030);
const __VLS_2032 = __VLS_2031({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-16"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2031));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2030, typeof __VLS_2032> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-16"), value: ("1"), });
const __VLS_2033 = __VLS_pickFunctionalComponentCtx(__VLS_2030, __VLS_2032)!;
let __VLS_2034!: __VLS_NormalizeEmits<typeof __VLS_2033.emit>;
}
{
const __VLS_2035 = __VLS_intrinsicElements["label"];
const __VLS_2036 = __VLS_elementAsFunctionalComponent(__VLS_2035);
const __VLS_2037 = __VLS_2036({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2036));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2035, typeof __VLS_2037> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2038 = __VLS_pickFunctionalComponentCtx(__VLS_2035, __VLS_2037)!;
let __VLS_2039!: __VLS_NormalizeEmits<typeof __VLS_2038.emit>;
(__VLS_2038.slots!).default;
}
(__VLS_2028.slots!).default;
}
(__VLS_2003.slots!).default;
}
{
const __VLS_2040 = __VLS_intrinsicElements["select"];
const __VLS_2041 = __VLS_elementAsFunctionalComponent(__VLS_2040);
const __VLS_2042 = __VLS_2041({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2041));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2040, typeof __VLS_2042> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2043 = __VLS_pickFunctionalComponentCtx(__VLS_2040, __VLS_2042)!;
let __VLS_2044!: __VLS_NormalizeEmits<typeof __VLS_2043.emit>;
{
const __VLS_2045 = __VLS_intrinsicElements["option"];
const __VLS_2046 = __VLS_elementAsFunctionalComponent(__VLS_2045);
const __VLS_2047 = __VLS_2046({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2046));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2045, typeof __VLS_2047> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2048 = __VLS_pickFunctionalComponentCtx(__VLS_2045, __VLS_2047)!;
let __VLS_2049!: __VLS_NormalizeEmits<typeof __VLS_2048.emit>;
(__VLS_2048.slots!).default;
}
{
const __VLS_2050 = __VLS_intrinsicElements["option"];
const __VLS_2051 = __VLS_elementAsFunctionalComponent(__VLS_2050);
const __VLS_2052 = __VLS_2051({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2051));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2050, typeof __VLS_2052> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2053 = __VLS_pickFunctionalComponentCtx(__VLS_2050, __VLS_2052)!;
let __VLS_2054!: __VLS_NormalizeEmits<typeof __VLS_2053.emit>;
(__VLS_2053.slots!).default;
}
(__VLS_2043.slots!).default;
}
(__VLS_1998.slots!).default;
}
{
const __VLS_2055 = __VLS_intrinsicElements["fieldset"];
const __VLS_2056 = __VLS_elementAsFunctionalComponent(__VLS_2055);
const __VLS_2057 = __VLS_2056({ ...{}, id: ("fieldset_27"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2056));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2055, typeof __VLS_2057> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_27"), style: ({}), });
const __VLS_2058 = __VLS_pickFunctionalComponentCtx(__VLS_2055, __VLS_2057)!;
let __VLS_2059!: __VLS_NormalizeEmits<typeof __VLS_2058.emit>;
{
const __VLS_2060 = __VLS_intrinsicElements["h1"];
const __VLS_2061 = __VLS_elementAsFunctionalComponent(__VLS_2060);
const __VLS_2062 = __VLS_2061({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_2061));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2060, typeof __VLS_2062> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_2063 = __VLS_pickFunctionalComponentCtx(__VLS_2060, __VLS_2062)!;
let __VLS_2064!: __VLS_NormalizeEmits<typeof __VLS_2063.emit>;
(__VLS_2063.slots!).default;
}
{
const __VLS_2065 = __VLS_intrinsicElements["fieldset"];
const __VLS_2066 = __VLS_elementAsFunctionalComponent(__VLS_2065);
const __VLS_2067 = __VLS_2066({ ...{}, id: ("fieldset_28"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2066));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2065, typeof __VLS_2067> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_28"), style: ({}), });
const __VLS_2068 = __VLS_pickFunctionalComponentCtx(__VLS_2065, __VLS_2067)!;
let __VLS_2069!: __VLS_NormalizeEmits<typeof __VLS_2068.emit>;
{
const __VLS_2070 = __VLS_intrinsicElements["div"];
const __VLS_2071 = __VLS_elementAsFunctionalComponent(__VLS_2070);
const __VLS_2072 = __VLS_2071({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2071));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2070, typeof __VLS_2072> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2073 = __VLS_pickFunctionalComponentCtx(__VLS_2070, __VLS_2072)!;
let __VLS_2074!: __VLS_NormalizeEmits<typeof __VLS_2073.emit>;
{
const __VLS_2075 = __VLS_intrinsicElements["label"];
const __VLS_2076 = __VLS_elementAsFunctionalComponent(__VLS_2075);
const __VLS_2077 = __VLS_2076({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_2076));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2075, typeof __VLS_2077> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_2078 = __VLS_pickFunctionalComponentCtx(__VLS_2075, __VLS_2077)!;
let __VLS_2079!: __VLS_NormalizeEmits<typeof __VLS_2078.emit>;
(__VLS_2078.slots!).default;
}
(__VLS_2073.slots!).default;
}
{
const __VLS_2080 = __VLS_intrinsicElements["select"];
const __VLS_2081 = __VLS_elementAsFunctionalComponent(__VLS_2080);
const __VLS_2082 = __VLS_2081({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2081));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2080, typeof __VLS_2082> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2083 = __VLS_pickFunctionalComponentCtx(__VLS_2080, __VLS_2082)!;
let __VLS_2084!: __VLS_NormalizeEmits<typeof __VLS_2083.emit>;
{
const __VLS_2085 = __VLS_intrinsicElements["option"];
const __VLS_2086 = __VLS_elementAsFunctionalComponent(__VLS_2085);
const __VLS_2087 = __VLS_2086({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2086));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2085, typeof __VLS_2087> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2088 = __VLS_pickFunctionalComponentCtx(__VLS_2085, __VLS_2087)!;
let __VLS_2089!: __VLS_NormalizeEmits<typeof __VLS_2088.emit>;
(__VLS_2088.slots!).default;
}
{
const __VLS_2090 = __VLS_intrinsicElements["option"];
const __VLS_2091 = __VLS_elementAsFunctionalComponent(__VLS_2090);
const __VLS_2092 = __VLS_2091({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2091));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2090, typeof __VLS_2092> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2093 = __VLS_pickFunctionalComponentCtx(__VLS_2090, __VLS_2092)!;
let __VLS_2094!: __VLS_NormalizeEmits<typeof __VLS_2093.emit>;
(__VLS_2093.slots!).default;
}
(__VLS_2083.slots!).default;
}
(__VLS_2068.slots!).default;
}
(__VLS_2058.slots!).default;
}
{
const __VLS_2095 = __VLS_intrinsicElements["fieldset"];
const __VLS_2096 = __VLS_elementAsFunctionalComponent(__VLS_2095);
const __VLS_2097 = __VLS_2096({ ...{}, id: ("fieldset_29"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2096));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2095, typeof __VLS_2097> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_29"), style: ({}), });
const __VLS_2098 = __VLS_pickFunctionalComponentCtx(__VLS_2095, __VLS_2097)!;
let __VLS_2099!: __VLS_NormalizeEmits<typeof __VLS_2098.emit>;
{
const __VLS_2100 = __VLS_intrinsicElements["h1"];
const __VLS_2101 = __VLS_elementAsFunctionalComponent(__VLS_2100);
const __VLS_2102 = __VLS_2101({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_2101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2100, typeof __VLS_2102> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_2103 = __VLS_pickFunctionalComponentCtx(__VLS_2100, __VLS_2102)!;
let __VLS_2104!: __VLS_NormalizeEmits<typeof __VLS_2103.emit>;
(__VLS_2103.slots!).default;
}
{
const __VLS_2105 = __VLS_intrinsicElements["fieldset"];
const __VLS_2106 = __VLS_elementAsFunctionalComponent(__VLS_2105);
const __VLS_2107 = __VLS_2106({ ...{}, id: ("fieldset_30"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2105, typeof __VLS_2107> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_30"), style: ({}), });
const __VLS_2108 = __VLS_pickFunctionalComponentCtx(__VLS_2105, __VLS_2107)!;
let __VLS_2109!: __VLS_NormalizeEmits<typeof __VLS_2108.emit>;
{
const __VLS_2110 = __VLS_intrinsicElements["div"];
const __VLS_2111 = __VLS_elementAsFunctionalComponent(__VLS_2110);
const __VLS_2112 = __VLS_2111({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2110, typeof __VLS_2112> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2113 = __VLS_pickFunctionalComponentCtx(__VLS_2110, __VLS_2112)!;
let __VLS_2114!: __VLS_NormalizeEmits<typeof __VLS_2113.emit>;
{
const __VLS_2115 = __VLS_intrinsicElements["label"];
const __VLS_2116 = __VLS_elementAsFunctionalComponent(__VLS_2115);
const __VLS_2117 = __VLS_2116({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_2116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2115, typeof __VLS_2117> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_2118 = __VLS_pickFunctionalComponentCtx(__VLS_2115, __VLS_2117)!;
let __VLS_2119!: __VLS_NormalizeEmits<typeof __VLS_2118.emit>;
(__VLS_2118.slots!).default;
}
(__VLS_2113.slots!).default;
}
{
const __VLS_2120 = __VLS_intrinsicElements["div"];
const __VLS_2121 = __VLS_elementAsFunctionalComponent(__VLS_2120);
const __VLS_2122 = __VLS_2121({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2121));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2120, typeof __VLS_2122> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_2123 = __VLS_pickFunctionalComponentCtx(__VLS_2120, __VLS_2122)!;
let __VLS_2124!: __VLS_NormalizeEmits<typeof __VLS_2123.emit>;
{
const __VLS_2125 = __VLS_intrinsicElements["div"];
const __VLS_2126 = __VLS_elementAsFunctionalComponent(__VLS_2125);
const __VLS_2127 = __VLS_2126({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2126));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2125, typeof __VLS_2127> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2128 = __VLS_pickFunctionalComponentCtx(__VLS_2125, __VLS_2127)!;
let __VLS_2129!: __VLS_NormalizeEmits<typeof __VLS_2128.emit>;
{
const __VLS_2130 = __VLS_intrinsicElements["input"];
const __VLS_2131 = __VLS_elementAsFunctionalComponent(__VLS_2130);
const __VLS_2132 = __VLS_2131({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-16"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2130, typeof __VLS_2132> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-16"), value: ("1"), });
const __VLS_2133 = __VLS_pickFunctionalComponentCtx(__VLS_2130, __VLS_2132)!;
let __VLS_2134!: __VLS_NormalizeEmits<typeof __VLS_2133.emit>;
}
{
const __VLS_2135 = __VLS_intrinsicElements["label"];
const __VLS_2136 = __VLS_elementAsFunctionalComponent(__VLS_2135);
const __VLS_2137 = __VLS_2136({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2135, typeof __VLS_2137> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2138 = __VLS_pickFunctionalComponentCtx(__VLS_2135, __VLS_2137)!;
let __VLS_2139!: __VLS_NormalizeEmits<typeof __VLS_2138.emit>;
(__VLS_2138.slots!).default;
}
(__VLS_2128.slots!).default;
}
{
const __VLS_2140 = __VLS_intrinsicElements["div"];
const __VLS_2141 = __VLS_elementAsFunctionalComponent(__VLS_2140);
const __VLS_2142 = __VLS_2141({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2140, typeof __VLS_2142> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2143 = __VLS_pickFunctionalComponentCtx(__VLS_2140, __VLS_2142)!;
let __VLS_2144!: __VLS_NormalizeEmits<typeof __VLS_2143.emit>;
{
const __VLS_2145 = __VLS_intrinsicElements["input"];
const __VLS_2146 = __VLS_elementAsFunctionalComponent(__VLS_2145);
const __VLS_2147 = __VLS_2146({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-16"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2145, typeof __VLS_2147> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-16"), value: ("1"), });
const __VLS_2148 = __VLS_pickFunctionalComponentCtx(__VLS_2145, __VLS_2147)!;
let __VLS_2149!: __VLS_NormalizeEmits<typeof __VLS_2148.emit>;
}
{
const __VLS_2150 = __VLS_intrinsicElements["label"];
const __VLS_2151 = __VLS_elementAsFunctionalComponent(__VLS_2150);
const __VLS_2152 = __VLS_2151({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2150, typeof __VLS_2152> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2153 = __VLS_pickFunctionalComponentCtx(__VLS_2150, __VLS_2152)!;
let __VLS_2154!: __VLS_NormalizeEmits<typeof __VLS_2153.emit>;
(__VLS_2153.slots!).default;
}
(__VLS_2143.slots!).default;
}
(__VLS_2123.slots!).default;
}
{
const __VLS_2155 = __VLS_intrinsicElements["div"];
const __VLS_2156 = __VLS_elementAsFunctionalComponent(__VLS_2155);
const __VLS_2157 = __VLS_2156({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2155, typeof __VLS_2157> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2158 = __VLS_pickFunctionalComponentCtx(__VLS_2155, __VLS_2157)!;
let __VLS_2159!: __VLS_NormalizeEmits<typeof __VLS_2158.emit>;
{
const __VLS_2160 = __VLS_intrinsicElements["input"];
const __VLS_2161 = __VLS_elementAsFunctionalComponent(__VLS_2160);
const __VLS_2162 = __VLS_2161({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2160, typeof __VLS_2162> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______SF)"), style: ({}), });
const __VLS_2163 = __VLS_pickFunctionalComponentCtx(__VLS_2160, __VLS_2162)!;
let __VLS_2164!: __VLS_NormalizeEmits<typeof __VLS_2163.emit>;
}
(__VLS_2158.slots!).default;
}
{
const __VLS_2165 = __VLS_intrinsicElements["select"];
const __VLS_2166 = __VLS_elementAsFunctionalComponent(__VLS_2165);
const __VLS_2167 = __VLS_2166({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2165, typeof __VLS_2167> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2168 = __VLS_pickFunctionalComponentCtx(__VLS_2165, __VLS_2167)!;
let __VLS_2169!: __VLS_NormalizeEmits<typeof __VLS_2168.emit>;
{
const __VLS_2170 = __VLS_intrinsicElements["option"];
const __VLS_2171 = __VLS_elementAsFunctionalComponent(__VLS_2170);
const __VLS_2172 = __VLS_2171({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2170, typeof __VLS_2172> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2173 = __VLS_pickFunctionalComponentCtx(__VLS_2170, __VLS_2172)!;
let __VLS_2174!: __VLS_NormalizeEmits<typeof __VLS_2173.emit>;
(__VLS_2173.slots!).default;
}
{
const __VLS_2175 = __VLS_intrinsicElements["option"];
const __VLS_2176 = __VLS_elementAsFunctionalComponent(__VLS_2175);
const __VLS_2177 = __VLS_2176({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2175, typeof __VLS_2177> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2178 = __VLS_pickFunctionalComponentCtx(__VLS_2175, __VLS_2177)!;
let __VLS_2179!: __VLS_NormalizeEmits<typeof __VLS_2178.emit>;
(__VLS_2178.slots!).default;
}
(__VLS_2168.slots!).default;
}
(__VLS_2108.slots!).default;
}
(__VLS_2098.slots!).default;
}
{
const __VLS_2180 = __VLS_intrinsicElements["fieldset"];
const __VLS_2181 = __VLS_elementAsFunctionalComponent(__VLS_2180);
const __VLS_2182 = __VLS_2181({ ...{}, id: ("fieldset_31"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2181));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2180, typeof __VLS_2182> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_31"), style: ({}), });
const __VLS_2183 = __VLS_pickFunctionalComponentCtx(__VLS_2180, __VLS_2182)!;
let __VLS_2184!: __VLS_NormalizeEmits<typeof __VLS_2183.emit>;
{
const __VLS_2185 = __VLS_intrinsicElements["div"];
const __VLS_2186 = __VLS_elementAsFunctionalComponent(__VLS_2185);
const __VLS_2187 = __VLS_2186({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2186));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2185, typeof __VLS_2187> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2188 = __VLS_pickFunctionalComponentCtx(__VLS_2185, __VLS_2187)!;
let __VLS_2189!: __VLS_NormalizeEmits<typeof __VLS_2188.emit>;
{
const __VLS_2190 = __VLS_intrinsicElements["label"];
const __VLS_2191 = __VLS_elementAsFunctionalComponent(__VLS_2190);
const __VLS_2192 = __VLS_2191({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_2191));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2190, typeof __VLS_2192> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_2193 = __VLS_pickFunctionalComponentCtx(__VLS_2190, __VLS_2192)!;
let __VLS_2194!: __VLS_NormalizeEmits<typeof __VLS_2193.emit>;
(__VLS_2193.slots!).default;
}
(__VLS_2188.slots!).default;
}
{
const __VLS_2195 = __VLS_intrinsicElements["div"];
const __VLS_2196 = __VLS_elementAsFunctionalComponent(__VLS_2195);
const __VLS_2197 = __VLS_2196({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2195, typeof __VLS_2197> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2198 = __VLS_pickFunctionalComponentCtx(__VLS_2195, __VLS_2197)!;
let __VLS_2199!: __VLS_NormalizeEmits<typeof __VLS_2198.emit>;
{
const __VLS_2200 = __VLS_intrinsicElements["input"];
const __VLS_2201 = __VLS_elementAsFunctionalComponent(__VLS_2200);
const __VLS_2202 = __VLS_2201({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2201));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2200, typeof __VLS_2202> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______SF)"), style: ({}), });
const __VLS_2203 = __VLS_pickFunctionalComponentCtx(__VLS_2200, __VLS_2202)!;
let __VLS_2204!: __VLS_NormalizeEmits<typeof __VLS_2203.emit>;
}
(__VLS_2198.slots!).default;
}
{
const __VLS_2205 = __VLS_intrinsicElements["select"];
const __VLS_2206 = __VLS_elementAsFunctionalComponent(__VLS_2205);
const __VLS_2207 = __VLS_2206({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2205, typeof __VLS_2207> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2208 = __VLS_pickFunctionalComponentCtx(__VLS_2205, __VLS_2207)!;
let __VLS_2209!: __VLS_NormalizeEmits<typeof __VLS_2208.emit>;
{
const __VLS_2210 = __VLS_intrinsicElements["option"];
const __VLS_2211 = __VLS_elementAsFunctionalComponent(__VLS_2210);
const __VLS_2212 = __VLS_2211({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2210, typeof __VLS_2212> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2213 = __VLS_pickFunctionalComponentCtx(__VLS_2210, __VLS_2212)!;
let __VLS_2214!: __VLS_NormalizeEmits<typeof __VLS_2213.emit>;
(__VLS_2213.slots!).default;
}
{
const __VLS_2215 = __VLS_intrinsicElements["option"];
const __VLS_2216 = __VLS_elementAsFunctionalComponent(__VLS_2215);
const __VLS_2217 = __VLS_2216({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2215, typeof __VLS_2217> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2218 = __VLS_pickFunctionalComponentCtx(__VLS_2215, __VLS_2217)!;
let __VLS_2219!: __VLS_NormalizeEmits<typeof __VLS_2218.emit>;
(__VLS_2218.slots!).default;
}
(__VLS_2208.slots!).default;
}
(__VLS_2183.slots!).default;
}
{
const __VLS_2220 = __VLS_intrinsicElements["fieldset"];
const __VLS_2221 = __VLS_elementAsFunctionalComponent(__VLS_2220);
const __VLS_2222 = __VLS_2221({ ...{}, id: ("fieldset_32"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2220, typeof __VLS_2222> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_32"), style: ({}), });
const __VLS_2223 = __VLS_pickFunctionalComponentCtx(__VLS_2220, __VLS_2222)!;
let __VLS_2224!: __VLS_NormalizeEmits<typeof __VLS_2223.emit>;
{
const __VLS_2225 = __VLS_intrinsicElements["div"];
const __VLS_2226 = __VLS_elementAsFunctionalComponent(__VLS_2225);
const __VLS_2227 = __VLS_2226({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2225, typeof __VLS_2227> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2228 = __VLS_pickFunctionalComponentCtx(__VLS_2225, __VLS_2227)!;
let __VLS_2229!: __VLS_NormalizeEmits<typeof __VLS_2228.emit>;
{
const __VLS_2230 = __VLS_intrinsicElements["label"];
const __VLS_2231 = __VLS_elementAsFunctionalComponent(__VLS_2230);
const __VLS_2232 = __VLS_2231({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_2231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2230, typeof __VLS_2232> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_2233 = __VLS_pickFunctionalComponentCtx(__VLS_2230, __VLS_2232)!;
let __VLS_2234!: __VLS_NormalizeEmits<typeof __VLS_2233.emit>;
(__VLS_2233.slots!).default;
}
(__VLS_2228.slots!).default;
}
{
const __VLS_2235 = __VLS_intrinsicElements["div"];
const __VLS_2236 = __VLS_elementAsFunctionalComponent(__VLS_2235);
const __VLS_2237 = __VLS_2236({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2235, typeof __VLS_2237> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2238 = __VLS_pickFunctionalComponentCtx(__VLS_2235, __VLS_2237)!;
let __VLS_2239!: __VLS_NormalizeEmits<typeof __VLS_2238.emit>;
{
const __VLS_2240 = __VLS_intrinsicElements["input"];
const __VLS_2241 = __VLS_elementAsFunctionalComponent(__VLS_2240);
const __VLS_2242 = __VLS_2241({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2241));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2240, typeof __VLS_2242> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______SF)"), style: ({}), });
const __VLS_2243 = __VLS_pickFunctionalComponentCtx(__VLS_2240, __VLS_2242)!;
let __VLS_2244!: __VLS_NormalizeEmits<typeof __VLS_2243.emit>;
}
(__VLS_2238.slots!).default;
}
{
const __VLS_2245 = __VLS_intrinsicElements["select"];
const __VLS_2246 = __VLS_elementAsFunctionalComponent(__VLS_2245);
const __VLS_2247 = __VLS_2246({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), }, ...__VLS_functionalComponentArgsRest(__VLS_2246));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2245, typeof __VLS_2247> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), });
const __VLS_2248 = __VLS_pickFunctionalComponentCtx(__VLS_2245, __VLS_2247)!;
let __VLS_2249!: __VLS_NormalizeEmits<typeof __VLS_2248.emit>;
{
const __VLS_2250 = __VLS_intrinsicElements["option"];
const __VLS_2251 = __VLS_elementAsFunctionalComponent(__VLS_2250);
const __VLS_2252 = __VLS_2251({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2250, typeof __VLS_2252> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2253 = __VLS_pickFunctionalComponentCtx(__VLS_2250, __VLS_2252)!;
let __VLS_2254!: __VLS_NormalizeEmits<typeof __VLS_2253.emit>;
(__VLS_2253.slots!).default;
}
{
const __VLS_2255 = __VLS_intrinsicElements["option"];
const __VLS_2256 = __VLS_elementAsFunctionalComponent(__VLS_2255);
const __VLS_2257 = __VLS_2256({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2255, typeof __VLS_2257> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2258 = __VLS_pickFunctionalComponentCtx(__VLS_2255, __VLS_2257)!;
let __VLS_2259!: __VLS_NormalizeEmits<typeof __VLS_2258.emit>;
(__VLS_2258.slots!).default;
}
(__VLS_2248.slots!).default;
}
(__VLS_2223.slots!).default;
}
{
const __VLS_2260 = __VLS_intrinsicElements["fieldset"];
const __VLS_2261 = __VLS_elementAsFunctionalComponent(__VLS_2260);
const __VLS_2262 = __VLS_2261({ ...{}, id: ("fieldset_33"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2260, typeof __VLS_2262> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_33"), style: ({}), });
const __VLS_2263 = __VLS_pickFunctionalComponentCtx(__VLS_2260, __VLS_2262)!;
let __VLS_2264!: __VLS_NormalizeEmits<typeof __VLS_2263.emit>;
{
const __VLS_2265 = __VLS_intrinsicElements["div"];
const __VLS_2266 = __VLS_elementAsFunctionalComponent(__VLS_2265);
const __VLS_2267 = __VLS_2266({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2265, typeof __VLS_2267> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2268 = __VLS_pickFunctionalComponentCtx(__VLS_2265, __VLS_2267)!;
let __VLS_2269!: __VLS_NormalizeEmits<typeof __VLS_2268.emit>;
{
const __VLS_2270 = __VLS_intrinsicElements["label"];
const __VLS_2271 = __VLS_elementAsFunctionalComponent(__VLS_2270);
const __VLS_2272 = __VLS_2271({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), }, ...__VLS_functionalComponentArgsRest(__VLS_2271));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2270, typeof __VLS_2272> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("airMover"), });
const __VLS_2273 = __VLS_pickFunctionalComponentCtx(__VLS_2270, __VLS_2272)!;
let __VLS_2274!: __VLS_NormalizeEmits<typeof __VLS_2273.emit>;
(__VLS_2273.slots!).default;
}
(__VLS_2268.slots!).default;
}
{
const __VLS_2275 = __VLS_intrinsicElements["div"];
const __VLS_2276 = __VLS_elementAsFunctionalComponent(__VLS_2275);
const __VLS_2277 = __VLS_2276({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2276));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2275, typeof __VLS_2277> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2278 = __VLS_pickFunctionalComponentCtx(__VLS_2275, __VLS_2277)!;
let __VLS_2279!: __VLS_NormalizeEmits<typeof __VLS_2278.emit>;
{
const __VLS_2280 = __VLS_intrinsicElements["input"];
const __VLS_2281 = __VLS_elementAsFunctionalComponent(__VLS_2280);
const __VLS_2282 = __VLS_2281({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(_________EA)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2281));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2280, typeof __VLS_2282> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(_________EA)"), style: ({}), });
const __VLS_2283 = __VLS_pickFunctionalComponentCtx(__VLS_2280, __VLS_2282)!;
let __VLS_2284!: __VLS_NormalizeEmits<typeof __VLS_2283.emit>;
}
(__VLS_2278.slots!).default;
}
{
const __VLS_2285 = __VLS_intrinsicElements["select"];
const __VLS_2286 = __VLS_elementAsFunctionalComponent(__VLS_2285);
const __VLS_2287 = __VLS_2286({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2286));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2285, typeof __VLS_2287> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2288 = __VLS_pickFunctionalComponentCtx(__VLS_2285, __VLS_2287)!;
let __VLS_2289!: __VLS_NormalizeEmits<typeof __VLS_2288.emit>;
{
const __VLS_2290 = __VLS_intrinsicElements["option"];
const __VLS_2291 = __VLS_elementAsFunctionalComponent(__VLS_2290);
const __VLS_2292 = __VLS_2291({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2291));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2290, typeof __VLS_2292> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2293 = __VLS_pickFunctionalComponentCtx(__VLS_2290, __VLS_2292)!;
let __VLS_2294!: __VLS_NormalizeEmits<typeof __VLS_2293.emit>;
(__VLS_2293.slots!).default;
}
{
const __VLS_2295 = __VLS_intrinsicElements["option"];
const __VLS_2296 = __VLS_elementAsFunctionalComponent(__VLS_2295);
const __VLS_2297 = __VLS_2296({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2296));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2295, typeof __VLS_2297> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2298 = __VLS_pickFunctionalComponentCtx(__VLS_2295, __VLS_2297)!;
let __VLS_2299!: __VLS_NormalizeEmits<typeof __VLS_2298.emit>;
(__VLS_2298.slots!).default;
}
(__VLS_2288.slots!).default;
}
(__VLS_2263.slots!).default;
}
{
const __VLS_2300 = __VLS_intrinsicElements["fieldset"];
const __VLS_2301 = __VLS_elementAsFunctionalComponent(__VLS_2300);
const __VLS_2302 = __VLS_2301({ ...{}, id: ("fieldset_34"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2301));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2300, typeof __VLS_2302> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_34"), style: ({}), });
const __VLS_2303 = __VLS_pickFunctionalComponentCtx(__VLS_2300, __VLS_2302)!;
let __VLS_2304!: __VLS_NormalizeEmits<typeof __VLS_2303.emit>;
{
const __VLS_2305 = __VLS_intrinsicElements["h1"];
const __VLS_2306 = __VLS_elementAsFunctionalComponent(__VLS_2305);
const __VLS_2307 = __VLS_2306({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_2306));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2305, typeof __VLS_2307> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_2308 = __VLS_pickFunctionalComponentCtx(__VLS_2305, __VLS_2307)!;
let __VLS_2309!: __VLS_NormalizeEmits<typeof __VLS_2308.emit>;
(__VLS_2308.slots!).default;
}
{
const __VLS_2310 = __VLS_intrinsicElements["fieldset"];
const __VLS_2311 = __VLS_elementAsFunctionalComponent(__VLS_2310);
const __VLS_2312 = __VLS_2311({ ...{}, id: ("fieldset_35"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2311));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2310, typeof __VLS_2312> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_35"), style: ({}), });
const __VLS_2313 = __VLS_pickFunctionalComponentCtx(__VLS_2310, __VLS_2312)!;
let __VLS_2314!: __VLS_NormalizeEmits<typeof __VLS_2313.emit>;
{
const __VLS_2315 = __VLS_intrinsicElements["label"];
const __VLS_2316 = __VLS_elementAsFunctionalComponent(__VLS_2315);
const __VLS_2317 = __VLS_2316({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2316));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2315, typeof __VLS_2317> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2318 = __VLS_pickFunctionalComponentCtx(__VLS_2315, __VLS_2317)!;
let __VLS_2319!: __VLS_NormalizeEmits<typeof __VLS_2318.emit>;
(__VLS_2318.slots!).default;
}
{
const __VLS_2320 = __VLS_intrinsicElements["select"];
const __VLS_2321 = __VLS_elementAsFunctionalComponent(__VLS_2320);
const __VLS_2322 = __VLS_2321({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2321));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2320, typeof __VLS_2322> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2323 = __VLS_pickFunctionalComponentCtx(__VLS_2320, __VLS_2322)!;
let __VLS_2324!: __VLS_NormalizeEmits<typeof __VLS_2323.emit>;
{
const __VLS_2325 = __VLS_intrinsicElements["option"];
const __VLS_2326 = __VLS_elementAsFunctionalComponent(__VLS_2325);
const __VLS_2327 = __VLS_2326({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2326));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2325, typeof __VLS_2327> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2328 = __VLS_pickFunctionalComponentCtx(__VLS_2325, __VLS_2327)!;
let __VLS_2329!: __VLS_NormalizeEmits<typeof __VLS_2328.emit>;
(__VLS_2328.slots!).default;
}
{
const __VLS_2330 = __VLS_intrinsicElements["option"];
const __VLS_2331 = __VLS_elementAsFunctionalComponent(__VLS_2330);
const __VLS_2332 = __VLS_2331({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2331));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2330, typeof __VLS_2332> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2333 = __VLS_pickFunctionalComponentCtx(__VLS_2330, __VLS_2332)!;
let __VLS_2334!: __VLS_NormalizeEmits<typeof __VLS_2333.emit>;
(__VLS_2333.slots!).default;
}
(__VLS_2323.slots!).default;
}
{
const __VLS_2335 = __VLS_intrinsicElements["div"];
const __VLS_2336 = __VLS_elementAsFunctionalComponent(__VLS_2335);
const __VLS_2337 = __VLS_2336({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2336));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2335, typeof __VLS_2337> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2338 = __VLS_pickFunctionalComponentCtx(__VLS_2335, __VLS_2337)!;
let __VLS_2339!: __VLS_NormalizeEmits<typeof __VLS_2338.emit>;
{
const __VLS_2340 = __VLS_intrinsicElements["input"];
const __VLS_2341 = __VLS_elementAsFunctionalComponent(__VLS_2340);
const __VLS_2342 = __VLS_2341({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2341));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2340, typeof __VLS_2342> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), });
const __VLS_2343 = __VLS_pickFunctionalComponentCtx(__VLS_2340, __VLS_2342)!;
let __VLS_2344!: __VLS_NormalizeEmits<typeof __VLS_2343.emit>;
}
(__VLS_2338.slots!).default;
}
{
const __VLS_2345 = __VLS_intrinsicElements["div"];
const __VLS_2346 = __VLS_elementAsFunctionalComponent(__VLS_2345);
const __VLS_2347 = __VLS_2346({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2346));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2345, typeof __VLS_2347> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_2348 = __VLS_pickFunctionalComponentCtx(__VLS_2345, __VLS_2347)!;
let __VLS_2349!: __VLS_NormalizeEmits<typeof __VLS_2348.emit>;
{
const __VLS_2350 = __VLS_intrinsicElements["div"];
const __VLS_2351 = __VLS_elementAsFunctionalComponent(__VLS_2350);
const __VLS_2352 = __VLS_2351({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2351));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2350, typeof __VLS_2352> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2353 = __VLS_pickFunctionalComponentCtx(__VLS_2350, __VLS_2352)!;
let __VLS_2354!: __VLS_NormalizeEmits<typeof __VLS_2353.emit>;
{
const __VLS_2355 = __VLS_intrinsicElements["input"];
const __VLS_2356 = __VLS_elementAsFunctionalComponent(__VLS_2355);
const __VLS_2357 = __VLS_2356({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2356));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2355, typeof __VLS_2357> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2358 = __VLS_pickFunctionalComponentCtx(__VLS_2355, __VLS_2357)!;
let __VLS_2359!: __VLS_NormalizeEmits<typeof __VLS_2358.emit>;
}
{
const __VLS_2360 = __VLS_intrinsicElements["label"];
const __VLS_2361 = __VLS_elementAsFunctionalComponent(__VLS_2360);
const __VLS_2362 = __VLS_2361({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2361));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2360, typeof __VLS_2362> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2363 = __VLS_pickFunctionalComponentCtx(__VLS_2360, __VLS_2362)!;
let __VLS_2364!: __VLS_NormalizeEmits<typeof __VLS_2363.emit>;
(__VLS_2363.slots!).default;
}
(__VLS_2353.slots!).default;
}
{
const __VLS_2365 = __VLS_intrinsicElements["div"];
const __VLS_2366 = __VLS_elementAsFunctionalComponent(__VLS_2365);
const __VLS_2367 = __VLS_2366({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2366));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2365, typeof __VLS_2367> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2368 = __VLS_pickFunctionalComponentCtx(__VLS_2365, __VLS_2367)!;
let __VLS_2369!: __VLS_NormalizeEmits<typeof __VLS_2368.emit>;
{
const __VLS_2370 = __VLS_intrinsicElements["input"];
const __VLS_2371 = __VLS_elementAsFunctionalComponent(__VLS_2370);
const __VLS_2372 = __VLS_2371({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2371));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2370, typeof __VLS_2372> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2373 = __VLS_pickFunctionalComponentCtx(__VLS_2370, __VLS_2372)!;
let __VLS_2374!: __VLS_NormalizeEmits<typeof __VLS_2373.emit>;
}
{
const __VLS_2375 = __VLS_intrinsicElements["label"];
const __VLS_2376 = __VLS_elementAsFunctionalComponent(__VLS_2375);
const __VLS_2377 = __VLS_2376({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2376));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2375, typeof __VLS_2377> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2378 = __VLS_pickFunctionalComponentCtx(__VLS_2375, __VLS_2377)!;
let __VLS_2379!: __VLS_NormalizeEmits<typeof __VLS_2378.emit>;
(__VLS_2378.slots!).default;
}
(__VLS_2368.slots!).default;
}
(__VLS_2348.slots!).default;
}
(__VLS_2313.slots!).default;
}
(__VLS_2303.slots!).default;
}
{
const __VLS_2380 = __VLS_intrinsicElements["fieldset"];
const __VLS_2381 = __VLS_elementAsFunctionalComponent(__VLS_2380);
const __VLS_2382 = __VLS_2381({ ...{}, id: ("fieldset_36"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2381));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2380, typeof __VLS_2382> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_36"), style: ({}), });
const __VLS_2383 = __VLS_pickFunctionalComponentCtx(__VLS_2380, __VLS_2382)!;
let __VLS_2384!: __VLS_NormalizeEmits<typeof __VLS_2383.emit>;
{
const __VLS_2385 = __VLS_intrinsicElements["label"];
const __VLS_2386 = __VLS_elementAsFunctionalComponent(__VLS_2385);
const __VLS_2387 = __VLS_2386({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2386));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2385, typeof __VLS_2387> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2388 = __VLS_pickFunctionalComponentCtx(__VLS_2385, __VLS_2387)!;
let __VLS_2389!: __VLS_NormalizeEmits<typeof __VLS_2388.emit>;
(__VLS_2388.slots!).default;
}
{
const __VLS_2390 = __VLS_intrinsicElements["select"];
const __VLS_2391 = __VLS_elementAsFunctionalComponent(__VLS_2390);
const __VLS_2392 = __VLS_2391({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2391));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2390, typeof __VLS_2392> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2393 = __VLS_pickFunctionalComponentCtx(__VLS_2390, __VLS_2392)!;
let __VLS_2394!: __VLS_NormalizeEmits<typeof __VLS_2393.emit>;
{
const __VLS_2395 = __VLS_intrinsicElements["option"];
const __VLS_2396 = __VLS_elementAsFunctionalComponent(__VLS_2395);
const __VLS_2397 = __VLS_2396({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2396));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2395, typeof __VLS_2397> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2398 = __VLS_pickFunctionalComponentCtx(__VLS_2395, __VLS_2397)!;
let __VLS_2399!: __VLS_NormalizeEmits<typeof __VLS_2398.emit>;
(__VLS_2398.slots!).default;
}
{
const __VLS_2400 = __VLS_intrinsicElements["option"];
const __VLS_2401 = __VLS_elementAsFunctionalComponent(__VLS_2400);
const __VLS_2402 = __VLS_2401({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2401));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2400, typeof __VLS_2402> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2403 = __VLS_pickFunctionalComponentCtx(__VLS_2400, __VLS_2402)!;
let __VLS_2404!: __VLS_NormalizeEmits<typeof __VLS_2403.emit>;
(__VLS_2403.slots!).default;
}
(__VLS_2393.slots!).default;
}
{
const __VLS_2405 = __VLS_intrinsicElements["div"];
const __VLS_2406 = __VLS_elementAsFunctionalComponent(__VLS_2405);
const __VLS_2407 = __VLS_2406({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2406));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2405, typeof __VLS_2407> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2408 = __VLS_pickFunctionalComponentCtx(__VLS_2405, __VLS_2407)!;
let __VLS_2409!: __VLS_NormalizeEmits<typeof __VLS_2408.emit>;
{
const __VLS_2410 = __VLS_intrinsicElements["input"];
const __VLS_2411 = __VLS_elementAsFunctionalComponent(__VLS_2410);
const __VLS_2412 = __VLS_2411({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2411));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2410, typeof __VLS_2412> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), });
const __VLS_2413 = __VLS_pickFunctionalComponentCtx(__VLS_2410, __VLS_2412)!;
let __VLS_2414!: __VLS_NormalizeEmits<typeof __VLS_2413.emit>;
}
(__VLS_2408.slots!).default;
}
{
const __VLS_2415 = __VLS_intrinsicElements["div"];
const __VLS_2416 = __VLS_elementAsFunctionalComponent(__VLS_2415);
const __VLS_2417 = __VLS_2416({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2416));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2415, typeof __VLS_2417> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_2418 = __VLS_pickFunctionalComponentCtx(__VLS_2415, __VLS_2417)!;
let __VLS_2419!: __VLS_NormalizeEmits<typeof __VLS_2418.emit>;
{
const __VLS_2420 = __VLS_intrinsicElements["div"];
const __VLS_2421 = __VLS_elementAsFunctionalComponent(__VLS_2420);
const __VLS_2422 = __VLS_2421({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2421));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2420, typeof __VLS_2422> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2423 = __VLS_pickFunctionalComponentCtx(__VLS_2420, __VLS_2422)!;
let __VLS_2424!: __VLS_NormalizeEmits<typeof __VLS_2423.emit>;
{
const __VLS_2425 = __VLS_intrinsicElements["input"];
const __VLS_2426 = __VLS_elementAsFunctionalComponent(__VLS_2425);
const __VLS_2427 = __VLS_2426({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2426));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2425, typeof __VLS_2427> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2428 = __VLS_pickFunctionalComponentCtx(__VLS_2425, __VLS_2427)!;
let __VLS_2429!: __VLS_NormalizeEmits<typeof __VLS_2428.emit>;
}
{
const __VLS_2430 = __VLS_intrinsicElements["label"];
const __VLS_2431 = __VLS_elementAsFunctionalComponent(__VLS_2430);
const __VLS_2432 = __VLS_2431({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2431));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2430, typeof __VLS_2432> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2433 = __VLS_pickFunctionalComponentCtx(__VLS_2430, __VLS_2432)!;
let __VLS_2434!: __VLS_NormalizeEmits<typeof __VLS_2433.emit>;
(__VLS_2433.slots!).default;
}
(__VLS_2423.slots!).default;
}
{
const __VLS_2435 = __VLS_intrinsicElements["div"];
const __VLS_2436 = __VLS_elementAsFunctionalComponent(__VLS_2435);
const __VLS_2437 = __VLS_2436({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2436));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2435, typeof __VLS_2437> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2438 = __VLS_pickFunctionalComponentCtx(__VLS_2435, __VLS_2437)!;
let __VLS_2439!: __VLS_NormalizeEmits<typeof __VLS_2438.emit>;
{
const __VLS_2440 = __VLS_intrinsicElements["input"];
const __VLS_2441 = __VLS_elementAsFunctionalComponent(__VLS_2440);
const __VLS_2442 = __VLS_2441({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2441));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2440, typeof __VLS_2442> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2443 = __VLS_pickFunctionalComponentCtx(__VLS_2440, __VLS_2442)!;
let __VLS_2444!: __VLS_NormalizeEmits<typeof __VLS_2443.emit>;
}
{
const __VLS_2445 = __VLS_intrinsicElements["label"];
const __VLS_2446 = __VLS_elementAsFunctionalComponent(__VLS_2445);
const __VLS_2447 = __VLS_2446({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2446));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2445, typeof __VLS_2447> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2448 = __VLS_pickFunctionalComponentCtx(__VLS_2445, __VLS_2447)!;
let __VLS_2449!: __VLS_NormalizeEmits<typeof __VLS_2448.emit>;
(__VLS_2448.slots!).default;
}
(__VLS_2438.slots!).default;
}
(__VLS_2418.slots!).default;
}
(__VLS_2383.slots!).default;
}
{
const __VLS_2450 = __VLS_intrinsicElements["fieldset"];
const __VLS_2451 = __VLS_elementAsFunctionalComponent(__VLS_2450);
const __VLS_2452 = __VLS_2451({ ...{}, id: ("fieldset_37"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2451));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2450, typeof __VLS_2452> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_37"), style: ({}), });
const __VLS_2453 = __VLS_pickFunctionalComponentCtx(__VLS_2450, __VLS_2452)!;
let __VLS_2454!: __VLS_NormalizeEmits<typeof __VLS_2453.emit>;
{
const __VLS_2455 = __VLS_intrinsicElements["label"];
const __VLS_2456 = __VLS_elementAsFunctionalComponent(__VLS_2455);
const __VLS_2457 = __VLS_2456({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2456));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2455, typeof __VLS_2457> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2458 = __VLS_pickFunctionalComponentCtx(__VLS_2455, __VLS_2457)!;
let __VLS_2459!: __VLS_NormalizeEmits<typeof __VLS_2458.emit>;
(__VLS_2458.slots!).default;
}
{
const __VLS_2460 = __VLS_intrinsicElements["select"];
const __VLS_2461 = __VLS_elementAsFunctionalComponent(__VLS_2460);
const __VLS_2462 = __VLS_2461({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2461));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2460, typeof __VLS_2462> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2463 = __VLS_pickFunctionalComponentCtx(__VLS_2460, __VLS_2462)!;
let __VLS_2464!: __VLS_NormalizeEmits<typeof __VLS_2463.emit>;
{
const __VLS_2465 = __VLS_intrinsicElements["option"];
const __VLS_2466 = __VLS_elementAsFunctionalComponent(__VLS_2465);
const __VLS_2467 = __VLS_2466({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2466));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2465, typeof __VLS_2467> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2468 = __VLS_pickFunctionalComponentCtx(__VLS_2465, __VLS_2467)!;
let __VLS_2469!: __VLS_NormalizeEmits<typeof __VLS_2468.emit>;
(__VLS_2468.slots!).default;
}
{
const __VLS_2470 = __VLS_intrinsicElements["option"];
const __VLS_2471 = __VLS_elementAsFunctionalComponent(__VLS_2470);
const __VLS_2472 = __VLS_2471({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2471));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2470, typeof __VLS_2472> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2473 = __VLS_pickFunctionalComponentCtx(__VLS_2470, __VLS_2472)!;
let __VLS_2474!: __VLS_NormalizeEmits<typeof __VLS_2473.emit>;
(__VLS_2473.slots!).default;
}
(__VLS_2463.slots!).default;
}
{
const __VLS_2475 = __VLS_intrinsicElements["div"];
const __VLS_2476 = __VLS_elementAsFunctionalComponent(__VLS_2475);
const __VLS_2477 = __VLS_2476({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2476));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2475, typeof __VLS_2477> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2478 = __VLS_pickFunctionalComponentCtx(__VLS_2475, __VLS_2477)!;
let __VLS_2479!: __VLS_NormalizeEmits<typeof __VLS_2478.emit>;
{
const __VLS_2480 = __VLS_intrinsicElements["input"];
const __VLS_2481 = __VLS_elementAsFunctionalComponent(__VLS_2480);
const __VLS_2482 = __VLS_2481({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2481));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2480, typeof __VLS_2482> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), });
const __VLS_2483 = __VLS_pickFunctionalComponentCtx(__VLS_2480, __VLS_2482)!;
let __VLS_2484!: __VLS_NormalizeEmits<typeof __VLS_2483.emit>;
}
(__VLS_2478.slots!).default;
}
{
const __VLS_2485 = __VLS_intrinsicElements["div"];
const __VLS_2486 = __VLS_elementAsFunctionalComponent(__VLS_2485);
const __VLS_2487 = __VLS_2486({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2486));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2485, typeof __VLS_2487> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_2488 = __VLS_pickFunctionalComponentCtx(__VLS_2485, __VLS_2487)!;
let __VLS_2489!: __VLS_NormalizeEmits<typeof __VLS_2488.emit>;
{
const __VLS_2490 = __VLS_intrinsicElements["div"];
const __VLS_2491 = __VLS_elementAsFunctionalComponent(__VLS_2490);
const __VLS_2492 = __VLS_2491({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2491));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2490, typeof __VLS_2492> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2493 = __VLS_pickFunctionalComponentCtx(__VLS_2490, __VLS_2492)!;
let __VLS_2494!: __VLS_NormalizeEmits<typeof __VLS_2493.emit>;
{
const __VLS_2495 = __VLS_intrinsicElements["input"];
const __VLS_2496 = __VLS_elementAsFunctionalComponent(__VLS_2495);
const __VLS_2497 = __VLS_2496({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2496));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2495, typeof __VLS_2497> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2498 = __VLS_pickFunctionalComponentCtx(__VLS_2495, __VLS_2497)!;
let __VLS_2499!: __VLS_NormalizeEmits<typeof __VLS_2498.emit>;
}
{
const __VLS_2500 = __VLS_intrinsicElements["label"];
const __VLS_2501 = __VLS_elementAsFunctionalComponent(__VLS_2500);
const __VLS_2502 = __VLS_2501({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2501));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2500, typeof __VLS_2502> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2503 = __VLS_pickFunctionalComponentCtx(__VLS_2500, __VLS_2502)!;
let __VLS_2504!: __VLS_NormalizeEmits<typeof __VLS_2503.emit>;
(__VLS_2503.slots!).default;
}
(__VLS_2493.slots!).default;
}
{
const __VLS_2505 = __VLS_intrinsicElements["div"];
const __VLS_2506 = __VLS_elementAsFunctionalComponent(__VLS_2505);
const __VLS_2507 = __VLS_2506({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2506));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2505, typeof __VLS_2507> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2508 = __VLS_pickFunctionalComponentCtx(__VLS_2505, __VLS_2507)!;
let __VLS_2509!: __VLS_NormalizeEmits<typeof __VLS_2508.emit>;
{
const __VLS_2510 = __VLS_intrinsicElements["input"];
const __VLS_2511 = __VLS_elementAsFunctionalComponent(__VLS_2510);
const __VLS_2512 = __VLS_2511({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2511));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2510, typeof __VLS_2512> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2513 = __VLS_pickFunctionalComponentCtx(__VLS_2510, __VLS_2512)!;
let __VLS_2514!: __VLS_NormalizeEmits<typeof __VLS_2513.emit>;
}
{
const __VLS_2515 = __VLS_intrinsicElements["label"];
const __VLS_2516 = __VLS_elementAsFunctionalComponent(__VLS_2515);
const __VLS_2517 = __VLS_2516({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2516));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2515, typeof __VLS_2517> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2518 = __VLS_pickFunctionalComponentCtx(__VLS_2515, __VLS_2517)!;
let __VLS_2519!: __VLS_NormalizeEmits<typeof __VLS_2518.emit>;
(__VLS_2518.slots!).default;
}
(__VLS_2508.slots!).default;
}
(__VLS_2488.slots!).default;
}
(__VLS_2453.slots!).default;
}
{
const __VLS_2520 = __VLS_intrinsicElements["fieldset"];
const __VLS_2521 = __VLS_elementAsFunctionalComponent(__VLS_2520);
const __VLS_2522 = __VLS_2521({ ...{}, id: ("fieldset_38"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2521));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2520, typeof __VLS_2522> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_38"), style: ({}), });
const __VLS_2523 = __VLS_pickFunctionalComponentCtx(__VLS_2520, __VLS_2522)!;
let __VLS_2524!: __VLS_NormalizeEmits<typeof __VLS_2523.emit>;
{
const __VLS_2525 = __VLS_intrinsicElements["label"];
const __VLS_2526 = __VLS_elementAsFunctionalComponent(__VLS_2525);
const __VLS_2527 = __VLS_2526({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2526));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2525, typeof __VLS_2527> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2528 = __VLS_pickFunctionalComponentCtx(__VLS_2525, __VLS_2527)!;
let __VLS_2529!: __VLS_NormalizeEmits<typeof __VLS_2528.emit>;
(__VLS_2528.slots!).default;
}
{
const __VLS_2530 = __VLS_intrinsicElements["select"];
const __VLS_2531 = __VLS_elementAsFunctionalComponent(__VLS_2530);
const __VLS_2532 = __VLS_2531({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2531));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2530, typeof __VLS_2532> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2533 = __VLS_pickFunctionalComponentCtx(__VLS_2530, __VLS_2532)!;
let __VLS_2534!: __VLS_NormalizeEmits<typeof __VLS_2533.emit>;
{
const __VLS_2535 = __VLS_intrinsicElements["option"];
const __VLS_2536 = __VLS_elementAsFunctionalComponent(__VLS_2535);
const __VLS_2537 = __VLS_2536({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2536));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2535, typeof __VLS_2537> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2538 = __VLS_pickFunctionalComponentCtx(__VLS_2535, __VLS_2537)!;
let __VLS_2539!: __VLS_NormalizeEmits<typeof __VLS_2538.emit>;
(__VLS_2538.slots!).default;
}
{
const __VLS_2540 = __VLS_intrinsicElements["option"];
const __VLS_2541 = __VLS_elementAsFunctionalComponent(__VLS_2540);
const __VLS_2542 = __VLS_2541({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2541));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2540, typeof __VLS_2542> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2543 = __VLS_pickFunctionalComponentCtx(__VLS_2540, __VLS_2542)!;
let __VLS_2544!: __VLS_NormalizeEmits<typeof __VLS_2543.emit>;
(__VLS_2543.slots!).default;
}
(__VLS_2533.slots!).default;
}
{
const __VLS_2545 = __VLS_intrinsicElements["div"];
const __VLS_2546 = __VLS_elementAsFunctionalComponent(__VLS_2545);
const __VLS_2547 = __VLS_2546({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2546));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2545, typeof __VLS_2547> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2548 = __VLS_pickFunctionalComponentCtx(__VLS_2545, __VLS_2547)!;
let __VLS_2549!: __VLS_NormalizeEmits<typeof __VLS_2548.emit>;
{
const __VLS_2550 = __VLS_intrinsicElements["input"];
const __VLS_2551 = __VLS_elementAsFunctionalComponent(__VLS_2550);
const __VLS_2552 = __VLS_2551({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2551));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2550, typeof __VLS_2552> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), });
const __VLS_2553 = __VLS_pickFunctionalComponentCtx(__VLS_2550, __VLS_2552)!;
let __VLS_2554!: __VLS_NormalizeEmits<typeof __VLS_2553.emit>;
}
(__VLS_2548.slots!).default;
}
{
const __VLS_2555 = __VLS_intrinsicElements["div"];
const __VLS_2556 = __VLS_elementAsFunctionalComponent(__VLS_2555);
const __VLS_2557 = __VLS_2556({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2556));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2555, typeof __VLS_2557> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_2558 = __VLS_pickFunctionalComponentCtx(__VLS_2555, __VLS_2557)!;
let __VLS_2559!: __VLS_NormalizeEmits<typeof __VLS_2558.emit>;
{
const __VLS_2560 = __VLS_intrinsicElements["div"];
const __VLS_2561 = __VLS_elementAsFunctionalComponent(__VLS_2560);
const __VLS_2562 = __VLS_2561({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2561));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2560, typeof __VLS_2562> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2563 = __VLS_pickFunctionalComponentCtx(__VLS_2560, __VLS_2562)!;
let __VLS_2564!: __VLS_NormalizeEmits<typeof __VLS_2563.emit>;
{
const __VLS_2565 = __VLS_intrinsicElements["input"];
const __VLS_2566 = __VLS_elementAsFunctionalComponent(__VLS_2565);
const __VLS_2567 = __VLS_2566({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2566));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2565, typeof __VLS_2567> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2568 = __VLS_pickFunctionalComponentCtx(__VLS_2565, __VLS_2567)!;
let __VLS_2569!: __VLS_NormalizeEmits<typeof __VLS_2568.emit>;
}
{
const __VLS_2570 = __VLS_intrinsicElements["label"];
const __VLS_2571 = __VLS_elementAsFunctionalComponent(__VLS_2570);
const __VLS_2572 = __VLS_2571({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2571));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2570, typeof __VLS_2572> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2573 = __VLS_pickFunctionalComponentCtx(__VLS_2570, __VLS_2572)!;
let __VLS_2574!: __VLS_NormalizeEmits<typeof __VLS_2573.emit>;
(__VLS_2573.slots!).default;
}
(__VLS_2563.slots!).default;
}
{
const __VLS_2575 = __VLS_intrinsicElements["div"];
const __VLS_2576 = __VLS_elementAsFunctionalComponent(__VLS_2575);
const __VLS_2577 = __VLS_2576({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2576));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2575, typeof __VLS_2577> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2578 = __VLS_pickFunctionalComponentCtx(__VLS_2575, __VLS_2577)!;
let __VLS_2579!: __VLS_NormalizeEmits<typeof __VLS_2578.emit>;
{
const __VLS_2580 = __VLS_intrinsicElements["input"];
const __VLS_2581 = __VLS_elementAsFunctionalComponent(__VLS_2580);
const __VLS_2582 = __VLS_2581({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2581));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2580, typeof __VLS_2582> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2583 = __VLS_pickFunctionalComponentCtx(__VLS_2580, __VLS_2582)!;
let __VLS_2584!: __VLS_NormalizeEmits<typeof __VLS_2583.emit>;
}
{
const __VLS_2585 = __VLS_intrinsicElements["label"];
const __VLS_2586 = __VLS_elementAsFunctionalComponent(__VLS_2585);
const __VLS_2587 = __VLS_2586({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2586));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2585, typeof __VLS_2587> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2588 = __VLS_pickFunctionalComponentCtx(__VLS_2585, __VLS_2587)!;
let __VLS_2589!: __VLS_NormalizeEmits<typeof __VLS_2588.emit>;
(__VLS_2588.slots!).default;
}
(__VLS_2578.slots!).default;
}
(__VLS_2558.slots!).default;
}
(__VLS_2523.slots!).default;
}
{
const __VLS_2590 = __VLS_intrinsicElements["fieldset"];
const __VLS_2591 = __VLS_elementAsFunctionalComponent(__VLS_2590);
const __VLS_2592 = __VLS_2591({ ...{}, id: ("fieldset_39"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2591));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2590, typeof __VLS_2592> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_39"), style: ({}), });
const __VLS_2593 = __VLS_pickFunctionalComponentCtx(__VLS_2590, __VLS_2592)!;
let __VLS_2594!: __VLS_NormalizeEmits<typeof __VLS_2593.emit>;
{
const __VLS_2595 = __VLS_intrinsicElements["label"];
const __VLS_2596 = __VLS_elementAsFunctionalComponent(__VLS_2595);
const __VLS_2597 = __VLS_2596({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2596));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2595, typeof __VLS_2597> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2598 = __VLS_pickFunctionalComponentCtx(__VLS_2595, __VLS_2597)!;
let __VLS_2599!: __VLS_NormalizeEmits<typeof __VLS_2598.emit>;
(__VLS_2598.slots!).default;
}
{
const __VLS_2600 = __VLS_intrinsicElements["select"];
const __VLS_2601 = __VLS_elementAsFunctionalComponent(__VLS_2600);
const __VLS_2602 = __VLS_2601({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2601));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2600, typeof __VLS_2602> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2603 = __VLS_pickFunctionalComponentCtx(__VLS_2600, __VLS_2602)!;
let __VLS_2604!: __VLS_NormalizeEmits<typeof __VLS_2603.emit>;
{
const __VLS_2605 = __VLS_intrinsicElements["option"];
const __VLS_2606 = __VLS_elementAsFunctionalComponent(__VLS_2605);
const __VLS_2607 = __VLS_2606({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2606));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2605, typeof __VLS_2607> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2608 = __VLS_pickFunctionalComponentCtx(__VLS_2605, __VLS_2607)!;
let __VLS_2609!: __VLS_NormalizeEmits<typeof __VLS_2608.emit>;
(__VLS_2608.slots!).default;
}
{
const __VLS_2610 = __VLS_intrinsicElements["option"];
const __VLS_2611 = __VLS_elementAsFunctionalComponent(__VLS_2610);
const __VLS_2612 = __VLS_2611({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2611));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2610, typeof __VLS_2612> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2613 = __VLS_pickFunctionalComponentCtx(__VLS_2610, __VLS_2612)!;
let __VLS_2614!: __VLS_NormalizeEmits<typeof __VLS_2613.emit>;
(__VLS_2613.slots!).default;
}
(__VLS_2603.slots!).default;
}
{
const __VLS_2615 = __VLS_intrinsicElements["div"];
const __VLS_2616 = __VLS_elementAsFunctionalComponent(__VLS_2615);
const __VLS_2617 = __VLS_2616({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2616));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2615, typeof __VLS_2617> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2618 = __VLS_pickFunctionalComponentCtx(__VLS_2615, __VLS_2617)!;
let __VLS_2619!: __VLS_NormalizeEmits<typeof __VLS_2618.emit>;
{
const __VLS_2620 = __VLS_intrinsicElements["input"];
const __VLS_2621 = __VLS_elementAsFunctionalComponent(__VLS_2620);
const __VLS_2622 = __VLS_2621({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2621));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2620, typeof __VLS_2622> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), });
const __VLS_2623 = __VLS_pickFunctionalComponentCtx(__VLS_2620, __VLS_2622)!;
let __VLS_2624!: __VLS_NormalizeEmits<typeof __VLS_2623.emit>;
}
(__VLS_2618.slots!).default;
}
{
const __VLS_2625 = __VLS_intrinsicElements["div"];
const __VLS_2626 = __VLS_elementAsFunctionalComponent(__VLS_2625);
const __VLS_2627 = __VLS_2626({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2626));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2625, typeof __VLS_2627> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_2628 = __VLS_pickFunctionalComponentCtx(__VLS_2625, __VLS_2627)!;
let __VLS_2629!: __VLS_NormalizeEmits<typeof __VLS_2628.emit>;
{
const __VLS_2630 = __VLS_intrinsicElements["div"];
const __VLS_2631 = __VLS_elementAsFunctionalComponent(__VLS_2630);
const __VLS_2632 = __VLS_2631({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2631));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2630, typeof __VLS_2632> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2633 = __VLS_pickFunctionalComponentCtx(__VLS_2630, __VLS_2632)!;
let __VLS_2634!: __VLS_NormalizeEmits<typeof __VLS_2633.emit>;
{
const __VLS_2635 = __VLS_intrinsicElements["input"];
const __VLS_2636 = __VLS_elementAsFunctionalComponent(__VLS_2635);
const __VLS_2637 = __VLS_2636({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2636));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2635, typeof __VLS_2637> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2638 = __VLS_pickFunctionalComponentCtx(__VLS_2635, __VLS_2637)!;
let __VLS_2639!: __VLS_NormalizeEmits<typeof __VLS_2638.emit>;
}
{
const __VLS_2640 = __VLS_intrinsicElements["label"];
const __VLS_2641 = __VLS_elementAsFunctionalComponent(__VLS_2640);
const __VLS_2642 = __VLS_2641({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2641));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2640, typeof __VLS_2642> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2643 = __VLS_pickFunctionalComponentCtx(__VLS_2640, __VLS_2642)!;
let __VLS_2644!: __VLS_NormalizeEmits<typeof __VLS_2643.emit>;
(__VLS_2643.slots!).default;
}
(__VLS_2633.slots!).default;
}
{
const __VLS_2645 = __VLS_intrinsicElements["div"];
const __VLS_2646 = __VLS_elementAsFunctionalComponent(__VLS_2645);
const __VLS_2647 = __VLS_2646({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2646));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2645, typeof __VLS_2647> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2648 = __VLS_pickFunctionalComponentCtx(__VLS_2645, __VLS_2647)!;
let __VLS_2649!: __VLS_NormalizeEmits<typeof __VLS_2648.emit>;
{
const __VLS_2650 = __VLS_intrinsicElements["input"];
const __VLS_2651 = __VLS_elementAsFunctionalComponent(__VLS_2650);
const __VLS_2652 = __VLS_2651({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2651));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2650, typeof __VLS_2652> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2653 = __VLS_pickFunctionalComponentCtx(__VLS_2650, __VLS_2652)!;
let __VLS_2654!: __VLS_NormalizeEmits<typeof __VLS_2653.emit>;
}
{
const __VLS_2655 = __VLS_intrinsicElements["label"];
const __VLS_2656 = __VLS_elementAsFunctionalComponent(__VLS_2655);
const __VLS_2657 = __VLS_2656({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2656));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2655, typeof __VLS_2657> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2658 = __VLS_pickFunctionalComponentCtx(__VLS_2655, __VLS_2657)!;
let __VLS_2659!: __VLS_NormalizeEmits<typeof __VLS_2658.emit>;
(__VLS_2658.slots!).default;
}
(__VLS_2648.slots!).default;
}
(__VLS_2628.slots!).default;
}
(__VLS_2593.slots!).default;
}
{
const __VLS_2660 = __VLS_intrinsicElements["fieldset"];
const __VLS_2661 = __VLS_elementAsFunctionalComponent(__VLS_2660);
const __VLS_2662 = __VLS_2661({ ...{}, id: ("fieldset_40"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2661));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2660, typeof __VLS_2662> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_40"), style: ({}), });
const __VLS_2663 = __VLS_pickFunctionalComponentCtx(__VLS_2660, __VLS_2662)!;
let __VLS_2664!: __VLS_NormalizeEmits<typeof __VLS_2663.emit>;
{
const __VLS_2665 = __VLS_intrinsicElements["label"];
const __VLS_2666 = __VLS_elementAsFunctionalComponent(__VLS_2665);
const __VLS_2667 = __VLS_2666({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2666));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2665, typeof __VLS_2667> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2668 = __VLS_pickFunctionalComponentCtx(__VLS_2665, __VLS_2667)!;
let __VLS_2669!: __VLS_NormalizeEmits<typeof __VLS_2668.emit>;
(__VLS_2668.slots!).default;
}
{
const __VLS_2670 = __VLS_intrinsicElements["select"];
const __VLS_2671 = __VLS_elementAsFunctionalComponent(__VLS_2670);
const __VLS_2672 = __VLS_2671({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2671));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2670, typeof __VLS_2672> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2673 = __VLS_pickFunctionalComponentCtx(__VLS_2670, __VLS_2672)!;
let __VLS_2674!: __VLS_NormalizeEmits<typeof __VLS_2673.emit>;
{
const __VLS_2675 = __VLS_intrinsicElements["option"];
const __VLS_2676 = __VLS_elementAsFunctionalComponent(__VLS_2675);
const __VLS_2677 = __VLS_2676({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2676));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2675, typeof __VLS_2677> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2678 = __VLS_pickFunctionalComponentCtx(__VLS_2675, __VLS_2677)!;
let __VLS_2679!: __VLS_NormalizeEmits<typeof __VLS_2678.emit>;
(__VLS_2678.slots!).default;
}
{
const __VLS_2680 = __VLS_intrinsicElements["option"];
const __VLS_2681 = __VLS_elementAsFunctionalComponent(__VLS_2680);
const __VLS_2682 = __VLS_2681({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2681));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2680, typeof __VLS_2682> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2683 = __VLS_pickFunctionalComponentCtx(__VLS_2680, __VLS_2682)!;
let __VLS_2684!: __VLS_NormalizeEmits<typeof __VLS_2683.emit>;
(__VLS_2683.slots!).default;
}
(__VLS_2673.slots!).default;
}
{
const __VLS_2685 = __VLS_intrinsicElements["div"];
const __VLS_2686 = __VLS_elementAsFunctionalComponent(__VLS_2685);
const __VLS_2687 = __VLS_2686({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2686));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2685, typeof __VLS_2687> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2688 = __VLS_pickFunctionalComponentCtx(__VLS_2685, __VLS_2687)!;
let __VLS_2689!: __VLS_NormalizeEmits<typeof __VLS_2688.emit>;
{
const __VLS_2690 = __VLS_intrinsicElements["input"];
const __VLS_2691 = __VLS_elementAsFunctionalComponent(__VLS_2690);
const __VLS_2692 = __VLS_2691({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2691));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2690, typeof __VLS_2692> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), });
const __VLS_2693 = __VLS_pickFunctionalComponentCtx(__VLS_2690, __VLS_2692)!;
let __VLS_2694!: __VLS_NormalizeEmits<typeof __VLS_2693.emit>;
}
(__VLS_2688.slots!).default;
}
{
const __VLS_2695 = __VLS_intrinsicElements["div"];
const __VLS_2696 = __VLS_elementAsFunctionalComponent(__VLS_2695);
const __VLS_2697 = __VLS_2696({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2696));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2695, typeof __VLS_2697> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_2698 = __VLS_pickFunctionalComponentCtx(__VLS_2695, __VLS_2697)!;
let __VLS_2699!: __VLS_NormalizeEmits<typeof __VLS_2698.emit>;
{
const __VLS_2700 = __VLS_intrinsicElements["div"];
const __VLS_2701 = __VLS_elementAsFunctionalComponent(__VLS_2700);
const __VLS_2702 = __VLS_2701({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2701));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2700, typeof __VLS_2702> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2703 = __VLS_pickFunctionalComponentCtx(__VLS_2700, __VLS_2702)!;
let __VLS_2704!: __VLS_NormalizeEmits<typeof __VLS_2703.emit>;
{
const __VLS_2705 = __VLS_intrinsicElements["input"];
const __VLS_2706 = __VLS_elementAsFunctionalComponent(__VLS_2705);
const __VLS_2707 = __VLS_2706({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2706));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2705, typeof __VLS_2707> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2708 = __VLS_pickFunctionalComponentCtx(__VLS_2705, __VLS_2707)!;
let __VLS_2709!: __VLS_NormalizeEmits<typeof __VLS_2708.emit>;
}
{
const __VLS_2710 = __VLS_intrinsicElements["label"];
const __VLS_2711 = __VLS_elementAsFunctionalComponent(__VLS_2710);
const __VLS_2712 = __VLS_2711({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2711));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2710, typeof __VLS_2712> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2713 = __VLS_pickFunctionalComponentCtx(__VLS_2710, __VLS_2712)!;
let __VLS_2714!: __VLS_NormalizeEmits<typeof __VLS_2713.emit>;
(__VLS_2713.slots!).default;
}
(__VLS_2703.slots!).default;
}
{
const __VLS_2715 = __VLS_intrinsicElements["div"];
const __VLS_2716 = __VLS_elementAsFunctionalComponent(__VLS_2715);
const __VLS_2717 = __VLS_2716({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2716));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2715, typeof __VLS_2717> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2718 = __VLS_pickFunctionalComponentCtx(__VLS_2715, __VLS_2717)!;
let __VLS_2719!: __VLS_NormalizeEmits<typeof __VLS_2718.emit>;
{
const __VLS_2720 = __VLS_intrinsicElements["input"];
const __VLS_2721 = __VLS_elementAsFunctionalComponent(__VLS_2720);
const __VLS_2722 = __VLS_2721({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2721));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2720, typeof __VLS_2722> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2723 = __VLS_pickFunctionalComponentCtx(__VLS_2720, __VLS_2722)!;
let __VLS_2724!: __VLS_NormalizeEmits<typeof __VLS_2723.emit>;
}
{
const __VLS_2725 = __VLS_intrinsicElements["label"];
const __VLS_2726 = __VLS_elementAsFunctionalComponent(__VLS_2725);
const __VLS_2727 = __VLS_2726({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2726));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2725, typeof __VLS_2727> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2728 = __VLS_pickFunctionalComponentCtx(__VLS_2725, __VLS_2727)!;
let __VLS_2729!: __VLS_NormalizeEmits<typeof __VLS_2728.emit>;
(__VLS_2728.slots!).default;
}
(__VLS_2718.slots!).default;
}
(__VLS_2698.slots!).default;
}
(__VLS_2663.slots!).default;
}
{
const __VLS_2730 = __VLS_intrinsicElements["fieldset"];
const __VLS_2731 = __VLS_elementAsFunctionalComponent(__VLS_2730);
const __VLS_2732 = __VLS_2731({ ...{}, id: ("fieldset_41"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2731));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2730, typeof __VLS_2732> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_41"), style: ({}), });
const __VLS_2733 = __VLS_pickFunctionalComponentCtx(__VLS_2730, __VLS_2732)!;
let __VLS_2734!: __VLS_NormalizeEmits<typeof __VLS_2733.emit>;
{
const __VLS_2735 = __VLS_intrinsicElements["label"];
const __VLS_2736 = __VLS_elementAsFunctionalComponent(__VLS_2735);
const __VLS_2737 = __VLS_2736({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2736));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2735, typeof __VLS_2737> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2738 = __VLS_pickFunctionalComponentCtx(__VLS_2735, __VLS_2737)!;
let __VLS_2739!: __VLS_NormalizeEmits<typeof __VLS_2738.emit>;
(__VLS_2738.slots!).default;
}
{
const __VLS_2740 = __VLS_intrinsicElements["select"];
const __VLS_2741 = __VLS_elementAsFunctionalComponent(__VLS_2740);
const __VLS_2742 = __VLS_2741({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2741));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2740, typeof __VLS_2742> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2743 = __VLS_pickFunctionalComponentCtx(__VLS_2740, __VLS_2742)!;
let __VLS_2744!: __VLS_NormalizeEmits<typeof __VLS_2743.emit>;
{
const __VLS_2745 = __VLS_intrinsicElements["option"];
const __VLS_2746 = __VLS_elementAsFunctionalComponent(__VLS_2745);
const __VLS_2747 = __VLS_2746({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2746));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2745, typeof __VLS_2747> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2748 = __VLS_pickFunctionalComponentCtx(__VLS_2745, __VLS_2747)!;
let __VLS_2749!: __VLS_NormalizeEmits<typeof __VLS_2748.emit>;
(__VLS_2748.slots!).default;
}
{
const __VLS_2750 = __VLS_intrinsicElements["option"];
const __VLS_2751 = __VLS_elementAsFunctionalComponent(__VLS_2750);
const __VLS_2752 = __VLS_2751({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2751));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2750, typeof __VLS_2752> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2753 = __VLS_pickFunctionalComponentCtx(__VLS_2750, __VLS_2752)!;
let __VLS_2754!: __VLS_NormalizeEmits<typeof __VLS_2753.emit>;
(__VLS_2753.slots!).default;
}
(__VLS_2743.slots!).default;
}
{
const __VLS_2755 = __VLS_intrinsicElements["div"];
const __VLS_2756 = __VLS_elementAsFunctionalComponent(__VLS_2755);
const __VLS_2757 = __VLS_2756({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2756));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2755, typeof __VLS_2757> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2758 = __VLS_pickFunctionalComponentCtx(__VLS_2755, __VLS_2757)!;
let __VLS_2759!: __VLS_NormalizeEmits<typeof __VLS_2758.emit>;
{
const __VLS_2760 = __VLS_intrinsicElements["input"];
const __VLS_2761 = __VLS_elementAsFunctionalComponent(__VLS_2760);
const __VLS_2762 = __VLS_2761({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2761));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2760, typeof __VLS_2762> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(#______)"), style: ({}), });
const __VLS_2763 = __VLS_pickFunctionalComponentCtx(__VLS_2760, __VLS_2762)!;
let __VLS_2764!: __VLS_NormalizeEmits<typeof __VLS_2763.emit>;
}
(__VLS_2758.slots!).default;
}
{
const __VLS_2765 = __VLS_intrinsicElements["div"];
const __VLS_2766 = __VLS_elementAsFunctionalComponent(__VLS_2765);
const __VLS_2767 = __VLS_2766({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2766));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2765, typeof __VLS_2767> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_2768 = __VLS_pickFunctionalComponentCtx(__VLS_2765, __VLS_2767)!;
let __VLS_2769!: __VLS_NormalizeEmits<typeof __VLS_2768.emit>;
{
const __VLS_2770 = __VLS_intrinsicElements["div"];
const __VLS_2771 = __VLS_elementAsFunctionalComponent(__VLS_2770);
const __VLS_2772 = __VLS_2771({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2771));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2770, typeof __VLS_2772> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2773 = __VLS_pickFunctionalComponentCtx(__VLS_2770, __VLS_2772)!;
let __VLS_2774!: __VLS_NormalizeEmits<typeof __VLS_2773.emit>;
{
const __VLS_2775 = __VLS_intrinsicElements["input"];
const __VLS_2776 = __VLS_elementAsFunctionalComponent(__VLS_2775);
const __VLS_2777 = __VLS_2776({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2776));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2775, typeof __VLS_2777> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2778 = __VLS_pickFunctionalComponentCtx(__VLS_2775, __VLS_2777)!;
let __VLS_2779!: __VLS_NormalizeEmits<typeof __VLS_2778.emit>;
}
{
const __VLS_2780 = __VLS_intrinsicElements["label"];
const __VLS_2781 = __VLS_elementAsFunctionalComponent(__VLS_2780);
const __VLS_2782 = __VLS_2781({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2781));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2780, typeof __VLS_2782> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2783 = __VLS_pickFunctionalComponentCtx(__VLS_2780, __VLS_2782)!;
let __VLS_2784!: __VLS_NormalizeEmits<typeof __VLS_2783.emit>;
(__VLS_2783.slots!).default;
}
(__VLS_2773.slots!).default;
}
{
const __VLS_2785 = __VLS_intrinsicElements["div"];
const __VLS_2786 = __VLS_elementAsFunctionalComponent(__VLS_2785);
const __VLS_2787 = __VLS_2786({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_2786));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2785, typeof __VLS_2787> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_2788 = __VLS_pickFunctionalComponentCtx(__VLS_2785, __VLS_2787)!;
let __VLS_2789!: __VLS_NormalizeEmits<typeof __VLS_2788.emit>;
{
const __VLS_2790 = __VLS_intrinsicElements["input"];
const __VLS_2791 = __VLS_elementAsFunctionalComponent(__VLS_2790);
const __VLS_2792 = __VLS_2791({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2791));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2790, typeof __VLS_2792> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-17"), value: ("1"), });
const __VLS_2793 = __VLS_pickFunctionalComponentCtx(__VLS_2790, __VLS_2792)!;
let __VLS_2794!: __VLS_NormalizeEmits<typeof __VLS_2793.emit>;
}
{
const __VLS_2795 = __VLS_intrinsicElements["label"];
const __VLS_2796 = __VLS_elementAsFunctionalComponent(__VLS_2795);
const __VLS_2797 = __VLS_2796({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_2796));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2795, typeof __VLS_2797> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_2798 = __VLS_pickFunctionalComponentCtx(__VLS_2795, __VLS_2797)!;
let __VLS_2799!: __VLS_NormalizeEmits<typeof __VLS_2798.emit>;
(__VLS_2798.slots!).default;
}
(__VLS_2788.slots!).default;
}
(__VLS_2768.slots!).default;
}
(__VLS_2733.slots!).default;
}
{
const __VLS_2800 = __VLS_intrinsicElements["fieldset"];
const __VLS_2801 = __VLS_elementAsFunctionalComponent(__VLS_2800);
const __VLS_2802 = __VLS_2801({ ...{}, id: ("fieldset_42"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2801));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2800, typeof __VLS_2802> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_42"), style: ({}), });
const __VLS_2803 = __VLS_pickFunctionalComponentCtx(__VLS_2800, __VLS_2802)!;
let __VLS_2804!: __VLS_NormalizeEmits<typeof __VLS_2803.emit>;
{
const __VLS_2805 = __VLS_intrinsicElements["label"];
const __VLS_2806 = __VLS_elementAsFunctionalComponent(__VLS_2805);
const __VLS_2807 = __VLS_2806({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2806));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2805, typeof __VLS_2807> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2808 = __VLS_pickFunctionalComponentCtx(__VLS_2805, __VLS_2807)!;
let __VLS_2809!: __VLS_NormalizeEmits<typeof __VLS_2808.emit>;
(__VLS_2808.slots!).default;
}
{
const __VLS_2810 = __VLS_intrinsicElements["select"];
const __VLS_2811 = __VLS_elementAsFunctionalComponent(__VLS_2810);
const __VLS_2812 = __VLS_2811({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2811));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2810, typeof __VLS_2812> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2813 = __VLS_pickFunctionalComponentCtx(__VLS_2810, __VLS_2812)!;
let __VLS_2814!: __VLS_NormalizeEmits<typeof __VLS_2813.emit>;
{
const __VLS_2815 = __VLS_intrinsicElements["option"];
const __VLS_2816 = __VLS_elementAsFunctionalComponent(__VLS_2815);
const __VLS_2817 = __VLS_2816({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2816));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2815, typeof __VLS_2817> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2818 = __VLS_pickFunctionalComponentCtx(__VLS_2815, __VLS_2817)!;
let __VLS_2819!: __VLS_NormalizeEmits<typeof __VLS_2818.emit>;
(__VLS_2818.slots!).default;
}
{
const __VLS_2820 = __VLS_intrinsicElements["option"];
const __VLS_2821 = __VLS_elementAsFunctionalComponent(__VLS_2820);
const __VLS_2822 = __VLS_2821({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2821));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2820, typeof __VLS_2822> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2823 = __VLS_pickFunctionalComponentCtx(__VLS_2820, __VLS_2822)!;
let __VLS_2824!: __VLS_NormalizeEmits<typeof __VLS_2823.emit>;
(__VLS_2823.slots!).default;
}
(__VLS_2813.slots!).default;
}
{
const __VLS_2825 = __VLS_intrinsicElements["div"];
const __VLS_2826 = __VLS_elementAsFunctionalComponent(__VLS_2825);
const __VLS_2827 = __VLS_2826({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2826));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2825, typeof __VLS_2827> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2828 = __VLS_pickFunctionalComponentCtx(__VLS_2825, __VLS_2827)!;
let __VLS_2829!: __VLS_NormalizeEmits<typeof __VLS_2828.emit>;
{
const __VLS_2830 = __VLS_intrinsicElements["input"];
const __VLS_2831 = __VLS_elementAsFunctionalComponent(__VLS_2830);
const __VLS_2832 = __VLS_2831({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2831));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2830, typeof __VLS_2832> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), });
const __VLS_2833 = __VLS_pickFunctionalComponentCtx(__VLS_2830, __VLS_2832)!;
let __VLS_2834!: __VLS_NormalizeEmits<typeof __VLS_2833.emit>;
}
(__VLS_2828.slots!).default;
}
(__VLS_2803.slots!).default;
}
{
const __VLS_2835 = __VLS_intrinsicElements["fieldset"];
const __VLS_2836 = __VLS_elementAsFunctionalComponent(__VLS_2835);
const __VLS_2837 = __VLS_2836({ ...{}, id: ("fieldset_43"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2836));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2835, typeof __VLS_2837> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_43"), style: ({}), });
const __VLS_2838 = __VLS_pickFunctionalComponentCtx(__VLS_2835, __VLS_2837)!;
let __VLS_2839!: __VLS_NormalizeEmits<typeof __VLS_2838.emit>;
{
const __VLS_2840 = __VLS_intrinsicElements["label"];
const __VLS_2841 = __VLS_elementAsFunctionalComponent(__VLS_2840);
const __VLS_2842 = __VLS_2841({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2841));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2840, typeof __VLS_2842> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2843 = __VLS_pickFunctionalComponentCtx(__VLS_2840, __VLS_2842)!;
let __VLS_2844!: __VLS_NormalizeEmits<typeof __VLS_2843.emit>;
(__VLS_2843.slots!).default;
}
{
const __VLS_2845 = __VLS_intrinsicElements["select"];
const __VLS_2846 = __VLS_elementAsFunctionalComponent(__VLS_2845);
const __VLS_2847 = __VLS_2846({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2846));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2845, typeof __VLS_2847> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2848 = __VLS_pickFunctionalComponentCtx(__VLS_2845, __VLS_2847)!;
let __VLS_2849!: __VLS_NormalizeEmits<typeof __VLS_2848.emit>;
{
const __VLS_2850 = __VLS_intrinsicElements["option"];
const __VLS_2851 = __VLS_elementAsFunctionalComponent(__VLS_2850);
const __VLS_2852 = __VLS_2851({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2851));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2850, typeof __VLS_2852> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2853 = __VLS_pickFunctionalComponentCtx(__VLS_2850, __VLS_2852)!;
let __VLS_2854!: __VLS_NormalizeEmits<typeof __VLS_2853.emit>;
(__VLS_2853.slots!).default;
}
{
const __VLS_2855 = __VLS_intrinsicElements["option"];
const __VLS_2856 = __VLS_elementAsFunctionalComponent(__VLS_2855);
const __VLS_2857 = __VLS_2856({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2856));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2855, typeof __VLS_2857> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2858 = __VLS_pickFunctionalComponentCtx(__VLS_2855, __VLS_2857)!;
let __VLS_2859!: __VLS_NormalizeEmits<typeof __VLS_2858.emit>;
(__VLS_2858.slots!).default;
}
(__VLS_2848.slots!).default;
}
{
const __VLS_2860 = __VLS_intrinsicElements["div"];
const __VLS_2861 = __VLS_elementAsFunctionalComponent(__VLS_2860);
const __VLS_2862 = __VLS_2861({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2861));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2860, typeof __VLS_2862> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2863 = __VLS_pickFunctionalComponentCtx(__VLS_2860, __VLS_2862)!;
let __VLS_2864!: __VLS_NormalizeEmits<typeof __VLS_2863.emit>;
{
const __VLS_2865 = __VLS_intrinsicElements["input"];
const __VLS_2866 = __VLS_elementAsFunctionalComponent(__VLS_2865);
const __VLS_2867 = __VLS_2866({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2866));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2865, typeof __VLS_2867> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), });
const __VLS_2868 = __VLS_pickFunctionalComponentCtx(__VLS_2865, __VLS_2867)!;
let __VLS_2869!: __VLS_NormalizeEmits<typeof __VLS_2868.emit>;
}
(__VLS_2863.slots!).default;
}
(__VLS_2838.slots!).default;
}
{
const __VLS_2870 = __VLS_intrinsicElements["fieldset"];
const __VLS_2871 = __VLS_elementAsFunctionalComponent(__VLS_2870);
const __VLS_2872 = __VLS_2871({ ...{}, id: ("fieldset_44"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2871));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2870, typeof __VLS_2872> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_44"), style: ({}), });
const __VLS_2873 = __VLS_pickFunctionalComponentCtx(__VLS_2870, __VLS_2872)!;
let __VLS_2874!: __VLS_NormalizeEmits<typeof __VLS_2873.emit>;
{
const __VLS_2875 = __VLS_intrinsicElements["label"];
const __VLS_2876 = __VLS_elementAsFunctionalComponent(__VLS_2875);
const __VLS_2877 = __VLS_2876({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2876));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2875, typeof __VLS_2877> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2878 = __VLS_pickFunctionalComponentCtx(__VLS_2875, __VLS_2877)!;
let __VLS_2879!: __VLS_NormalizeEmits<typeof __VLS_2878.emit>;
(__VLS_2878.slots!).default;
}
{
const __VLS_2880 = __VLS_intrinsicElements["select"];
const __VLS_2881 = __VLS_elementAsFunctionalComponent(__VLS_2880);
const __VLS_2882 = __VLS_2881({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2881));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2880, typeof __VLS_2882> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2883 = __VLS_pickFunctionalComponentCtx(__VLS_2880, __VLS_2882)!;
let __VLS_2884!: __VLS_NormalizeEmits<typeof __VLS_2883.emit>;
{
const __VLS_2885 = __VLS_intrinsicElements["option"];
const __VLS_2886 = __VLS_elementAsFunctionalComponent(__VLS_2885);
const __VLS_2887 = __VLS_2886({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2886));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2885, typeof __VLS_2887> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2888 = __VLS_pickFunctionalComponentCtx(__VLS_2885, __VLS_2887)!;
let __VLS_2889!: __VLS_NormalizeEmits<typeof __VLS_2888.emit>;
(__VLS_2888.slots!).default;
}
{
const __VLS_2890 = __VLS_intrinsicElements["option"];
const __VLS_2891 = __VLS_elementAsFunctionalComponent(__VLS_2890);
const __VLS_2892 = __VLS_2891({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2891));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2890, typeof __VLS_2892> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2893 = __VLS_pickFunctionalComponentCtx(__VLS_2890, __VLS_2892)!;
let __VLS_2894!: __VLS_NormalizeEmits<typeof __VLS_2893.emit>;
(__VLS_2893.slots!).default;
}
(__VLS_2883.slots!).default;
}
{
const __VLS_2895 = __VLS_intrinsicElements["div"];
const __VLS_2896 = __VLS_elementAsFunctionalComponent(__VLS_2895);
const __VLS_2897 = __VLS_2896({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2896));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2895, typeof __VLS_2897> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2898 = __VLS_pickFunctionalComponentCtx(__VLS_2895, __VLS_2897)!;
let __VLS_2899!: __VLS_NormalizeEmits<typeof __VLS_2898.emit>;
{
const __VLS_2900 = __VLS_intrinsicElements["input"];
const __VLS_2901 = __VLS_elementAsFunctionalComponent(__VLS_2900);
const __VLS_2902 = __VLS_2901({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2901));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2900, typeof __VLS_2902> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), });
const __VLS_2903 = __VLS_pickFunctionalComponentCtx(__VLS_2900, __VLS_2902)!;
let __VLS_2904!: __VLS_NormalizeEmits<typeof __VLS_2903.emit>;
}
(__VLS_2898.slots!).default;
}
(__VLS_2873.slots!).default;
}
{
const __VLS_2905 = __VLS_intrinsicElements["fieldset"];
const __VLS_2906 = __VLS_elementAsFunctionalComponent(__VLS_2905);
const __VLS_2907 = __VLS_2906({ ...{}, id: ("fieldset_45"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2906));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2905, typeof __VLS_2907> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_45"), style: ({}), });
const __VLS_2908 = __VLS_pickFunctionalComponentCtx(__VLS_2905, __VLS_2907)!;
let __VLS_2909!: __VLS_NormalizeEmits<typeof __VLS_2908.emit>;
{
const __VLS_2910 = __VLS_intrinsicElements["label"];
const __VLS_2911 = __VLS_elementAsFunctionalComponent(__VLS_2910);
const __VLS_2912 = __VLS_2911({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2911));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2910, typeof __VLS_2912> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2913 = __VLS_pickFunctionalComponentCtx(__VLS_2910, __VLS_2912)!;
let __VLS_2914!: __VLS_NormalizeEmits<typeof __VLS_2913.emit>;
(__VLS_2913.slots!).default;
}
{
const __VLS_2915 = __VLS_intrinsicElements["select"];
const __VLS_2916 = __VLS_elementAsFunctionalComponent(__VLS_2915);
const __VLS_2917 = __VLS_2916({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2916));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2915, typeof __VLS_2917> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2918 = __VLS_pickFunctionalComponentCtx(__VLS_2915, __VLS_2917)!;
let __VLS_2919!: __VLS_NormalizeEmits<typeof __VLS_2918.emit>;
{
const __VLS_2920 = __VLS_intrinsicElements["option"];
const __VLS_2921 = __VLS_elementAsFunctionalComponent(__VLS_2920);
const __VLS_2922 = __VLS_2921({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2921));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2920, typeof __VLS_2922> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2923 = __VLS_pickFunctionalComponentCtx(__VLS_2920, __VLS_2922)!;
let __VLS_2924!: __VLS_NormalizeEmits<typeof __VLS_2923.emit>;
(__VLS_2923.slots!).default;
}
{
const __VLS_2925 = __VLS_intrinsicElements["option"];
const __VLS_2926 = __VLS_elementAsFunctionalComponent(__VLS_2925);
const __VLS_2927 = __VLS_2926({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2926));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2925, typeof __VLS_2927> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2928 = __VLS_pickFunctionalComponentCtx(__VLS_2925, __VLS_2927)!;
let __VLS_2929!: __VLS_NormalizeEmits<typeof __VLS_2928.emit>;
(__VLS_2928.slots!).default;
}
(__VLS_2918.slots!).default;
}
{
const __VLS_2930 = __VLS_intrinsicElements["div"];
const __VLS_2931 = __VLS_elementAsFunctionalComponent(__VLS_2930);
const __VLS_2932 = __VLS_2931({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2931));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2930, typeof __VLS_2932> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2933 = __VLS_pickFunctionalComponentCtx(__VLS_2930, __VLS_2932)!;
let __VLS_2934!: __VLS_NormalizeEmits<typeof __VLS_2933.emit>;
{
const __VLS_2935 = __VLS_intrinsicElements["input"];
const __VLS_2936 = __VLS_elementAsFunctionalComponent(__VLS_2935);
const __VLS_2937 = __VLS_2936({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2936));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2935, typeof __VLS_2937> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), });
const __VLS_2938 = __VLS_pickFunctionalComponentCtx(__VLS_2935, __VLS_2937)!;
let __VLS_2939!: __VLS_NormalizeEmits<typeof __VLS_2938.emit>;
}
(__VLS_2933.slots!).default;
}
(__VLS_2908.slots!).default;
}
{
const __VLS_2940 = __VLS_intrinsicElements["fieldset"];
const __VLS_2941 = __VLS_elementAsFunctionalComponent(__VLS_2940);
const __VLS_2942 = __VLS_2941({ ...{}, id: ("fieldset_46"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2941));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2940, typeof __VLS_2942> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_46"), style: ({}), });
const __VLS_2943 = __VLS_pickFunctionalComponentCtx(__VLS_2940, __VLS_2942)!;
let __VLS_2944!: __VLS_NormalizeEmits<typeof __VLS_2943.emit>;
{
const __VLS_2945 = __VLS_intrinsicElements["label"];
const __VLS_2946 = __VLS_elementAsFunctionalComponent(__VLS_2945);
const __VLS_2947 = __VLS_2946({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2946));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2945, typeof __VLS_2947> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2948 = __VLS_pickFunctionalComponentCtx(__VLS_2945, __VLS_2947)!;
let __VLS_2949!: __VLS_NormalizeEmits<typeof __VLS_2948.emit>;
(__VLS_2948.slots!).default;
}
{
const __VLS_2950 = __VLS_intrinsicElements["select"];
const __VLS_2951 = __VLS_elementAsFunctionalComponent(__VLS_2950);
const __VLS_2952 = __VLS_2951({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2951));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2950, typeof __VLS_2952> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2953 = __VLS_pickFunctionalComponentCtx(__VLS_2950, __VLS_2952)!;
let __VLS_2954!: __VLS_NormalizeEmits<typeof __VLS_2953.emit>;
{
const __VLS_2955 = __VLS_intrinsicElements["option"];
const __VLS_2956 = __VLS_elementAsFunctionalComponent(__VLS_2955);
const __VLS_2957 = __VLS_2956({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2956));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2955, typeof __VLS_2957> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2958 = __VLS_pickFunctionalComponentCtx(__VLS_2955, __VLS_2957)!;
let __VLS_2959!: __VLS_NormalizeEmits<typeof __VLS_2958.emit>;
(__VLS_2958.slots!).default;
}
{
const __VLS_2960 = __VLS_intrinsicElements["option"];
const __VLS_2961 = __VLS_elementAsFunctionalComponent(__VLS_2960);
const __VLS_2962 = __VLS_2961({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2961));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2960, typeof __VLS_2962> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2963 = __VLS_pickFunctionalComponentCtx(__VLS_2960, __VLS_2962)!;
let __VLS_2964!: __VLS_NormalizeEmits<typeof __VLS_2963.emit>;
(__VLS_2963.slots!).default;
}
(__VLS_2953.slots!).default;
}
{
const __VLS_2965 = __VLS_intrinsicElements["div"];
const __VLS_2966 = __VLS_elementAsFunctionalComponent(__VLS_2965);
const __VLS_2967 = __VLS_2966({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_2966));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2965, typeof __VLS_2967> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_2968 = __VLS_pickFunctionalComponentCtx(__VLS_2965, __VLS_2967)!;
let __VLS_2969!: __VLS_NormalizeEmits<typeof __VLS_2968.emit>;
{
const __VLS_2970 = __VLS_intrinsicElements["input"];
const __VLS_2971 = __VLS_elementAsFunctionalComponent(__VLS_2970);
const __VLS_2972 = __VLS_2971({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2971));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2970, typeof __VLS_2972> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), });
const __VLS_2973 = __VLS_pickFunctionalComponentCtx(__VLS_2970, __VLS_2972)!;
let __VLS_2974!: __VLS_NormalizeEmits<typeof __VLS_2973.emit>;
}
(__VLS_2968.slots!).default;
}
(__VLS_2943.slots!).default;
}
{
const __VLS_2975 = __VLS_intrinsicElements["fieldset"];
const __VLS_2976 = __VLS_elementAsFunctionalComponent(__VLS_2975);
const __VLS_2977 = __VLS_2976({ ...{}, id: ("fieldset_47"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2976));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2975, typeof __VLS_2977> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_47"), style: ({}), });
const __VLS_2978 = __VLS_pickFunctionalComponentCtx(__VLS_2975, __VLS_2977)!;
let __VLS_2979!: __VLS_NormalizeEmits<typeof __VLS_2978.emit>;
{
const __VLS_2980 = __VLS_intrinsicElements["label"];
const __VLS_2981 = __VLS_elementAsFunctionalComponent(__VLS_2980);
const __VLS_2982 = __VLS_2981({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_2981));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2980, typeof __VLS_2982> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_2983 = __VLS_pickFunctionalComponentCtx(__VLS_2980, __VLS_2982)!;
let __VLS_2984!: __VLS_NormalizeEmits<typeof __VLS_2983.emit>;
(__VLS_2983.slots!).default;
}
{
const __VLS_2985 = __VLS_intrinsicElements["select"];
const __VLS_2986 = __VLS_elementAsFunctionalComponent(__VLS_2985);
const __VLS_2987 = __VLS_2986({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_2986));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2985, typeof __VLS_2987> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_2988 = __VLS_pickFunctionalComponentCtx(__VLS_2985, __VLS_2987)!;
let __VLS_2989!: __VLS_NormalizeEmits<typeof __VLS_2988.emit>;
{
const __VLS_2990 = __VLS_intrinsicElements["option"];
const __VLS_2991 = __VLS_elementAsFunctionalComponent(__VLS_2990);
const __VLS_2992 = __VLS_2991({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2991));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2990, typeof __VLS_2992> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_2993 = __VLS_pickFunctionalComponentCtx(__VLS_2990, __VLS_2992)!;
let __VLS_2994!: __VLS_NormalizeEmits<typeof __VLS_2993.emit>;
(__VLS_2993.slots!).default;
}
{
const __VLS_2995 = __VLS_intrinsicElements["option"];
const __VLS_2996 = __VLS_elementAsFunctionalComponent(__VLS_2995);
const __VLS_2997 = __VLS_2996({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_2996));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_2995, typeof __VLS_2997> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_2998 = __VLS_pickFunctionalComponentCtx(__VLS_2995, __VLS_2997)!;
let __VLS_2999!: __VLS_NormalizeEmits<typeof __VLS_2998.emit>;
(__VLS_2998.slots!).default;
}
(__VLS_2988.slots!).default;
}
{
const __VLS_3000 = __VLS_intrinsicElements["div"];
const __VLS_3001 = __VLS_elementAsFunctionalComponent(__VLS_3000);
const __VLS_3002 = __VLS_3001({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3001));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3000, typeof __VLS_3002> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3003 = __VLS_pickFunctionalComponentCtx(__VLS_3000, __VLS_3002)!;
let __VLS_3004!: __VLS_NormalizeEmits<typeof __VLS_3003.emit>;
{
const __VLS_3005 = __VLS_intrinsicElements["input"];
const __VLS_3006 = __VLS_elementAsFunctionalComponent(__VLS_3005);
const __VLS_3007 = __VLS_3006({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3006));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3005, typeof __VLS_3007> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), });
const __VLS_3008 = __VLS_pickFunctionalComponentCtx(__VLS_3005, __VLS_3007)!;
let __VLS_3009!: __VLS_NormalizeEmits<typeof __VLS_3008.emit>;
}
(__VLS_3003.slots!).default;
}
(__VLS_2978.slots!).default;
}
{
const __VLS_3010 = __VLS_intrinsicElements["fieldset"];
const __VLS_3011 = __VLS_elementAsFunctionalComponent(__VLS_3010);
const __VLS_3012 = __VLS_3011({ ...{}, id: ("fieldset_48"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3011));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3010, typeof __VLS_3012> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_48"), style: ({}), });
const __VLS_3013 = __VLS_pickFunctionalComponentCtx(__VLS_3010, __VLS_3012)!;
let __VLS_3014!: __VLS_NormalizeEmits<typeof __VLS_3013.emit>;
{
const __VLS_3015 = __VLS_intrinsicElements["label"];
const __VLS_3016 = __VLS_elementAsFunctionalComponent(__VLS_3015);
const __VLS_3017 = __VLS_3016({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3016));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3015, typeof __VLS_3017> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3018 = __VLS_pickFunctionalComponentCtx(__VLS_3015, __VLS_3017)!;
let __VLS_3019!: __VLS_NormalizeEmits<typeof __VLS_3018.emit>;
(__VLS_3018.slots!).default;
}
{
const __VLS_3020 = __VLS_intrinsicElements["select"];
const __VLS_3021 = __VLS_elementAsFunctionalComponent(__VLS_3020);
const __VLS_3022 = __VLS_3021({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3021));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3020, typeof __VLS_3022> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3023 = __VLS_pickFunctionalComponentCtx(__VLS_3020, __VLS_3022)!;
let __VLS_3024!: __VLS_NormalizeEmits<typeof __VLS_3023.emit>;
{
const __VLS_3025 = __VLS_intrinsicElements["option"];
const __VLS_3026 = __VLS_elementAsFunctionalComponent(__VLS_3025);
const __VLS_3027 = __VLS_3026({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3026));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3025, typeof __VLS_3027> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3028 = __VLS_pickFunctionalComponentCtx(__VLS_3025, __VLS_3027)!;
let __VLS_3029!: __VLS_NormalizeEmits<typeof __VLS_3028.emit>;
(__VLS_3028.slots!).default;
}
{
const __VLS_3030 = __VLS_intrinsicElements["option"];
const __VLS_3031 = __VLS_elementAsFunctionalComponent(__VLS_3030);
const __VLS_3032 = __VLS_3031({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3031));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3030, typeof __VLS_3032> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3033 = __VLS_pickFunctionalComponentCtx(__VLS_3030, __VLS_3032)!;
let __VLS_3034!: __VLS_NormalizeEmits<typeof __VLS_3033.emit>;
(__VLS_3033.slots!).default;
}
(__VLS_3023.slots!).default;
}
{
const __VLS_3035 = __VLS_intrinsicElements["div"];
const __VLS_3036 = __VLS_elementAsFunctionalComponent(__VLS_3035);
const __VLS_3037 = __VLS_3036({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3036));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3035, typeof __VLS_3037> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3038 = __VLS_pickFunctionalComponentCtx(__VLS_3035, __VLS_3037)!;
let __VLS_3039!: __VLS_NormalizeEmits<typeof __VLS_3038.emit>;
{
const __VLS_3040 = __VLS_intrinsicElements["input"];
const __VLS_3041 = __VLS_elementAsFunctionalComponent(__VLS_3040);
const __VLS_3042 = __VLS_3041({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3041));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3040, typeof __VLS_3042> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), });
const __VLS_3043 = __VLS_pickFunctionalComponentCtx(__VLS_3040, __VLS_3042)!;
let __VLS_3044!: __VLS_NormalizeEmits<typeof __VLS_3043.emit>;
}
(__VLS_3038.slots!).default;
}
(__VLS_3013.slots!).default;
}
{
const __VLS_3045 = __VLS_intrinsicElements["fieldset"];
const __VLS_3046 = __VLS_elementAsFunctionalComponent(__VLS_3045);
const __VLS_3047 = __VLS_3046({ ...{}, id: ("fieldset_49"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3046));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3045, typeof __VLS_3047> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_49"), style: ({}), });
const __VLS_3048 = __VLS_pickFunctionalComponentCtx(__VLS_3045, __VLS_3047)!;
let __VLS_3049!: __VLS_NormalizeEmits<typeof __VLS_3048.emit>;
{
const __VLS_3050 = __VLS_intrinsicElements["label"];
const __VLS_3051 = __VLS_elementAsFunctionalComponent(__VLS_3050);
const __VLS_3052 = __VLS_3051({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3051));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3050, typeof __VLS_3052> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3053 = __VLS_pickFunctionalComponentCtx(__VLS_3050, __VLS_3052)!;
let __VLS_3054!: __VLS_NormalizeEmits<typeof __VLS_3053.emit>;
(__VLS_3053.slots!).default;
}
{
const __VLS_3055 = __VLS_intrinsicElements["select"];
const __VLS_3056 = __VLS_elementAsFunctionalComponent(__VLS_3055);
const __VLS_3057 = __VLS_3056({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3056));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3055, typeof __VLS_3057> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3058 = __VLS_pickFunctionalComponentCtx(__VLS_3055, __VLS_3057)!;
let __VLS_3059!: __VLS_NormalizeEmits<typeof __VLS_3058.emit>;
{
const __VLS_3060 = __VLS_intrinsicElements["option"];
const __VLS_3061 = __VLS_elementAsFunctionalComponent(__VLS_3060);
const __VLS_3062 = __VLS_3061({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3061));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3060, typeof __VLS_3062> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3063 = __VLS_pickFunctionalComponentCtx(__VLS_3060, __VLS_3062)!;
let __VLS_3064!: __VLS_NormalizeEmits<typeof __VLS_3063.emit>;
(__VLS_3063.slots!).default;
}
{
const __VLS_3065 = __VLS_intrinsicElements["option"];
const __VLS_3066 = __VLS_elementAsFunctionalComponent(__VLS_3065);
const __VLS_3067 = __VLS_3066({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3066));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3065, typeof __VLS_3067> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3068 = __VLS_pickFunctionalComponentCtx(__VLS_3065, __VLS_3067)!;
let __VLS_3069!: __VLS_NormalizeEmits<typeof __VLS_3068.emit>;
(__VLS_3068.slots!).default;
}
(__VLS_3058.slots!).default;
}
{
const __VLS_3070 = __VLS_intrinsicElements["input"];
const __VLS_3071 = __VLS_elementAsFunctionalComponent(__VLS_3070);
const __VLS_3072 = __VLS_3071({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-24"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3071));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3070, typeof __VLS_3072> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-24"), value: ("1"), });
const __VLS_3073 = __VLS_pickFunctionalComponentCtx(__VLS_3070, __VLS_3072)!;
let __VLS_3074!: __VLS_NormalizeEmits<typeof __VLS_3073.emit>;
}
{
const __VLS_3075 = __VLS_intrinsicElements["label"];
const __VLS_3076 = __VLS_elementAsFunctionalComponent(__VLS_3075);
const __VLS_3077 = __VLS_3076({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3076));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3075, typeof __VLS_3077> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_3078 = __VLS_pickFunctionalComponentCtx(__VLS_3075, __VLS_3077)!;
let __VLS_3079!: __VLS_NormalizeEmits<typeof __VLS_3078.emit>;
(__VLS_3078.slots!).default;
}
{
const __VLS_3080 = __VLS_intrinsicElements["input"];
const __VLS_3081 = __VLS_elementAsFunctionalComponent(__VLS_3080);
const __VLS_3082 = __VLS_3081({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-24"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3081));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3080, typeof __VLS_3082> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-24"), value: ("1"), });
const __VLS_3083 = __VLS_pickFunctionalComponentCtx(__VLS_3080, __VLS_3082)!;
let __VLS_3084!: __VLS_NormalizeEmits<typeof __VLS_3083.emit>;
}
{
const __VLS_3085 = __VLS_intrinsicElements["label"];
const __VLS_3086 = __VLS_elementAsFunctionalComponent(__VLS_3085);
const __VLS_3087 = __VLS_3086({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3086));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3085, typeof __VLS_3087> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_3088 = __VLS_pickFunctionalComponentCtx(__VLS_3085, __VLS_3087)!;
let __VLS_3089!: __VLS_NormalizeEmits<typeof __VLS_3088.emit>;
(__VLS_3088.slots!).default;
}
(__VLS_3048.slots!).default;
}
{
const __VLS_3090 = __VLS_intrinsicElements["fieldset"];
const __VLS_3091 = __VLS_elementAsFunctionalComponent(__VLS_3090);
const __VLS_3092 = __VLS_3091({ ...{}, id: ("fieldset_50"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3091));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3090, typeof __VLS_3092> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_50"), style: ({}), });
const __VLS_3093 = __VLS_pickFunctionalComponentCtx(__VLS_3090, __VLS_3092)!;
let __VLS_3094!: __VLS_NormalizeEmits<typeof __VLS_3093.emit>;
{
const __VLS_3095 = __VLS_intrinsicElements["label"];
const __VLS_3096 = __VLS_elementAsFunctionalComponent(__VLS_3095);
const __VLS_3097 = __VLS_3096({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3096));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3095, typeof __VLS_3097> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3098 = __VLS_pickFunctionalComponentCtx(__VLS_3095, __VLS_3097)!;
let __VLS_3099!: __VLS_NormalizeEmits<typeof __VLS_3098.emit>;
(__VLS_3098.slots!).default;
}
{
const __VLS_3100 = __VLS_intrinsicElements["select"];
const __VLS_3101 = __VLS_elementAsFunctionalComponent(__VLS_3100);
const __VLS_3102 = __VLS_3101({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3100, typeof __VLS_3102> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3103 = __VLS_pickFunctionalComponentCtx(__VLS_3100, __VLS_3102)!;
let __VLS_3104!: __VLS_NormalizeEmits<typeof __VLS_3103.emit>;
{
const __VLS_3105 = __VLS_intrinsicElements["option"];
const __VLS_3106 = __VLS_elementAsFunctionalComponent(__VLS_3105);
const __VLS_3107 = __VLS_3106({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3105, typeof __VLS_3107> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3108 = __VLS_pickFunctionalComponentCtx(__VLS_3105, __VLS_3107)!;
let __VLS_3109!: __VLS_NormalizeEmits<typeof __VLS_3108.emit>;
(__VLS_3108.slots!).default;
}
{
const __VLS_3110 = __VLS_intrinsicElements["option"];
const __VLS_3111 = __VLS_elementAsFunctionalComponent(__VLS_3110);
const __VLS_3112 = __VLS_3111({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3110, typeof __VLS_3112> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3113 = __VLS_pickFunctionalComponentCtx(__VLS_3110, __VLS_3112)!;
let __VLS_3114!: __VLS_NormalizeEmits<typeof __VLS_3113.emit>;
(__VLS_3113.slots!).default;
}
(__VLS_3103.slots!).default;
}
{
const __VLS_3115 = __VLS_intrinsicElements["div"];
const __VLS_3116 = __VLS_elementAsFunctionalComponent(__VLS_3115);
const __VLS_3117 = __VLS_3116({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3115, typeof __VLS_3117> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3118 = __VLS_pickFunctionalComponentCtx(__VLS_3115, __VLS_3117)!;
let __VLS_3119!: __VLS_NormalizeEmits<typeof __VLS_3118.emit>;
{
const __VLS_3120 = __VLS_intrinsicElements["input"];
const __VLS_3121 = __VLS_elementAsFunctionalComponent(__VLS_3120);
const __VLS_3122 = __VLS_3121({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3121));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3120, typeof __VLS_3122> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(______LF)"), style: ({}), });
const __VLS_3123 = __VLS_pickFunctionalComponentCtx(__VLS_3120, __VLS_3122)!;
let __VLS_3124!: __VLS_NormalizeEmits<typeof __VLS_3123.emit>;
}
(__VLS_3118.slots!).default;
}
(__VLS_3093.slots!).default;
}
{
const __VLS_3125 = __VLS_intrinsicElements["fieldset"];
const __VLS_3126 = __VLS_elementAsFunctionalComponent(__VLS_3125);
const __VLS_3127 = __VLS_3126({ ...{}, id: ("fieldset_51"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3126));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3125, typeof __VLS_3127> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_51"), style: ({}), });
const __VLS_3128 = __VLS_pickFunctionalComponentCtx(__VLS_3125, __VLS_3127)!;
let __VLS_3129!: __VLS_NormalizeEmits<typeof __VLS_3128.emit>;
{
const __VLS_3130 = __VLS_intrinsicElements["label"];
const __VLS_3131 = __VLS_elementAsFunctionalComponent(__VLS_3130);
const __VLS_3132 = __VLS_3131({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3130, typeof __VLS_3132> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3133 = __VLS_pickFunctionalComponentCtx(__VLS_3130, __VLS_3132)!;
let __VLS_3134!: __VLS_NormalizeEmits<typeof __VLS_3133.emit>;
(__VLS_3133.slots!).default;
}
{
const __VLS_3135 = __VLS_intrinsicElements["select"];
const __VLS_3136 = __VLS_elementAsFunctionalComponent(__VLS_3135);
const __VLS_3137 = __VLS_3136({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3135, typeof __VLS_3137> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3138 = __VLS_pickFunctionalComponentCtx(__VLS_3135, __VLS_3137)!;
let __VLS_3139!: __VLS_NormalizeEmits<typeof __VLS_3138.emit>;
{
const __VLS_3140 = __VLS_intrinsicElements["option"];
const __VLS_3141 = __VLS_elementAsFunctionalComponent(__VLS_3140);
const __VLS_3142 = __VLS_3141({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3140, typeof __VLS_3142> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3143 = __VLS_pickFunctionalComponentCtx(__VLS_3140, __VLS_3142)!;
let __VLS_3144!: __VLS_NormalizeEmits<typeof __VLS_3143.emit>;
(__VLS_3143.slots!).default;
}
{
const __VLS_3145 = __VLS_intrinsicElements["option"];
const __VLS_3146 = __VLS_elementAsFunctionalComponent(__VLS_3145);
const __VLS_3147 = __VLS_3146({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3145, typeof __VLS_3147> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3148 = __VLS_pickFunctionalComponentCtx(__VLS_3145, __VLS_3147)!;
let __VLS_3149!: __VLS_NormalizeEmits<typeof __VLS_3148.emit>;
(__VLS_3148.slots!).default;
}
(__VLS_3138.slots!).default;
}
{
const __VLS_3150 = __VLS_intrinsicElements["div"];
const __VLS_3151 = __VLS_elementAsFunctionalComponent(__VLS_3150);
const __VLS_3152 = __VLS_3151({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3150, typeof __VLS_3152> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3153 = __VLS_pickFunctionalComponentCtx(__VLS_3150, __VLS_3152)!;
let __VLS_3154!: __VLS_NormalizeEmits<typeof __VLS_3153.emit>;
{
const __VLS_3155 = __VLS_intrinsicElements["input"];
const __VLS_3156 = __VLS_elementAsFunctionalComponent(__VLS_3155);
const __VLS_3157 = __VLS_3156({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3155, typeof __VLS_3157> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), });
const __VLS_3158 = __VLS_pickFunctionalComponentCtx(__VLS_3155, __VLS_3157)!;
let __VLS_3159!: __VLS_NormalizeEmits<typeof __VLS_3158.emit>;
}
(__VLS_3153.slots!).default;
}
(__VLS_3128.slots!).default;
}
{
const __VLS_3160 = __VLS_intrinsicElements["fieldset"];
const __VLS_3161 = __VLS_elementAsFunctionalComponent(__VLS_3160);
const __VLS_3162 = __VLS_3161({ ...{}, id: ("fieldset_52"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3160, typeof __VLS_3162> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_52"), style: ({}), });
const __VLS_3163 = __VLS_pickFunctionalComponentCtx(__VLS_3160, __VLS_3162)!;
let __VLS_3164!: __VLS_NormalizeEmits<typeof __VLS_3163.emit>;
{
const __VLS_3165 = __VLS_intrinsicElements["h1"];
const __VLS_3166 = __VLS_elementAsFunctionalComponent(__VLS_3165);
const __VLS_3167 = __VLS_3166({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_3166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3165, typeof __VLS_3167> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_3168 = __VLS_pickFunctionalComponentCtx(__VLS_3165, __VLS_3167)!;
let __VLS_3169!: __VLS_NormalizeEmits<typeof __VLS_3168.emit>;
(__VLS_3168.slots!).default;
}
{
const __VLS_3170 = __VLS_intrinsicElements["fieldset"];
const __VLS_3171 = __VLS_elementAsFunctionalComponent(__VLS_3170);
const __VLS_3172 = __VLS_3171({ ...{}, id: ("fieldset_53"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3170, typeof __VLS_3172> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_53"), style: ({}), });
const __VLS_3173 = __VLS_pickFunctionalComponentCtx(__VLS_3170, __VLS_3172)!;
let __VLS_3174!: __VLS_NormalizeEmits<typeof __VLS_3173.emit>;
{
const __VLS_3175 = __VLS_intrinsicElements["label"];
const __VLS_3176 = __VLS_elementAsFunctionalComponent(__VLS_3175);
const __VLS_3177 = __VLS_3176({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3175, typeof __VLS_3177> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3178 = __VLS_pickFunctionalComponentCtx(__VLS_3175, __VLS_3177)!;
let __VLS_3179!: __VLS_NormalizeEmits<typeof __VLS_3178.emit>;
(__VLS_3178.slots!).default;
}
{
const __VLS_3180 = __VLS_intrinsicElements["select"];
const __VLS_3181 = __VLS_elementAsFunctionalComponent(__VLS_3180);
const __VLS_3182 = __VLS_3181({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3181));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3180, typeof __VLS_3182> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3183 = __VLS_pickFunctionalComponentCtx(__VLS_3180, __VLS_3182)!;
let __VLS_3184!: __VLS_NormalizeEmits<typeof __VLS_3183.emit>;
{
const __VLS_3185 = __VLS_intrinsicElements["option"];
const __VLS_3186 = __VLS_elementAsFunctionalComponent(__VLS_3185);
const __VLS_3187 = __VLS_3186({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3186));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3185, typeof __VLS_3187> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3188 = __VLS_pickFunctionalComponentCtx(__VLS_3185, __VLS_3187)!;
let __VLS_3189!: __VLS_NormalizeEmits<typeof __VLS_3188.emit>;
(__VLS_3188.slots!).default;
}
{
const __VLS_3190 = __VLS_intrinsicElements["option"];
const __VLS_3191 = __VLS_elementAsFunctionalComponent(__VLS_3190);
const __VLS_3192 = __VLS_3191({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3191));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3190, typeof __VLS_3192> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3193 = __VLS_pickFunctionalComponentCtx(__VLS_3190, __VLS_3192)!;
let __VLS_3194!: __VLS_NormalizeEmits<typeof __VLS_3193.emit>;
(__VLS_3193.slots!).default;
}
(__VLS_3183.slots!).default;
}
{
const __VLS_3195 = __VLS_intrinsicElements["div"];
const __VLS_3196 = __VLS_elementAsFunctionalComponent(__VLS_3195);
const __VLS_3197 = __VLS_3196({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3195, typeof __VLS_3197> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3198 = __VLS_pickFunctionalComponentCtx(__VLS_3195, __VLS_3197)!;
let __VLS_3199!: __VLS_NormalizeEmits<typeof __VLS_3198.emit>;
{
const __VLS_3200 = __VLS_intrinsicElements["input"];
const __VLS_3201 = __VLS_elementAsFunctionalComponent(__VLS_3200);
const __VLS_3202 = __VLS_3201({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3201));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3200, typeof __VLS_3202> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), });
const __VLS_3203 = __VLS_pickFunctionalComponentCtx(__VLS_3200, __VLS_3202)!;
let __VLS_3204!: __VLS_NormalizeEmits<typeof __VLS_3203.emit>;
}
(__VLS_3198.slots!).default;
}
(__VLS_3173.slots!).default;
}
(__VLS_3163.slots!).default;
}
{
const __VLS_3205 = __VLS_intrinsicElements["fieldset"];
const __VLS_3206 = __VLS_elementAsFunctionalComponent(__VLS_3205);
const __VLS_3207 = __VLS_3206({ ...{}, id: ("fieldset_54"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3205, typeof __VLS_3207> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_54"), style: ({}), });
const __VLS_3208 = __VLS_pickFunctionalComponentCtx(__VLS_3205, __VLS_3207)!;
let __VLS_3209!: __VLS_NormalizeEmits<typeof __VLS_3208.emit>;
{
const __VLS_3210 = __VLS_intrinsicElements["div"];
const __VLS_3211 = __VLS_elementAsFunctionalComponent(__VLS_3210);
const __VLS_3212 = __VLS_3211({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3210, typeof __VLS_3212> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_3213 = __VLS_pickFunctionalComponentCtx(__VLS_3210, __VLS_3212)!;
let __VLS_3214!: __VLS_NormalizeEmits<typeof __VLS_3213.emit>;
{
const __VLS_3215 = __VLS_intrinsicElements["label"];
const __VLS_3216 = __VLS_elementAsFunctionalComponent(__VLS_3215);
const __VLS_3217 = __VLS_3216({ ...{}, class: ("equipamientos-titulos-2"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3215, typeof __VLS_3217> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos-2"), for: ("zippers"), });
const __VLS_3218 = __VLS_pickFunctionalComponentCtx(__VLS_3215, __VLS_3217)!;
let __VLS_3219!: __VLS_NormalizeEmits<typeof __VLS_3218.emit>;
(__VLS_3218.slots!).default;
}
{
const __VLS_3220 = __VLS_intrinsicElements["div"];
const __VLS_3221 = __VLS_elementAsFunctionalComponent(__VLS_3220);
const __VLS_3222 = __VLS_3221({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_3221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3220, typeof __VLS_3222> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3223 = __VLS_pickFunctionalComponentCtx(__VLS_3220, __VLS_3222)!;
let __VLS_3224!: __VLS_NormalizeEmits<typeof __VLS_3223.emit>;
{
const __VLS_3225 = __VLS_intrinsicElements["input"];
const __VLS_3226 = __VLS_elementAsFunctionalComponent(__VLS_3225);
const __VLS_3227 = __VLS_3226({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-23"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3225, typeof __VLS_3227> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-23"), value: ("1"), });
const __VLS_3228 = __VLS_pickFunctionalComponentCtx(__VLS_3225, __VLS_3227)!;
let __VLS_3229!: __VLS_NormalizeEmits<typeof __VLS_3228.emit>;
}
{
const __VLS_3230 = __VLS_intrinsicElements["label"];
const __VLS_3231 = __VLS_elementAsFunctionalComponent(__VLS_3230);
const __VLS_3232 = __VLS_3231({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3230, typeof __VLS_3232> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_3233 = __VLS_pickFunctionalComponentCtx(__VLS_3230, __VLS_3232)!;
let __VLS_3234!: __VLS_NormalizeEmits<typeof __VLS_3233.emit>;
(__VLS_3233.slots!).default;
}
(__VLS_3223.slots!).default;
}
{
const __VLS_3235 = __VLS_intrinsicElements["div"];
const __VLS_3236 = __VLS_elementAsFunctionalComponent(__VLS_3235);
const __VLS_3237 = __VLS_3236({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_3236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3235, typeof __VLS_3237> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3238 = __VLS_pickFunctionalComponentCtx(__VLS_3235, __VLS_3237)!;
let __VLS_3239!: __VLS_NormalizeEmits<typeof __VLS_3238.emit>;
{
const __VLS_3240 = __VLS_intrinsicElements["input"];
const __VLS_3241 = __VLS_elementAsFunctionalComponent(__VLS_3240);
const __VLS_3242 = __VLS_3241({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-23"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3241));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3240, typeof __VLS_3242> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-23"), value: ("1"), });
const __VLS_3243 = __VLS_pickFunctionalComponentCtx(__VLS_3240, __VLS_3242)!;
let __VLS_3244!: __VLS_NormalizeEmits<typeof __VLS_3243.emit>;
}
{
const __VLS_3245 = __VLS_intrinsicElements["label"];
const __VLS_3246 = __VLS_elementAsFunctionalComponent(__VLS_3245);
const __VLS_3247 = __VLS_3246({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3246));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3245, typeof __VLS_3247> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_3248 = __VLS_pickFunctionalComponentCtx(__VLS_3245, __VLS_3247)!;
let __VLS_3249!: __VLS_NormalizeEmits<typeof __VLS_3248.emit>;
(__VLS_3248.slots!).default;
}
(__VLS_3238.slots!).default;
}
(__VLS_3213.slots!).default;
}
{
const __VLS_3250 = __VLS_intrinsicElements["select"];
const __VLS_3251 = __VLS_elementAsFunctionalComponent(__VLS_3250);
const __VLS_3252 = __VLS_3251({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3250, typeof __VLS_3252> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3253 = __VLS_pickFunctionalComponentCtx(__VLS_3250, __VLS_3252)!;
let __VLS_3254!: __VLS_NormalizeEmits<typeof __VLS_3253.emit>;
{
const __VLS_3255 = __VLS_intrinsicElements["option"];
const __VLS_3256 = __VLS_elementAsFunctionalComponent(__VLS_3255);
const __VLS_3257 = __VLS_3256({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3255, typeof __VLS_3257> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3258 = __VLS_pickFunctionalComponentCtx(__VLS_3255, __VLS_3257)!;
let __VLS_3259!: __VLS_NormalizeEmits<typeof __VLS_3258.emit>;
(__VLS_3258.slots!).default;
}
{
const __VLS_3260 = __VLS_intrinsicElements["option"];
const __VLS_3261 = __VLS_elementAsFunctionalComponent(__VLS_3260);
const __VLS_3262 = __VLS_3261({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3260, typeof __VLS_3262> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3263 = __VLS_pickFunctionalComponentCtx(__VLS_3260, __VLS_3262)!;
let __VLS_3264!: __VLS_NormalizeEmits<typeof __VLS_3263.emit>;
(__VLS_3263.slots!).default;
}
(__VLS_3253.slots!).default;
}
{
const __VLS_3265 = __VLS_intrinsicElements["div"];
const __VLS_3266 = __VLS_elementAsFunctionalComponent(__VLS_3265);
const __VLS_3267 = __VLS_3266({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3265, typeof __VLS_3267> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3268 = __VLS_pickFunctionalComponentCtx(__VLS_3265, __VLS_3267)!;
let __VLS_3269!: __VLS_NormalizeEmits<typeof __VLS_3268.emit>;
{
const __VLS_3270 = __VLS_intrinsicElements["input"];
const __VLS_3271 = __VLS_elementAsFunctionalComponent(__VLS_3270);
const __VLS_3272 = __VLS_3271({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3271));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3270, typeof __VLS_3272> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), });
const __VLS_3273 = __VLS_pickFunctionalComponentCtx(__VLS_3270, __VLS_3272)!;
let __VLS_3274!: __VLS_NormalizeEmits<typeof __VLS_3273.emit>;
}
(__VLS_3268.slots!).default;
}
(__VLS_3208.slots!).default;
}
{
const __VLS_3275 = __VLS_intrinsicElements["fieldset"];
const __VLS_3276 = __VLS_elementAsFunctionalComponent(__VLS_3275);
const __VLS_3277 = __VLS_3276({ ...{}, id: ("fieldset_55"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3276));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3275, typeof __VLS_3277> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_55"), style: ({}), });
const __VLS_3278 = __VLS_pickFunctionalComponentCtx(__VLS_3275, __VLS_3277)!;
let __VLS_3279!: __VLS_NormalizeEmits<typeof __VLS_3278.emit>;
{
const __VLS_3280 = __VLS_intrinsicElements["div"];
const __VLS_3281 = __VLS_elementAsFunctionalComponent(__VLS_3280);
const __VLS_3282 = __VLS_3281({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3281));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3280, typeof __VLS_3282> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_3283 = __VLS_pickFunctionalComponentCtx(__VLS_3280, __VLS_3282)!;
let __VLS_3284!: __VLS_NormalizeEmits<typeof __VLS_3283.emit>;
{
const __VLS_3285 = __VLS_intrinsicElements["label"];
const __VLS_3286 = __VLS_elementAsFunctionalComponent(__VLS_3285);
const __VLS_3287 = __VLS_3286({ ...{}, class: ("equipamientos-titulos-2"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3286));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3285, typeof __VLS_3287> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos-2"), for: ("zippers"), });
const __VLS_3288 = __VLS_pickFunctionalComponentCtx(__VLS_3285, __VLS_3287)!;
let __VLS_3289!: __VLS_NormalizeEmits<typeof __VLS_3288.emit>;
(__VLS_3288.slots!).default;
}
{
const __VLS_3290 = __VLS_intrinsicElements["div"];
const __VLS_3291 = __VLS_elementAsFunctionalComponent(__VLS_3290);
const __VLS_3292 = __VLS_3291({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_3291));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3290, typeof __VLS_3292> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3293 = __VLS_pickFunctionalComponentCtx(__VLS_3290, __VLS_3292)!;
let __VLS_3294!: __VLS_NormalizeEmits<typeof __VLS_3293.emit>;
{
const __VLS_3295 = __VLS_intrinsicElements["input"];
const __VLS_3296 = __VLS_elementAsFunctionalComponent(__VLS_3295);
const __VLS_3297 = __VLS_3296({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-23"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3296));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3295, typeof __VLS_3297> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-23"), value: ("1"), });
const __VLS_3298 = __VLS_pickFunctionalComponentCtx(__VLS_3295, __VLS_3297)!;
let __VLS_3299!: __VLS_NormalizeEmits<typeof __VLS_3298.emit>;
}
{
const __VLS_3300 = __VLS_intrinsicElements["label"];
const __VLS_3301 = __VLS_elementAsFunctionalComponent(__VLS_3300);
const __VLS_3302 = __VLS_3301({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3301));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3300, typeof __VLS_3302> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_3303 = __VLS_pickFunctionalComponentCtx(__VLS_3300, __VLS_3302)!;
let __VLS_3304!: __VLS_NormalizeEmits<typeof __VLS_3303.emit>;
(__VLS_3303.slots!).default;
}
(__VLS_3293.slots!).default;
}
{
const __VLS_3305 = __VLS_intrinsicElements["div"];
const __VLS_3306 = __VLS_elementAsFunctionalComponent(__VLS_3305);
const __VLS_3307 = __VLS_3306({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_3306));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3305, typeof __VLS_3307> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3308 = __VLS_pickFunctionalComponentCtx(__VLS_3305, __VLS_3307)!;
let __VLS_3309!: __VLS_NormalizeEmits<typeof __VLS_3308.emit>;
{
const __VLS_3310 = __VLS_intrinsicElements["input"];
const __VLS_3311 = __VLS_elementAsFunctionalComponent(__VLS_3310);
const __VLS_3312 = __VLS_3311({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-23"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3311));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3310, typeof __VLS_3312> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-23"), value: ("1"), });
const __VLS_3313 = __VLS_pickFunctionalComponentCtx(__VLS_3310, __VLS_3312)!;
let __VLS_3314!: __VLS_NormalizeEmits<typeof __VLS_3313.emit>;
}
{
const __VLS_3315 = __VLS_intrinsicElements["label"];
const __VLS_3316 = __VLS_elementAsFunctionalComponent(__VLS_3315);
const __VLS_3317 = __VLS_3316({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3316));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3315, typeof __VLS_3317> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_3318 = __VLS_pickFunctionalComponentCtx(__VLS_3315, __VLS_3317)!;
let __VLS_3319!: __VLS_NormalizeEmits<typeof __VLS_3318.emit>;
(__VLS_3318.slots!).default;
}
(__VLS_3308.slots!).default;
}
(__VLS_3283.slots!).default;
}
{
const __VLS_3320 = __VLS_intrinsicElements["select"];
const __VLS_3321 = __VLS_elementAsFunctionalComponent(__VLS_3320);
const __VLS_3322 = __VLS_3321({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3321));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3320, typeof __VLS_3322> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3323 = __VLS_pickFunctionalComponentCtx(__VLS_3320, __VLS_3322)!;
let __VLS_3324!: __VLS_NormalizeEmits<typeof __VLS_3323.emit>;
{
const __VLS_3325 = __VLS_intrinsicElements["option"];
const __VLS_3326 = __VLS_elementAsFunctionalComponent(__VLS_3325);
const __VLS_3327 = __VLS_3326({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3326));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3325, typeof __VLS_3327> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3328 = __VLS_pickFunctionalComponentCtx(__VLS_3325, __VLS_3327)!;
let __VLS_3329!: __VLS_NormalizeEmits<typeof __VLS_3328.emit>;
(__VLS_3328.slots!).default;
}
{
const __VLS_3330 = __VLS_intrinsicElements["option"];
const __VLS_3331 = __VLS_elementAsFunctionalComponent(__VLS_3330);
const __VLS_3332 = __VLS_3331({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3331));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3330, typeof __VLS_3332> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3333 = __VLS_pickFunctionalComponentCtx(__VLS_3330, __VLS_3332)!;
let __VLS_3334!: __VLS_NormalizeEmits<typeof __VLS_3333.emit>;
(__VLS_3333.slots!).default;
}
(__VLS_3323.slots!).default;
}
{
const __VLS_3335 = __VLS_intrinsicElements["div"];
const __VLS_3336 = __VLS_elementAsFunctionalComponent(__VLS_3335);
const __VLS_3337 = __VLS_3336({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3336));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3335, typeof __VLS_3337> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3338 = __VLS_pickFunctionalComponentCtx(__VLS_3335, __VLS_3337)!;
let __VLS_3339!: __VLS_NormalizeEmits<typeof __VLS_3338.emit>;
{
const __VLS_3340 = __VLS_intrinsicElements["input"];
const __VLS_3341 = __VLS_elementAsFunctionalComponent(__VLS_3340);
const __VLS_3342 = __VLS_3341({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), }, ...__VLS_functionalComponentArgsRest(__VLS_3341));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3340, typeof __VLS_3342> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), });
const __VLS_3343 = __VLS_pickFunctionalComponentCtx(__VLS_3340, __VLS_3342)!;
let __VLS_3344!: __VLS_NormalizeEmits<typeof __VLS_3343.emit>;
}
(__VLS_3338.slots!).default;
}
(__VLS_3278.slots!).default;
}
{
const __VLS_3345 = __VLS_intrinsicElements["fieldset"];
const __VLS_3346 = __VLS_elementAsFunctionalComponent(__VLS_3345);
const __VLS_3347 = __VLS_3346({ ...{}, id: ("fieldset_56"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3346));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3345, typeof __VLS_3347> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_56"), style: ({}), });
const __VLS_3348 = __VLS_pickFunctionalComponentCtx(__VLS_3345, __VLS_3347)!;
let __VLS_3349!: __VLS_NormalizeEmits<typeof __VLS_3348.emit>;
{
const __VLS_3350 = __VLS_intrinsicElements["label"];
const __VLS_3351 = __VLS_elementAsFunctionalComponent(__VLS_3350);
const __VLS_3352 = __VLS_3351({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3351));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3350, typeof __VLS_3352> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3353 = __VLS_pickFunctionalComponentCtx(__VLS_3350, __VLS_3352)!;
let __VLS_3354!: __VLS_NormalizeEmits<typeof __VLS_3353.emit>;
(__VLS_3353.slots!).default;
}
{
const __VLS_3355 = __VLS_intrinsicElements["select"];
const __VLS_3356 = __VLS_elementAsFunctionalComponent(__VLS_3355);
const __VLS_3357 = __VLS_3356({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3356));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3355, typeof __VLS_3357> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3358 = __VLS_pickFunctionalComponentCtx(__VLS_3355, __VLS_3357)!;
let __VLS_3359!: __VLS_NormalizeEmits<typeof __VLS_3358.emit>;
{
const __VLS_3360 = __VLS_intrinsicElements["option"];
const __VLS_3361 = __VLS_elementAsFunctionalComponent(__VLS_3360);
const __VLS_3362 = __VLS_3361({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3361));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3360, typeof __VLS_3362> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3363 = __VLS_pickFunctionalComponentCtx(__VLS_3360, __VLS_3362)!;
let __VLS_3364!: __VLS_NormalizeEmits<typeof __VLS_3363.emit>;
(__VLS_3363.slots!).default;
}
{
const __VLS_3365 = __VLS_intrinsicElements["option"];
const __VLS_3366 = __VLS_elementAsFunctionalComponent(__VLS_3365);
const __VLS_3367 = __VLS_3366({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3366));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3365, typeof __VLS_3367> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3368 = __VLS_pickFunctionalComponentCtx(__VLS_3365, __VLS_3367)!;
let __VLS_3369!: __VLS_NormalizeEmits<typeof __VLS_3368.emit>;
(__VLS_3368.slots!).default;
}
(__VLS_3358.slots!).default;
}
{
const __VLS_3370 = __VLS_intrinsicElements["div"];
const __VLS_3371 = __VLS_elementAsFunctionalComponent(__VLS_3370);
const __VLS_3372 = __VLS_3371({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3371));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3370, typeof __VLS_3372> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3373 = __VLS_pickFunctionalComponentCtx(__VLS_3370, __VLS_3372)!;
let __VLS_3374!: __VLS_NormalizeEmits<typeof __VLS_3373.emit>;
{
const __VLS_3375 = __VLS_intrinsicElements["input"];
const __VLS_3376 = __VLS_elementAsFunctionalComponent(__VLS_3375);
const __VLS_3377 = __VLS_3376({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3376));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3375, typeof __VLS_3377> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3378 = __VLS_pickFunctionalComponentCtx(__VLS_3375, __VLS_3377)!;
let __VLS_3379!: __VLS_NormalizeEmits<typeof __VLS_3378.emit>;
}
(__VLS_3373.slots!).default;
}
(__VLS_3348.slots!).default;
}
{
const __VLS_3380 = __VLS_intrinsicElements["fieldset"];
const __VLS_3381 = __VLS_elementAsFunctionalComponent(__VLS_3380);
const __VLS_3382 = __VLS_3381({ ...{}, id: ("fieldset_57"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3381));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3380, typeof __VLS_3382> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_57"), style: ({}), });
const __VLS_3383 = __VLS_pickFunctionalComponentCtx(__VLS_3380, __VLS_3382)!;
let __VLS_3384!: __VLS_NormalizeEmits<typeof __VLS_3383.emit>;
{
const __VLS_3385 = __VLS_intrinsicElements["label"];
const __VLS_3386 = __VLS_elementAsFunctionalComponent(__VLS_3385);
const __VLS_3387 = __VLS_3386({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3386));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3385, typeof __VLS_3387> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3388 = __VLS_pickFunctionalComponentCtx(__VLS_3385, __VLS_3387)!;
let __VLS_3389!: __VLS_NormalizeEmits<typeof __VLS_3388.emit>;
(__VLS_3388.slots!).default;
}
{
const __VLS_3390 = __VLS_intrinsicElements["select"];
const __VLS_3391 = __VLS_elementAsFunctionalComponent(__VLS_3390);
const __VLS_3392 = __VLS_3391({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3391));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3390, typeof __VLS_3392> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3393 = __VLS_pickFunctionalComponentCtx(__VLS_3390, __VLS_3392)!;
let __VLS_3394!: __VLS_NormalizeEmits<typeof __VLS_3393.emit>;
{
const __VLS_3395 = __VLS_intrinsicElements["option"];
const __VLS_3396 = __VLS_elementAsFunctionalComponent(__VLS_3395);
const __VLS_3397 = __VLS_3396({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3396));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3395, typeof __VLS_3397> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3398 = __VLS_pickFunctionalComponentCtx(__VLS_3395, __VLS_3397)!;
let __VLS_3399!: __VLS_NormalizeEmits<typeof __VLS_3398.emit>;
(__VLS_3398.slots!).default;
}
{
const __VLS_3400 = __VLS_intrinsicElements["option"];
const __VLS_3401 = __VLS_elementAsFunctionalComponent(__VLS_3400);
const __VLS_3402 = __VLS_3401({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3401));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3400, typeof __VLS_3402> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3403 = __VLS_pickFunctionalComponentCtx(__VLS_3400, __VLS_3402)!;
let __VLS_3404!: __VLS_NormalizeEmits<typeof __VLS_3403.emit>;
(__VLS_3403.slots!).default;
}
(__VLS_3393.slots!).default;
}
{
const __VLS_3405 = __VLS_intrinsicElements["div"];
const __VLS_3406 = __VLS_elementAsFunctionalComponent(__VLS_3405);
const __VLS_3407 = __VLS_3406({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3406));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3405, typeof __VLS_3407> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3408 = __VLS_pickFunctionalComponentCtx(__VLS_3405, __VLS_3407)!;
let __VLS_3409!: __VLS_NormalizeEmits<typeof __VLS_3408.emit>;
{
const __VLS_3410 = __VLS_intrinsicElements["input"];
const __VLS_3411 = __VLS_elementAsFunctionalComponent(__VLS_3410);
const __VLS_3412 = __VLS_3411({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3411));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3410, typeof __VLS_3412> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), });
const __VLS_3413 = __VLS_pickFunctionalComponentCtx(__VLS_3410, __VLS_3412)!;
let __VLS_3414!: __VLS_NormalizeEmits<typeof __VLS_3413.emit>;
}
(__VLS_3408.slots!).default;
}
(__VLS_3383.slots!).default;
}
{
const __VLS_3415 = __VLS_intrinsicElements["fieldset"];
const __VLS_3416 = __VLS_elementAsFunctionalComponent(__VLS_3415);
const __VLS_3417 = __VLS_3416({ ...{}, id: ("fieldset_58"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3416));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3415, typeof __VLS_3417> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_58"), style: ({}), });
const __VLS_3418 = __VLS_pickFunctionalComponentCtx(__VLS_3415, __VLS_3417)!;
let __VLS_3419!: __VLS_NormalizeEmits<typeof __VLS_3418.emit>;
{
const __VLS_3420 = __VLS_intrinsicElements["label"];
const __VLS_3421 = __VLS_elementAsFunctionalComponent(__VLS_3420);
const __VLS_3422 = __VLS_3421({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3421));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3420, typeof __VLS_3422> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3423 = __VLS_pickFunctionalComponentCtx(__VLS_3420, __VLS_3422)!;
let __VLS_3424!: __VLS_NormalizeEmits<typeof __VLS_3423.emit>;
(__VLS_3423.slots!).default;
}
{
const __VLS_3425 = __VLS_intrinsicElements["select"];
const __VLS_3426 = __VLS_elementAsFunctionalComponent(__VLS_3425);
const __VLS_3427 = __VLS_3426({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3426));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3425, typeof __VLS_3427> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3428 = __VLS_pickFunctionalComponentCtx(__VLS_3425, __VLS_3427)!;
let __VLS_3429!: __VLS_NormalizeEmits<typeof __VLS_3428.emit>;
{
const __VLS_3430 = __VLS_intrinsicElements["option"];
const __VLS_3431 = __VLS_elementAsFunctionalComponent(__VLS_3430);
const __VLS_3432 = __VLS_3431({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3431));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3430, typeof __VLS_3432> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3433 = __VLS_pickFunctionalComponentCtx(__VLS_3430, __VLS_3432)!;
let __VLS_3434!: __VLS_NormalizeEmits<typeof __VLS_3433.emit>;
(__VLS_3433.slots!).default;
}
{
const __VLS_3435 = __VLS_intrinsicElements["option"];
const __VLS_3436 = __VLS_elementAsFunctionalComponent(__VLS_3435);
const __VLS_3437 = __VLS_3436({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3436));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3435, typeof __VLS_3437> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3438 = __VLS_pickFunctionalComponentCtx(__VLS_3435, __VLS_3437)!;
let __VLS_3439!: __VLS_NormalizeEmits<typeof __VLS_3438.emit>;
(__VLS_3438.slots!).default;
}
(__VLS_3428.slots!).default;
}
{
const __VLS_3440 = __VLS_intrinsicElements["div"];
const __VLS_3441 = __VLS_elementAsFunctionalComponent(__VLS_3440);
const __VLS_3442 = __VLS_3441({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3441));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3440, typeof __VLS_3442> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3443 = __VLS_pickFunctionalComponentCtx(__VLS_3440, __VLS_3442)!;
let __VLS_3444!: __VLS_NormalizeEmits<typeof __VLS_3443.emit>;
{
const __VLS_3445 = __VLS_intrinsicElements["input"];
const __VLS_3446 = __VLS_elementAsFunctionalComponent(__VLS_3445);
const __VLS_3447 = __VLS_3446({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3446));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3445, typeof __VLS_3447> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________LF)"), style: ({}), });
const __VLS_3448 = __VLS_pickFunctionalComponentCtx(__VLS_3445, __VLS_3447)!;
let __VLS_3449!: __VLS_NormalizeEmits<typeof __VLS_3448.emit>;
}
(__VLS_3443.slots!).default;
}
(__VLS_3418.slots!).default;
}
{
const __VLS_3450 = __VLS_intrinsicElements["fieldset"];
const __VLS_3451 = __VLS_elementAsFunctionalComponent(__VLS_3450);
const __VLS_3452 = __VLS_3451({ ...{}, id: ("fieldset_59"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3451));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3450, typeof __VLS_3452> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_59"), style: ({}), });
const __VLS_3453 = __VLS_pickFunctionalComponentCtx(__VLS_3450, __VLS_3452)!;
let __VLS_3454!: __VLS_NormalizeEmits<typeof __VLS_3453.emit>;
{
const __VLS_3455 = __VLS_intrinsicElements["label"];
const __VLS_3456 = __VLS_elementAsFunctionalComponent(__VLS_3455);
const __VLS_3457 = __VLS_3456({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3456));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3455, typeof __VLS_3457> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3458 = __VLS_pickFunctionalComponentCtx(__VLS_3455, __VLS_3457)!;
let __VLS_3459!: __VLS_NormalizeEmits<typeof __VLS_3458.emit>;
(__VLS_3458.slots!).default;
}
{
const __VLS_3460 = __VLS_intrinsicElements["select"];
const __VLS_3461 = __VLS_elementAsFunctionalComponent(__VLS_3460);
const __VLS_3462 = __VLS_3461({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3461));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3460, typeof __VLS_3462> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3463 = __VLS_pickFunctionalComponentCtx(__VLS_3460, __VLS_3462)!;
let __VLS_3464!: __VLS_NormalizeEmits<typeof __VLS_3463.emit>;
{
const __VLS_3465 = __VLS_intrinsicElements["option"];
const __VLS_3466 = __VLS_elementAsFunctionalComponent(__VLS_3465);
const __VLS_3467 = __VLS_3466({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3466));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3465, typeof __VLS_3467> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3468 = __VLS_pickFunctionalComponentCtx(__VLS_3465, __VLS_3467)!;
let __VLS_3469!: __VLS_NormalizeEmits<typeof __VLS_3468.emit>;
(__VLS_3468.slots!).default;
}
{
const __VLS_3470 = __VLS_intrinsicElements["option"];
const __VLS_3471 = __VLS_elementAsFunctionalComponent(__VLS_3470);
const __VLS_3472 = __VLS_3471({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3471));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3470, typeof __VLS_3472> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3473 = __VLS_pickFunctionalComponentCtx(__VLS_3470, __VLS_3472)!;
let __VLS_3474!: __VLS_NormalizeEmits<typeof __VLS_3473.emit>;
(__VLS_3473.slots!).default;
}
(__VLS_3463.slots!).default;
}
{
const __VLS_3475 = __VLS_intrinsicElements["div"];
const __VLS_3476 = __VLS_elementAsFunctionalComponent(__VLS_3475);
const __VLS_3477 = __VLS_3476({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3476));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3475, typeof __VLS_3477> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3478 = __VLS_pickFunctionalComponentCtx(__VLS_3475, __VLS_3477)!;
let __VLS_3479!: __VLS_NormalizeEmits<typeof __VLS_3478.emit>;
{
const __VLS_3480 = __VLS_intrinsicElements["input"];
const __VLS_3481 = __VLS_elementAsFunctionalComponent(__VLS_3480);
const __VLS_3482 = __VLS_3481({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3481));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3480, typeof __VLS_3482> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3483 = __VLS_pickFunctionalComponentCtx(__VLS_3480, __VLS_3482)!;
let __VLS_3484!: __VLS_NormalizeEmits<typeof __VLS_3483.emit>;
}
(__VLS_3478.slots!).default;
}
(__VLS_3453.slots!).default;
}
{
const __VLS_3485 = __VLS_intrinsicElements["fieldset"];
const __VLS_3486 = __VLS_elementAsFunctionalComponent(__VLS_3485);
const __VLS_3487 = __VLS_3486({ ...{}, id: ("fieldset_60"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3486));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3485, typeof __VLS_3487> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_60"), style: ({}), });
const __VLS_3488 = __VLS_pickFunctionalComponentCtx(__VLS_3485, __VLS_3487)!;
let __VLS_3489!: __VLS_NormalizeEmits<typeof __VLS_3488.emit>;
{
const __VLS_3490 = __VLS_intrinsicElements["label"];
const __VLS_3491 = __VLS_elementAsFunctionalComponent(__VLS_3490);
const __VLS_3492 = __VLS_3491({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3491));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3490, typeof __VLS_3492> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3493 = __VLS_pickFunctionalComponentCtx(__VLS_3490, __VLS_3492)!;
let __VLS_3494!: __VLS_NormalizeEmits<typeof __VLS_3493.emit>;
(__VLS_3493.slots!).default;
}
{
const __VLS_3495 = __VLS_intrinsicElements["select"];
const __VLS_3496 = __VLS_elementAsFunctionalComponent(__VLS_3495);
const __VLS_3497 = __VLS_3496({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3496));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3495, typeof __VLS_3497> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3498 = __VLS_pickFunctionalComponentCtx(__VLS_3495, __VLS_3497)!;
let __VLS_3499!: __VLS_NormalizeEmits<typeof __VLS_3498.emit>;
{
const __VLS_3500 = __VLS_intrinsicElements["option"];
const __VLS_3501 = __VLS_elementAsFunctionalComponent(__VLS_3500);
const __VLS_3502 = __VLS_3501({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3501));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3500, typeof __VLS_3502> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3503 = __VLS_pickFunctionalComponentCtx(__VLS_3500, __VLS_3502)!;
let __VLS_3504!: __VLS_NormalizeEmits<typeof __VLS_3503.emit>;
(__VLS_3503.slots!).default;
}
{
const __VLS_3505 = __VLS_intrinsicElements["option"];
const __VLS_3506 = __VLS_elementAsFunctionalComponent(__VLS_3505);
const __VLS_3507 = __VLS_3506({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3506));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3505, typeof __VLS_3507> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3508 = __VLS_pickFunctionalComponentCtx(__VLS_3505, __VLS_3507)!;
let __VLS_3509!: __VLS_NormalizeEmits<typeof __VLS_3508.emit>;
(__VLS_3508.slots!).default;
}
(__VLS_3498.slots!).default;
}
{
const __VLS_3510 = __VLS_intrinsicElements["div"];
const __VLS_3511 = __VLS_elementAsFunctionalComponent(__VLS_3510);
const __VLS_3512 = __VLS_3511({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3511));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3510, typeof __VLS_3512> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3513 = __VLS_pickFunctionalComponentCtx(__VLS_3510, __VLS_3512)!;
let __VLS_3514!: __VLS_NormalizeEmits<typeof __VLS_3513.emit>;
{
const __VLS_3515 = __VLS_intrinsicElements["input"];
const __VLS_3516 = __VLS_elementAsFunctionalComponent(__VLS_3515);
const __VLS_3517 = __VLS_3516({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3516));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3515, typeof __VLS_3517> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3518 = __VLS_pickFunctionalComponentCtx(__VLS_3515, __VLS_3517)!;
let __VLS_3519!: __VLS_NormalizeEmits<typeof __VLS_3518.emit>;
}
(__VLS_3513.slots!).default;
}
(__VLS_3488.slots!).default;
}
{
const __VLS_3520 = __VLS_intrinsicElements["fieldset"];
const __VLS_3521 = __VLS_elementAsFunctionalComponent(__VLS_3520);
const __VLS_3522 = __VLS_3521({ ...{}, id: ("fieldset_61"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3521));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3520, typeof __VLS_3522> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_61"), style: ({}), });
const __VLS_3523 = __VLS_pickFunctionalComponentCtx(__VLS_3520, __VLS_3522)!;
let __VLS_3524!: __VLS_NormalizeEmits<typeof __VLS_3523.emit>;
{
const __VLS_3525 = __VLS_intrinsicElements["label"];
const __VLS_3526 = __VLS_elementAsFunctionalComponent(__VLS_3525);
const __VLS_3527 = __VLS_3526({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3526));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3525, typeof __VLS_3527> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3528 = __VLS_pickFunctionalComponentCtx(__VLS_3525, __VLS_3527)!;
let __VLS_3529!: __VLS_NormalizeEmits<typeof __VLS_3528.emit>;
(__VLS_3528.slots!).default;
}
{
const __VLS_3530 = __VLS_intrinsicElements["select"];
const __VLS_3531 = __VLS_elementAsFunctionalComponent(__VLS_3530);
const __VLS_3532 = __VLS_3531({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3531));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3530, typeof __VLS_3532> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3533 = __VLS_pickFunctionalComponentCtx(__VLS_3530, __VLS_3532)!;
let __VLS_3534!: __VLS_NormalizeEmits<typeof __VLS_3533.emit>;
{
const __VLS_3535 = __VLS_intrinsicElements["option"];
const __VLS_3536 = __VLS_elementAsFunctionalComponent(__VLS_3535);
const __VLS_3537 = __VLS_3536({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3536));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3535, typeof __VLS_3537> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3538 = __VLS_pickFunctionalComponentCtx(__VLS_3535, __VLS_3537)!;
let __VLS_3539!: __VLS_NormalizeEmits<typeof __VLS_3538.emit>;
(__VLS_3538.slots!).default;
}
{
const __VLS_3540 = __VLS_intrinsicElements["option"];
const __VLS_3541 = __VLS_elementAsFunctionalComponent(__VLS_3540);
const __VLS_3542 = __VLS_3541({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3541));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3540, typeof __VLS_3542> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3543 = __VLS_pickFunctionalComponentCtx(__VLS_3540, __VLS_3542)!;
let __VLS_3544!: __VLS_NormalizeEmits<typeof __VLS_3543.emit>;
(__VLS_3543.slots!).default;
}
(__VLS_3533.slots!).default;
}
{
const __VLS_3545 = __VLS_intrinsicElements["div"];
const __VLS_3546 = __VLS_elementAsFunctionalComponent(__VLS_3545);
const __VLS_3547 = __VLS_3546({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3546));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3545, typeof __VLS_3547> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3548 = __VLS_pickFunctionalComponentCtx(__VLS_3545, __VLS_3547)!;
let __VLS_3549!: __VLS_NormalizeEmits<typeof __VLS_3548.emit>;
{
const __VLS_3550 = __VLS_intrinsicElements["input"];
const __VLS_3551 = __VLS_elementAsFunctionalComponent(__VLS_3550);
const __VLS_3552 = __VLS_3551({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3551));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3550, typeof __VLS_3552> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3553 = __VLS_pickFunctionalComponentCtx(__VLS_3550, __VLS_3552)!;
let __VLS_3554!: __VLS_NormalizeEmits<typeof __VLS_3553.emit>;
}
(__VLS_3548.slots!).default;
}
(__VLS_3523.slots!).default;
}
{
const __VLS_3555 = __VLS_intrinsicElements["fieldset"];
const __VLS_3556 = __VLS_elementAsFunctionalComponent(__VLS_3555);
const __VLS_3557 = __VLS_3556({ ...{}, id: ("fieldset_62"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3556));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3555, typeof __VLS_3557> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_62"), style: ({}), });
const __VLS_3558 = __VLS_pickFunctionalComponentCtx(__VLS_3555, __VLS_3557)!;
let __VLS_3559!: __VLS_NormalizeEmits<typeof __VLS_3558.emit>;
{
const __VLS_3560 = __VLS_intrinsicElements["label"];
const __VLS_3561 = __VLS_elementAsFunctionalComponent(__VLS_3560);
const __VLS_3562 = __VLS_3561({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3561));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3560, typeof __VLS_3562> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3563 = __VLS_pickFunctionalComponentCtx(__VLS_3560, __VLS_3562)!;
let __VLS_3564!: __VLS_NormalizeEmits<typeof __VLS_3563.emit>;
(__VLS_3563.slots!).default;
}
{
const __VLS_3565 = __VLS_intrinsicElements["select"];
const __VLS_3566 = __VLS_elementAsFunctionalComponent(__VLS_3565);
const __VLS_3567 = __VLS_3566({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3566));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3565, typeof __VLS_3567> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3568 = __VLS_pickFunctionalComponentCtx(__VLS_3565, __VLS_3567)!;
let __VLS_3569!: __VLS_NormalizeEmits<typeof __VLS_3568.emit>;
{
const __VLS_3570 = __VLS_intrinsicElements["option"];
const __VLS_3571 = __VLS_elementAsFunctionalComponent(__VLS_3570);
const __VLS_3572 = __VLS_3571({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3571));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3570, typeof __VLS_3572> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3573 = __VLS_pickFunctionalComponentCtx(__VLS_3570, __VLS_3572)!;
let __VLS_3574!: __VLS_NormalizeEmits<typeof __VLS_3573.emit>;
(__VLS_3573.slots!).default;
}
{
const __VLS_3575 = __VLS_intrinsicElements["option"];
const __VLS_3576 = __VLS_elementAsFunctionalComponent(__VLS_3575);
const __VLS_3577 = __VLS_3576({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3576));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3575, typeof __VLS_3577> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3578 = __VLS_pickFunctionalComponentCtx(__VLS_3575, __VLS_3577)!;
let __VLS_3579!: __VLS_NormalizeEmits<typeof __VLS_3578.emit>;
(__VLS_3578.slots!).default;
}
(__VLS_3568.slots!).default;
}
{
const __VLS_3580 = __VLS_intrinsicElements["div"];
const __VLS_3581 = __VLS_elementAsFunctionalComponent(__VLS_3580);
const __VLS_3582 = __VLS_3581({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3581));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3580, typeof __VLS_3582> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3583 = __VLS_pickFunctionalComponentCtx(__VLS_3580, __VLS_3582)!;
let __VLS_3584!: __VLS_NormalizeEmits<typeof __VLS_3583.emit>;
{
const __VLS_3585 = __VLS_intrinsicElements["input"];
const __VLS_3586 = __VLS_elementAsFunctionalComponent(__VLS_3585);
const __VLS_3587 = __VLS_3586({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3586));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3585, typeof __VLS_3587> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3588 = __VLS_pickFunctionalComponentCtx(__VLS_3585, __VLS_3587)!;
let __VLS_3589!: __VLS_NormalizeEmits<typeof __VLS_3588.emit>;
}
(__VLS_3583.slots!).default;
}
(__VLS_3558.slots!).default;
}
{
const __VLS_3590 = __VLS_intrinsicElements["fieldset"];
const __VLS_3591 = __VLS_elementAsFunctionalComponent(__VLS_3590);
const __VLS_3592 = __VLS_3591({ ...{}, id: ("fieldset_63"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3591));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3590, typeof __VLS_3592> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_63"), style: ({}), });
const __VLS_3593 = __VLS_pickFunctionalComponentCtx(__VLS_3590, __VLS_3592)!;
let __VLS_3594!: __VLS_NormalizeEmits<typeof __VLS_3593.emit>;
{
const __VLS_3595 = __VLS_intrinsicElements["label"];
const __VLS_3596 = __VLS_elementAsFunctionalComponent(__VLS_3595);
const __VLS_3597 = __VLS_3596({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3596));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3595, typeof __VLS_3597> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3598 = __VLS_pickFunctionalComponentCtx(__VLS_3595, __VLS_3597)!;
let __VLS_3599!: __VLS_NormalizeEmits<typeof __VLS_3598.emit>;
(__VLS_3598.slots!).default;
}
{
const __VLS_3600 = __VLS_intrinsicElements["select"];
const __VLS_3601 = __VLS_elementAsFunctionalComponent(__VLS_3600);
const __VLS_3602 = __VLS_3601({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3601));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3600, typeof __VLS_3602> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3603 = __VLS_pickFunctionalComponentCtx(__VLS_3600, __VLS_3602)!;
let __VLS_3604!: __VLS_NormalizeEmits<typeof __VLS_3603.emit>;
{
const __VLS_3605 = __VLS_intrinsicElements["option"];
const __VLS_3606 = __VLS_elementAsFunctionalComponent(__VLS_3605);
const __VLS_3607 = __VLS_3606({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3606));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3605, typeof __VLS_3607> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3608 = __VLS_pickFunctionalComponentCtx(__VLS_3605, __VLS_3607)!;
let __VLS_3609!: __VLS_NormalizeEmits<typeof __VLS_3608.emit>;
(__VLS_3608.slots!).default;
}
{
const __VLS_3610 = __VLS_intrinsicElements["option"];
const __VLS_3611 = __VLS_elementAsFunctionalComponent(__VLS_3610);
const __VLS_3612 = __VLS_3611({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3611));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3610, typeof __VLS_3612> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3613 = __VLS_pickFunctionalComponentCtx(__VLS_3610, __VLS_3612)!;
let __VLS_3614!: __VLS_NormalizeEmits<typeof __VLS_3613.emit>;
(__VLS_3613.slots!).default;
}
(__VLS_3603.slots!).default;
}
{
const __VLS_3615 = __VLS_intrinsicElements["div"];
const __VLS_3616 = __VLS_elementAsFunctionalComponent(__VLS_3615);
const __VLS_3617 = __VLS_3616({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3616));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3615, typeof __VLS_3617> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3618 = __VLS_pickFunctionalComponentCtx(__VLS_3615, __VLS_3617)!;
let __VLS_3619!: __VLS_NormalizeEmits<typeof __VLS_3618.emit>;
{
const __VLS_3620 = __VLS_intrinsicElements["input"];
const __VLS_3621 = __VLS_elementAsFunctionalComponent(__VLS_3620);
const __VLS_3622 = __VLS_3621({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), }, ...__VLS_functionalComponentArgsRest(__VLS_3621));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3620, typeof __VLS_3622> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), });
const __VLS_3623 = __VLS_pickFunctionalComponentCtx(__VLS_3620, __VLS_3622)!;
let __VLS_3624!: __VLS_NormalizeEmits<typeof __VLS_3623.emit>;
}
(__VLS_3618.slots!).default;
}
(__VLS_3593.slots!).default;
}
{
const __VLS_3625 = __VLS_intrinsicElements["fieldset"];
const __VLS_3626 = __VLS_elementAsFunctionalComponent(__VLS_3625);
const __VLS_3627 = __VLS_3626({ ...{}, id: ("fieldset_64"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3626));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3625, typeof __VLS_3627> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_64"), style: ({}), });
const __VLS_3628 = __VLS_pickFunctionalComponentCtx(__VLS_3625, __VLS_3627)!;
let __VLS_3629!: __VLS_NormalizeEmits<typeof __VLS_3628.emit>;
{
const __VLS_3630 = __VLS_intrinsicElements["label"];
const __VLS_3631 = __VLS_elementAsFunctionalComponent(__VLS_3630);
const __VLS_3632 = __VLS_3631({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3631));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3630, typeof __VLS_3632> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3633 = __VLS_pickFunctionalComponentCtx(__VLS_3630, __VLS_3632)!;
let __VLS_3634!: __VLS_NormalizeEmits<typeof __VLS_3633.emit>;
(__VLS_3633.slots!).default;
}
{
const __VLS_3635 = __VLS_intrinsicElements["select"];
const __VLS_3636 = __VLS_elementAsFunctionalComponent(__VLS_3635);
const __VLS_3637 = __VLS_3636({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3636));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3635, typeof __VLS_3637> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3638 = __VLS_pickFunctionalComponentCtx(__VLS_3635, __VLS_3637)!;
let __VLS_3639!: __VLS_NormalizeEmits<typeof __VLS_3638.emit>;
{
const __VLS_3640 = __VLS_intrinsicElements["option"];
const __VLS_3641 = __VLS_elementAsFunctionalComponent(__VLS_3640);
const __VLS_3642 = __VLS_3641({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3641));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3640, typeof __VLS_3642> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3643 = __VLS_pickFunctionalComponentCtx(__VLS_3640, __VLS_3642)!;
let __VLS_3644!: __VLS_NormalizeEmits<typeof __VLS_3643.emit>;
(__VLS_3643.slots!).default;
}
{
const __VLS_3645 = __VLS_intrinsicElements["option"];
const __VLS_3646 = __VLS_elementAsFunctionalComponent(__VLS_3645);
const __VLS_3647 = __VLS_3646({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3646));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3645, typeof __VLS_3647> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3648 = __VLS_pickFunctionalComponentCtx(__VLS_3645, __VLS_3647)!;
let __VLS_3649!: __VLS_NormalizeEmits<typeof __VLS_3648.emit>;
(__VLS_3648.slots!).default;
}
(__VLS_3638.slots!).default;
}
{
const __VLS_3650 = __VLS_intrinsicElements["div"];
const __VLS_3651 = __VLS_elementAsFunctionalComponent(__VLS_3650);
const __VLS_3652 = __VLS_3651({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3651));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3650, typeof __VLS_3652> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3653 = __VLS_pickFunctionalComponentCtx(__VLS_3650, __VLS_3652)!;
let __VLS_3654!: __VLS_NormalizeEmits<typeof __VLS_3653.emit>;
{
const __VLS_3655 = __VLS_intrinsicElements["input"];
const __VLS_3656 = __VLS_elementAsFunctionalComponent(__VLS_3655);
const __VLS_3657 = __VLS_3656({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3656));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3655, typeof __VLS_3657> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3658 = __VLS_pickFunctionalComponentCtx(__VLS_3655, __VLS_3657)!;
let __VLS_3659!: __VLS_NormalizeEmits<typeof __VLS_3658.emit>;
}
(__VLS_3653.slots!).default;
}
(__VLS_3628.slots!).default;
}
{
const __VLS_3660 = __VLS_intrinsicElements["fieldset"];
const __VLS_3661 = __VLS_elementAsFunctionalComponent(__VLS_3660);
const __VLS_3662 = __VLS_3661({ ...{}, id: ("fieldset_65"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3661));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3660, typeof __VLS_3662> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_65"), style: ({}), });
const __VLS_3663 = __VLS_pickFunctionalComponentCtx(__VLS_3660, __VLS_3662)!;
let __VLS_3664!: __VLS_NormalizeEmits<typeof __VLS_3663.emit>;
{
const __VLS_3665 = __VLS_intrinsicElements["label"];
const __VLS_3666 = __VLS_elementAsFunctionalComponent(__VLS_3665);
const __VLS_3667 = __VLS_3666({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3666));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3665, typeof __VLS_3667> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3668 = __VLS_pickFunctionalComponentCtx(__VLS_3665, __VLS_3667)!;
let __VLS_3669!: __VLS_NormalizeEmits<typeof __VLS_3668.emit>;
(__VLS_3668.slots!).default;
}
{
const __VLS_3670 = __VLS_intrinsicElements["select"];
const __VLS_3671 = __VLS_elementAsFunctionalComponent(__VLS_3670);
const __VLS_3672 = __VLS_3671({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3671));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3670, typeof __VLS_3672> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3673 = __VLS_pickFunctionalComponentCtx(__VLS_3670, __VLS_3672)!;
let __VLS_3674!: __VLS_NormalizeEmits<typeof __VLS_3673.emit>;
{
const __VLS_3675 = __VLS_intrinsicElements["option"];
const __VLS_3676 = __VLS_elementAsFunctionalComponent(__VLS_3675);
const __VLS_3677 = __VLS_3676({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3676));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3675, typeof __VLS_3677> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3678 = __VLS_pickFunctionalComponentCtx(__VLS_3675, __VLS_3677)!;
let __VLS_3679!: __VLS_NormalizeEmits<typeof __VLS_3678.emit>;
(__VLS_3678.slots!).default;
}
{
const __VLS_3680 = __VLS_intrinsicElements["option"];
const __VLS_3681 = __VLS_elementAsFunctionalComponent(__VLS_3680);
const __VLS_3682 = __VLS_3681({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3681));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3680, typeof __VLS_3682> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3683 = __VLS_pickFunctionalComponentCtx(__VLS_3680, __VLS_3682)!;
let __VLS_3684!: __VLS_NormalizeEmits<typeof __VLS_3683.emit>;
(__VLS_3683.slots!).default;
}
(__VLS_3673.slots!).default;
}
{
const __VLS_3685 = __VLS_intrinsicElements["div"];
const __VLS_3686 = __VLS_elementAsFunctionalComponent(__VLS_3685);
const __VLS_3687 = __VLS_3686({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3686));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3685, typeof __VLS_3687> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3688 = __VLS_pickFunctionalComponentCtx(__VLS_3685, __VLS_3687)!;
let __VLS_3689!: __VLS_NormalizeEmits<typeof __VLS_3688.emit>;
{
const __VLS_3690 = __VLS_intrinsicElements["input"];
const __VLS_3691 = __VLS_elementAsFunctionalComponent(__VLS_3690);
const __VLS_3692 = __VLS_3691({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3691));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3690, typeof __VLS_3692> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3693 = __VLS_pickFunctionalComponentCtx(__VLS_3690, __VLS_3692)!;
let __VLS_3694!: __VLS_NormalizeEmits<typeof __VLS_3693.emit>;
}
(__VLS_3688.slots!).default;
}
(__VLS_3663.slots!).default;
}
{
const __VLS_3695 = __VLS_intrinsicElements["fieldset"];
const __VLS_3696 = __VLS_elementAsFunctionalComponent(__VLS_3695);
const __VLS_3697 = __VLS_3696({ ...{}, id: ("fieldset_66"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3696));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3695, typeof __VLS_3697> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_66"), style: ({}), });
const __VLS_3698 = __VLS_pickFunctionalComponentCtx(__VLS_3695, __VLS_3697)!;
let __VLS_3699!: __VLS_NormalizeEmits<typeof __VLS_3698.emit>;
{
const __VLS_3700 = __VLS_intrinsicElements["label"];
const __VLS_3701 = __VLS_elementAsFunctionalComponent(__VLS_3700);
const __VLS_3702 = __VLS_3701({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3701));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3700, typeof __VLS_3702> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3703 = __VLS_pickFunctionalComponentCtx(__VLS_3700, __VLS_3702)!;
let __VLS_3704!: __VLS_NormalizeEmits<typeof __VLS_3703.emit>;
(__VLS_3703.slots!).default;
}
{
const __VLS_3705 = __VLS_intrinsicElements["select"];
const __VLS_3706 = __VLS_elementAsFunctionalComponent(__VLS_3705);
const __VLS_3707 = __VLS_3706({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3706));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3705, typeof __VLS_3707> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3708 = __VLS_pickFunctionalComponentCtx(__VLS_3705, __VLS_3707)!;
let __VLS_3709!: __VLS_NormalizeEmits<typeof __VLS_3708.emit>;
{
const __VLS_3710 = __VLS_intrinsicElements["option"];
const __VLS_3711 = __VLS_elementAsFunctionalComponent(__VLS_3710);
const __VLS_3712 = __VLS_3711({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3711));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3710, typeof __VLS_3712> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3713 = __VLS_pickFunctionalComponentCtx(__VLS_3710, __VLS_3712)!;
let __VLS_3714!: __VLS_NormalizeEmits<typeof __VLS_3713.emit>;
(__VLS_3713.slots!).default;
}
{
const __VLS_3715 = __VLS_intrinsicElements["option"];
const __VLS_3716 = __VLS_elementAsFunctionalComponent(__VLS_3715);
const __VLS_3717 = __VLS_3716({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3716));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3715, typeof __VLS_3717> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3718 = __VLS_pickFunctionalComponentCtx(__VLS_3715, __VLS_3717)!;
let __VLS_3719!: __VLS_NormalizeEmits<typeof __VLS_3718.emit>;
(__VLS_3718.slots!).default;
}
(__VLS_3708.slots!).default;
}
{
const __VLS_3720 = __VLS_intrinsicElements["div"];
const __VLS_3721 = __VLS_elementAsFunctionalComponent(__VLS_3720);
const __VLS_3722 = __VLS_3721({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3721));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3720, typeof __VLS_3722> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3723 = __VLS_pickFunctionalComponentCtx(__VLS_3720, __VLS_3722)!;
let __VLS_3724!: __VLS_NormalizeEmits<typeof __VLS_3723.emit>;
{
const __VLS_3725 = __VLS_intrinsicElements["input"];
const __VLS_3726 = __VLS_elementAsFunctionalComponent(__VLS_3725);
const __VLS_3727 = __VLS_3726({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3726));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3725, typeof __VLS_3727> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3728 = __VLS_pickFunctionalComponentCtx(__VLS_3725, __VLS_3727)!;
let __VLS_3729!: __VLS_NormalizeEmits<typeof __VLS_3728.emit>;
}
(__VLS_3723.slots!).default;
}
(__VLS_3698.slots!).default;
}
{
const __VLS_3730 = __VLS_intrinsicElements["fieldset"];
const __VLS_3731 = __VLS_elementAsFunctionalComponent(__VLS_3730);
const __VLS_3732 = __VLS_3731({ ...{}, id: ("fieldset_67"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3731));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3730, typeof __VLS_3732> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_67"), style: ({}), });
const __VLS_3733 = __VLS_pickFunctionalComponentCtx(__VLS_3730, __VLS_3732)!;
let __VLS_3734!: __VLS_NormalizeEmits<typeof __VLS_3733.emit>;
{
const __VLS_3735 = __VLS_intrinsicElements["label"];
const __VLS_3736 = __VLS_elementAsFunctionalComponent(__VLS_3735);
const __VLS_3737 = __VLS_3736({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3736));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3735, typeof __VLS_3737> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3738 = __VLS_pickFunctionalComponentCtx(__VLS_3735, __VLS_3737)!;
let __VLS_3739!: __VLS_NormalizeEmits<typeof __VLS_3738.emit>;
(__VLS_3738.slots!).default;
}
{
const __VLS_3740 = __VLS_intrinsicElements["select"];
const __VLS_3741 = __VLS_elementAsFunctionalComponent(__VLS_3740);
const __VLS_3742 = __VLS_3741({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3741));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3740, typeof __VLS_3742> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3743 = __VLS_pickFunctionalComponentCtx(__VLS_3740, __VLS_3742)!;
let __VLS_3744!: __VLS_NormalizeEmits<typeof __VLS_3743.emit>;
{
const __VLS_3745 = __VLS_intrinsicElements["option"];
const __VLS_3746 = __VLS_elementAsFunctionalComponent(__VLS_3745);
const __VLS_3747 = __VLS_3746({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3746));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3745, typeof __VLS_3747> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3748 = __VLS_pickFunctionalComponentCtx(__VLS_3745, __VLS_3747)!;
let __VLS_3749!: __VLS_NormalizeEmits<typeof __VLS_3748.emit>;
(__VLS_3748.slots!).default;
}
{
const __VLS_3750 = __VLS_intrinsicElements["option"];
const __VLS_3751 = __VLS_elementAsFunctionalComponent(__VLS_3750);
const __VLS_3752 = __VLS_3751({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3751));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3750, typeof __VLS_3752> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3753 = __VLS_pickFunctionalComponentCtx(__VLS_3750, __VLS_3752)!;
let __VLS_3754!: __VLS_NormalizeEmits<typeof __VLS_3753.emit>;
(__VLS_3753.slots!).default;
}
(__VLS_3743.slots!).default;
}
{
const __VLS_3755 = __VLS_intrinsicElements["div"];
const __VLS_3756 = __VLS_elementAsFunctionalComponent(__VLS_3755);
const __VLS_3757 = __VLS_3756({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3756));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3755, typeof __VLS_3757> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3758 = __VLS_pickFunctionalComponentCtx(__VLS_3755, __VLS_3757)!;
let __VLS_3759!: __VLS_NormalizeEmits<typeof __VLS_3758.emit>;
{
const __VLS_3760 = __VLS_intrinsicElements["input"];
const __VLS_3761 = __VLS_elementAsFunctionalComponent(__VLS_3760);
const __VLS_3762 = __VLS_3761({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3761));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3760, typeof __VLS_3762> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3763 = __VLS_pickFunctionalComponentCtx(__VLS_3760, __VLS_3762)!;
let __VLS_3764!: __VLS_NormalizeEmits<typeof __VLS_3763.emit>;
}
(__VLS_3758.slots!).default;
}
(__VLS_3733.slots!).default;
}
{
const __VLS_3765 = __VLS_intrinsicElements["fieldset"];
const __VLS_3766 = __VLS_elementAsFunctionalComponent(__VLS_3765);
const __VLS_3767 = __VLS_3766({ ...{}, id: ("fieldset_68"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3766));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3765, typeof __VLS_3767> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_68"), style: ({}), });
const __VLS_3768 = __VLS_pickFunctionalComponentCtx(__VLS_3765, __VLS_3767)!;
let __VLS_3769!: __VLS_NormalizeEmits<typeof __VLS_3768.emit>;
{
const __VLS_3770 = __VLS_intrinsicElements["label"];
const __VLS_3771 = __VLS_elementAsFunctionalComponent(__VLS_3770);
const __VLS_3772 = __VLS_3771({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3771));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3770, typeof __VLS_3772> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3773 = __VLS_pickFunctionalComponentCtx(__VLS_3770, __VLS_3772)!;
let __VLS_3774!: __VLS_NormalizeEmits<typeof __VLS_3773.emit>;
(__VLS_3773.slots!).default;
}
{
const __VLS_3775 = __VLS_intrinsicElements["select"];
const __VLS_3776 = __VLS_elementAsFunctionalComponent(__VLS_3775);
const __VLS_3777 = __VLS_3776({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3776));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3775, typeof __VLS_3777> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3778 = __VLS_pickFunctionalComponentCtx(__VLS_3775, __VLS_3777)!;
let __VLS_3779!: __VLS_NormalizeEmits<typeof __VLS_3778.emit>;
{
const __VLS_3780 = __VLS_intrinsicElements["option"];
const __VLS_3781 = __VLS_elementAsFunctionalComponent(__VLS_3780);
const __VLS_3782 = __VLS_3781({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3781));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3780, typeof __VLS_3782> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3783 = __VLS_pickFunctionalComponentCtx(__VLS_3780, __VLS_3782)!;
let __VLS_3784!: __VLS_NormalizeEmits<typeof __VLS_3783.emit>;
(__VLS_3783.slots!).default;
}
{
const __VLS_3785 = __VLS_intrinsicElements["option"];
const __VLS_3786 = __VLS_elementAsFunctionalComponent(__VLS_3785);
const __VLS_3787 = __VLS_3786({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3786));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3785, typeof __VLS_3787> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3788 = __VLS_pickFunctionalComponentCtx(__VLS_3785, __VLS_3787)!;
let __VLS_3789!: __VLS_NormalizeEmits<typeof __VLS_3788.emit>;
(__VLS_3788.slots!).default;
}
(__VLS_3778.slots!).default;
}
{
const __VLS_3790 = __VLS_intrinsicElements["div"];
const __VLS_3791 = __VLS_elementAsFunctionalComponent(__VLS_3790);
const __VLS_3792 = __VLS_3791({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3791));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3790, typeof __VLS_3792> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3793 = __VLS_pickFunctionalComponentCtx(__VLS_3790, __VLS_3792)!;
let __VLS_3794!: __VLS_NormalizeEmits<typeof __VLS_3793.emit>;
{
const __VLS_3795 = __VLS_intrinsicElements["input"];
const __VLS_3796 = __VLS_elementAsFunctionalComponent(__VLS_3795);
const __VLS_3797 = __VLS_3796({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3796));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3795, typeof __VLS_3797> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3798 = __VLS_pickFunctionalComponentCtx(__VLS_3795, __VLS_3797)!;
let __VLS_3799!: __VLS_NormalizeEmits<typeof __VLS_3798.emit>;
}
(__VLS_3793.slots!).default;
}
(__VLS_3768.slots!).default;
}
{
const __VLS_3800 = __VLS_intrinsicElements["fieldset"];
const __VLS_3801 = __VLS_elementAsFunctionalComponent(__VLS_3800);
const __VLS_3802 = __VLS_3801({ ...{}, id: ("fieldset_69"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3801));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3800, typeof __VLS_3802> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_69"), style: ({}), });
const __VLS_3803 = __VLS_pickFunctionalComponentCtx(__VLS_3800, __VLS_3802)!;
let __VLS_3804!: __VLS_NormalizeEmits<typeof __VLS_3803.emit>;
{
const __VLS_3805 = __VLS_intrinsicElements["label"];
const __VLS_3806 = __VLS_elementAsFunctionalComponent(__VLS_3805);
const __VLS_3807 = __VLS_3806({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3806));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3805, typeof __VLS_3807> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3808 = __VLS_pickFunctionalComponentCtx(__VLS_3805, __VLS_3807)!;
let __VLS_3809!: __VLS_NormalizeEmits<typeof __VLS_3808.emit>;
(__VLS_3808.slots!).default;
}
{
const __VLS_3810 = __VLS_intrinsicElements["select"];
const __VLS_3811 = __VLS_elementAsFunctionalComponent(__VLS_3810);
const __VLS_3812 = __VLS_3811({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3811));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3810, typeof __VLS_3812> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3813 = __VLS_pickFunctionalComponentCtx(__VLS_3810, __VLS_3812)!;
let __VLS_3814!: __VLS_NormalizeEmits<typeof __VLS_3813.emit>;
{
const __VLS_3815 = __VLS_intrinsicElements["option"];
const __VLS_3816 = __VLS_elementAsFunctionalComponent(__VLS_3815);
const __VLS_3817 = __VLS_3816({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3816));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3815, typeof __VLS_3817> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3818 = __VLS_pickFunctionalComponentCtx(__VLS_3815, __VLS_3817)!;
let __VLS_3819!: __VLS_NormalizeEmits<typeof __VLS_3818.emit>;
(__VLS_3818.slots!).default;
}
{
const __VLS_3820 = __VLS_intrinsicElements["option"];
const __VLS_3821 = __VLS_elementAsFunctionalComponent(__VLS_3820);
const __VLS_3822 = __VLS_3821({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3821));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3820, typeof __VLS_3822> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3823 = __VLS_pickFunctionalComponentCtx(__VLS_3820, __VLS_3822)!;
let __VLS_3824!: __VLS_NormalizeEmits<typeof __VLS_3823.emit>;
(__VLS_3823.slots!).default;
}
(__VLS_3813.slots!).default;
}
{
const __VLS_3825 = __VLS_intrinsicElements["div"];
const __VLS_3826 = __VLS_elementAsFunctionalComponent(__VLS_3825);
const __VLS_3827 = __VLS_3826({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3826));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3825, typeof __VLS_3827> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3828 = __VLS_pickFunctionalComponentCtx(__VLS_3825, __VLS_3827)!;
let __VLS_3829!: __VLS_NormalizeEmits<typeof __VLS_3828.emit>;
{
const __VLS_3830 = __VLS_intrinsicElements["input"];
const __VLS_3831 = __VLS_elementAsFunctionalComponent(__VLS_3830);
const __VLS_3832 = __VLS_3831({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3831));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3830, typeof __VLS_3832> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3833 = __VLS_pickFunctionalComponentCtx(__VLS_3830, __VLS_3832)!;
let __VLS_3834!: __VLS_NormalizeEmits<typeof __VLS_3833.emit>;
}
(__VLS_3828.slots!).default;
}
(__VLS_3803.slots!).default;
}
{
const __VLS_3835 = __VLS_intrinsicElements["fieldset"];
const __VLS_3836 = __VLS_elementAsFunctionalComponent(__VLS_3835);
const __VLS_3837 = __VLS_3836({ ...{}, id: ("fieldset_70"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3836));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3835, typeof __VLS_3837> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_70"), style: ({}), });
const __VLS_3838 = __VLS_pickFunctionalComponentCtx(__VLS_3835, __VLS_3837)!;
let __VLS_3839!: __VLS_NormalizeEmits<typeof __VLS_3838.emit>;
{
const __VLS_3840 = __VLS_intrinsicElements["label"];
const __VLS_3841 = __VLS_elementAsFunctionalComponent(__VLS_3840);
const __VLS_3842 = __VLS_3841({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3841));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3840, typeof __VLS_3842> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3843 = __VLS_pickFunctionalComponentCtx(__VLS_3840, __VLS_3842)!;
let __VLS_3844!: __VLS_NormalizeEmits<typeof __VLS_3843.emit>;
(__VLS_3843.slots!).default;
}
{
const __VLS_3845 = __VLS_intrinsicElements["select"];
const __VLS_3846 = __VLS_elementAsFunctionalComponent(__VLS_3845);
const __VLS_3847 = __VLS_3846({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3846));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3845, typeof __VLS_3847> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3848 = __VLS_pickFunctionalComponentCtx(__VLS_3845, __VLS_3847)!;
let __VLS_3849!: __VLS_NormalizeEmits<typeof __VLS_3848.emit>;
{
const __VLS_3850 = __VLS_intrinsicElements["option"];
const __VLS_3851 = __VLS_elementAsFunctionalComponent(__VLS_3850);
const __VLS_3852 = __VLS_3851({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3851));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3850, typeof __VLS_3852> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3853 = __VLS_pickFunctionalComponentCtx(__VLS_3850, __VLS_3852)!;
let __VLS_3854!: __VLS_NormalizeEmits<typeof __VLS_3853.emit>;
(__VLS_3853.slots!).default;
}
{
const __VLS_3855 = __VLS_intrinsicElements["option"];
const __VLS_3856 = __VLS_elementAsFunctionalComponent(__VLS_3855);
const __VLS_3857 = __VLS_3856({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3856));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3855, typeof __VLS_3857> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3858 = __VLS_pickFunctionalComponentCtx(__VLS_3855, __VLS_3857)!;
let __VLS_3859!: __VLS_NormalizeEmits<typeof __VLS_3858.emit>;
(__VLS_3858.slots!).default;
}
(__VLS_3848.slots!).default;
}
{
const __VLS_3860 = __VLS_intrinsicElements["div"];
const __VLS_3861 = __VLS_elementAsFunctionalComponent(__VLS_3860);
const __VLS_3862 = __VLS_3861({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3861));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3860, typeof __VLS_3862> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3863 = __VLS_pickFunctionalComponentCtx(__VLS_3860, __VLS_3862)!;
let __VLS_3864!: __VLS_NormalizeEmits<typeof __VLS_3863.emit>;
{
const __VLS_3865 = __VLS_intrinsicElements["input"];
const __VLS_3866 = __VLS_elementAsFunctionalComponent(__VLS_3865);
const __VLS_3867 = __VLS_3866({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3866));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3865, typeof __VLS_3867> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3868 = __VLS_pickFunctionalComponentCtx(__VLS_3865, __VLS_3867)!;
let __VLS_3869!: __VLS_NormalizeEmits<typeof __VLS_3868.emit>;
}
(__VLS_3863.slots!).default;
}
(__VLS_3838.slots!).default;
}
{
const __VLS_3870 = __VLS_intrinsicElements["fieldset"];
const __VLS_3871 = __VLS_elementAsFunctionalComponent(__VLS_3870);
const __VLS_3872 = __VLS_3871({ ...{}, id: ("fieldset_71"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3871));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3870, typeof __VLS_3872> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_71"), style: ({}), });
const __VLS_3873 = __VLS_pickFunctionalComponentCtx(__VLS_3870, __VLS_3872)!;
let __VLS_3874!: __VLS_NormalizeEmits<typeof __VLS_3873.emit>;
{
const __VLS_3875 = __VLS_intrinsicElements["label"];
const __VLS_3876 = __VLS_elementAsFunctionalComponent(__VLS_3875);
const __VLS_3877 = __VLS_3876({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3876));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3875, typeof __VLS_3877> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3878 = __VLS_pickFunctionalComponentCtx(__VLS_3875, __VLS_3877)!;
let __VLS_3879!: __VLS_NormalizeEmits<typeof __VLS_3878.emit>;
(__VLS_3878.slots!).default;
}
{
const __VLS_3880 = __VLS_intrinsicElements["select"];
const __VLS_3881 = __VLS_elementAsFunctionalComponent(__VLS_3880);
const __VLS_3882 = __VLS_3881({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3881));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3880, typeof __VLS_3882> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3883 = __VLS_pickFunctionalComponentCtx(__VLS_3880, __VLS_3882)!;
let __VLS_3884!: __VLS_NormalizeEmits<typeof __VLS_3883.emit>;
{
const __VLS_3885 = __VLS_intrinsicElements["option"];
const __VLS_3886 = __VLS_elementAsFunctionalComponent(__VLS_3885);
const __VLS_3887 = __VLS_3886({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3886));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3885, typeof __VLS_3887> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3888 = __VLS_pickFunctionalComponentCtx(__VLS_3885, __VLS_3887)!;
let __VLS_3889!: __VLS_NormalizeEmits<typeof __VLS_3888.emit>;
(__VLS_3888.slots!).default;
}
{
const __VLS_3890 = __VLS_intrinsicElements["option"];
const __VLS_3891 = __VLS_elementAsFunctionalComponent(__VLS_3890);
const __VLS_3892 = __VLS_3891({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3891));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3890, typeof __VLS_3892> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3893 = __VLS_pickFunctionalComponentCtx(__VLS_3890, __VLS_3892)!;
let __VLS_3894!: __VLS_NormalizeEmits<typeof __VLS_3893.emit>;
(__VLS_3893.slots!).default;
}
(__VLS_3883.slots!).default;
}
{
const __VLS_3895 = __VLS_intrinsicElements["div"];
const __VLS_3896 = __VLS_elementAsFunctionalComponent(__VLS_3895);
const __VLS_3897 = __VLS_3896({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3896));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3895, typeof __VLS_3897> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3898 = __VLS_pickFunctionalComponentCtx(__VLS_3895, __VLS_3897)!;
let __VLS_3899!: __VLS_NormalizeEmits<typeof __VLS_3898.emit>;
{
const __VLS_3900 = __VLS_intrinsicElements["input"];
const __VLS_3901 = __VLS_elementAsFunctionalComponent(__VLS_3900);
const __VLS_3902 = __VLS_3901({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3901));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3900, typeof __VLS_3902> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3903 = __VLS_pickFunctionalComponentCtx(__VLS_3900, __VLS_3902)!;
let __VLS_3904!: __VLS_NormalizeEmits<typeof __VLS_3903.emit>;
}
(__VLS_3898.slots!).default;
}
{
const __VLS_3905 = __VLS_intrinsicElements["input"];
const __VLS_3906 = __VLS_elementAsFunctionalComponent(__VLS_3905);
const __VLS_3907 = __VLS_3906({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-25"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3906));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3905, typeof __VLS_3907> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-25"), value: ("1"), });
const __VLS_3908 = __VLS_pickFunctionalComponentCtx(__VLS_3905, __VLS_3907)!;
let __VLS_3909!: __VLS_NormalizeEmits<typeof __VLS_3908.emit>;
}
{
const __VLS_3910 = __VLS_intrinsicElements["label"];
const __VLS_3911 = __VLS_elementAsFunctionalComponent(__VLS_3910);
const __VLS_3912 = __VLS_3911({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3911));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3910, typeof __VLS_3912> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_3913 = __VLS_pickFunctionalComponentCtx(__VLS_3910, __VLS_3912)!;
let __VLS_3914!: __VLS_NormalizeEmits<typeof __VLS_3913.emit>;
(__VLS_3913.slots!).default;
}
{
const __VLS_3915 = __VLS_intrinsicElements["input"];
const __VLS_3916 = __VLS_elementAsFunctionalComponent(__VLS_3915);
const __VLS_3917 = __VLS_3916({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-25"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3916));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3915, typeof __VLS_3917> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-25"), value: ("1"), });
const __VLS_3918 = __VLS_pickFunctionalComponentCtx(__VLS_3915, __VLS_3917)!;
let __VLS_3919!: __VLS_NormalizeEmits<typeof __VLS_3918.emit>;
}
{
const __VLS_3920 = __VLS_intrinsicElements["label"];
const __VLS_3921 = __VLS_elementAsFunctionalComponent(__VLS_3920);
const __VLS_3922 = __VLS_3921({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_3921));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3920, typeof __VLS_3922> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_3923 = __VLS_pickFunctionalComponentCtx(__VLS_3920, __VLS_3922)!;
let __VLS_3924!: __VLS_NormalizeEmits<typeof __VLS_3923.emit>;
(__VLS_3923.slots!).default;
}
(__VLS_3873.slots!).default;
}
{
const __VLS_3925 = __VLS_intrinsicElements["fieldset"];
const __VLS_3926 = __VLS_elementAsFunctionalComponent(__VLS_3925);
const __VLS_3927 = __VLS_3926({ ...{}, id: ("fieldset_72"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3926));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3925, typeof __VLS_3927> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_72"), style: ({}), });
const __VLS_3928 = __VLS_pickFunctionalComponentCtx(__VLS_3925, __VLS_3927)!;
let __VLS_3929!: __VLS_NormalizeEmits<typeof __VLS_3928.emit>;
{
const __VLS_3930 = __VLS_intrinsicElements["label"];
const __VLS_3931 = __VLS_elementAsFunctionalComponent(__VLS_3930);
const __VLS_3932 = __VLS_3931({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3931));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3930, typeof __VLS_3932> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3933 = __VLS_pickFunctionalComponentCtx(__VLS_3930, __VLS_3932)!;
let __VLS_3934!: __VLS_NormalizeEmits<typeof __VLS_3933.emit>;
(__VLS_3933.slots!).default;
}
{
const __VLS_3935 = __VLS_intrinsicElements["select"];
const __VLS_3936 = __VLS_elementAsFunctionalComponent(__VLS_3935);
const __VLS_3937 = __VLS_3936({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3936));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3935, typeof __VLS_3937> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3938 = __VLS_pickFunctionalComponentCtx(__VLS_3935, __VLS_3937)!;
let __VLS_3939!: __VLS_NormalizeEmits<typeof __VLS_3938.emit>;
{
const __VLS_3940 = __VLS_intrinsicElements["option"];
const __VLS_3941 = __VLS_elementAsFunctionalComponent(__VLS_3940);
const __VLS_3942 = __VLS_3941({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3941));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3940, typeof __VLS_3942> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3943 = __VLS_pickFunctionalComponentCtx(__VLS_3940, __VLS_3942)!;
let __VLS_3944!: __VLS_NormalizeEmits<typeof __VLS_3943.emit>;
(__VLS_3943.slots!).default;
}
{
const __VLS_3945 = __VLS_intrinsicElements["option"];
const __VLS_3946 = __VLS_elementAsFunctionalComponent(__VLS_3945);
const __VLS_3947 = __VLS_3946({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3946));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3945, typeof __VLS_3947> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3948 = __VLS_pickFunctionalComponentCtx(__VLS_3945, __VLS_3947)!;
let __VLS_3949!: __VLS_NormalizeEmits<typeof __VLS_3948.emit>;
(__VLS_3948.slots!).default;
}
(__VLS_3938.slots!).default;
}
{
const __VLS_3950 = __VLS_intrinsicElements["div"];
const __VLS_3951 = __VLS_elementAsFunctionalComponent(__VLS_3950);
const __VLS_3952 = __VLS_3951({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3951));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3950, typeof __VLS_3952> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3953 = __VLS_pickFunctionalComponentCtx(__VLS_3950, __VLS_3952)!;
let __VLS_3954!: __VLS_NormalizeEmits<typeof __VLS_3953.emit>;
{
const __VLS_3955 = __VLS_intrinsicElements["input"];
const __VLS_3956 = __VLS_elementAsFunctionalComponent(__VLS_3955);
const __VLS_3957 = __VLS_3956({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3956));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3955, typeof __VLS_3957> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3958 = __VLS_pickFunctionalComponentCtx(__VLS_3955, __VLS_3957)!;
let __VLS_3959!: __VLS_NormalizeEmits<typeof __VLS_3958.emit>;
}
(__VLS_3953.slots!).default;
}
(__VLS_3928.slots!).default;
}
{
const __VLS_3960 = __VLS_intrinsicElements["fieldset"];
const __VLS_3961 = __VLS_elementAsFunctionalComponent(__VLS_3960);
const __VLS_3962 = __VLS_3961({ ...{}, id: ("fieldset_73"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3961));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3960, typeof __VLS_3962> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_73"), style: ({}), });
const __VLS_3963 = __VLS_pickFunctionalComponentCtx(__VLS_3960, __VLS_3962)!;
let __VLS_3964!: __VLS_NormalizeEmits<typeof __VLS_3963.emit>;
{
const __VLS_3965 = __VLS_intrinsicElements["label"];
const __VLS_3966 = __VLS_elementAsFunctionalComponent(__VLS_3965);
const __VLS_3967 = __VLS_3966({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_3966));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3965, typeof __VLS_3967> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_3968 = __VLS_pickFunctionalComponentCtx(__VLS_3965, __VLS_3967)!;
let __VLS_3969!: __VLS_NormalizeEmits<typeof __VLS_3968.emit>;
(__VLS_3968.slots!).default;
}
{
const __VLS_3970 = __VLS_intrinsicElements["select"];
const __VLS_3971 = __VLS_elementAsFunctionalComponent(__VLS_3970);
const __VLS_3972 = __VLS_3971({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3971));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3970, typeof __VLS_3972> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_3973 = __VLS_pickFunctionalComponentCtx(__VLS_3970, __VLS_3972)!;
let __VLS_3974!: __VLS_NormalizeEmits<typeof __VLS_3973.emit>;
{
const __VLS_3975 = __VLS_intrinsicElements["option"];
const __VLS_3976 = __VLS_elementAsFunctionalComponent(__VLS_3975);
const __VLS_3977 = __VLS_3976({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3976));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3975, typeof __VLS_3977> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_3978 = __VLS_pickFunctionalComponentCtx(__VLS_3975, __VLS_3977)!;
let __VLS_3979!: __VLS_NormalizeEmits<typeof __VLS_3978.emit>;
(__VLS_3978.slots!).default;
}
{
const __VLS_3980 = __VLS_intrinsicElements["option"];
const __VLS_3981 = __VLS_elementAsFunctionalComponent(__VLS_3980);
const __VLS_3982 = __VLS_3981({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_3981));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3980, typeof __VLS_3982> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_3983 = __VLS_pickFunctionalComponentCtx(__VLS_3980, __VLS_3982)!;
let __VLS_3984!: __VLS_NormalizeEmits<typeof __VLS_3983.emit>;
(__VLS_3983.slots!).default;
}
(__VLS_3973.slots!).default;
}
{
const __VLS_3985 = __VLS_intrinsicElements["div"];
const __VLS_3986 = __VLS_elementAsFunctionalComponent(__VLS_3985);
const __VLS_3987 = __VLS_3986({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_3986));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3985, typeof __VLS_3987> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_3988 = __VLS_pickFunctionalComponentCtx(__VLS_3985, __VLS_3987)!;
let __VLS_3989!: __VLS_NormalizeEmits<typeof __VLS_3988.emit>;
{
const __VLS_3990 = __VLS_intrinsicElements["input"];
const __VLS_3991 = __VLS_elementAsFunctionalComponent(__VLS_3990);
const __VLS_3992 = __VLS_3991({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3991));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3990, typeof __VLS_3992> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_3993 = __VLS_pickFunctionalComponentCtx(__VLS_3990, __VLS_3992)!;
let __VLS_3994!: __VLS_NormalizeEmits<typeof __VLS_3993.emit>;
}
(__VLS_3988.slots!).default;
}
(__VLS_3963.slots!).default;
}
{
const __VLS_3995 = __VLS_intrinsicElements["fieldset"];
const __VLS_3996 = __VLS_elementAsFunctionalComponent(__VLS_3995);
const __VLS_3997 = __VLS_3996({ ...{}, id: ("fieldset_74"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_3996));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_3995, typeof __VLS_3997> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_74"), style: ({}), });
const __VLS_3998 = __VLS_pickFunctionalComponentCtx(__VLS_3995, __VLS_3997)!;
let __VLS_3999!: __VLS_NormalizeEmits<typeof __VLS_3998.emit>;
{
const __VLS_4000 = __VLS_intrinsicElements["h1"];
const __VLS_4001 = __VLS_elementAsFunctionalComponent(__VLS_4000);
const __VLS_4002 = __VLS_4001({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_4001));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4000, typeof __VLS_4002> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_4003 = __VLS_pickFunctionalComponentCtx(__VLS_4000, __VLS_4002)!;
let __VLS_4004!: __VLS_NormalizeEmits<typeof __VLS_4003.emit>;
(__VLS_4003.slots!).default;
}
{
const __VLS_4005 = __VLS_intrinsicElements["fieldset"];
const __VLS_4006 = __VLS_elementAsFunctionalComponent(__VLS_4005);
const __VLS_4007 = __VLS_4006({ ...{}, id: ("fieldset_75"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4006));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4005, typeof __VLS_4007> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_75"), style: ({}), });
const __VLS_4008 = __VLS_pickFunctionalComponentCtx(__VLS_4005, __VLS_4007)!;
let __VLS_4009!: __VLS_NormalizeEmits<typeof __VLS_4008.emit>;
{
const __VLS_4010 = __VLS_intrinsicElements["label"];
const __VLS_4011 = __VLS_elementAsFunctionalComponent(__VLS_4010);
const __VLS_4012 = __VLS_4011({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4011));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4010, typeof __VLS_4012> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4013 = __VLS_pickFunctionalComponentCtx(__VLS_4010, __VLS_4012)!;
let __VLS_4014!: __VLS_NormalizeEmits<typeof __VLS_4013.emit>;
(__VLS_4013.slots!).default;
}
{
const __VLS_4015 = __VLS_intrinsicElements["div"];
const __VLS_4016 = __VLS_elementAsFunctionalComponent(__VLS_4015);
const __VLS_4017 = __VLS_4016({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_4016));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4015, typeof __VLS_4017> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_4018 = __VLS_pickFunctionalComponentCtx(__VLS_4015, __VLS_4017)!;
let __VLS_4019!: __VLS_NormalizeEmits<typeof __VLS_4018.emit>;
{
const __VLS_4020 = __VLS_intrinsicElements["input"];
const __VLS_4021 = __VLS_elementAsFunctionalComponent(__VLS_4020);
const __VLS_4022 = __VLS_4021({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4021));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4020, typeof __VLS_4022> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4023 = __VLS_pickFunctionalComponentCtx(__VLS_4020, __VLS_4022)!;
let __VLS_4024!: __VLS_NormalizeEmits<typeof __VLS_4023.emit>;
}
(__VLS_4018.slots!).default;
}
{
const __VLS_4025 = __VLS_intrinsicElements["label"];
const __VLS_4026 = __VLS_elementAsFunctionalComponent(__VLS_4025);
const __VLS_4027 = __VLS_4026({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4026));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4025, typeof __VLS_4027> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4028 = __VLS_pickFunctionalComponentCtx(__VLS_4025, __VLS_4027)!;
let __VLS_4029!: __VLS_NormalizeEmits<typeof __VLS_4028.emit>;
(__VLS_4028.slots!).default;
}
{
const __VLS_4030 = __VLS_intrinsicElements["div"];
const __VLS_4031 = __VLS_elementAsFunctionalComponent(__VLS_4030);
const __VLS_4032 = __VLS_4031({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_4031));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4030, typeof __VLS_4032> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_4033 = __VLS_pickFunctionalComponentCtx(__VLS_4030, __VLS_4032)!;
let __VLS_4034!: __VLS_NormalizeEmits<typeof __VLS_4033.emit>;
{
const __VLS_4035 = __VLS_intrinsicElements["input"];
const __VLS_4036 = __VLS_elementAsFunctionalComponent(__VLS_4035);
const __VLS_4037 = __VLS_4036({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4036));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4035, typeof __VLS_4037> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4038 = __VLS_pickFunctionalComponentCtx(__VLS_4035, __VLS_4037)!;
let __VLS_4039!: __VLS_NormalizeEmits<typeof __VLS_4038.emit>;
}
(__VLS_4033.slots!).default;
}
{
const __VLS_4040 = __VLS_intrinsicElements["label"];
const __VLS_4041 = __VLS_elementAsFunctionalComponent(__VLS_4040);
const __VLS_4042 = __VLS_4041({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4041));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4040, typeof __VLS_4042> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4043 = __VLS_pickFunctionalComponentCtx(__VLS_4040, __VLS_4042)!;
let __VLS_4044!: __VLS_NormalizeEmits<typeof __VLS_4043.emit>;
(__VLS_4043.slots!).default;
}
{
const __VLS_4045 = __VLS_intrinsicElements["div"];
const __VLS_4046 = __VLS_elementAsFunctionalComponent(__VLS_4045);
const __VLS_4047 = __VLS_4046({ ...{}, class: ("form-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_4046));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4045, typeof __VLS_4047> & Record<string, unknown>) => void)({ ...{}, class: ("form-line"), });
const __VLS_4048 = __VLS_pickFunctionalComponentCtx(__VLS_4045, __VLS_4047)!;
let __VLS_4049!: __VLS_NormalizeEmits<typeof __VLS_4048.emit>;
{
const __VLS_4050 = __VLS_intrinsicElements["input"];
const __VLS_4051 = __VLS_elementAsFunctionalComponent(__VLS_4050);
const __VLS_4052 = __VLS_4051({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4051));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4050, typeof __VLS_4052> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4053 = __VLS_pickFunctionalComponentCtx(__VLS_4050, __VLS_4052)!;
let __VLS_4054!: __VLS_NormalizeEmits<typeof __VLS_4053.emit>;
}
(__VLS_4048.slots!).default;
}
{
const __VLS_4055 = __VLS_intrinsicElements["select"];
const __VLS_4056 = __VLS_elementAsFunctionalComponent(__VLS_4055);
const __VLS_4057 = __VLS_4056({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4056));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4055, typeof __VLS_4057> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_4058 = __VLS_pickFunctionalComponentCtx(__VLS_4055, __VLS_4057)!;
let __VLS_4059!: __VLS_NormalizeEmits<typeof __VLS_4058.emit>;
{
const __VLS_4060 = __VLS_intrinsicElements["option"];
const __VLS_4061 = __VLS_elementAsFunctionalComponent(__VLS_4060);
const __VLS_4062 = __VLS_4061({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4061));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4060, typeof __VLS_4062> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_4063 = __VLS_pickFunctionalComponentCtx(__VLS_4060, __VLS_4062)!;
let __VLS_4064!: __VLS_NormalizeEmits<typeof __VLS_4063.emit>;
(__VLS_4063.slots!).default;
}
{
const __VLS_4065 = __VLS_intrinsicElements["option"];
const __VLS_4066 = __VLS_elementAsFunctionalComponent(__VLS_4065);
const __VLS_4067 = __VLS_4066({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4066));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4065, typeof __VLS_4067> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_4068 = __VLS_pickFunctionalComponentCtx(__VLS_4065, __VLS_4067)!;
let __VLS_4069!: __VLS_NormalizeEmits<typeof __VLS_4068.emit>;
(__VLS_4068.slots!).default;
}
(__VLS_4058.slots!).default;
}
{
const __VLS_4070 = __VLS_intrinsicElements["div"];
const __VLS_4071 = __VLS_elementAsFunctionalComponent(__VLS_4070);
const __VLS_4072 = __VLS_4071({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4071));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4070, typeof __VLS_4072> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_4073 = __VLS_pickFunctionalComponentCtx(__VLS_4070, __VLS_4072)!;
let __VLS_4074!: __VLS_NormalizeEmits<typeof __VLS_4073.emit>;
{
const __VLS_4075 = __VLS_intrinsicElements["div"];
const __VLS_4076 = __VLS_elementAsFunctionalComponent(__VLS_4075);
const __VLS_4077 = __VLS_4076({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_4076));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4075, typeof __VLS_4077> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_4078 = __VLS_pickFunctionalComponentCtx(__VLS_4075, __VLS_4077)!;
let __VLS_4079!: __VLS_NormalizeEmits<typeof __VLS_4078.emit>;
{
const __VLS_4080 = __VLS_intrinsicElements["input"];
const __VLS_4081 = __VLS_elementAsFunctionalComponent(__VLS_4080);
const __VLS_4082 = __VLS_4081({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-26"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_4081));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4080, typeof __VLS_4082> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-26"), value: ("1"), });
const __VLS_4083 = __VLS_pickFunctionalComponentCtx(__VLS_4080, __VLS_4082)!;
let __VLS_4084!: __VLS_NormalizeEmits<typeof __VLS_4083.emit>;
}
{
const __VLS_4085 = __VLS_intrinsicElements["label"];
const __VLS_4086 = __VLS_elementAsFunctionalComponent(__VLS_4085);
const __VLS_4087 = __VLS_4086({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_4086));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4085, typeof __VLS_4087> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_4088 = __VLS_pickFunctionalComponentCtx(__VLS_4085, __VLS_4087)!;
let __VLS_4089!: __VLS_NormalizeEmits<typeof __VLS_4088.emit>;
(__VLS_4088.slots!).default;
}
(__VLS_4078.slots!).default;
}
{
const __VLS_4090 = __VLS_intrinsicElements["div"];
const __VLS_4091 = __VLS_elementAsFunctionalComponent(__VLS_4090);
const __VLS_4092 = __VLS_4091({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_4091));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4090, typeof __VLS_4092> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_4093 = __VLS_pickFunctionalComponentCtx(__VLS_4090, __VLS_4092)!;
let __VLS_4094!: __VLS_NormalizeEmits<typeof __VLS_4093.emit>;
{
const __VLS_4095 = __VLS_intrinsicElements["input"];
const __VLS_4096 = __VLS_elementAsFunctionalComponent(__VLS_4095);
const __VLS_4097 = __VLS_4096({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-26"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_4096));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4095, typeof __VLS_4097> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), id: ("cat1"), name: ("category-26"), value: ("1"), });
const __VLS_4098 = __VLS_pickFunctionalComponentCtx(__VLS_4095, __VLS_4097)!;
let __VLS_4099!: __VLS_NormalizeEmits<typeof __VLS_4098.emit>;
}
{
const __VLS_4100 = __VLS_intrinsicElements["label"];
const __VLS_4101 = __VLS_elementAsFunctionalComponent(__VLS_4100);
const __VLS_4102 = __VLS_4101({ ...{}, for: ("cat1"), }, ...__VLS_functionalComponentArgsRest(__VLS_4101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4100, typeof __VLS_4102> & Record<string, unknown>) => void)({ ...{}, for: ("cat1"), });
const __VLS_4103 = __VLS_pickFunctionalComponentCtx(__VLS_4100, __VLS_4102)!;
let __VLS_4104!: __VLS_NormalizeEmits<typeof __VLS_4103.emit>;
(__VLS_4103.slots!).default;
}
(__VLS_4093.slots!).default;
}
(__VLS_4073.slots!).default;
}
(__VLS_4008.slots!).default;
}
(__VLS_3998.slots!).default;
}
{
const __VLS_4105 = __VLS_intrinsicElements["fieldset"];
const __VLS_4106 = __VLS_elementAsFunctionalComponent(__VLS_4105);
const __VLS_4107 = __VLS_4106({ ...{}, id: ("fieldset_76"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4105, typeof __VLS_4107> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_76"), style: ({}), });
const __VLS_4108 = __VLS_pickFunctionalComponentCtx(__VLS_4105, __VLS_4107)!;
let __VLS_4109!: __VLS_NormalizeEmits<typeof __VLS_4108.emit>;
{
const __VLS_4110 = __VLS_intrinsicElements["h1"];
const __VLS_4111 = __VLS_elementAsFunctionalComponent(__VLS_4110);
const __VLS_4112 = __VLS_4111({ ...{}, class: ("titulos-footer"), }, ...__VLS_functionalComponentArgsRest(__VLS_4111));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4110, typeof __VLS_4112> & Record<string, unknown>) => void)({ ...{}, class: ("titulos-footer"), });
const __VLS_4113 = __VLS_pickFunctionalComponentCtx(__VLS_4110, __VLS_4112)!;
let __VLS_4114!: __VLS_NormalizeEmits<typeof __VLS_4113.emit>;
(__VLS_4113.slots!).default;
}
{
const __VLS_4115 = __VLS_intrinsicElements["fieldset"];
const __VLS_4116 = __VLS_elementAsFunctionalComponent(__VLS_4115);
const __VLS_4117 = __VLS_4116({ ...{}, id: ("fieldset_77"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4116));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4115, typeof __VLS_4117> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_77"), style: ({}), });
const __VLS_4118 = __VLS_pickFunctionalComponentCtx(__VLS_4115, __VLS_4117)!;
let __VLS_4119!: __VLS_NormalizeEmits<typeof __VLS_4118.emit>;
{
const __VLS_4120 = __VLS_intrinsicElements["label"];
const __VLS_4121 = __VLS_elementAsFunctionalComponent(__VLS_4120);
const __VLS_4122 = __VLS_4121({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4121));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4120, typeof __VLS_4122> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4123 = __VLS_pickFunctionalComponentCtx(__VLS_4120, __VLS_4122)!;
let __VLS_4124!: __VLS_NormalizeEmits<typeof __VLS_4123.emit>;
(__VLS_4123.slots!).default;
}
{
const __VLS_4125 = __VLS_intrinsicElements["input"];
const __VLS_4126 = __VLS_elementAsFunctionalComponent(__VLS_4125);
const __VLS_4127 = __VLS_4126({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4126));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4125, typeof __VLS_4127> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4128 = __VLS_pickFunctionalComponentCtx(__VLS_4125, __VLS_4127)!;
let __VLS_4129!: __VLS_NormalizeEmits<typeof __VLS_4128.emit>;
}
{
const __VLS_4130 = __VLS_intrinsicElements["select"];
const __VLS_4131 = __VLS_elementAsFunctionalComponent(__VLS_4130);
const __VLS_4132 = __VLS_4131({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4131));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4130, typeof __VLS_4132> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_4133 = __VLS_pickFunctionalComponentCtx(__VLS_4130, __VLS_4132)!;
let __VLS_4134!: __VLS_NormalizeEmits<typeof __VLS_4133.emit>;
{
const __VLS_4135 = __VLS_intrinsicElements["option"];
const __VLS_4136 = __VLS_elementAsFunctionalComponent(__VLS_4135);
const __VLS_4137 = __VLS_4136({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4136));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4135, typeof __VLS_4137> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_4138 = __VLS_pickFunctionalComponentCtx(__VLS_4135, __VLS_4137)!;
let __VLS_4139!: __VLS_NormalizeEmits<typeof __VLS_4138.emit>;
(__VLS_4138.slots!).default;
}
{
const __VLS_4140 = __VLS_intrinsicElements["option"];
const __VLS_4141 = __VLS_elementAsFunctionalComponent(__VLS_4140);
const __VLS_4142 = __VLS_4141({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4140, typeof __VLS_4142> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_4143 = __VLS_pickFunctionalComponentCtx(__VLS_4140, __VLS_4142)!;
let __VLS_4144!: __VLS_NormalizeEmits<typeof __VLS_4143.emit>;
(__VLS_4143.slots!).default;
}
(__VLS_4133.slots!).default;
}
(__VLS_4118.slots!).default;
}
(__VLS_4108.slots!).default;
}
{
const __VLS_4145 = __VLS_intrinsicElements["fieldset"];
const __VLS_4146 = __VLS_elementAsFunctionalComponent(__VLS_4145);
const __VLS_4147 = __VLS_4146({ ...{}, id: ("fieldset_78"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4145, typeof __VLS_4147> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_78"), style: ({}), });
const __VLS_4148 = __VLS_pickFunctionalComponentCtx(__VLS_4145, __VLS_4147)!;
let __VLS_4149!: __VLS_NormalizeEmits<typeof __VLS_4148.emit>;
{
const __VLS_4150 = __VLS_intrinsicElements["label"];
const __VLS_4151 = __VLS_elementAsFunctionalComponent(__VLS_4150);
const __VLS_4152 = __VLS_4151({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4150, typeof __VLS_4152> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4153 = __VLS_pickFunctionalComponentCtx(__VLS_4150, __VLS_4152)!;
let __VLS_4154!: __VLS_NormalizeEmits<typeof __VLS_4153.emit>;
(__VLS_4153.slots!).default;
}
{
const __VLS_4155 = __VLS_intrinsicElements["input"];
const __VLS_4156 = __VLS_elementAsFunctionalComponent(__VLS_4155);
const __VLS_4157 = __VLS_4156({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4155, typeof __VLS_4157> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4158 = __VLS_pickFunctionalComponentCtx(__VLS_4155, __VLS_4157)!;
let __VLS_4159!: __VLS_NormalizeEmits<typeof __VLS_4158.emit>;
}
{
const __VLS_4160 = __VLS_intrinsicElements["select"];
const __VLS_4161 = __VLS_elementAsFunctionalComponent(__VLS_4160);
const __VLS_4162 = __VLS_4161({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4160, typeof __VLS_4162> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_4163 = __VLS_pickFunctionalComponentCtx(__VLS_4160, __VLS_4162)!;
let __VLS_4164!: __VLS_NormalizeEmits<typeof __VLS_4163.emit>;
{
const __VLS_4165 = __VLS_intrinsicElements["option"];
const __VLS_4166 = __VLS_elementAsFunctionalComponent(__VLS_4165);
const __VLS_4167 = __VLS_4166({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4165, typeof __VLS_4167> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_4168 = __VLS_pickFunctionalComponentCtx(__VLS_4165, __VLS_4167)!;
let __VLS_4169!: __VLS_NormalizeEmits<typeof __VLS_4168.emit>;
(__VLS_4168.slots!).default;
}
{
const __VLS_4170 = __VLS_intrinsicElements["option"];
const __VLS_4171 = __VLS_elementAsFunctionalComponent(__VLS_4170);
const __VLS_4172 = __VLS_4171({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4170, typeof __VLS_4172> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_4173 = __VLS_pickFunctionalComponentCtx(__VLS_4170, __VLS_4172)!;
let __VLS_4174!: __VLS_NormalizeEmits<typeof __VLS_4173.emit>;
(__VLS_4173.slots!).default;
}
(__VLS_4163.slots!).default;
}
(__VLS_4148.slots!).default;
}
{
const __VLS_4175 = __VLS_intrinsicElements["fieldset"];
const __VLS_4176 = __VLS_elementAsFunctionalComponent(__VLS_4175);
const __VLS_4177 = __VLS_4176({ ...{}, id: ("fieldset_79"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4175, typeof __VLS_4177> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_79"), style: ({}), });
const __VLS_4178 = __VLS_pickFunctionalComponentCtx(__VLS_4175, __VLS_4177)!;
let __VLS_4179!: __VLS_NormalizeEmits<typeof __VLS_4178.emit>;
{
const __VLS_4180 = __VLS_intrinsicElements["label"];
const __VLS_4181 = __VLS_elementAsFunctionalComponent(__VLS_4180);
const __VLS_4182 = __VLS_4181({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4181));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4180, typeof __VLS_4182> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4183 = __VLS_pickFunctionalComponentCtx(__VLS_4180, __VLS_4182)!;
let __VLS_4184!: __VLS_NormalizeEmits<typeof __VLS_4183.emit>;
(__VLS_4183.slots!).default;
}
{
const __VLS_4185 = __VLS_intrinsicElements["input"];
const __VLS_4186 = __VLS_elementAsFunctionalComponent(__VLS_4185);
const __VLS_4187 = __VLS_4186({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4186));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4185, typeof __VLS_4187> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4188 = __VLS_pickFunctionalComponentCtx(__VLS_4185, __VLS_4187)!;
let __VLS_4189!: __VLS_NormalizeEmits<typeof __VLS_4188.emit>;
}
{
const __VLS_4190 = __VLS_intrinsicElements["select"];
const __VLS_4191 = __VLS_elementAsFunctionalComponent(__VLS_4190);
const __VLS_4192 = __VLS_4191({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4191));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4190, typeof __VLS_4192> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_4193 = __VLS_pickFunctionalComponentCtx(__VLS_4190, __VLS_4192)!;
let __VLS_4194!: __VLS_NormalizeEmits<typeof __VLS_4193.emit>;
{
const __VLS_4195 = __VLS_intrinsicElements["option"];
const __VLS_4196 = __VLS_elementAsFunctionalComponent(__VLS_4195);
const __VLS_4197 = __VLS_4196({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4195, typeof __VLS_4197> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_4198 = __VLS_pickFunctionalComponentCtx(__VLS_4195, __VLS_4197)!;
let __VLS_4199!: __VLS_NormalizeEmits<typeof __VLS_4198.emit>;
(__VLS_4198.slots!).default;
}
{
const __VLS_4200 = __VLS_intrinsicElements["option"];
const __VLS_4201 = __VLS_elementAsFunctionalComponent(__VLS_4200);
const __VLS_4202 = __VLS_4201({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4201));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4200, typeof __VLS_4202> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_4203 = __VLS_pickFunctionalComponentCtx(__VLS_4200, __VLS_4202)!;
let __VLS_4204!: __VLS_NormalizeEmits<typeof __VLS_4203.emit>;
(__VLS_4203.slots!).default;
}
(__VLS_4193.slots!).default;
}
(__VLS_4178.slots!).default;
}
{
const __VLS_4205 = __VLS_intrinsicElements["fieldset"];
const __VLS_4206 = __VLS_elementAsFunctionalComponent(__VLS_4205);
const __VLS_4207 = __VLS_4206({ ...{}, id: ("fieldset_80"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4205, typeof __VLS_4207> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_80"), style: ({}), });
const __VLS_4208 = __VLS_pickFunctionalComponentCtx(__VLS_4205, __VLS_4207)!;
let __VLS_4209!: __VLS_NormalizeEmits<typeof __VLS_4208.emit>;
{
const __VLS_4210 = __VLS_intrinsicElements["label"];
const __VLS_4211 = __VLS_elementAsFunctionalComponent(__VLS_4210);
const __VLS_4212 = __VLS_4211({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4210, typeof __VLS_4212> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4213 = __VLS_pickFunctionalComponentCtx(__VLS_4210, __VLS_4212)!;
let __VLS_4214!: __VLS_NormalizeEmits<typeof __VLS_4213.emit>;
(__VLS_4213.slots!).default;
}
{
const __VLS_4215 = __VLS_intrinsicElements["input"];
const __VLS_4216 = __VLS_elementAsFunctionalComponent(__VLS_4215);
const __VLS_4217 = __VLS_4216({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4215, typeof __VLS_4217> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4218 = __VLS_pickFunctionalComponentCtx(__VLS_4215, __VLS_4217)!;
let __VLS_4219!: __VLS_NormalizeEmits<typeof __VLS_4218.emit>;
}
{
const __VLS_4220 = __VLS_intrinsicElements["select"];
const __VLS_4221 = __VLS_elementAsFunctionalComponent(__VLS_4220);
const __VLS_4222 = __VLS_4221({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4220, typeof __VLS_4222> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_4223 = __VLS_pickFunctionalComponentCtx(__VLS_4220, __VLS_4222)!;
let __VLS_4224!: __VLS_NormalizeEmits<typeof __VLS_4223.emit>;
{
const __VLS_4225 = __VLS_intrinsicElements["option"];
const __VLS_4226 = __VLS_elementAsFunctionalComponent(__VLS_4225);
const __VLS_4227 = __VLS_4226({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4225, typeof __VLS_4227> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_4228 = __VLS_pickFunctionalComponentCtx(__VLS_4225, __VLS_4227)!;
let __VLS_4229!: __VLS_NormalizeEmits<typeof __VLS_4228.emit>;
(__VLS_4228.slots!).default;
}
{
const __VLS_4230 = __VLS_intrinsicElements["option"];
const __VLS_4231 = __VLS_elementAsFunctionalComponent(__VLS_4230);
const __VLS_4232 = __VLS_4231({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4230, typeof __VLS_4232> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_4233 = __VLS_pickFunctionalComponentCtx(__VLS_4230, __VLS_4232)!;
let __VLS_4234!: __VLS_NormalizeEmits<typeof __VLS_4233.emit>;
(__VLS_4233.slots!).default;
}
(__VLS_4223.slots!).default;
}
(__VLS_4208.slots!).default;
}
{
const __VLS_4235 = __VLS_intrinsicElements["fieldset"];
const __VLS_4236 = __VLS_elementAsFunctionalComponent(__VLS_4235);
const __VLS_4237 = __VLS_4236({ ...{}, id: ("fieldset_81"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4235, typeof __VLS_4237> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_81"), style: ({}), });
const __VLS_4238 = __VLS_pickFunctionalComponentCtx(__VLS_4235, __VLS_4237)!;
let __VLS_4239!: __VLS_NormalizeEmits<typeof __VLS_4238.emit>;
{
const __VLS_4240 = __VLS_intrinsicElements["label"];
const __VLS_4241 = __VLS_elementAsFunctionalComponent(__VLS_4240);
const __VLS_4242 = __VLS_4241({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4241));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4240, typeof __VLS_4242> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4243 = __VLS_pickFunctionalComponentCtx(__VLS_4240, __VLS_4242)!;
let __VLS_4244!: __VLS_NormalizeEmits<typeof __VLS_4243.emit>;
(__VLS_4243.slots!).default;
}
{
const __VLS_4245 = __VLS_intrinsicElements["input"];
const __VLS_4246 = __VLS_elementAsFunctionalComponent(__VLS_4245);
const __VLS_4247 = __VLS_4246({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4246));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4245, typeof __VLS_4247> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4248 = __VLS_pickFunctionalComponentCtx(__VLS_4245, __VLS_4247)!;
let __VLS_4249!: __VLS_NormalizeEmits<typeof __VLS_4248.emit>;
}
{
const __VLS_4250 = __VLS_intrinsicElements["select"];
const __VLS_4251 = __VLS_elementAsFunctionalComponent(__VLS_4250);
const __VLS_4252 = __VLS_4251({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4250, typeof __VLS_4252> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_4253 = __VLS_pickFunctionalComponentCtx(__VLS_4250, __VLS_4252)!;
let __VLS_4254!: __VLS_NormalizeEmits<typeof __VLS_4253.emit>;
{
const __VLS_4255 = __VLS_intrinsicElements["option"];
const __VLS_4256 = __VLS_elementAsFunctionalComponent(__VLS_4255);
const __VLS_4257 = __VLS_4256({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4256));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4255, typeof __VLS_4257> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_4258 = __VLS_pickFunctionalComponentCtx(__VLS_4255, __VLS_4257)!;
let __VLS_4259!: __VLS_NormalizeEmits<typeof __VLS_4258.emit>;
(__VLS_4258.slots!).default;
}
{
const __VLS_4260 = __VLS_intrinsicElements["option"];
const __VLS_4261 = __VLS_elementAsFunctionalComponent(__VLS_4260);
const __VLS_4262 = __VLS_4261({ ...{}, value: ("R/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4261));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4260, typeof __VLS_4262> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), });
const __VLS_4263 = __VLS_pickFunctionalComponentCtx(__VLS_4260, __VLS_4262)!;
let __VLS_4264!: __VLS_NormalizeEmits<typeof __VLS_4263.emit>;
(__VLS_4263.slots!).default;
}
(__VLS_4253.slots!).default;
}
(__VLS_4238.slots!).default;
}
{
const __VLS_4265 = __VLS_intrinsicElements["fieldset"];
const __VLS_4266 = __VLS_elementAsFunctionalComponent(__VLS_4265);
const __VLS_4267 = __VLS_4266({ ...{}, id: ("fieldset_82"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4265, typeof __VLS_4267> & Record<string, unknown>) => void)({ ...{}, id: ("fieldset_82"), style: ({}), });
const __VLS_4268 = __VLS_pickFunctionalComponentCtx(__VLS_4265, __VLS_4267)!;
let __VLS_4269!: __VLS_NormalizeEmits<typeof __VLS_4268.emit>;
{
const __VLS_4270 = __VLS_intrinsicElements["label"];
const __VLS_4271 = __VLS_elementAsFunctionalComponent(__VLS_4270);
const __VLS_4272 = __VLS_4271({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), }, ...__VLS_functionalComponentArgsRest(__VLS_4271));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4270, typeof __VLS_4272> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), for: ("zippers"), });
const __VLS_4273 = __VLS_pickFunctionalComponentCtx(__VLS_4270, __VLS_4272)!;
let __VLS_4274!: __VLS_NormalizeEmits<typeof __VLS_4273.emit>;
(__VLS_4273.slots!).default;
}
{
const __VLS_4275 = __VLS_intrinsicElements["input"];
const __VLS_4276 = __VLS_elementAsFunctionalComponent(__VLS_4275);
const __VLS_4277 = __VLS_4276({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4276));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4275, typeof __VLS_4277> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________SF)"), style: ({}), });
const __VLS_4278 = __VLS_pickFunctionalComponentCtx(__VLS_4275, __VLS_4277)!;
let __VLS_4279!: __VLS_NormalizeEmits<typeof __VLS_4278.emit>;
}
{
const __VLS_4280 = __VLS_intrinsicElements["p"];
const __VLS_4281 = __VLS_elementAsFunctionalComponent(__VLS_4280);
const __VLS_4282 = __VLS_4281({ ...{}, class: ("equipamientos-titulos"), }, ...__VLS_functionalComponentArgsRest(__VLS_4281));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4280, typeof __VLS_4282> & Record<string, unknown>) => void)({ ...{}, class: ("equipamientos-titulos"), });
const __VLS_4283 = __VLS_pickFunctionalComponentCtx(__VLS_4280, __VLS_4282)!;
let __VLS_4284!: __VLS_NormalizeEmits<typeof __VLS_4283.emit>;
(__VLS_4283.slots!).default;
}
{
const __VLS_4285 = __VLS_intrinsicElements["input"];
const __VLS_4286 = __VLS_elementAsFunctionalComponent(__VLS_4285);
const __VLS_4287 = __VLS_4286({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________HRS)"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4286));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4285, typeof __VLS_4287> & Record<string, unknown>) => void)({ ...{}, type: ("text"), id: ("airMoverEA"), name: ("airMoverEA"), placeholder: ("(________HRS)"), style: ({}), });
const __VLS_4288 = __VLS_pickFunctionalComponentCtx(__VLS_4285, __VLS_4287)!;
let __VLS_4289!: __VLS_NormalizeEmits<typeof __VLS_4288.emit>;
}
{
const __VLS_4290 = __VLS_intrinsicElements["select"];
const __VLS_4291 = __VLS_elementAsFunctionalComponent(__VLS_4290);
const __VLS_4292 = __VLS_4291({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4291));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4290, typeof __VLS_4292> & Record<string, unknown>) => void)({ ...{}, id: ("content-manipulation"), name: ("content-manipulation"), style: ({}), });
const __VLS_4293 = __VLS_pickFunctionalComponentCtx(__VLS_4290, __VLS_4292)!;
let __VLS_4294!: __VLS_NormalizeEmits<typeof __VLS_4293.emit>;
{
const __VLS_4295 = __VLS_intrinsicElements["option"];
const __VLS_4296 = __VLS_elementAsFunctionalComponent(__VLS_4295);
const __VLS_4297 = __VLS_4296({ ...{}, value: ("A/H"), }, ...__VLS_functionalComponentArgsRest(__VLS_4296));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4295, typeof __VLS_4297> & Record<string, unknown>) => void)({ ...{}, value: ("A/H"), });
const __VLS_4298 = __VLS_pickFunctionalComponentCtx(__VLS_4295, __VLS_4297)!;
let __VLS_4299!: __VLS_NormalizeEmits<typeof __VLS_4298.emit>;
(__VLS_4298.slots!).default;
}
{
const __VLS_4300 = __VLS_intrinsicElements["option"];
const __VLS_4301 = __VLS_elementAsFunctionalComponent(__VLS_4300);
const __VLS_4302 = __VLS_4301({ ...{}, value: ("R/H"), selected: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_4301));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4300, typeof __VLS_4302> & Record<string, unknown>) => void)({ ...{}, value: ("R/H"), selected: (true), });
const __VLS_4303 = __VLS_pickFunctionalComponentCtx(__VLS_4300, __VLS_4302)!;
let __VLS_4304!: __VLS_NormalizeEmits<typeof __VLS_4303.emit>;
(__VLS_4303.slots!).default;
}
(__VLS_4293.slots!).default;
}
(__VLS_4268.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_4305 = __VLS_intrinsicElements["div"];
const __VLS_4306 = __VLS_elementAsFunctionalComponent(__VLS_4305);
const __VLS_4307 = __VLS_4306({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4306));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4305, typeof __VLS_4307> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_4308 = __VLS_pickFunctionalComponentCtx(__VLS_4305, __VLS_4307)!;
let __VLS_4309!: __VLS_NormalizeEmits<typeof __VLS_4308.emit>;
{
const __VLS_4310 = __VLS_intrinsicElements["button"];
const __VLS_4311 = __VLS_elementAsFunctionalComponent(__VLS_4310);
const __VLS_4312 = __VLS_4311({ ...{ onClick: {} as any, }, class: ("btn-enviar"), id: ("submit"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_4311));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4310, typeof __VLS_4312> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("btn-enviar"), id: ("submit"), style: ({}), });
const __VLS_4313 = __VLS_pickFunctionalComponentCtx(__VLS_4310, __VLS_4312)!;
let __VLS_4314!: __VLS_NormalizeEmits<typeof __VLS_4313.emit>;
let __VLS_4315 = { 'click': __VLS_pickEvent(__VLS_4314['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_4311, typeof __VLS_4312>).onClick) };
__VLS_4315 = { click: (__VLS_ctx.submit) };
(__VLS_4313.slots!).default;
}
(__VLS_4308.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[body, roomLength, submit,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
body: body as typeof body,
submit: submit as typeof submit,
};
},

mounted() {
// Obtén el elemento head del documento
const head = document.head || document.getElementsByTagName('head')[0];

// Crea un elemento link
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';

// Añade el enlace al head
head.appendChild(link);
}
});
return (await import('vue')).defineComponent({
setup() {
return {};
},

mounted() {
// Obtén el elemento head del documento
const head = document.head || document.getElementsByTagName('head')[0];

// Crea un elemento link
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';

// Añade el enlace al head
head.appendChild(link);
}
});
})();
