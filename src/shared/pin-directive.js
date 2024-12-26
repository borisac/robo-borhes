/* eslint-disable no-param-reassign */

function applyStyle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

export default {
  beforeMount(element, binding) {
    applyStyle(element, binding);
  },
  updated: (element, binding) => {
    applyStyle(element, binding);
  },
};
