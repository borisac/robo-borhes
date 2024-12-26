/* eslint-disable no-param-reassign */
export default {
  beforeMount(element, binding) {
    // if (binding.arg !== 'position') return;
    Object.keys(binding.value).forEach((position) => {
      element.style[position] = binding.value[position];
    });
    // console.log('arg:', binding.arg, 'modifiers', binding.modifiers);
    element.style.position = 'absolute';
    // element.style.bottom = '5px';
    // element.style.right = '5px';
  },
};
