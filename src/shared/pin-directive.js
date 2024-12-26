/* eslint-disable no-param-reassign */

export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

// function applyStyle(element, binding) {
//   Object.keys(binding.value).forEach((position) => {
//     element.style[position] = binding.value[position];
//   });
//   element.style.position = 'absolute';
// }

// export default {
//   beforeMount(element, binding) {
//     applyStyle(element, binding);
//   },
//   updated: (element, binding) => {
//     applyStyle(element, binding);
//   },
// };
